var obj = {
    students: {
        stud1: "Kartik",
        stud2: "Sushant",
        stud3: "Nrupul",
        stud4: "Monis" 
    },

    cities: {
        capital: "Delhi",
        financeCapital: "Mumbai",
        siliconVallInd: "Bangaluru"
    }
}

let {students:{stud1, stud2, stud3, stud4} , cities:{capital, financeCapital, siliconVallInd}} = obj;

// console.log(students , cities);

console.log(stud1, stud2, stud3, stud4);
console.log(capital, financeCapital, siliconVallInd);

var [a, [b, [c]]] = ["Kartik", ["Monis", ["Masai"]]];

console.log(a, b, c);