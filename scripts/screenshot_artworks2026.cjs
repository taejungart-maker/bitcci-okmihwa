// 페이지 6~12 (2026 작품) 캡처
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const outDir = path.join(__dirname, '..', '_screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  await page.goto('http://localhost:5174/bitcci-yangriae/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.click('body', { position: { x: 195, y: 700 } });
  await page.waitForTimeout(200);

  // 페이지 6까지 → 5번 우측 화살표
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(400);
  }
  await page.screenshot({ path: path.join(outDir, 'page6_artwork1.png') });

  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, 'page7_artwork2.png') });

  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, 'page8_artwork3.png') });

  await browser.close();
  console.log('✅ 페이지 6, 7, 8 캡처 완료');
})();
