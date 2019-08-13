const expect = require('chai').expect;

const factory = require('../src/managerProduct').factory;
const Product = require('../src/coTest').Product;

const resultsMega = [
    {
    day:0
    , sellIn:0
    , price:80
},
{
    day:1
    , sellIn:0
    , price:80
},
{
    day:16
    , sellIn:0
    , price:80
}];

describe("Co Test Mega Coverage", function () {

    resultsMega.forEach(element => {
        it("Mega Coverage", function () {
            const _factory = factory.newProduct(new Product('Mega Coverage', 0, 80));
            const result = element;
    
            for (let index = 0; index < result.day; index++)
                _factory.updatePrice();
            
            expect(_factory.product).to.satisfy(_ => {
                return _.price == result.price && _.sellIn == result.sellIn;
            });
        });
    });
      
});
