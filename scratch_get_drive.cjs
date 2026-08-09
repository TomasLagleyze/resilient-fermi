const fs = require('fs');

const folderId = '18jSOp_fJMXrKshtz4GDNt-K8Ug6-X9y1';
const url = `https://drive.google.com/drive/folders/${folderId}`;

async function getFolderContent() {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const text = await res.text();
    console.log('HTML size:', text.length);
    
    // Save html to inspect if needed
    fs.writeFileSync('drive_folder.html', text);
    
    // Regex for file objects in Google Drive folder HTML:
    // Format: ["FILE_ID", ["FILE_NAME.ext"...
    const regex = /\["([a-zA-Z0-9_-]{25,35})",\["([^"]+\.(?:mov|mp4|MOV|MP4|png|jpg|jpeg|avi|mkv|zip))"/g;
    let match;
    let found = [];
    while ((match = regex.exec(text)) !== null) {
      found.push({ id: match[1], name: match[2] });
    }
    console.log('Files found:', found);

  } catch (err) {
    console.error('Error:', err);
  }
}

getFolderContent();
