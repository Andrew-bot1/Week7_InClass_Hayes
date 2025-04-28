
//declare array to hold objects
let people = [];

//declare variable to index array
let count=0
// create variables from input
document.getElementById("queue").onclick=function() {
    //create object to hold variables
    let person={name:document.getElementById("name").value,age:document.getElementById("age").value,email:document.getElementById("email").value};
    //if statment to check if any fields are blank
    if ((person.name=="") || (person.age=="") || (person.email=="")) {
        //display error
        document.getElementById("error").innerHTML="All fields should be filled";
        //change color to red
        document.getElementById("error").style.color="red";

        
    }
    else {
        //add object to array
        people[count]=person
        //increase count
        count++;
    }
}

//display queue
document.getElementById("disQue").onclick=function() {
    //check to see queue is empty
    if (count==0) {
        //display error
        document.getElementById("error2").innerHTML="The queue is empty";
        //change color to red
        document.getElementById("error2").style.color="red";
    }
    //display queue
    else {
            document.getElementById("error2").innerHTML="<p" + people[i].name+" "+ people[i].age+" "+people[i].email +"></p>";
        
        
    }
}

