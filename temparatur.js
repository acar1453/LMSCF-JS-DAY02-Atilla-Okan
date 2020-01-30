
var temp = 9;

if (temp < 10) {
    console.log("Das Wetter ist kalt");

}

else if (temp < 25) {
    console.log("Das Wetter ist warm");
}

else {
    console.log("Das Wetter ist verschwunden")
}


function tempature(){
    var tempature =(Math.random() * Math.floor(25));
    if((tempature > -5) && (tempature < 9)) {
        console.log("Das Wetter ist kalt");
    }
    
    else if(tempature > 10){
        console.log("Das Wetter ist mäßig");
    }

    else {
        console.log("Das Wetter ist warm")
    }
}

tempature();

function highvalue(){
    var highvalue =(Math.max(1, 7, -3, 9));
    console.log(highvalue);
}

highvalue()

array=["Okan", "Atilla", "Heinz", "Célia", "Theo"]
for(i = 0; i < array.length; i++){
    console.log(array[i]);
} 

