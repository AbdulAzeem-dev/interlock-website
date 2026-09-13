/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
async function main() {
  const all = fs.readdirSync('public/media', { recursive: true }).filter(p => /\.(png|jpe?g|avif)$/i.test(p));
  fs.mkdirSync('artifacts/audit', { recursive: true });
  fs.writeFileSync('artifacts/audit/media-index.json', JSON.stringify(all, null, 2));
  for(let batch = 0; batch < Math.ceil(all.length/30); batch++) {
    const items = all.slice(batch*30, (batch+1)*30);
    const cells = [];
    for(let i=0;i<items.length;i++) {
      const file = items[i];
      const thumb = await sharp(path.join('public/media',file)).rotate().resize(210,160,{fit:'contain',background:'#eeeeee'}).png().toBuffer();
      const label = Buffer.from(`<svg width="220" height="34"><rect width="220" height="34" fill="#ffffff"/><text x="5" y="14" font-family="Arial" font-size="11">${batch*30+i}: ${path.basename(file).slice(0,25).replaceAll('&','&amp;')}</text><text x="5" y="29" font-family="Arial" font-size="10">${path.dirname(file).replaceAll('&','&amp;')}</text></svg>`);
      cells.push({input:thumb,left:i%5*220,top:Math.floor(i/5)*200});
      cells.push({input:label,left:i%5*220,top:Math.floor(i/5)*200+162});
    }
    await sharp({create:{width:1100,height:Math.ceil(items.length/5)*200,channels:3,background:'#eeeeee'}}).composite(cells).jpeg({quality:85}).toFile(`artifacts/audit/media-${batch+1}.jpg`);
  }
  console.log(`${all.length} images indexed`);
}
main();
