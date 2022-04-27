function getAverage (a,b) {
    var average = (a+b)/2;
    console.log(average);
}

getAverage(7,12);

//to be stored in a variable a function must return something//

function getAverage2 (a,b) {
    var average2 = (a+b)/2;
    console.log(average2);
    return average2;
}

var myResult = getAverage2(7,8);