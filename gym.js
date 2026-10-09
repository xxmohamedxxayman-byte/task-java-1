let finalprice = 0;

let months = +prompt(`please enter a few months`);
let monthprice = 350 * months;

finalprice = finalprice + monthprice;
console.log(`final price ${monthprice}`);


let discount = 0;
if(months >= 12){
    discount = (15/100)
}else if (months >= 6) {
    discount = (10/100)
}
finalprice = finalprice - (finalprice * discount)
console.log(`final price ${finalprice}`);


let pertarining = confirm(`Do you need a coach?`);
if(pertarining === true){
     finalprice = finalprice + 200;
    console.log(`personal tarining : ${finalprice}`);
}

let vat = (14/100) * finalprice;
console.log(`VAT 14% : ${vat} EGP`)
finalprice = finalprice + vat;
console.log (`final price : ${finalprice} EGP`);