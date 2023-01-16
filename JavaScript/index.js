function CheckPassword(inputtxt) 
{ 
    var email = document.getElementById('email');
    var password  = document.getElementById('pass')
    var decimal=  /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(email.value.match(decimal)||password.value.match(decimal)) 
    { 
        // window.location.replace("Bitrupt Traineer.html")
        window.open("/HTML/Bitrupt Traineer.html")

        alert('Logined Successfully')
        // return true;
    }
    else{
        alert("Eamil Must be 8 to 15 characters which contain at least , one uppercase letter, one numeric digit, and one special character")
    }
    
    
} 
