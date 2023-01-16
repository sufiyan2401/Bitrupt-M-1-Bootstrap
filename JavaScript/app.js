function Checker(){
    
    
    let fname  = document.getElementById("fname")
    let email  = document.getElementById("email")
    let Country  = document.getElementById("Country")
    let subject = document.getElementById("subject")
    let message = document.getElementById("message");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // var regName = /^[a-zA-z]+$/;
    // Capital Name Validation Remaining //

    // if(!regName.test(fname)){
    //     alert('Invalid name given.');
    // }else{
    //     alert('Valid name given.');
    // }
    
    if(fname.value == "" || Country.value=="" || subject.value =="" || message.value ==""){
        alert("All Field Are Required")
    }
    if (email.value.match(validRegex)) {
        
        // console.log("Valid email address!");
        var obj = {
            name : fname.value,
            email:email.value,
            Country:Country.value,
            subject:subject.value,
            message:message.value

        }
        
        console.log(obj)
        return true;
        
    } else {
        
        alert("Invalid email address!");
        
        
        
        return false;
        
    }
    
    
    
    }


