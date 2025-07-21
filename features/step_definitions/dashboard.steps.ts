import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../hooks/world';
import { DashboardPage } from '../pageobjects/dashboard-page';


Then('the dashboard heading should be visible', async function (this: CustomWorld) {
    const dashboardPage: DashboardPage = this.pages.dashboardPage;
    await dashboardPage.page.waitForLoadState('domcontentloaded');
    expect(await dashboardPage.isHeadingVisible()).toBeTruthy();
});


Then('the Admin menu should be visible', async function (this: CustomWorld) {
    const dashboardPage: DashboardPage = this.pages.dashboardPage;
    expect(await dashboardPage.isAdminMenuVisible()).toBeTruthy();
});


Then('the dashboard search input should be visible', async function (this: CustomWorld) {
    const dashboardPage: DashboardPage = this.pages.dashboardPage;
    expect(await dashboardPage.isSearchInputVisible()).toBeTruthy();
});
