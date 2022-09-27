
let count = 1;



async function   demo (){

let url ='http://192.168.1.10:8080/restfull/first/user/';
url+=count;
const response = await fetch(url);
const data = await response.json();
if(response.status===200){
document.getElementById("noData").innerHTML="";
document.getElementById("userId").innerHTML=data.userDetials.user_id;
document.getElementById("userName").innerHTML=data.userDetials.userName;
document.getElementById("userAge").innerHTML=data.userDetials.userAge;
const date =new Date(data.userDetials.createdDate);
document.getElementById("userCreatedDate").innerHTML=returnDatetoStd(date);

}
else{   
document.getElementById("noData").innerHTML=data.error;
document.getElementById("userId").innerHTML="";
document.getElementById("userName").innerHTML="";
document.getElementById("userAge").innerHTML="";
document.getElementById("userCreatedDate").innerHTML="";
}

count++;


}




function resetCount(){
    document.getElementById("noData").innerHTML="";
    document.getElementById("userId").innerHTML="";
    document.getElementById("userName").innerHTML="";
    document.getElementById("userAge").innerHTML="";
    document.getElementById("userCreatedDate").innerHTML="";
    count=1;
}



async function previous(){
    if(count>1)
        count--;

    let url ='http://192.168.1.10:8080/restfull/first/user/';
    url+=count;
    const response = await fetch(url);
    const data = await response.json();
    if(response.status===200){
    document.getElementById("noData").innerHTML="";
    document.getElementById("userId").innerHTML=data.userDetials.user_id;
    document.getElementById("userName").innerHTML=data.userDetials.userName;
    document.getElementById("userAge").innerHTML=data.userDetials.userAge;
    const date =new Date(data.userDetials.createdDate);
    document.getElementById("userCreatedDate").innerHTML=returnDatetoStd(date);
    
    }
    else{   
    document.getElementById("noData").innerHTML=data.error;
    document.getElementById("userId").innerHTML="";
    document.getElementById("userName").innerHTML="";
    document.getElementById("userAge").innerHTML="";
    document.getElementById("userCreatedDate").innerHTML="";
    }
}


function returnDatetoStd(date){
return date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
}