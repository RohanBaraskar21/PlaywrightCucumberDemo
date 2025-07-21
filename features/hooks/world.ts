import { setWorldConstructor, IWorldOptions, World } from "@cucumber/cucumber";
import { Page, Browser, chromium } from "playwright";
import { PageFixture } from "../../fixtures/page-fixtures"; 



export class CustomWorld extends World {
    public page!: Page;
    public browser!: Browser;
    public pages!: PageFixture;

    constructor(options: IWorldOptions) {
        super(options);
    
    }

    async init() {
        // Use environment variable to select browser, default to chromium
        const browserType = process.env.BROWSER || 'chromium';
        let browserLauncher;
        if (browserType === 'firefox') {
            const { firefox } = await import('playwright');
            browserLauncher = firefox;
        } else if (browserType === 'webkit') {
            const { webkit } = await import('playwright');
            browserLauncher = webkit;
        } else {
            browserLauncher = chromium;
        }
        this.browser = await browserLauncher.launch({
            headless: true,
            slowMo: 50,
            args: ['--start-maximized']
        });
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        this.pages = new PageFixture(this.page);
       // await this.page.setViewportSize({ width: 1920, height: 1080 });
    }
    async close() {
        await this.page.close();
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);


