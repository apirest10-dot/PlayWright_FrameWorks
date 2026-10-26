# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERp Inventroy Modules >> Supplier with single data
- Location: tests\ERPSingleData.spec.ts:4:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('[data-caption="Search Panel"]') to be visible

```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | 
  3   | export class SuppliersPage{
  4   | page:Page
  5   | readonly clickSuppliers:Locator
  6   | readonly clickAddIcon :Locator
  7   | readonly captureSupplierNum:Locator
  8   | readonly enterSupplierName:Locator
  9   | readonly enterAddress:Locator
  10  | readonly enterCity:Locator
  11  | readonly enterCountry:Locator
  12  | readonly enterContactPerson:Locator
  13  | readonly enterPhoneNum: Locator
  14  | readonly enterEmail:Locator
  15  | readonly enterMobileNumber:Locator
  16  | readonly enterNotes:Locator
  17  | readonly clickAddBtn:Locator
  18  | readonly clickConfirmOk:Locator
  19  | readonly clickAlertOk:Locator
  20  | readonly clickSearchPanel:Locator
  21  | readonly enterSearchTextbox:Locator
  22  | readonly clickSearchBtn:Locator
  23  | private expNumber!: string
  24  | //write constructor for above properties to intilize
  25  | constructor(page:Page)
  26  | {
  27  | this.page=page
  28  | this.clickSuppliers= page.locator('#mi_a_suppliers')
  29  | this.clickAddIcon = page.locator('span[data-caption="Add"]').first()
  30  | this.captureSupplierNum =page.getByRole('textbox', { name: 'Supplier Number *' })
  31  | this.enterSupplierName =page.getByRole('textbox', { name: 'Supplier Name *' })
  32  | this.enterAddress = page.getByRole('textbox', { name: 'Address *' })
  33  | this.enterCity =page.getByRole('textbox', { name: 'City *' })
  34  | this.enterCountry =page.getByRole('textbox', { name: 'Country *' })
  35  | this.enterContactPerson =page.getByRole('textbox', { name: 'Contact Person *' })
  36  | this.enterPhoneNum =page.getByRole('textbox', { name: 'Phone Number *' })
  37  | this.enterEmail =page.getByRole('textbox', { name: 'Email *' })
  38  | this.enterMobileNumber= page.getByRole('textbox', { name: 'Mobile Number *' })
  39  | this.enterNotes= page.getByRole('textbox', { name: 'Notes *' })
  40  | this.clickAddBtn = page.locator('#btnAction')
  41  | this.clickConfirmOk =page.locator('button.ajs-button.btn.btn-primary').last()
  42  | this.clickAlertOk =page.locator('button.ajs-button.btn.btn-primary')
  43  |  this.clickSearchPanel = page.locator('[data-caption="Search Panel"]')
  44  | this.enterSearchTextbox =page.getByPlaceholder('Search')
  45  | this.clickSearchBtn= page.locator('#btnsubmit')
  46  | 
  47  | }
  48  | //method for suppliers
  49  | public async navigateToAddSupplier()
  50  | {
  51  | await this.clickSuppliers.waitFor()
  52  | await this.clickSuppliers.click()
  53  | await this.clickAddIcon.waitFor()
  54  | await this.clickAddIcon.click()
  55  | }
  56  | //fill supplier deatils method
  57  | public async addSuppliersDeatils(suppliername:string,address:string,
  58  |     city:string,country:string,cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
  59  | {
  60  | await this.captureSupplierNum.waitFor()
  61  | this.expNumber = await this.captureSupplierNum.inputValue()
  62  | await this.enterSupplierName.fill(suppliername)
  63  | await this.enterAddress.fill(address)
  64  | await this.enterCity.fill(city)
  65  | await this.enterCountry.fill(country)
  66  | await this.enterContactPerson.fill(cperson)
  67  | await this.enterPhoneNum.fill(pnumber)
  68  | await this.enterEmail.fill(email)
  69  | await this.enterMobileNumber.fill(mnumber)
  70  | await this.enterNotes.fill(notes)
  71  | await this.clickAddBtn.click()
  72  | }
  73  | //handling webdialogs
  74  | public async handleAlerts() {
  75  | if (await this.clickConfirmOk.isVisible({ timeout: 3000 }).catch(() => false)) {
  76  |    await this.clickConfirmOk.waitFor()
  77  | await this.clickConfirmOk.click();
  78  | }
  79  | 
  80  | if (await this.clickAlertOk.isVisible({ timeout: 3000 }).catch(() => false)) {
  81  |     await this.clickAlertOk.waitFor()
  82  | await this.clickAlertOk.click();
  83  | }
  84  | 
  85  | }
  86  | //check supplier number in supplier table
  87  | public async supplierTable()
  88  | {
  89  | if(!await this.enterSearchTextbox.isVisible())
  90  | {
> 91  |     await this.clickSearchPanel.waitFor()
      |                                 ^ Error: locator.waitFor: Target page, context or browser has been closed
  92  | await this.clickSearchPanel.click()
  93  | }
  94  | await this.enterSearchTextbox.clear()
  95  | await this.enterSearchTextbox.fill(this.expNumber)
  96  | await this.clickSearchBtn.click()
  97  | const supplierRow =this.page.locator('#tbl_a_supplierslist tbody tr',
  98  | {
  99  | hasText: this.expNumber
  100 | })
  101 | 
  102 | await expect(supplierRow).toBeVisible();
  103 | 
  104 | console.log(`Supplier Number Found in Table: ${this.expNumber}`)
  105 | await expect(supplierRow).toContainText(this.expNumber)
  106 | }
  107 | 
  108 | }
```