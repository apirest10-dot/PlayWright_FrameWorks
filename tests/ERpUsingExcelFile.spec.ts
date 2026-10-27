import path from 'path'
import {test } from '../fixtures/erp.fixtures'
import { ExcelFileUtil } from '../Utils/ExcelFileUtil'
let suppliers:any
let customer:any
//store path of excel file
const excelpath = path.join(__dirname,"../TestData/StockData.xlsx")
try {
    //get supplier sheet data'
    suppliers =ExcelFileUtil.readExcelFile(excelpath,'supplierdata')
    customer= ExcelFileUtil.readExcelFile(excelpath,'customerdata')
} catch (error) {
    console.log(error)
}
//console.log(suppliers)
//console.log(customer)
test.describe('ERP Inventory Modules',()=>{
      ExcelFileUtil.registerResultHooks();
    //check for supplier module
    for (const sup of suppliers) {
        test(`Validate Supplier ${sup.suppliername}`,async({supplierPage})=>{
            await supplierPage.addSuppliersDeatils(
                sup.suppliername,
                sup.address,
                sup.city,
                sup.country,
                sup.contactPerson,
                sup.phonenumber,
                sup.email,
                sup.mobilenumber,
                sup.Notes
            )
            await supplierPage.handleAlerts()
            await supplierPage.supplierTable()

        })
    }
    //check for customer
    for (const cus of customer) {
        test(`Validate Customer ${cus.address}`,async({customerPage})=>{
            await customerPage.addCustomerDeatils(
                cus.customername,
                cus.address,
                cus.city,
                cus.country,
                cus.contactperson,
                cus.PhoneNumber,
                cus.Email,
                cus.Mobilenumber,
                cus.Notes
            )
           await customerPage.handleAlerts()
           await customerPage.customerTable()


        })
        
    }
})