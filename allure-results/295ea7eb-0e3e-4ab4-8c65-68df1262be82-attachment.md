# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERp Inventroy Modules >> Validate customer
- Location: tests\ERPSingleData.spec.ts:20:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-caption="Search Panel"]')

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - generic [ref=f3e2]:
    - generic [ref=f3e3]:
      - link "Stock Accounting" [ref=f3e6] [cursor=pointer]:
        - /url: .
      - strong [ref=f3e9]: Stock Accounting
      - generic [ref=f3e12]:
        - text: "User Name:"
        - strong [ref=f3e13]: Administrator
        - text: "|"
        - link "Logout" [ref=f3e14] [cursor=pointer]:
          - /url: javascript:void(0);
    - text:                             
    - generic [ref=f3e17]:
      - list [ref=f3e18]:
        - listitem [ref=f3e19]:
          - link "Dashboard" [ref=f3e20] [cursor=pointer]:
            - /url: dashboard.php
        - listitem [ref=f3e21]:
          - link "Stock Items" [ref=f3e22] [cursor=pointer]:
            - /url: a_stock_itemslist.php?cmd=resetall
        - listitem [ref=f3e24]:
          - link "Suppliers" [ref=f3e25] [cursor=pointer]:
            - /url: a_supplierslist.php
        - listitem [ref=f3e26]:
          - link "Purchases" [ref=f3e27] [cursor=pointer]:
            - /url: a_purchaseslist.php?cmd=resetall
        - listitem [ref=f3e28]:
          - link "Customers" [ref=f3e29] [cursor=pointer]:
            - /url: a_customerslist.php
        - listitem [ref=f3e30]:
          - link "Sales" [ref=f3e31] [cursor=pointer]:
            - /url: a_saleslist.php?cmd=resetall
        - listitem [ref=f3e32]:
          - link "Outstandings" [ref=f3e33] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e35]:
          - link "Administrator" [ref=f3e36] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e38]:
          - link " Help (Categories)" [ref=f3e39] [cursor=pointer]:
            - /url: help_categorieslist.php
            - generic [ref=f3e40]: 
            - text: Help (Categories)
          - text:   
        - listitem [ref=f3e42]:
          - link " Settings" [ref=f3e43] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f3e44]: 
            - text: Settings
          - text:          
        - listitem [ref=f3e46]:
          - link " Logout" [ref=f3e47] [cursor=pointer]:
            - /url: logout.php
            - generic [ref=f3e48]: 
            - text: Logout
      - list
    - generic [ref=f3e51]:
      - generic [ref=f3e52]:
        - list [ref=f3e53]:
          - listitem [ref=f3e54]:
            - link "" [ref=f3e55] [cursor=pointer]:
              - /url: index.php
          - listitem [ref=f3e57]:
            - text: /
            - link "Customers" [ref=f3e58] [cursor=pointer]:
              - /url: a_customerslist.php
          - listitem [ref=f3e59]: / Add
          - link "" [ref=f3e60] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=f3e63]:
          - generic [ref=f3e64] [cursor=pointer]:
            - radio "en" [checked]
            - text: en
          - generic [ref=f3e65] [cursor=pointer]:
            - radio "id"
            - text: id
      - generic [ref=f3e67]:
        - generic [ref=f3e68]:
          - generic [ref=f3e69]:
            - generic [ref=f3e70]: Customer Number *
            - textbox "Customer Number *" [ref=f3e74]:
              - /placeholder: ""
              - text: Customer-00000001550
          - generic [ref=f3e75]:
            - generic [ref=f3e76]: Customer Name *
            - textbox "Customer Name *" [ref=f3e80]:
              - /placeholder: Customer Name
              - text: Ranga
          - generic [ref=f3e81]:
            - generic [ref=f3e82]: Address *
            - textbox "Address *" [ref=f3e86]:
              - /placeholder: Address
              - text: Ammerpet
          - generic [ref=f3e87]:
            - generic [ref=f3e88]: City *
            - textbox "City *" [ref=f3e92]:
              - /placeholder: City
              - text: Ammerpet
          - generic [ref=f3e93]:
            - generic [ref=f3e94]: Country *
            - textbox "Country *" [ref=f3e98]:
              - /placeholder: Country
              - text: India
          - generic [ref=f3e99]:
            - generic [ref=f3e100]: Contact Person *
            - textbox "Contact Person *" [ref=f3e104]:
              - /placeholder: Contact Person
              - text: Qedge
          - generic [ref=f3e105]:
            - generic [ref=f3e106]: Phone Number *
            - textbox "Phone Number *" [ref=f3e110]:
              - /placeholder: Phone Number
              - text: ranga@gmail.com
          - generic [ref=f3e111]:
            - generic [ref=f3e112]: Email *
            - textbox "Email *" [ref=f3e116]:
              - /placeholder: Email
              - text: Qedge
          - generic [ref=f3e117]:
            - generic [ref=f3e118]: Mobile Number *
            - textbox "Mobile Number *" [ref=f3e122]:
              - /placeholder: Mobile Number
              - text: "876543"
          - generic [ref=f3e123]:
            - generic [ref=f3e124]: Notes *
            - textbox "Notes *" [ref=f3e128]:
              - /placeholder: Notes
              - text: First Customer
        - generic [ref=f3e130]:
          - button "Add" [ref=f3e131] [cursor=pointer]
          - button "Cancel" [ref=f3e132] [cursor=pointer]
    - generic [ref=f3e134]:
      - text: ©2015
      - link "Masino Sinaga" [ref=f3e135] [cursor=pointer]:
        - /url: http://www.ilovephpmaker.com
      - text: . All rights reserved. |
      - link "Terms and Conditions" [ref=f3e136] [cursor=pointer]:
        - /url: javascript:void(0);
      - text: "|"
      - link "About Us" [ref=f3e137] [cursor=pointer]:
        - /url: javascript:void(0);
      - text: "|"
      - link "Back to Top" [ref=f3e138] [cursor=pointer]:
        - /url: javascript:void(0);
      - generic [ref=f3e139]: Your session will expire in 156 seconds.
  - generic [ref=f3e140]:
    - button [ref=f3e141] [cursor=pointer]
    - generic [ref=f3e142]:
      - button [ref=f3e143] [cursor=pointer]
      - button [ref=f3e144] [cursor=pointer]
    - generic [ref=f3e145]: Confirm
    - generic [ref=f3e146]: Add new record?
    - generic [ref=f3e150]:
      - button "OK!" [ref=f3e151] [cursor=pointer]
      - button "Cancel" [active] [ref=f3e152] [cursor=pointer]
    - button [ref=f3e153] [cursor=pointer]
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
      |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
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