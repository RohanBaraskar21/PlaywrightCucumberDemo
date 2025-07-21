import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly dashboardHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.dashboardHeading = page.locator('h6');
  }

  async gotoLoginPage() {
    // Wait for network idle and page to be fully loaded
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 30000, waitUntil: 'networkidle' });
    await this.page.waitForSelector('input[name="username"]', { timeout: 10000 });
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async isErrorMessageVisible() {
    await this.errorMessage.waitFor({ state: 'visible', timeout: 10000 });
    return await this.errorMessage.isVisible();
  }


  async isDashboardVisible() {
    // Wait for dashboard heading to be visible and check its text
    await this.dashboardHeading.waitFor({ state: 'visible', timeout: 10000 });
    return (await this.dashboardHeading.textContent())?.trim() === 'Dashboard';
  }

  async getErrorMessage() {
    return await this.getText('.oxd-alert-content-text');
  }
}
