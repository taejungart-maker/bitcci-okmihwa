const { chromium } = require('playwright');
(async () => {
  const url = 'http://localhost:5173/bitcci-okmihwa/';
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 412, height: 892 }, deviceScaleFactor: 2 });
  const out = require('path').join(__dirname, '..', '_screenshots');
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  // page 4 = profile (cover0, foreword1, critique2, bio3)
  for (let i=0;i<3;i++){ await page.keyboard.press('ArrowRight'); await page.waitForTimeout(700); }
  await page.waitForTimeout(700);
  await page.screenshot({ path: out + '/p1_profile_top.png' });
  await page.mouse.wheel(0, 1700); await page.waitForTimeout(600);
  await page.screenshot({ path: out + '/p2_profile_mid.png' });
  await page.mouse.wheel(0, 1700); await page.waitForTimeout(600);
  await page.screenshot({ path: out + '/p3_profile_bot.png' });
  await browser.close();
  console.log('done');
})();
