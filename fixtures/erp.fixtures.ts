import { test as base, expect } from '@playwright/test';
import { AdminLoginPage } from '../Pages/AdminLoginPage';
import { SuppliersPage } from '../Pages/SuppliersPage';
import { CustomersPage } from '../Pages/CustomersPage';
type ERPFixtures = {
    loginPage: AdminLoginPage;
    supplierPage: SuppliersPage;
    customerPage: CustomersPage;
    }

export const test = base.extend<ERPFixtures>({

    
    loginPage: async ({ page }, use) => {
        const loginPage = new AdminLoginPage(page);

        await loginPage.launchUrl(process.env.BASE_URL!);

        await loginPage.AdminLogin(
            process.env.BASE_USER || 'admin',
            process.env.BASE_PASS || 'master'
        );

        await use(loginPage);
    },

    supplierPage: async ({ page, loginPage }, use) => {
        // loginPage fixture runs first and logs in.
        const supplierPage = new SuppliersPage(page);

        await supplierPage.navigateToAddSupplier();

        await use(supplierPage);
    },

    customerPage: async ({ page, loginPage }, use) => {
        // loginPage fixture runs first and logs in.
        const customerPage = new CustomersPage(page);

        await customerPage.navigateToCustomer();

        await use(customerPage);
    }

});
export { expect };
