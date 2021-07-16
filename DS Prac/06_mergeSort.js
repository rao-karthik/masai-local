let arr = [4, 3, 5, 2, 9, 4, 6];
let len = 7;

sort(arr, 0, len-1);

console.log(arr);

function sort(arr, l, r) { // l = 0 index and r = last index
    if(l < r){
        let m = l + parseInt((r-l)/2); // m = middle index
        
        // sort first and second halves
        sort(arr, l , m);
        sort(arr, m+1, r);
        merge(arr, l, m, r);
    };
};

function merge(arr, l, m, r){
    let n1 = m - l + 1;
    let n2 = r - m;

    // created left and right arrays
    let L = new Array(n1);
    let R = new Array(n2);

    // copying values in left and right arrays
    for(let i = 0; i < n1; i++){
        L[i] = arr[l+i];
    }
    for(let j = 0; j < n2; j++){
        R[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;

    let k = l;
    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while(i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }

    while(i < n2){
        arr[k] = L[i];
        i++;
        k++;
    }
}