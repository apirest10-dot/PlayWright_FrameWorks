# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERpUsingExcelFile.spec.ts >> ERP Inventory Modules >> Validate Supplier Applier5
- Location: tests\ERpUsingExcelFile.spec.ts:20:13

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#btnsubmit')
    - locator resolved to <button type="submit" id="btnsubmit" name="btnsubmit" class="btn btn-primary ewButton">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLoginPage{
  4  |     //declare properties for login
  5  |     page:Page
  6  |     readonly username:Locator
  7  |     readonly password:Locator
  8  |     readonly loginBtn:Locator
  9  |     HomepageIdentifier:Locator
  10 |     //create constructor and initilize property values
  11 |     constructor(page:Page)
  12 |     {
  13 |         this.page=page
  14 |         this.username = page.getByPlaceholder('User Name')
  15 |         this.password =page.getByPlaceholder('Password')
  16 |         this.loginBtn = page.locator('#btnsubmit')
  17 |         this.HomepageIdentifier= page.locator('#ewPageCaption')
  18 | 
  19 |     }
  20 |     //method for launch url
  21 |     public async launchUrl(Url:string)
  22 |     {
  23 |         await this.page.goto(Url)
  24 |     }
  25 |     //method for login
  26 |     public async AdminLogin(user:string,pass:string)
  27 |     {
  28 |         await this.username.waitFor()
  29 |         await this.username.clear()
  30 |         await this.username.fill(user)
  31 |         await this.password.clear()
  32 |         await this.password.fill(pass)
> 33 |         await this.loginBtn.click()
     |                             ^ Error: locator.click: Target page, context or browser has been closed
  34 |         await expect(this.HomepageIdentifier).toBeVisible()
  35 | 
  36 |     }
  37 | }
```