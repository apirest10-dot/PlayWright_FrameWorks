# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERp Inventroy Modules >> Validate customer
- Location: tests\ERPSingleData.spec.ts:25:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#tbl_a_customerslist tbody tr').filter({ hasText: 'Customer-00000001530' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#tbl_a_customerslist tbody tr').filter({ hasText: 'Customer-00000001530' }) with timeout 5000ms
  - waiting for locator('#tbl_a_customerslist tbody tr').filter({ hasText: 'Customer-00000001530' })

```

```yaml
- link "Stock Accounting":
  - /url: .
- strong: Stock Accounting
- text: "User Name:"
- strong: Administrator
- text: "|"
- link "Logout":
  - /url: javascript:void(0);
- list:
  - listitem:
    - link "Dashboard":
      - /url: dashboard.php
  - listitem:
    - link "Stock Items":
      - /url: a_stock_itemslist.php?cmd=resetall
  - listitem:
    - link "Suppliers":
      - /url: a_supplierslist.php
  - listitem:
    - link "Purchases":
      - /url: a_purchaseslist.php?cmd=resetall
  - listitem:
    - link "Customers":
      - /url: a_customerslist.php
  - listitem:
    - link "Sales":
      - /url: a_saleslist.php?cmd=resetall
  - listitem:
    - link "Outstandings":
      - /url: "#"
  - listitem:
    - link "Administrator":
      - /url: "#"
  - listitem:
    - link " Help (Categories)":
      - /url: help_categorieslist.php
  - listitem:
    - link " Settings":
      - /url: "#"
  - listitem:
    - link " Logout":
      - /url: logout.php
- list
- list:
  - listitem:
    - link "":
      - /url: index.php
  - listitem: / Customers
  - link "":
    - /url: javascript:void(0);
- button ""
- button "" [pressed]
- link "":
  - /url: a_customerssrch.php
- button ""
- radio "en" [checked]
- text: en
- radio "id"
- text: id
- textbox "Search": Customer-00000001530
- button
- button "Search"
- text: Page Size
- combobox:
  - option "1"
  - option "2"
  - option "3"
  - option "5"
  - option "7"
  - option "10" [selected]
  - option "15"
  - option "20"
  - option "50"
  - option "100"
  - option "500"
  - option "1000"
- text: Page  
- textbox: "1"
- link "":
  - /url: a_customerslist.php?start=11
- link "":
  - /url: a_customerslist.php?start=1521
- text: of 153 Records 1 to 10 of 1528
- link "+":
  - /url: a_customersadd.php?showdetail=
- button ""
- table:
  - rowgroup:
    - row "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance":
      - cell "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance":
        - table:
          - rowgroup:
            - row "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance":
              - columnheader:
                - checkbox
              - columnheader
              - columnheader
              - columnheader
              - columnheader "Customer Number"
              - columnheader "Customer Name"
              - columnheader "Contact Person"
              - columnheader "Phone Number"
              - columnheader "Mobile Number"
              - columnheader "Balance"
