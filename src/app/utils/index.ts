import puppeteer from "puppeteer";

type Manga = {
    title: string | null,
    images: {
        alt: string | null,
        src: string | null
    }[]
}

export async function getLastChapter() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    // Navigate the page to a URL
    await page.goto('https://tcbscans.com/');

    // home
    await Promise.all([
        page.waitForNavigation(),
        page.click('a[href="/projects"]')
    ]);

    // projects
    await Promise.all([
        page.waitForNavigation(),
        page.click('text/One Piece')
    ]);

    // list chapters
    await Promise.all([
        page.waitForNavigation(),
        page.click('a.block.border.border-border.bg-card.mb-3.p-3.rounded')
    ]);

    let title = null;

    // reading
    const titleEl = await page.waitForSelector('text/One Piece');
    if (titleEl != null) {
        title = await titleEl.evaluate(el => el.textContent);

    }
    const images = await page.$$eval('picture.fixed-ratio img.fixed-ratio-content', im => im.map(m => {
        return {
            alt: m.getAttribute('alt'),
            src: m.getAttribute('src'),
        }
    }));

    await browser.close();

    return {
        title: title,
        images: images
    } satisfies Manga
}
