var namee = "Bodi";
function weightAge(name, age) {
    if (age >= 20) {
        console.log(name + " " + "WOOF , WOOF");
    } else {               
        console.log(name + "woof wooof");
    }
} 
weightAge("Serg" , 22);
weightAge("Dimas" , 18);
weightAge("Oleg" , 25);
weightAge("Frank" , 6);

function whatShallIWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket")
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear t-shirt");
    }
}
whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);

function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
   }
   var guests = 3;
   makeTea(guests, "Earl Grey");


   function speak(kind) {
    var defaultSound = "";
    if (kind == "dog") {
    alert("Woof");
    } else if (kind == "cat") {
    alert("Meow");
    } else {
    alert(defaultSound);
    }
   }
   var pet = prompt("Enter a type of pet: ");
   speak(pet);



   function bake(degrees) {
    var message;
    if (degrees > 500) {
    message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
    message = "I'm not a refrigerator!";
    } else {
    message = "That's a very comfortable temperature for me.";
    }
    return message;
   }
   var status = bake(350);
   console.log(status);

function clunk(times) {
    var num = times;
    while (num > 0) {
    display("clunk");
    num = num - 1;
    }
   }
   function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
    display("clank");
    } else if (size == 1) {
    display("thunk");
    } else {
    while (size > 1) {
    facky = facky * size;
    size = size - 1;
    }
    clunk(facky);
    }
   }
   function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
   }
   var clunkCounter = 0;
   thingamajig(2);
   console.log(clunkCounter);
