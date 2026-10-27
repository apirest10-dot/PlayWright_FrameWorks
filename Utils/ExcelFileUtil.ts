import xlsx from 'xlsx';
// import ExcelJS from 'exceljs';
// import fs from 'fs';
// import path from 'path';
import { test } from '../fixtures/erp.fixtures';
export class ExcelFileUtil {
    public static readExcelFile(filePath: string, sheetName: string){
        try {
            //get workbook from file
        const workbook = xlsx.readFile(filePath)
        //get sheets from workbook
        const sheet = workbook.Sheets[sheetName]
        //convert all sheet data into json format
        const jsonData =xlsx.utils.sheet_to_json(sheet)
        return jsonData
        } catch (error) {
           console.log(error) 
        }
        
    }
          
}




// export class ExcelFileUtil {

//     private static resultPath = path.join(
//         process.cwd(),
//         'TestResults',
//         'ERP_TestResults.xlsx'
//     );

//     // ==========================================
//     // 1. READ TEST DATA FROM EXCEL
//     // ==========================================
//     public static readExcelFile(
//         filePath: string,
//         sheetName: string
//     ) {
//         try {
//             const workbook = xlsx.readFile(filePath);
//             const sheet = workbook.Sheets[sheetName];

//             if (!sheet) {
//                 throw new Error(`Sheet not found: ${sheetName}`);
//             }

//             const jsonData = xlsx.utils.sheet_to_json(sheet);

//             return jsonData;

//         } catch (error) {
//             console.log(error);
//             throw error;
//         }
//     }

//     // ==========================================
//     // 2. CREATE NEW RESULTS EXCEL FILE
//     // ==========================================
//     public static async resetResultsFile() {

//         const folder = path.dirname(this.resultPath);

//         fs.mkdirSync(folder, { recursive: true });

//         const workbook = new ExcelJS.Workbook();
//         const sheet = workbook.addWorksheet('TestResults');

//         sheet.columns = [
//             { header: 'S.No', key: 'sno', width: 10 },
//             { header: 'Module', key: 'module', width: 20 },
//             { header: 'Test Case', key: 'testCase', width: 40 },
//             { header: 'Status', key: 'status', width: 15 },
//             { header: 'Error Details', key: 'error', width: 60 },
//             { header: 'Execution Date', key: 'date', width: 25 }
//         ];

//         // Header formatting
//         sheet.getRow(1).font = {
//             bold: true,
//             color: { argb: 'FFFFFFFF' }
//         };

//         sheet.getRow(1).fill = {
//             type: 'pattern',
//             pattern: 'solid',
//             fgColor: { argb: 'FF1F4E78' }
//         };

//         await workbook.xlsx.writeFile(this.resultPath);
//     }

//     // ==========================================
//     // 3. WRITE PASS / FAIL RESULTS INTO EXCEL
//     // ==========================================
//     public static async writeResult(
//         moduleName: string,
//         testCase: string,
//         status: string,
//         error: string
//     ) {

//         const workbook = new ExcelJS.Workbook();

//         await workbook.xlsx.readFile(this.resultPath);

//         const sheet = workbook.getWorksheet('TestResults')!;

//         const row = sheet.addRow({
//             sno: sheet.rowCount,
//             module: moduleName,
//             testCase: testCase,
//             status: status,
//             error: error,
//             date: new Date().toLocaleString()
//         });

//         // Green for PASS, Red for FAIL
//         const fillColor =
//             status === 'PASS' ? 'FFC6EFCE' : 'FFFFC7CE';

//         const fontColor =
//             status === 'PASS' ? 'FF006100' : 'FF9C0006';

//        row.getCell(4).fill = {
//     type: 'pattern',
//     pattern: 'solid',
//     fgColor: { argb: fillColor }
// };

// row.getCell(4).font = {
//     bold: true,
//     color: { argb: fontColor }
// };

//         // Format row cells
//         row.eachCell((cell) => {
//             cell.alignment = {
//                 vertical: 'middle',
//                 wrapText: true
//             };

//             cell.border = {
//                 bottom: {
//                     style: 'thin',
//                     color: { argb: 'FFD9E2F3' }
//                 }
//             };
//         });

//         await workbook.xlsx.writeFile(this.resultPath);
//     }

//     // ==========================================
//     // 4. REGISTER PLAYWRIGHT RESULT HOOKS
//     // ==========================================
//     public static registerResultHooks() {

//         // Create a fresh results workbook before the tests
//         test.beforeAll(async () => {
//             await this.resetResultsFile();
//         });

//         // Record each test result after execution
//         test.afterEach(async ({}, testInfo) => {

//             const status =
//                 testInfo.status === 'passed' &&
//                 testInfo.expectedStatus === 'passed'
//                     ? 'PASS'
//                     : 'FAIL';

//             const moduleName =
//                 testInfo.title.includes('Supplier')
//                     ? 'Supplier'
//                     : testInfo.title.includes('Customer')
//                         ? 'Customer'
//                         : 'ERP';

//             const errorDetails =
//                 status === 'FAIL'
//                     ? testInfo.error?.message ||
//                       'Test failed; check Playwright report'
//                     : '';

//             await this.writeResult(
//                 moduleName,
//                 testInfo.title,
//                 status,
//                 errorDetails
//             );
//         });
//     }
// }
