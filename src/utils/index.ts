import Chromium from "@sparticuz/chromium-min";
import puppeteer, { Browser } from "puppeteer-core";

export async function getDataSource(): Promise<string[]> {
    const executablePath = await Chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar');
    console.log(executablePath)

    const browser: Browser = await puppeteer.launch({
        args: Chromium.args,
        defaultViewport: Chromium.defaultViewport,
        executablePath: executablePath,
        headless: Chromium.headless,
        ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    // await page.goto('https://tcbscans.com', { waitUntil: 'networkidle0'});

    // await page.waitForSelector('text/One Piece');
    // await page.click('text/One Piece');

    // await page.waitForSelector('picture.fixed-ratio img.fixed-ratio-content');
    // const images = await page.$$eval('picture.fixed-ratio > img.fixed-ratio-content', im => im.map(m => m.getAttribute('src') as string));

    // await page.evaluate(() => console.log('url is ' + location.href));

    // await page.close();
    // await browser.close();

    return []; 
}
