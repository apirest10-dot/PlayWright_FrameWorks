# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERp Inventroy Modules >> Supplier with single data
- Location: tests\ERPSingleData.spec.ts:7:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#tbl_a_supplierslist tbody tr').filter({ hasText: 'Supplier-00000001975' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#tbl_a_supplierslist tbody tr').filter({ hasText: 'Supplier-00000001975' }) with timeout 5000ms
  - waiting for locator('#tbl_a_supplierslist tbody tr').filter({ hasText: 'Supplier-00000001975' })

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
  - listitem: / Suppliers
  - link "":
    - /url: javascript:void(0);
- button ""
- button "" [pressed]
- link "":
  - /url: a_supplierssrch.php
- button ""
- radio "en" [checked]
- text: en
- radio "id"
- text: id
- textbox "Search": Supplier-00000001975
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
  - /url: a_supplierslist.php?start=11
- link "":
  - /url: a_supplierslist.php?start=1971
- text: of 198 Records 1 to 10 of 1974
- link "+":
  - /url: a_suppliersadd.php?showdetail=
- button ""
- table:
  - rowgroup:
    - row "Supplier Number Supplier Name Contact Person Phone Number Mobile Number Balance Is Stock Available?":
      - cell "Supplier Number Supplier Name Contact Person Phone Number Mobile Number Balance Is Stock Available?":
        - table:
          - rowgroup:
            - row "Supplier Number Supplier Name Contact Person Phone Number Mobile Number Balance Is Stock Available?":
              - columnheader:
                - checkbox
              - columnheader
              - columnheader
              - columnheader
              - columnheader
              - columnheader "Supplier Number"
              - columnheader "Supplier Name"
              - columnheader "Contact Person"
              - columnheader "Phone Number"
              - columnheader "Mobile Number"
              - columnheader "Balance"
              - columnheader "Is Stock Available?"
      - cell
