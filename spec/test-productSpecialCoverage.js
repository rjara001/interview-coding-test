const expect = require('chai').expect;

const factory = require('../src/managerProduct').factory;
const Product = require('../src/coTest').Product;


const resultsSpecial = [
    {
    day:0
    , sellIn:15
    , price:20
},
{
    day:1
    , sellIn:14
    , price:21
},
{
    day:16
    , sellIn:-1
    , price:0
}];

describe("Co Test Special Full Coverage", function () {
         
    resultsSpecial.forEach(element => {
        it("Special Full Coverage", function () {
            const _factory = factory.newProduct(new Product('Special Full Coverage', 15, 20));
            const result = element;
    
            for (let index = 0; index < result.day; index++)
                _factory.updatePrice();
            
            expect(_factory.product).to.satisfy(_ => {
                return _.price == result.price && _.sellIn == result.sellIn;
            });
        });
    });

});
