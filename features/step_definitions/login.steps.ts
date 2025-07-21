import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../hooks/world';
import { LoginPage } from '../pageobjects/login-page';

Given('I am on the OrangeHRM login page', { timeout: 30000 }, async function (this: CustomWorld) {
  await this.pages.loginPage.gotoLoginPage();
});

When('I enter valid username and password', async function (this: CustomWorld) {
  await this.pages.loginPage.enterUsername('Admin');
  await this.pages.loginPage.enterPassword('admin123');
});

When('I enter {string} and {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.pages.loginPage.enterUsername(username);
  await this.pages.loginPage.enterPassword(password);
});

When('I click the login button', async function (this: CustomWorld) {
  await this.pages.loginPage.clickLogin();
});

Then('I should see the dashboard', async function (this: CustomWorld) {
  expect(await this.pages.loginPage.isDashboardVisible()).toBeTruthy();
});

Then('I should see an error message', async function (this: CustomWorld) {
  expect(await this.pages.loginPage.isErrorMessageVisible()).toBeTruthy();
  // expect(await this.pages.loginPage.getErrorMessage()).toContain('Invalid credentials');
});

Then('I should see an new error message visible', async function (this: CustomWorld) {
  expect(await this.pages.loginPage.isErrorMessageVisible()).toBeTruthy();
  // expect(await this.pages.loginPage.getErrorMessage()).toContain('Invalid credentials');
   expect(await this.pages.loginPage.getErrorMessage()).toContain('fail');
});
