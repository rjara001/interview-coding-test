
class factory {
    static newProduct(product) {

        switch (product.name) {
            case 'Medium Coverage':
                return new productMediumCoverage(product);
            case 'Full Coverage':
                return new productFullCoverage(product);
            case 'Low Coverage':
                return new productLowCoverage(product);
            case 'Mega Coverage':
                return new productMegaCoverage(product);
            case 'Special Full Coverage':
                return new productSpeacialFullCoverage(product);
            case 'Super Sale':
                return new productSuperSaleCoverage(product);
        }
    }
}

class baseProduct {
    constructor(product) {
        this.product = product;
    }

    updatePrice() {

        this._updatePrice();


    }

    _updatePrice() {
        this.product.price--;
        this.product.sellIn--;
        if (this.product.sellIn < 0)
            this.product.price--;

        if (this.product.price < 0)
            this.product.price = 0;
        if (this.product.price > 50)
            this.product.price = 50;
    }
}

class productMediumCoverage extends baseProduct {
    constructor(product) {
        super(product);
    }

    _updatePrice() {
        super._updatePrice();
    }
}

class productFullCoverage extends baseProduct {
    constructor(product) {
        super(product);
    }

    _updatePrice() {

        if (this.product.price < 50)
            this.product.price++;

        this.product.sellIn--;

        if (this.product.sellIn < 0)
            this.product.price++;
    }
}

class productLowCoverage extends baseProduct {
    constructor(product) {
        super(product);
    }

    _updatePrice() {
        super._updatePrice();
    }
}

class productMegaCoverage extends baseProduct {
    constructor(product) {
        super(product);
    }

    _updatePrice() {

        this.product.price = 80;

    }
}

class productSpeacialFullCoverage extends baseProduct {
    constructor(product) {
        super(product);
    }

    _updatePrice() {
        if (this.product.sellIn < 50)
            this.product.price++;
        if (this.product.sellIn <= 11)
            this.product.price++;
        if (this.product.sellIn <= 6)
            this.product.price++;

        this.product.sellIn--;
        // if (this.product.sellIn <= 5)
        //     this.product.price++;

        if (this.product.price > 50)
            this.product.price = 50;

        // this.product.price++;

        if (this.product.sellIn < 0)
            this.product.price = 0;
    }
}

class productSuperSaleCoverage extends baseProduct {
    constructor(product) {
        super(product);
    }

    _updatePrice() {
        this.product.price = this.product.price - 1;
        this.product.sellIn--;
    }
}

module.exports = {
    factory
}