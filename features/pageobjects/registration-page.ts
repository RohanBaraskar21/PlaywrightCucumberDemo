import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';



export class RegistrationPage extends BasePage {


    readonly page: Page;
    readonly name: Locator;
    readonly phone: Locator;
    readonly email: Locator;
    readonly country: Locator;
    readonly city: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly submitBtn: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.name = page.locator("//input[@name='name']");
        this.phone = page.locator("//input[@name='phone']");
        this.email = page.locator("//input[@name='email']");
        this.country = page.locator("//select[@name='country']");
        this.city = page.locator("//input[@name='city']");
        this.username = page.locator("//div[@id='load_box']//input[@name='username']");
        this.password = page.locator("//div[@id='load_box']//input[@name='password']");
        this.submitBtn = page.locator("//div[@id='load_box']//input[@value='Submit']");
    }


    async navigateToHomePage() {
        await this.navigateTo('/');
    }




    async set_name(name: string) {
        await this.name.fill(name);
    }



    async set_phone_no(phone: string) {
        await this.phone.fill(phone);
    }



    async set_country(country: string) {
        await this.country.selectOption({ label: country });
    }



    async set_email(email: string) {
        await this.email.fill(email);
    }



    async set_username(username: string) {
        await this.username.fill(username);
    }



    async set_password(password: string) {
        await this.password.fill(password);
    }



    async set_city(city: string) {
        await this.city.fill(city);
    }



    async submit_form() {
        await this.submitBtn.click();
    }

}