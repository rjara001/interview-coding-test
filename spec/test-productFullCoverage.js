const expect = require('chai').expect;

const factory = require('../src/managerProduct').factory;
const Product = require('../src/coTest').Product;


const resultsFull = [
    {
    day:0
    , sellIn:2
    , price:0
},
{
    day:1
    , sellIn:1
    , price:1
},
{
    day:16
    , sellIn:-14
    , price:30
}];

describe("Co Test Full Coverange", function () {

         
    resultsFull.forEach(element => {
        it("Full Coverage", function () {
            const _factory = factory.newProduct(new Product('Full Coverage', 2, 0));
            const result = element;
    
            for (let index = 0; index < result.day; index++)
                _factory.updatePrice();
            
            expect(_factory.product).to.satisfy(_ => {
                return _.price == result.price && _.sellIn == result.sellIn;
            });
        });
    });

});
