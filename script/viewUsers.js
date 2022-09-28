
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

window.onload=async function getDataToTable(){
    let table = document.getElementById("userViewTables");
    const response = await fetch('http://192.168.1.10:8080/restfull/first/getAllUsers');
    const data = await response.json();
  if(response.status===200){
    let slNo =1;
    for(x of data.users){
        const date =new Date(x.createdDate);
        let newRow=  table.insertRow(table.length);
        // newRow.insertCell(0).innerHTML=x.user_id;
        // newRow.insertCell(1).innerHTML=x.userName;
        // newRow.insertCell(2).innerHTML=x.userAge;
        // newRow.insertCell(3).innerHTML=returnDatetoStd(date);
        let cellCount=0;
        x[0]=slNo;
        for(let y in x){
          newRow.insertCell(cellCount).innerHTML= y=='createdDate'?returnDatetoStd(date):x[y];
          cellCount++;
        }
        slNo++;

}

  }
}