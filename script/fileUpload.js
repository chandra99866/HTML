async function uploadFile(){
  



    const file = document.getElementById("file").files;


    if(file[0]===undefined){
        fileStatus.style.color="red";
        fileStatus.innerHTML='No file chosen';
    }
    else{
   
    document.getElementById("loading").className="spinner-border spinner-border-sm";
    document.getElementById("status").innerHTML="Loading...";

    const fd = new FormData();
    fd.append('file', file[0]);
    const response = await fetch('http://192.168.1.10:8080/restfull/first/saveFile',{
        method:'POST',
        body:fd
    });
    const data = await response.json();
    let fileStatus =document.getElementById('fileStatus');
    
    if(response.status==200){
    document.getElementById("loading").className="";
    document.getElementById("status").innerHTML="";
      fileStatus.style.color="green";
      fileStatus.innerHTML= data.result;
    }
    else{
        document.getElementById("loading").className="";
        document.getElementById("status").innerHTML="";

        fileStatus.style.color="red";
        fileStatus.innerHTML=data.error;
    }
}

}