const { chromium } = require('playwright');
(async () => {
  const url = 'http://localhost:5173/bitcci-okmihwa/';
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 412, height: 892 }, deviceScaleFactor: 2 });
  const out = require('path').join(__dirname, '..', '_screenshots');
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  async function next(n){for(let i=0;i<n;i++){await page.keyboard.press('ArrowRight');await page.waitForTimeout(700);}}
  await next(1); await page.waitForTimeout(600); await page.screenshot({ path: out + '/f1_foreword_top.png' });
  // scroll foreword down
  await page.mouse.wheel(0, 1400); await page.waitForTimeout(600); await page.screenshot({ path: out + '/f2_foreword_mid.png' });
  await next(1); await page.waitForTimeout(600); await page.screenshot({ path: out + '/f3_critique_top.png' });
  await browser.close();
  console.log('done');
})();
