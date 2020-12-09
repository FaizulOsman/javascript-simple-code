function myFunction(price, vat) {
    var acPrice = price;
    var devidePrice = acPrice/100;
    var textPrice = devidePrice*vat;
    var tPrice = price + textPrice;

    
    document.write(tPrice);
}

myFunction(1000, 1.8);