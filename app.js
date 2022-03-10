const from = document.getElementById('from');
 const Name = document.getElementById('Name');
 const username = document.getElementById('username');
 
 const Passward = document.getElementById('Passward');




 //Passward






 //show error message

 function showError(input,message){

    const fromControl =input.parentElement;
    fromControl.className = 'from-control error';
    const small = fromControl.querySelector('small');
    small.innerText = message;
 }

 function showSuccess(input){
    const fromControl = input.parentElement;
    fromControl.className = 'from-control success';


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