- table:
  - rowgroup:
    - row " Sale Now    Sales Customer-00000001455 Test123 Ranga 98765 76543 Rp 0.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000001455&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=1459
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=1459
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=1459
      - cell "Sales":
        - link "Sales":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000001455
      - cell "Customer-00000001455"
      - cell "Test123"
      - cell "Ranga"
      - cell "98765"
      - cell "76543"
      - cell "Rp 0.00"
    - row " Sale Now    Sales Customer-00000001453 Ranga Qedge 765432 999999 Rp 0.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000001453&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=1457
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=1457
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=1457
      - cell "Sales":
        - link "Sales":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000001453
      - cell "Customer-00000001453"
      - cell "Ranga"
      - cell "Qedge"
      - cell "765432"
      - cell "999999"
      - cell "Rp 0.00"
    - row " Sale Now    Sales Customer-00000001454 Kumar Mahesh 123456 888888 Rp 0.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000001454&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=1458
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=1458
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=1458
      - cell "Sales":
        - link "Sales":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000001454
      - cell "Customer-00000001454"
      - cell "Kumar"
      - cell "Mahesh"
      - cell "123456"
      - cell "888888"
      - cell "Rp 0.00"
    - row " Sale Now    Sales 1 Customer-00000000003 Third Customer CP Third Customer 0215800823 0812482092300 Rp 280,000.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000000003&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=3
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=3
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=3
      - cell "Sales 1":
        - link "Sales 1":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000003
      - cell "Customer-00000000003"
      - cell "Third Customer"
      - cell "CP Third Customer"
      - cell "0215800823"
      - cell "0812482092300"
      - cell "Rp 280,000.00"
    - row " Sale Now    Sales 2 Customer-00000000004 Fourth Customer CP Fourth Customer 02183204800 081282084902 Rp 900,000.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000000004&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=4
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=4
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=4
      - cell "Sales 2":
        - link "Sales 2":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000004
      - cell "Customer-00000000004"
      - cell "Fourth Customer"
      - cell "CP Fourth Customer"
      - cell "02183204800"
      - cell "081282084902"
      - cell "Rp 900,000.00"
    - row " Sale Now    Sales Customer-00000000005 Test123 Ranga 98765 76543 Rp 0.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000000005&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=5
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=5
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=5
      - cell "Sales":
        - link "Sales":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000005
      - cell "Customer-00000000005"
      - cell "Test123"
      - cell "Ranga"
      - cell "98765"
      - cell "76543"
      - cell "Rp 0.00"
    - row " Sale Now    Sales 1 Customer-00000000006 Test123 Ranga 98765 76543 Rp 109,000.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000000006&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=6
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=6
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=6
      - cell "Sales 1":
        - link "Sales 1":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000006
      - cell "Customer-00000000006"
      - cell "Test123"
      - cell "Ranga"
      - cell "98765"
      - cell "76543"
      - cell "Rp 109,000.00"
    - row " Sale Now    Sales 1 Customer-00000000007 Test123 Ranga 98765 76543 Rp 2,200.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000000007&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=7
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=7
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=7
      - cell "Sales 1":
        - link "Sales 1":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000007
      - cell "Customer-00000000007"
      - cell "Test123"
      - cell "Ranga"
      - cell "98765"
      - cell "76543"
      - cell "Rp 2,200.00"
    - row " Sale Now    Sales Customer-00000000008 Kumar Mahesh 99999999 88888888 Rp 0.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000000008&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=8
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=8
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=8
      - cell "Sales":
        - link "Sales":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000008
      - cell "Customer-00000000008"
      - cell "Kumar"
      - cell "Mahesh"
      - cell "99999999"
      - cell "88888888"
      - cell "Rp 0.00"
    - row " Sale Now    Sales 1 Customer-00000000009 Test123 Ranga 98765 76543 Rp 108,890.00":
      - cell:
        - checkbox
      - cell ""
      - cell "Sale Now   ":
        - link "Sale Now":
          - /url: a_salesadd.php?Customer_Number=Customer-00000000009&showdetail=a_sales_detail
        - link "":
          - /url: a_customersview.php?showdetail=&Customer_ID=9
        - link "":
          - /url: a_customersedit.php?showdetail=&Customer_ID=9
        - link "":
          - /url: a_customersadd.php?showdetail=&Customer_ID=9
      - cell "Sales 1":
        - link "Sales 1":
          - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000000009
      - cell "Customer-00000000009"
      - cell "Test123"
      - cell "Ranga"
      - cell "98765"
      - cell "76543"
      - cell "Rp 108,890.00"
  - rowgroup:
    - row "Rp 1,400,090.00":
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell "Rp 1,400,090.00"
- text: Page Size
- combobox:
  - option "1"
  - option "2"
  - option "3"
  - option "5"
  - option "7"
  - option "10" [selected]
  - option "15"
  - option "20"
  - option "50"
  - option "100"
  - option "500"
  - option "1000"
- text: Page  
- textbox: "1"
- link "":
  - /url: a_customerslist.php?start=11
- link "":
  - /url: a_customerslist.php?start=1521
- text: of 153 Records 1 to 10 of 1528
- link "+":
  - /url: a_customersadd.php?showdetail=
- button ""
- text: ©2015
- link "Masino Sinaga":
  - /url: http://www.ilovephpmaker.com
- text: . All rights reserved. |
- link "Terms and Conditions":
  - /url: javascript:void(0);
- text: "|"
- link "About Us":
  - /url: javascript:void(0);
- text: "|"
- link "Back to Top":
  - /url: javascript:void(0);
- text: Your session will expire in 178 seconds.
- tooltip "Search Panel"
- button
- button
- button
- text: Alert Add succeeded
- button "OK"
- button
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
  88  | await this.clickSearchPanel.click()
  89  | }
  90  | await this.enterSearchTextbox.clear()
  91  | await this.enterSearchTextbox.fill(this.expNumber)
  92  | const customerRow =this.page.locator('#tbl_a_customerslist tbody tr',
  93  | {
  94  | hasText: this.expNumber
  95  | })
  96  | 
> 97  | await expect(customerRow).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  98  | 
  99  | console.log(`Customer Number Found in Table: ${this.expNumber}`)
  100 | await expect(customerRow).toContainText(this.expNumber)
  101 | }
  102 | 
  103 | }
```