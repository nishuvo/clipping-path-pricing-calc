//  declaring array with minimum price
let itemPriceMin = new Array();
// array items and their values 
itemPriceMin["none"] = 0;
itemPriceMin["clipping"] = 0.29;
itemPriceMin["bgremove"] = 0.49;
itemPriceMin["correction"] = 0.29;
itemPriceMin["dropshadow"] = 0.39;
itemPriceMin["ecom"] = 0.29;
itemPriceMin["ghosteffect"] = 0.49;
itemPriceMin["photomask"] = 0.49;
itemPriceMin["retouch"] = 1.5;
//  declaring array with maximum price
let itemPriceMax = new Array();
// array items and their values 
itemPriceMax["none"] = 0;
itemPriceMax["clipping"] = 6.99;
itemPriceMax["bgremove"] = 9.99;
itemPriceMax["correction"] = 2.49;
itemPriceMax["dropshadow"] = 1.99;
itemPriceMax["ecom"] = 4.99;
itemPriceMax["ghosteffect"] = 1.99;
itemPriceMax["photomask"] = 4.99;
itemPriceMax["retouch"] = 9.99;
// take the price form user input
function getQuantity() {
    let quantity = document.getElementById('quantity');
    return quantity.value;
}
// to get the minimum value from the array and the user input
function getMinPrice() {
    let priceInMin = document.getElementById('servicelist');
    return itemPriceMin[priceInMin.value];
}
// to get the maximum value from the array and the user input
function getMaxPrice() {
    let priceInMax = document.getElementById('servicelist');
    return itemPriceMax[priceInMax.value];
}
// calculate & output to html
function calc() {
    // min price
    let totalMin = getMinPrice() * getQuantity();
    document.getElementById('priceMin').innerHTML = "$" + totalMin.toFixed(2);
    // max price
    let totalMax = getMaxPrice() * getQuantity();
    document.getElementById('priceMax').innerHTML = "$" + totalMax.toFixed(2);
}