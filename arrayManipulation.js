function processArray(arr){
    return arr.map(function(num){
        if (num % 2 === 0){
            return Math.pow(num, 2);
        } else{
            return num * 3;
            
        }
        
})
}

function formatArrayStrings(stringItem, numberItem){
    return stringItem.map(function(str,index){
        if( numberItem[index] % 2 === 0){
            str.toUpperCase();
        } else{
            str.toLowerCase();
        }
    })

}

