import{test} from '../fixtures/erp.fixtures'
test.describe('ERp Inventroy Modules',()=>{
    //checking for supplier module
    test('Supplier with single data',async({supplierPage})=>{
          await supplierPage.addSuppliersDeatils(
            'John',
            'USA',
            'Poland',
            'USA',
            'Whiteman',
            '987654',
            'john@gmail.com',
            '8765343',
            'First supplier'
        )
        await supplierPage.handleAlerts()
        await supplierPage.supplierTable()
    })
    //checking for customer
    test('Validate customer',async({customerPage})=>{
        
        await customerPage.addCustomerDeatils(
            'Ranga',
            'Ammerpet',
            'Ammerpet',
            'India',
            'Qedge',
            'ranga@gmail.com',
            'Qedge',
            '876543',
            'First Customer'

        )
        await customerPage.handleAlerts()
        await customerPage.customerTable()
    })
})