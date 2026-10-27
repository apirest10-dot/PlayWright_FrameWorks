# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERpUsingExcelFile.spec.ts >> ERP Inventory Modules >> Validate Customer Srnagar3
- Location: tests\ERpUsingExcelFile.spec.ts:40:13

# Error details

```
Error: Out of bounds. Excel supports columns from 1 to 16384
```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - link "Stock Accounting" [ref=f5e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f5e9]: Stock Accounting
    - generic [ref=f5e12]:
      - text: "User Name:"
      - strong [ref=f5e13]: Administrator
      - text: "|"
      - link "Logout" [ref=f5e14] [cursor=pointer]:
        - /url: javascript:void(0);
  - text:                             
  - generic [ref=f5e17]:
    - list [ref=f5e18]:
      - listitem [ref=f5e19]:
        - link "Dashboard" [ref=f5e20] [cursor=pointer]:
          - /url: dashboard.php
      - listitem [ref=f5e21]:
        - link "Stock Items" [ref=f5e22] [cursor=pointer]:
          - /url: a_stock_itemslist.php?cmd=resetall
      - listitem [ref=f5e24]:
        - link "Suppliers" [ref=f5e25] [cursor=pointer]:
          - /url: a_supplierslist.php
      - listitem [ref=f5e26]:
        - link "Purchases" [ref=f5e27] [cursor=pointer]:
          - /url: a_purchaseslist.php?cmd=resetall
      - listitem [ref=f5e28]:
        - link "Customers" [ref=f5e29] [cursor=pointer]:
          - /url: a_customerslist.php
      - listitem [ref=f5e30]:
        - link "Sales" [ref=f5e31] [cursor=pointer]:
          - /url: a_saleslist.php?cmd=resetall
      - listitem [ref=f5e32]:
        - link "Outstandings" [ref=f5e33] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f5e35]:
        - link "Administrator" [ref=f5e36] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f5e38]:
        - link " Help (Categories)" [ref=f5e39] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f5e40]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f5e42]:
        - link " Settings" [ref=f5e43] [cursor=pointer]:
          - /url: "#"
          - generic [ref=f5e44]: 
          - text: Settings
        - text:          
      - listitem [ref=f5e46]:
        - link " Logout" [ref=f5e47] [cursor=pointer]:
          - /url: logout.php
          - generic [ref=f5e48]: 
          - text: Logout
    - list
  - generic [ref=f5e51]:
    - generic [ref=f5e52]:
      - list [ref=f5e53]:
        - listitem [ref=f5e54]:
          - link "" [ref=f5e55] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=f5e57]: / Customers
        - link "" [ref=f5e58] [cursor=pointer]:
          - /url: javascript:void(0);
      - generic [ref=f5e61]:
        - button "" [ref=f5e62] [cursor=pointer]
        - text:       
      - generic [ref=f5e66]:
        - button "" [ref=f5e67] [cursor=pointer]
        - link "" [ref=f5e69] [cursor=pointer]:
          - /url: a_customerslist.php?cmd=reset
        - link "" [ref=f5e71] [cursor=pointer]:
          - /url: a_customerssrch.php
      - button "" [ref=f5e75] [cursor=pointer]
      - generic [ref=f5e79]:
        - generic [ref=f5e80] [cursor=pointer]:
          - radio "en" [checked]
          - text: en
        - generic [ref=f5e81] [cursor=pointer]:
          - radio "id"
          - text: id
    - generic [ref=f5e87]:
      - textbox "Search" [ref=f5e88]: Customer-00000001656
      - generic [ref=f5e89]:
        - button [ref=f5e90] [cursor=pointer]
        - button "Search" [ref=f5e92] [cursor=pointer]
    - generic [ref=f5e93]:
      - generic [ref=f5e94]:
        - generic:
          - generic [ref=f5e95]:
            - generic [ref=f5e96]: Page Size
            - combobox [ref=f5e97]:
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
          - generic [ref=f5e98]: Records 1 to 1 of 1
        - generic [ref=f5e100]:
          - link "+" [ref=f5e103] [cursor=pointer]:
            - /url: a_customersadd.php?showdetail=
          - generic [ref=f5e106]:
            - button "" [ref=f5e107] [cursor=pointer]
            - text:  
      - generic [ref=f5e112]:
        - table [ref=f5e114]:
          - rowgroup [ref=f5e115]:
            - row [ref=f5e116]:
              - cell [ref=f5e117]:
                - table [ref=f5e118]:
                  - rowgroup [ref=f5e119]:
                    - row "Customer Number Customer Name Contact Person Phone Number Mobile Number Balance" [ref=f5e120]:
                      - columnheader [ref=f5e121]:
                        - checkbox [ref=f5e124]
                      - columnheader [ref=f5e125]
                      - columnheader [ref=f5e127]
                      - columnheader [ref=f5e129]
                      - columnheader "Customer Number" [ref=f5e131]
                      - columnheader "Customer Name" [ref=f5e136]
                      - columnheader "Contact Person" [ref=f5e141]
                      - columnheader "Phone Number" [ref=f5e146]
                      - columnheader "Mobile Number" [ref=f5e151]
                      - columnheader "Balance" [ref=f5e156]
        - table [ref=f5e162]:
          - rowgroup [ref=f5e163]:
            - row [ref=f5e164]:
              - cell [ref=f5e165]:
                - checkbox [ref=f5e168]
              - cell "" [ref=f5e169]:
                - generic [ref=f5e171]:
                  - generic [ref=f5e172] [cursor=pointer]: 
                  - text: 
              - cell [ref=f5e173]:
                - generic [ref=f5e175]:
                  - link "Sale Now" [ref=f5e176] [cursor=pointer]:
                    - /url: a_salesadd.php?Customer_Number=Customer-00000001656&showdetail=a_sales_detail
                  - link "" [ref=f5e178] [cursor=pointer]:
                    - /url: a_customersview.php?showdetail=&Customer_ID=1660
                  - link "" [ref=f5e180] [cursor=pointer]:
                    - /url: a_customersedit.php?showdetail=&Customer_ID=1660
                  - link "" [ref=f5e182] [cursor=pointer]:
                    - /url: a_customersadd.php?showdetail=&Customer_ID=1660
              - cell [ref=f5e184]:
                - generic [ref=f5e186]:
                  - link "Sales" [ref=f5e188] [cursor=pointer]:
                    - /url: a_saleslist.php?showmaster=a_customers&fk_Customer_Number=Customer-00000001656
                  - text: 
              - cell "Customer-00000001656" [ref=f5e189]
              - cell "third customer" [ref=f5e192]
              - cell "Ranga4" [ref=f5e195]
              - cell "4567890" [ref=f5e198]
              - cell "576768769" [ref=f5e201]
              - cell "Rp 0.00" [ref=f5e204]
          - rowgroup [ref=f5e207]:
            - row "Rp 0.00" [ref=f5e208]:
              - cell [ref=f5e209]
              - cell [ref=f5e211]
              - cell [ref=f5e213]
              - cell [ref=f5e215]
              - cell [ref=f5e217]
              - cell [ref=f5e219]
              - cell [ref=f5e221]
              - cell [ref=f5e223]
              - cell [ref=f5e225]
              - cell "Rp 0.00" [ref=f5e227]:
                - generic [ref=f5e229]:
                  - text: ":"
                  - generic [ref=f5e230]: Rp 0.00
      - generic [ref=f5e231]:
        - generic:
          - generic [ref=f5e232]:
            - generic [ref=f5e233]: Page Size
            - combobox [ref=f5e234]:
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
          - generic [ref=f5e235]: Records 1 to 1 of 1
        - generic [ref=f5e237]:
          - link "+" [ref=f5e240] [cursor=pointer]:
            - /url: a_customersadd.php?showdetail=
          - generic [ref=f5e243]:
            - button "" [ref=f5e244] [cursor=pointer]
            - text:  
  - generic [ref=f5e249]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f5e250] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f5e251] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f5e252] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f5e253] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  28  | 
  29  |     private static resultPath = path.join(
  30  |         process.cwd(),
  31  |         'TestResults',
  32  |         'ERP_TestResults.xlsx'
  33  |     );
  34  | 
  35  |     // ==========================================
  36  |     // 1. READ TEST DATA FROM EXCEL
  37  |     // ==========================================
  38  |     public static readExcelFile(
  39  |         filePath: string,
  40  |         sheetName: string
  41  |     ) {
  42  |         try {
  43  |             const workbook = xlsx.readFile(filePath);
  44  |             const sheet = workbook.Sheets[sheetName];
  45  | 
  46  |             if (!sheet) {
  47  |                 throw new Error(`Sheet not found: ${sheetName}`);
  48  |             }
  49  | 
  50  |             const jsonData = xlsx.utils.sheet_to_json(sheet);
  51  | 
  52  |             return jsonData;
  53  | 
  54  |         } catch (error) {
  55  |             console.log(error);
  56  |             throw error;
  57  |         }
  58  |     }
  59  | 
  60  |     // ==========================================
  61  |     // 2. CREATE NEW RESULTS EXCEL FILE
  62  |     // ==========================================
  63  |     public static async resetResultsFile() {
  64  | 
  65  |         const folder = path.dirname(this.resultPath);
  66  | 
  67  |         fs.mkdirSync(folder, { recursive: true });
  68  | 
  69  |         const workbook = new ExcelJS.Workbook();
  70  |         const sheet = workbook.addWorksheet('TestResults');
  71  | 
  72  |         sheet.columns = [
  73  |             { header: 'S.No', key: 'sno', width: 10 },
  74  |             { header: 'Module', key: 'module', width: 20 },
  75  |             { header: 'Test Case', key: 'testCase', width: 40 },
  76  |             { header: 'Status', key: 'status', width: 15 },
  77  |             { header: 'Error Details', key: 'error', width: 60 },
  78  |             { header: 'Execution Date', key: 'date', width: 25 }
  79  |         ];
  80  | 
  81  |         // Header formatting
  82  |         sheet.getRow(1).font = {
  83  |             bold: true,
  84  |             color: { argb: 'FFFFFFFF' }
  85  |         };
  86  | 
  87  |         sheet.getRow(1).fill = {
  88  |             type: 'pattern',
  89  |             pattern: 'solid',
  90  |             fgColor: { argb: 'FF1F4E78' }
  91  |         };
  92  | 
  93  |         await workbook.xlsx.writeFile(this.resultPath);
  94  |     }
  95  | 
  96  |     // ==========================================
  97  |     // 3. WRITE PASS / FAIL RESULTS INTO EXCEL
  98  |     // ==========================================
  99  |     public static async writeResult(
  100 |         moduleName: string,
  101 |         testCase: string,
  102 |         status: string,
  103 |         error: string
  104 |     ) {
  105 | 
  106 |         const workbook = new ExcelJS.Workbook();
  107 | 
  108 |         await workbook.xlsx.readFile(this.resultPath);
  109 | 
  110 |         const sheet = workbook.getWorksheet('TestResults')!;
  111 | 
  112 |         const row = sheet.addRow({
  113 |             sno: sheet.rowCount,
  114 |             module: moduleName,
  115 |             testCase: testCase,
  116 |             status: status,
  117 |             error: error,
  118 |             date: new Date().toLocaleString()
  119 |         });
  120 | 
  121 |         // Green for PASS, Red for FAIL
  122 |         const fillColor =
  123 |             status === 'PASS' ? 'FFC6EFCE' : 'FFFFC7CE';
  124 | 
  125 |         const fontColor =
  126 |             status === 'PASS' ? 'FF006100' : 'FF9C0006';
  127 | 
> 128 |         row.getCell('status').fill = {
      |             ^ Error: Out of bounds. Excel supports columns from 1 to 16384
  129 |             type: 'pattern',
  130 |             pattern: 'solid',
  131 |             fgColor: { argb: fillColor }
  132 |         };
  133 | 
  134 |         row.getCell('status').font = {
  135 |             bold: true,
  136 |             color: { argb: fontColor }
  137 |         };
  138 | 
  139 |         // Format row cells
  140 |         row.eachCell((cell) => {
  141 |             cell.alignment = {
  142 |                 vertical: 'middle',
  143 |                 wrapText: true
  144 |             };
  145 | 
  146 |             cell.border = {
  147 |                 bottom: {
  148 |                     style: 'thin',
  149 |                     color: { argb: 'FFD9E2F3' }
  150 |                 }
  151 |             };
  152 |         });
  153 | 
  154 |         await workbook.xlsx.writeFile(this.resultPath);
  155 |     }
  156 | 
  157 |     // ==========================================
  158 |     // 4. REGISTER PLAYWRIGHT RESULT HOOKS
  159 |     // ==========================================
  160 |     public static registerResultHooks() {
  161 | 
  162 |         // Create a fresh results workbook before the tests
  163 |         test.beforeAll(async () => {
  164 |             await this.resetResultsFile();
  165 |         });
  166 | 
  167 |         // Record each test result after execution
  168 |         test.afterEach(async ({}, testInfo) => {
  169 | 
  170 |             const status =
  171 |                 testInfo.status === 'passed' &&
  172 |                 testInfo.expectedStatus === 'passed'
  173 |                     ? 'PASS'
  174 |                     : 'FAIL';
  175 | 
  176 |             const moduleName =
  177 |                 testInfo.title.includes('Supplier')
  178 |                     ? 'Supplier'
  179 |                     : testInfo.title.includes('Customer')
  180 |                         ? 'Customer'
  181 |                         : 'ERP';
  182 | 
  183 |             const errorDetails =
  184 |                 status === 'FAIL'
  185 |                     ? testInfo.error?.message ||
  186 |                       'Test failed; check Playwright report'
  187 |                     : '';
  188 | 
  189 |             await this.writeResult(
  190 |                 moduleName,
  191 |                 testInfo.title,
  192 |                 status,
  193 |                 errorDetails
  194 |             );
  195 |         });
  196 |     }
  197 | }
  198 | 
```