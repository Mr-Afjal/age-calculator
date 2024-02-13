let dob = document.getElementById('birthDate');
let currentDate = document.getElementById('currentDate');
let output = document.getElementById('output');

document.getElementById('calculateBtn').addEventListener("click",()=>{
    if(dob.value=="" || currentDate.value==""){
        output.innerHTML = "Please Select Date"
    }
    else{
        // calculateAgeDifference(dob.value,currentDate.value);
        dob = new Date(dob.value);
        currentDate = new Date(currentDate.value);
        const newDate = new Date(currentDate - dob);
        const years = newDate.getFullYear() - 1970;
        const months = newDate.getMonth();
        const days = newDate.getDate() - 1;

        output.innerHTML = `you're ${years} years ${months} months ${days} days old`;
    }
});

