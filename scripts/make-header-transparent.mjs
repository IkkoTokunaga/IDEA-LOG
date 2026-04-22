/**
 * 市松模様などの背景を透過（checkerboard は低彩度・青成分が弱い前提）
 */
import sharp from "sharp";
import { readFileSync } from "fs";

const inputPath = "public/header-title.png";

const buf = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { data, info } = buf;
const w = info.width;
const h = info.height;
const ch = info.channels;
if (ch !== 4) throw new Error("expected RGBA");

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const maxc = Math.max(r, g, b);
  const minc = Math.min(r, g, b);
  const sat = maxc === 0 ? 0 : (maxc - minc) / maxc;
  const bluePush = b - (r + g) / 2;

  const keep =
    (bluePush > 8 && b > 95) || sat > 0.11;

  data[i + 3] = keep ? 255 : 0;
}

const pngBuffer = await sharp(data, {
  raw: { width: w, height: h, channels: 4 },
})
  .png()
  .toBuffer();

// 透過部分を除いて外周の余白を削る（ヘッダーの「肉感」を減らす）
const trimmed = await sharp(pngBuffer).trim().png().toBuffer();
await sharp(trimmed).toFile(inputPath);

const meta = await sharp(trimmed).metadata();
console.log("Wrote transparent PNG (trimmed):", inputPath, `${meta.width}x${meta.height}`);
