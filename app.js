
// Sum All Numbers in a Range
function sumAll(arr) {
    var maxNum = Math.max.apply(null,arr);
    //Uses math library to find max number in the array
    var minNum = Math.min.apply(null,arr);
    //Uses math library to find max number in the array
    var range = maxNum-minNum;
    //Used to get range for loop
    var total = 0;
     //Total nums to be added
    for(var i=1;i<range;i++){
        total = total +minNum + i;
    }
    total=total + maxNum + minNum; 
    //Adding min and max to total then returning
     return total;
}

sumAll([1, 4]);


//Diff Two Arrays

function diff(arr1, arr2){
    var holderArray = [];
    //Same, same; but different
    for(var i=0;i<arr1.lenght;i++){
        //Iterate through array 1
        if(arr2.indexof(arr1[i])===-1){
            //If array 2 doesnt contain items in array 1
            holderArray.push(arr[i]);
            //Add it to new array
    }
    }
    //Vice Versa switch array 1 with array 2
    for(var j=0<arr2.lenght;j++){
        if(arr1.indexOf(arr2[j])===-1){
            holderArray.push(arr2[j]);
        }
    }
    return holderArray;
}
    diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);




    //Roman Numeral Converter

    function convert(num){
        var roman="";
        //Create an empty string
        var romanNumeral= ["M","CM", "D","CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        //Create an array of possible RN up to 1000
        var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
        //Create an array of possble number values
        for(var i=0;i<numbers.lenght;i++){
            //Iterate for a lenght of our numbers array
            while(num>numbers[i]){
                //While original number is larger than our inputted numbers
                //array
                roman = roman + romanNumeral[i];
                //Add its equivlent roman numeral to our original empty string
                num = num - numbers[i];
                //Subtract the value from original number to end while loop
            }
        }
        return roman;
    }

    convert(36);