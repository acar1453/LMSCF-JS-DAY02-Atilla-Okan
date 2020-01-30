<<<<<<< HEAD
function crystalGazer (job title, location, partners_name, number_childrens)
=======
function crystalGazer(job_title, place, partners_name, number_childrens){
    return job_title + " " + place + " " + partners_name + " " + number_childrens;}

    console.log(crystalGazer("CodeFactory", "Vienna", "Okan_Atilla", 5))
    console.log(crystalGazer("buchhaltr",  "paris", "michael", 2))


    // var job_title="coder";
    // var place="Wien";
    // var  partners_name="Atilla";
    // var number_childrens=2;

    // console.log(job_title + " " + place + " " + partners_name + " " + number_childrens)

    // var job_title="buchhaltr";
    // var place="paris";
    // var  partners_name="john";
    // var number_childrens=2;

    // console.log(job_title + " " + place + " " + partners_name + " " + number_childrens)


function ageCalculator(geburtsjahr){
    var currentYear = new Date().getFullYear();
    var yearResult = currentYear - geburtsjahr;
    document.write("You are " + yearResult + " old <br>");
}
ageCalculator(1991);

// console.log('Your age is:'+ " "  + ageCalculator(1995) + " " + 'years old.');
    
function degrees_to_radians(degrees){
    var pi = Math.PI;
    return degrees * (pi/180);

}
console.log(degrees_to_radians(90));

function geometrie(x, y, z){
    area= x*y;
    volume = x*y*z;
    return [volume, area]};

var result= geometrie(3,8,9)
console.log(result[0])

console.log(geometrie(7,2,5)[1], geometrie(7,2,5)[0]);

console.log("The The area of the box is:" + area + ".");
console.log("The The volume of the box is:" +volume+ ".");

// Kommentare sind super wichtig

function firstLetter(string){
    var y = string.charAt(0).toUpperCase(); // charAt nimmt den ersten Buchstaben toUpperCase macht es groß
    var x = string.substr(1); // substr löscht den ersten Buchstaben
    document.write(y+x);
}

firstLetter("i am a web developer");
    
  

    
array=["Atilla", "ist","verrück"]
for (i = 0; i < array.length; i++){
    console.log(array[i]);
}






>>>>>>> b46b2b399f4ad8322818c7c325c771ac93eff4f0
