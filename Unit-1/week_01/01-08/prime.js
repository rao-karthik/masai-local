// for( var i = 2; i <= num; i++ ){ 
    //     for( var j = 2; j < i; j++ ){ 
        //         if( i % j == 0 ) { 
            //             flag = false 
            //         } 
            //     } if( flag == true ){ 
                //     console.log(i) 
                //     }
                // }

var num = 15; 
var flag = true 
                
for(var i = 2; i < num; i++){
    if (num % i == 0){
        flag =  false;
        break;
    }
}
if (flag == true){
    console.log("Yes")
}
else{
    console.log("No")
}
