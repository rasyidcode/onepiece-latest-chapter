import Chromium from "@sparticuz/chromium";
import puppeteer, { Browser } from "puppeteer-core";

export async function getChapterImageURLs(): Promise<string[]> {
    let browser: Browser = await puppeteer.launch({
        args: Chromium.args,
        defaultViewport: Chromium.defaultViewport,
        executablePath: await Chromium.executablePath(),
        headless: Chromium.headless,
    });

    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    await page.goto('https://tcbscans.com');

    await page.waitForSelector('text/One Piece');
    await page.click('text/One Piece');

    await page.waitForSelector('picture.fixed-ratio img.fixed-ratio-content');
    const images = await page.$$eval('picture.fixed-ratio > img.fixed-ratio-content', im => im.map(m => m.getAttribute('src') as string));

    await page.evaluate(() => console.log('url is ' + location.href));

    await browser.close();

    return images;
}
