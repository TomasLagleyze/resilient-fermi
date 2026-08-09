const fs = require('fs');

const html = fs.readFileSync('drive_folder.html', 'utf-8');

// Find all matches for strings containing extensions or drive URLs
const matches = html.match(/"([^"]{10,120}\.(?:mov|mp4|MOV|MP4|png|jpg|jpeg|avi|mkv|zip))"/g);
console.log('Filenames found:', matches);

// Find all drive file IDs in payload (format: /file/d/ID or ["ID"])
const fileMatches = html.match(/\/file\/d\/([a-zA-Z0-9_-]+)/g) || [];
console.log('File d links:', fileMatches);

// Find items array
const items = [...html.matchAll(/\["([a-zA-Z0-9_-]{28,35})",\["([^"]+)"/g)];
console.log('All items:', items.map(m => ({ id: m[1], name: m[2] })));
