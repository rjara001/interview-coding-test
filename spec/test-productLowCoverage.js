const expect = require('chai').expect;

const factory = require('../src/managerProduct').factory;
const Product = require('../src/coTest').Product;
const resultsLow = [
    {
    day:0
    , sellIn:5
    , price:7
},
{
    day:1
    , sellIn:4
    , price:6
},
{
    day:16
    , sellIn:-11
    , price:0
}];

describe("Co Test Low Coverage", function () {

    resultsLow.forEach(element => {
        it("Low Coverage", function () {
            const _factory = factory.newProduct(new Product('Low Coverage', 5, 7));
            const result = element;
    
            for (let index = 0; index < result.day; index++)
                _factory.updatePrice();
            
            expect(_factory.product).to.satisfy(_ => {
                return _.price == result.price && _.sellIn == result.sellIn;
            });
        });
    });

});
