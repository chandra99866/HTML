let table_flag=true;


function myFunction(){
    document.getElementById("msgDisp").innerHTML="please click on it...";
}


function miss(){
    document.getElementById("msgDisp").innerHTML="Oops you missied it...";
}


function displayMsg(){
    document.getElementById("buttonMsg").innerHTML="Hey Thanks for clicking button....";
}

function alertMsg(){
    alert("button clicked ");
}




function toastmsg() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }



  function tableVisible(){
    let x = document.getElementById('table');
    if(table_flag){
        x.style='width:100% ;visibility:""';
        table_flag=!table_flag;
    }
    else{
        x.style='width:100% ;visibility:hidden';
        table_flag=!table_flag;
    }
  }


  function displayIframe(){
    const iframe=document.getElementById("iframe");
    iframe.style="visibility: ''";
  }

  function display_ct() {
    var x = new Date()
    var x1=x.toLocaleTimeString();// changing the display to UTC string
    document.getElementById('time').innerHTML = x1;
    tt=display_c();
     }

     function display_c(){
        var refresh=1000; // Refresh rate in milli seconds
        mytime=setTimeout('display_ct()',refresh)
        }