// function checkAnagram(str1, str2) {
//     let l1 = str1.length;
//     let l2 = str2.length;

//     if(l1 !== l2){
//         return false;
//     }

//     str1.sort();
//     str2.sort();

//     for(let i = 0; i < l1; i++){
//         if(str1[i] !== str2[i]){
//             return false;
//         }
//     }
//     return true;
// }

// O(n)

function checkAnagram (str1, str2){
    let count = [];

    for(let i = 0; i < str1.length; i++){
        count[i] = 0;
    }

    for(let i = 0; i < str1.length; i++){
        count[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        count[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
  
    if (str1.length != str2.length)
        return false;

    for(i = 0; i < str1.length; i++)
        if (count[i] != 0)
        {
            return false;
        }
    return true;
}

let str1 = 'abxcdevh'
// str1 = str1.trim().split('');
let str2 = 'dchvebax';
// str2 = str2.trim().split('');

let check = checkAnagram(str1, str2);
console.log(check)