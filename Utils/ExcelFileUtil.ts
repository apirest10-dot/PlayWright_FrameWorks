import xlsx from 'xlsx';
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