- table:
  - rowgroup:
    - row " Purchase Now    Purchases 3 Stock Items Supplier-00000000001 First Supplier John Mc. Enroe 022124415093 0824132048929 Rp 16,040,000.00 Yes":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000001&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=1
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=1
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=1
      - cell "Purchases 3":
        - link "Purchases 3":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000001
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000001
      - cell "Supplier-00000000001"
      - cell "First Supplier"
      - cell "John Mc. Enroe"
      - cell "022124415093"
      - cell "0824132048929"
      - cell "Rp 16,040,000.00"
      - cell "Yes"
    - row " Purchase Now    Purchases Stock Items Supplier-00000001855 John Qedge 987654 999999 Rp 0.00 No":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000001855&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=1858
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=1858
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=1858
      - cell "Purchases":
        - link "Purchases":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000001855
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000001855
      - cell "Supplier-00000001855"
      - cell "John"
      - cell "Qedge"
      - cell "987654"
      - cell "999999"
      - cell "Rp 0.00"
      - cell "No"
    - row " Purchase Now    Purchases Stock Items Supplier-00000001856 David Smith 876543 888888 Rp 0.00 No":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000001856&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=1859
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=1859
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=1859
      - cell "Purchases":
        - link "Purchases":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000001856
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000001856
      - cell "Supplier-00000001856"
      - cell "David"
      - cell "Smith"
      - cell "876543"
      - cell "888888"
      - cell "Rp 0.00"
      - cell "No"
    - row " Purchase Now    Purchases 1 Stock Items 3 Supplier-00000000003 Third Supplier Joko Sentul 03142348293 081242009827 Rp 3,600,000.00 Yes":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000003&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=3
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=3
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=3
      - cell "Purchases 1":
        - link "Purchases 1":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000003
      - cell "Stock Items 3":
        - link "Stock Items 3":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000003
      - cell "Supplier-00000000003"
      - cell "Third Supplier"
      - cell "Joko Sentul"
      - cell "03142348293"
      - cell "081242009827"
      - cell "Rp 3,600,000.00"
      - cell "Yes"
    - row " Purchase Now    Purchases 1 Stock Items 1 Supplier-00000000004 Fourth Supplier Siapa Sajalah 0213248290 081242932890 Rp 1,700,000.00 Yes":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000004&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=4
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=4
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=4
      - cell "Purchases 1":
        - link "Purchases 1":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000004
      - cell "Stock Items 1":
        - link "Stock Items 1":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000004
      - cell "Supplier-00000000004"
      - cell "Fourth Supplier"
      - cell "Siapa Sajalah"
      - cell "0213248290"
      - cell "081242932890"
      - cell "Rp 1,700,000.00"
      - cell "Yes"
    - row " Purchase Now    Purchases Stock Items Supplier-00000000005 bbcfgb bcv bcv bcv Rp 0.00 No":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000005&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=5
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=5
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=5
      - cell "Purchases":
        - link "Purchases":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000005
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000005
      - cell "Supplier-00000000005"
      - cell "bbcfgb"
      - cell "bcv"
      - cell "bcv"
      - cell "bcv"
      - cell "Rp 0.00"
      - cell "No"
    - row " Purchase Now    Purchases Stock Items Supplier-00000000006 hfghgf hgf hgf hg Rp 0.00 No":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000006&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=6
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=6
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=6
      - cell "Purchases":
        - link "Purchases":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000006
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000006
      - cell "Supplier-00000000006"
      - cell "hfghgf"
      - cell "hgf"
      - cell "hgf"
      - cell "hg"
      - cell "Rp 0.00"
      - cell "No"
    - row " Purchase Now    Purchases Stock Items Supplier-00000000007 bb vxc vxc vxc Rp 0.00 No":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000007&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=7
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=7
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=7
      - cell "Purchases":
        - link "Purchases":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000007
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000007
      - cell "Supplier-00000000007"
      - cell "bb"
      - cell "vxc"
      - cell "vxc"
      - cell "vxc"
      - cell "Rp 0.00"
      - cell "No"
    - row " Purchase Now    Purchases 1 Stock Items Supplier-00000000008 John Qedge 876543 765432 Rp 0.00 No":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000008&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=8
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=8
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=8
      - cell "Purchases 1":
        - link "Purchases 1":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000008
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000008
      - cell "Supplier-00000000008"
      - cell "John"
      - cell "Qedge"
      - cell "876543"
      - cell "765432"
      - cell "Rp 0.00"
      - cell "No"
    - row " Purchase Now    Purchases Stock Items Supplier-00000000009 John Qedge 876543 765432 Rp 0.00 No":
      - cell:
        - checkbox
      - cell ""
      - cell "Purchase Now   ":
        - link "Purchase Now":
          - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000009&showdetail=a_purchases_detail
        - link "":
          - /url: a_suppliersview.php?showdetail=&Supplier_ID=9
        - link "":
          - /url: a_suppliersedit.php?showdetail=&Supplier_ID=9
        - link "":
          - /url: a_suppliersadd.php?showdetail=&Supplier_ID=9
      - cell "Purchases":
        - link "Purchases":
          - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000009
      - cell "Stock Items":
        - link "Stock Items":
          - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000009
      - cell "Supplier-00000000009"
      - cell "John"
      - cell "Qedge"
      - cell "876543"
      - cell "765432"
      - cell "Rp 0.00"
      - cell "No"
  - rowgroup:
    - row "Rp 21,340,000.00":
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell
      - cell "Rp 21,340,000.00"
      - cell
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
  - /url: a_supplierslist.php?start=11
- link "":
  - /url: a_supplierslist.php?start=1971
- text: of 198 Records 1 to 10 of 1974
- link "+":
  - /url: a_suppliersadd.php?showdetail=
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
- text: Your session will expire in 177 seconds.
- tooltip "Search Panel"
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
  91  |     await this.clickSearchPanel.waitFor()
  92  | await this.clickSearchPanel.click()
  93  | }
  94  | await this.enterSearchTextbox.clear()
  95  | await this.enterSearchTextbox.fill(this.expNumber)
  96  | const supplierRow =this.page.locator('#tbl_a_supplierslist tbody tr',
  97  | {
  98  | hasText: this.expNumber
  99  | })
  100 | 
> 101 | await expect(supplierRow).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  102 | 
  103 | console.log(`Supplier Number Found in Table: ${this.expNumber}`)
  104 | await expect(supplierRow).toContainText(this.expNumber)
  105 | }
  106 | 
  107 | }
```