import { Locator, Page } from "@playwright/test";

export class AdminLogoutPage{
    page:Page
    readonly logoutLink:Locator
    constructor(page:Page)
    {
        this.page=page
        this.logoutLink = page.locator('#mi_logout')
    }
    //method for logout
    public async adminLogout()
    {
      this.logoutLink.waitFor()  
     this.logoutLink.click()
    }
}