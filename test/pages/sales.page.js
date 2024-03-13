//const Page = require('./page');

class SalesPage {
    get salesPageUrl(){
        return 'https://kasirdemo.belajarqa.com/sales/create';
    }

    async assertSalesUrl() {
        await expect(browser).toHaveUrl(this.salesPageUrl);
    }
}

module.exports = new SalesPage();