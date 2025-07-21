import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class DashboardPage extends BasePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly adminMenu: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.heading = page.locator('h6');
    this.adminMenu = page.locator('a[href*="admin/viewAdminModule"]');
    this.searchInput = page.locator('input[placeholder="Search"]');
  }

  async isHeadingVisible() {
    return await this.heading.isVisible();
  }

  async isAdminMenuVisible() {
    return await this.adminMenu.isVisible();
  }

  async isSearchInputVisible() {
    return await this.searchInput.isVisible();
  }
}
