const from = document.getElementById('from');
 const Name = document.getElementById('Name');
 const username = document.getElementById('username');
 
 const Passward = document.getElementById('Passward');




 






 //show error message

 function showError(input,message){

    const fromControl =input.parentElement;
    fromControl.className = 'from-control error';
    const small = fromControl.querySelector('small');
    small.innerText = message;
 }



 //show success outline

 function showSuccess(input){
    const fromControl = input.parentElement;
    fromControl.className = 'from-control success';


}

//email validation

function isValidEmail(Email){
    const re = /\S+@\S+\.\S+/;
    return re.test(Email);

}


 //event listeners

 from.addEventListener('submit',function(e){
     e.preventDefault();
     
     if(Name.value ===''){

        showError(Name,'Name is required');
     }
     else{
         showSuccess(Name);

     }



     if( username.value===''){

         showError(username,'username is required');

     }
     else{
         showSuccess(username);
     }

     if( Email.value===''){

        showError(Email,'Email is required');

    }

    else if(!isValidEmail(Email.value)){

        showError(Email,'Email is not valid ');
        
    }
    else{
        showSuccess(Email);
    }

    if( Passward.value===''){

        showError(Passward,'Passward is required');

    }

    
    else{
        showSuccess(Passward);
    }



 })