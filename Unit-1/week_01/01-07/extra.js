var price = 250;
var discount = 0.10;
var dis = 0;
if (price >= 300){
    dis = discount * price;
    if (dis > 100){
        dis = 100;
    }
}    
price = price - dis;
console.log(price)