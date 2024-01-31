import puppeteer from "puppeteer";

export async function getChapterImageURLs(): Promise<string[]> {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
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
