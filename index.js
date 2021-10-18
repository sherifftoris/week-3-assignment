const myName = document.getElementById('name');
const myEmail = document.getElementById('email');

const myMonth = document.getElementById('month');
const myDay = document.getElementById('day');
const myYear = document.getElementById('year');

const myHour = document.getElementById('hour');
const myMinute = document.getElementById('minute');

const minus = document.getElementById('icon-minus');
const plus = document.getElementById('icon-plus');
let customer = document.getElementById('customer');
const submit = document.getElementById('submit');

let count = 1;

plus.onclick = function(){
    
    let myCustomer = customer.textContent;

    if(myCustomer === "1 person"){
        //alert('Item expected!');
        count++;
        customer.textContent = count + " people";        
    }else if(myCustomer !== "1 person"){
        count++;
        customer.textContent = count + " people";
    }else{        
        alert('You must make reservation for at least 1 person!');
    }
    return false;
}


minus.onclick = function(){
    
    let myCustomer = customer.textContent;
    
    if(count > 2){
        count--;
        customer.textContent =  count + " people";
    }else if(count === 2){
        count--;
        customer.textContent = count + " person";
    }else if(count === 1){
        customer.textContent = customer.textContent;
    }else{
        count--;
        customer.textContent = count + " people";
    }
    return false;
}

submit.onclick = function(){
    //myName.innerHTML = myName;
    if(!myName.checkValidity()){
        alert("Please fill out the name field!");
        myName.focus;
    }else if(!myEmail.checkValidity()){
        alert("Please fill out the email field!");
        myEmail.focus;
    }else if(!myMonth.checkValidity()){
        alert("Please select a valid month!");
        myMonth.focus;
    }else if(!myDay.checkValidity()){
        alert("Please select a valid Day!");
        myDay.focus;
    }else if(!myYear.checkValidity()){
        alert("Please select a valid Year!");
        myYear.focus;
    }else if(!myHour.checkValidity()){
        alert("Please enter a valid hour!");
        myHour.focus;
    }else if(!myMinute.checkValidity()){
        alert("Please enter a valid minute!");
    }else{
    swal({
        title: "Great",
        text: "success",
        icon: "success",        
      });
    
}
return false;
}