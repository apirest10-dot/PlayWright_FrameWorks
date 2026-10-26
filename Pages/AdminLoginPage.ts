import { expect, Locator, Page } from "@playwright/test";

export class AdminLoginPage{
    //declare properties for login
    page:Page
    readonly username:Locator
    readonly password:Locator
    readonly loginBtn:Locator
    HomepageIdentifier:Locator
    //create constructor and initilize property values
    constructor(page:Page)
    {
        this.page=page
        this.username = page.getByPlaceholder('User Name')
        this.password =page.getByPlaceholder('Password')
        this.loginBtn = page.locator('#btnsubmit')
        this.HomepageIdentifier= page.locator('#ewPageCaption')

    }
    //method for launch url
    public async launchUrl(Url:string)
    {
        await this.page.goto(Url)
    }
    //method for login
    public async AdminLogin(user:string,pass:string)
    {
        await this.username.waitFor()
        await this.username.clear()
        await this.username.fill(user)
        await this.password.clear()
        await this.password.fill(pass)
        await this.loginBtn.click()
        await expect(this.HomepageIdentifier).toBeVisible()

    }
}