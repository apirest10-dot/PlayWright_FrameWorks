import{test} from '../fixtures/erp.fixtures'
import erpdata from '../TestData/stockdata.json'
//console.log(erpdata.suppliers)
//console.log(erpdata.Customers)
test.describe('ERP Using Json File',()=>{
    //check for supplier
    for (const supdata of erpdata.suppliers) {
    test(`Supplier Module ${supdata.SupplierName}`,async({supplierPage})=>{
      await  supplierPage.addSuppliersDeatils(
            supdata.SupplierName,
            supdata.Address,
            supdata.City,
            supdata.Country,
            supdata.ContactPerson,
            supdata.PhoneNumber,
            supdata.Email,
            supdata.MobileNumber,
            supdata.Notes
        )
       await supplierPage.handleAlerts()
       await supplierPage.supplierTable()

    })   
    }
    //check for customer module
    for (const cusdata of erpdata.Customers) {
        test(`Customer Module ${cusdata.Address}`,async({customerPage})=>{
            await customerPage.addCustomerDeatils(
                cusdata.CustomerName,
                cusdata.Address,
                cusdata.City,
                cusdata.Country,
                cusdata.ContactPerson,
                cusdata.PhoneNumber,
                cusdata.Email,
                cusdata.MobileNumber,
                cusdata.Notes
            )
            await customerPage.handleAlerts()
            await customerPage.customerTable()
        })
    }
})