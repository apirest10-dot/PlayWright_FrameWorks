# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERp Inventroy Modules >> Validate customer
- Location: tests\ERPSingleData.spec.ts:19:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('[data-caption="Search Panel"]')

```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test"
  2   | 
  3   | export class CustomersPage{
  4   |     page:Page
  5   |     readonly clickCustomers:Locator
  6   |     readonly clickAddIcon :Locator
  7   |     readonly captureCustomerNum:Locator
  8   |     readonly enterCustomerName:Locator
  9   |     readonly enterAddress:Locator
  10  |     readonly enterCity:Locator
  11  |     readonly enterCountry:Locator
  12  |     readonly enterContactPerson:Locator
  13  |     readonly enterPhoneNum: Locator
  14  |     readonly enterEmail:Locator
  15  |     readonly enterMobileNumber:Locator
  16  |     readonly enterNotes:Locator
  17  |     readonly clickAddBtn:Locator
  18  |     readonly clickConfirmOk:Locator
  19  |     readonly clickAlertOk:Locator
  20  |     readonly clickSearchPanel:Locator
  21  |     readonly enterSearchTextbox:Locator
  22  |     readonly clickSearchBtn:Locator
  23  |     private expNumber!: string
  24  |     constructor(page:Page)
  25  |     {
  26  |        this.page=page
  27  | this.clickCustomers= page.locator('#mi_a_customers')
  28  | this.clickAddIcon = page.locator('span[data-caption="Add"]').first()
  29  | this.captureCustomerNum =page.getByRole('textbox', { name: 'Customer Number *' })
  30  | this.enterCustomerName =page.getByRole('textbox', { name: 'Customer Name *' })
  31  | this.enterAddress = page.getByRole('textbox', { name: 'Address *' })
  32  | this.enterCity =page.getByRole('textbox', { name: 'City *' })
  33  | this.enterCountry =page.getByRole('textbox', { name: 'Country *' })
  34  | this.enterContactPerson =page.getByRole('textbox', { name: 'Contact Person *' })
  35  | this.enterPhoneNum =page.getByRole('textbox', { name: 'Phone Number *' })
  36  | this.enterEmail =page.getByRole('textbox', { name: 'Email *' })
  37  | this.enterMobileNumber= page.getByRole('textbox', { name: 'Mobile Number *' })
  38  | this.enterNotes= page.getByRole('textbox', { name: 'Notes *' })
  39  | this.clickAddBtn = page.locator('#btnAction')
  40  | this.clickConfirmOk =page.locator('button.ajs-button.btn.btn-primary').last()
  41  | this.clickAlertOk =page.locator('button.ajs-button.btn.btn-primary')
  42  | this.clickSearchPanel = page.locator('[data-caption="Search Panel"]')
  43  | this.enterSearchTextbox =page.getByPlaceholder('Search')
  44  | this.clickSearchBtn= page.locator('#btnsubmit')
  45  |  
  46  |     }
  47  |     //method for add customer page
  48  |     public async navigateToCustomer()
  49  |     {
  50  |         await this.clickCustomers.waitFor()
  51  |         await this.clickCustomers.click()
  52  |         await this.clickAddIcon.waitFor()
  53  |         await this.clickAddIcon.click()
  54  |     }
  55  |     //method add customer deatils
  56  |     public async addCustomerDeatils(customername:string,address:string,city:string,
  57  |         country:string,cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
  58  |     {
  59  |         await this.captureCustomerNum.waitFor()
  60  |         this.expNumber = await this.captureCustomerNum.inputValue()
  61  |         await this.enterCustomerName.fill(customername)
  62  |         await this.enterAddress.fill(address)
  63  |         await this.enterCity.fill(city)
  64  |         await this.enterCountry.fill(country)
  65  |         await this.enterContactPerson.fill(cperson)
  66  |         await this.enterPhoneNum.fill(pnumber)
  67  |         await this.enterEmail.fill(email)
  68  |         await this.enterMobileNumber.fill(mnumber)
  69  |         await this.enterNotes.fill(notes)
  70  |         await this.clickAddBtn.click()
  71  | 
  72  |     }
  73  |     //handling webdialogs
  74  | public async handleAlerts() {
  75  | if (await this.clickConfirmOk.isVisible({ timeout: 3000 }).catch(() => false)) {
  76  | await this.clickConfirmOk.click();
  77  | }
  78  | 
  79  | if (await this.clickAlertOk.isVisible({ timeout: 3000 }).catch(() => false)) {
  80  | await this.clickAlertOk.click();
  81  | }
  82  | }
  83  | //check customer number in supplier table
  84  | public async customerTable()
  85  | {
  86  | if(!await this.enterSearchTextbox.isVisible())
  87  | {
> 88  | await this.clickSearchPanel.click()
      |                             ^ Error: locator.click: Target page, context or browser has been closed
  89  | }
  90  | await this.enterSearchTextbox.clear()
  91  | await this.enterSearchTextbox.fill(this.expNumber)
  92  | await this.clickSearchBtn.click()
  93  | const customerRow =this.page.locator('#tbl_a_customerslist tbody tr',
  94  | {
  95  | hasText: this.expNumber
  96  | })
  97  | 
  98  | await expect(customerRow).toBeVisible();
  99  | 
  100 | console.log(`Customer Number Found in Table: ${this.expNumber}`)
  101 | await expect(customerRow).toContainText(this.expNumber)
  102 | }
  103 | 
  104 | }
```