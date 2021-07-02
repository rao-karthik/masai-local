/*
var url = new URL("https://www.amazon.in/s?k=tshirts&ref=nb_sb_noss_2");
console.log(url)

let params = new URLSearchParams(url.search);// it will be an object but it deosn't show any data in the output

// let params1 = params.get('k') // give value of parameter
// console.log(params1)

.getAll // ot get all the keys

// let params1 = params.has('k') //whether the parameter is in the url or not

// let params1 = params.toString() //convert to string --- convert serach parameter to string

// params.append('name','value') // add name and value to the url i.e add own parameters to url. After assigning convert it to String

// params.set("msg","hii") // change the data/parameter in the url

params.forEach((val, key)=>{ // print every key and value
    console.log(key, val)
});
*/

var url = new URL("https://github.com/search?p=2&q=Kartik&type=Repositories");
console.log(url)

var param = new URLSearchParams(url.search);

let par = param.get("q");
console.log(par)

param.append("name", "rao");
console.log(param.toString())

param.set("")
