async function submitForm(){
    const userName=document.getElementById("userName").value;
    const userAge = document.getElementById("userAge").value;



    if(userName==null || userName.trim()===""){
        toastmsg("no user name found");
    }

    else if(userAge==null || userAge.trim()===""){
        toastmsg("no user age found");
    }
    else if(isNaN(Number.parseInt(userAge))){
        toastmsg("only integer age is allowed");
    }
    else if(Number.parseInt(userAge)<0){
        toastmsg("only positive age is allowed");
    }
    else{
        url='http://192.168.1.10:8080/restfull/first/user';
        url+='?name='+userName;
        url+='&age='+userAge;
        const response = await fetch(url,{
            method:'POST'
        });
        const data = await response.json();
        if(response.status==200){
            document.getElementById("successmsg").innerHTML="user added successfuly";
        }
        else{
            toastmsg(data.error);
        }
    }

}




function toastmsg(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML=message;
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }