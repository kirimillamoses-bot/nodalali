const fs = require('fs');
const path = require('path');

const BLOCKLIST_FILE = path.join(__dirname, 'blocklist.json');
const REPORTS_FILE = path.join(__dirname, 'reports.json');
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'change-me-in-production';

// ── Scam keyword filter (Swahili + English) ──
const SCAM_KEYWORDS = [
  'wire transfer', 'western union', 'send money first', 'lipa kwanza',
  'tuma pesa kabla', 'bitcoin', 'crypto', 'gift card', 'forex',
  'urgent payment', 'deposit before viewing', 'lipa amana sasa',
  'inheritance', 'lottery', 'mshindi', 'utajiri haraka',
  'click this link', 'bonyeza link', 'http://', 'https://t.me/',
  '.tk/', '.ml/', 'bit.ly', 'tinyurl',
  'send code', 'tuma code', 'otp', 'pin yangu',
  'work from home', 'kazi nyumbani', 'pesa rahisi', 'easy money'
];

// ── Suspicious patterns ──
const SUSPICIOUS_PATTERNS = [
  /\b\d{16}\b/,                           // credit card numbers
  /password\s*[:=]/i,                     // password sharing
  /(.)\1{5,}/,                            // repeated chars (aaaaaa)
  /[A-Z]{20,}/,                           // ALL CAPS spam
  /(viagra|casino|porn|adult)/i,          // off-topic spam
  /\$\s*\d+\s*(usd|dollars)/i             // foreign currency requests
];

let blocklist = { phones: [], userIds: [], ips: [] };
let reports = {};

function load() {
  try { blocklist = JSON.parse(fs.readFileSync(BLOCKLIST_FILE, 'utf8')); } catch {}
  try { reports = JSON.parse(fs.readFileSync(REPORTS_FILE, 'utf8')); } catch {}
}
function saveBlocklist() {
  fs.writeFileSync(BLOCKLIST_FILE, JSON.stringify(blocklist, null, 2));
}
function saveReports() {
  fs.writeFileSync(REPORTS_FILE, JSON.stringify(reports, null, 2));
}
load();

// ── Public API ──
function isBlocked({ phone, userId, ip }) {
  if (phone && blocklist.phones.includes(phone)) return 'phone';
  if (userId && blocklist.userIds.includes(userId)) return 'user';
  if (ip && blocklist.ips.includes(ip)) return 'ip';
  return null;
}

function containsScamContent(text) {
  if (!text) return null;
  const lower = String(text).toLowerCase();
  for (const kw of SCAM_KEYWORDS) {
    if (lower.includes(kw)) return `Scam keyword: "${kw}"`;
  }
  for (const re of SUSPICIOUS_PATTERNS) {
    if (re.test(text)) return `Suspicious pattern: ${re}`;
  }
  return null;
}

function sanitizeText(s, maxLen = 1000) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/<[^>]*>/g, '')                       // strip HTML
    .replace(/javascript:/gi, '')                  // strip JS protocol
    .replace(/on\w+\s*=/gi, '')                    // strip event handlers
    .slice(0, maxLen)
    .trim();
}

function reportListing(listingId, reporterId, reason) {
  if (!reports[listingId]) reports[listingId] = { count: 0, reasons: [] };
  reports[listingId].count++;
  reports[listingId].reasons.push({ reporterId, reason, ts: Date.now() });
  saveReports();
  return reports[listingId];
}

function getReportCount(listingId) {
  return reports[listingId]?.count || 0;
}

function blockPhone(phone, adminToken) {
  if (adminToken !== ADMIN_TOKEN) return false;
  if (!blocklist.phones.includes(phone)) blocklist.phones.push(phone);
  saveBlocklist();
  return true;
}

function blockUser(userId, adminToken) {
  if (adminToken !== ADMIN_TOKEN) return false;
  if (!blocklist.userIds.includes(userId)) blocklist.userIds.push(userId);
  saveBlocklist();
  return true;
}

function unblock(value, type, adminToken) {
  if (adminToken !== ADMIN_TOKEN) return false;
  const list = blocklist[type];
  if (!list) return false;
  const idx = list.indexOf(value);
  if (idx > -1) { list.splice(idx, 1); saveBlocklist(); return true; }
  return false;
}

// ── Phone number validation (TZ-strict) ──
function validateTzPhone(phone) {
  if (!/^255[67][0-9]{8}$/.test(phone)) return 'Phone must be 12 digits starting 255';
  // Reject obviously fake patterns
  if (/^255(7|6)00000000$/.test(phone)) return 'Invalid number pattern';
  if (/(\d)\1{8,}/.test(phone)) return 'Repeated digits not allowed';
  return null;
}

// ── Auto-block: too many reports ──
const AUTO_BLOCK_THRESHOLD = 5;
function shouldAutoFlag(listingId) {
  return getReportCount(listingId) >= AUTO_BLOCK_THRESHOLD;
}

module.exports = {
  isBlocked,
  containsScamContent,
  sanitizeText,
  reportListing,
  getReportCount,
  shouldAutoFlag,
  blockPhone,
  blockUser,
  unblock,
  validateTzPhone,
  ADMIN_TOKEN
};
