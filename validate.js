const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
let errors = 0;
let passes = 0;

function check(condition, passMsg, failMsg) {
  if (condition) {
    console.log(`  \u2705 ${passMsg}`);
    passes++;
  } else {
    console.log(`  \u274C ${failMsg}`);
    errors++;
  }
}

function fileExists(relPath) {
  return fs.existsSync(path.join(ROOT, relPath));
}

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf-8');
}

// ──────────────────────────────────────────────
//  1. Required files
// ──────────────────────────────────────────────
console.log('\n[1] Required Files');

const requiredFiles = [
  'index.html',
  'CNAME',
  'robots.txt',
  'sitemap.xml',
  'assets/css/style.css',
  'assets/js/main.js',
  'assets/images/favicon.png',
  'assets/images/Myoseonstories.png',
  'assets/audio/sfx/book_closing.mp3',
  'assets/audio/sfx/turning_book_page.mp3',
];

for (const f of requiredFiles) {
  check(fileExists(f), `${f} exists`, `${f} MISSING`);
}

// ──────────────────────────────────────────────
//  2. CNAME validation
// ──────────────────────────────────────────────
console.log('\n[2] CNAME');

const cname = readFile('CNAME').trim();
check(cname.length > 0, `CNAME has value: ${cname}`, 'CNAME is empty');
check(
  /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(cname),
  'CNAME is valid domain format',
  `CNAME has invalid format: "${cname}"`
);

// ──────────────────────────────────────────────
//  3. index.html validation
// ──────────────────────────────────────────────
console.log('\n[3] index.html');

const indexHtml = readFile('index.html');

check(
  /<!DOCTYPE html>/i.test(indexHtml),
  'Has DOCTYPE declaration',
  'Missing DOCTYPE declaration'
);
check(
  /<html\s+lang="ko"/.test(indexHtml),
  'HTML lang attribute is "ko"',
  'Missing or wrong lang attribute'
);
check(
  indexHtml.includes('<meta charset='),
  'Has charset meta tag',
  'Missing charset meta tag'
);
check(
  indexHtml.includes('viewport'),
  'Has viewport meta tag',
  'Missing viewport meta tag'
);
check(
  indexHtml.includes('<title>'),
  'Has title tag',
  'Missing title tag'
);
check(
  indexHtml.includes('rel="canonical"'),
  'Has canonical link',
  'Missing canonical link'
);
check(
  indexHtml.includes('application/ld+json'),
  'Has JSON-LD structured data',
  'Missing JSON-LD structured data'
);

// ──────────────────────────────────────────────
//  4. HTML local asset references
// ──────────────────────────────────────────────
console.log('\n[4] HTML Local Asset References');

const refPattern = /(?:src|href)=["']([^"']+)["']/g;
let match;
const localRefs = new Set();

while ((match = refPattern.exec(indexHtml)) !== null) {
  const ref = match[1];
  if (
    ref.startsWith('http://') ||
    ref.startsWith('https://') ||
    ref.startsWith('//') ||
    ref.startsWith('#') ||
    ref.startsWith('mailto:') ||
    ref.startsWith('tel:') ||
    ref.startsWith('data:')
  ) {
    continue;
  }
  const cleanRef = ref.split('?')[0].split('#')[0];
  if (cleanRef) localRefs.add(cleanRef);
}

for (const ref of localRefs) {
  const refPath = path.resolve(ROOT, ref);
  const exists = fs.existsSync(refPath);
  check(exists, `index.html -> ${ref}`, `index.html -> ${ref} NOT FOUND`);
}

// ──────────────────────────────────────────────
//  5. CSS file validation
// ──────────────────────────────────────────────
console.log('\n[5] CSS');

const css = readFile('assets/css/style.css');
check(css.length > 1000, `style.css has content (${css.length} chars)`, 'style.css appears empty or too small');

// ──────────────────────────────────────────────
//  6. JS file validation
// ──────────────────────────────────────────────
console.log('\n[6] JavaScript');

const mainJs = readFile('assets/js/main.js');
check(mainJs.length > 1000, `main.js has content (${mainJs.length} chars)`, 'main.js appears empty or too small');

// ──────────────────────────────────────────────
//  7. robots.txt & sitemap.xml
// ──────────────────────────────────────────────
console.log('\n[7] robots.txt & sitemap.xml');

const robots = readFile('robots.txt');
check(
  robots.includes('User-agent:'),
  'robots.txt has User-agent directive',
  'robots.txt missing User-agent'
);
check(
  /Sitemap:\s*https?:\/\//.test(robots),
  'robots.txt has Sitemap directive',
  'robots.txt missing Sitemap directive'
);

const sitemap = readFile('sitemap.xml');
check(
  sitemap.includes('<?xml') && sitemap.includes('<urlset'),
  'sitemap.xml has valid XML structure',
  'sitemap.xml invalid structure'
);
check(
  sitemap.includes('<loc>'),
  'sitemap.xml has <loc> entries',
  'sitemap.xml has no <loc> entries'
);

// Check sitemap references the correct domain
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
check(
  sitemapUrls.some(u => u.includes(cname)),
  `sitemap URLs match CNAME domain (${cname})`,
  `sitemap URLs do not reference CNAME domain (${cname})`
);

// ──────────────────────────────────────────────
//  8. Audio assets
// ──────────────────────────────────────────────
console.log('\n[8] Audio Assets');

const audioDir = path.join(ROOT, 'assets/audio/sfx');
if (fs.existsSync(audioDir)) {
  const audioFiles = fs.readdirSync(audioDir);
  check(audioFiles.length > 0, `${audioFiles.length} audio files in assets/audio/sfx/`, 'No audio files found');
  for (const af of audioFiles) {
    const stat = fs.statSync(path.join(audioDir, af));
    check(stat.size > 0, `${af} (${(stat.size / 1024).toFixed(1)} KB)`, `${af} is empty`);
  }
} else {
  check(false, '', 'assets/audio/sfx/ directory MISSING');
}

// ──────────────────────────────────────────────
//  Summary
// ──────────────────────────────────────────────
console.log('\n' + '='.repeat(50));
console.log(`library validation: ${passes} passed, ${errors} failed`);
console.log('='.repeat(50));

if (errors > 0) {
  process.exit(1);
}
