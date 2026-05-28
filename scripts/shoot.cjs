const { chromium } = require('playwright');
(async () => {
  const url = 'http://localhost:5173/bitcci-okmihwa/';
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 412, height: 892 }, deviceScaleFactor: 2 });
  const out = require('path').join(__dirname, '..', '_screenshots');
  require('fs').mkdirSync(out, { recursive: true });

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: out + '/01_cover.png' });

  // swipe helper via keyboard
  async function next(n) { for (let i=0;i<n;i++){ await page.keyboard.press('ArrowRight'); await page.waitForTimeout(900);} }

  await next(1); await page.screenshot({ path: out + '/02_critique.png' });
  await next(1); await page.screenshot({ path: out + '/03_bio.png' });
  await next(1); await page.screenshot({ path: out + '/04_note.png' });
  await next(1); await page.screenshot({ path: out + '/05_philosophy.png' });
  await next(1); await page.waitForTimeout(800); await page.screenshot({ path: out + '/06_artwork1.png' });
  await next(2); await page.waitForTimeout(800); await page.screenshot({ path: out + '/07_artwork3.png' });

  // ENG toggle test on cover
  await page.keyboard.press('Home').catch(()=>{});
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.click('text=ENG');
  await page.waitForTimeout(1200);
  await page.screenshot({ path: out + '/08_cover_eng.png' });

  await browser.close();
  console.log('✅ shots done');
})();
