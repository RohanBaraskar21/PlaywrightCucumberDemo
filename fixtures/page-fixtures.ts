import { Page } from 'playwright';
import { RegistrationPage } from '../features/pageobjects/registration-page';
import { DashboardPage } from '../features/pageobjects/dashboard-page';
import { LoginPage } from '../features/pageobjects/login-page';


export class PageFixture {


    readonly registrationPage: RegistrationPage;
    readonly dashboardPage: DashboardPage;
    readonly loginPage: LoginPage;
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;

        this.registrationPage = new RegistrationPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.loginPage = new LoginPage(page);

    }




}