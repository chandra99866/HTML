window.onload=async function getDataToTable(){
    let table = document.getElementById("fileTable");
    const response = await fetch('http://192.168.1.10:8080/restfull/first/getAllFileNames');
    const data = await response.json();
  if(response.status===200){
    let slNo =1;
    for(x of data.users){
        const date =new Date(x.updateDate);
        let newRow=  table.insertRow(table.length);
        
        let cellCount=0;
     
        // for(let y in x){
        //   newRow.insertCell(cellCount).innerHTML= y=='createdDate'?returnDatetoStd(date):x[y];
        //   cellCount++;
        // }
        newRow.insertCell(0).innerHTML=slNo;
        newRow.insertCell(1).appendChild(getAnchorTag(x.fileName));
        newRow.insertCell(2).innerHTML=x.fileSize/1000;
        newRow.insertCell(3).innerHTML=returnDatetoStd(date);
        newRow.insertCell(4).innerHTML=x.slNo;
        slNo++;

}

  }
}


function returnDatetoStd(date){
    return date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    }



function getAnchorTag(fileName){
    let aTag=document.createElement('a');
    //aTag.setAttribute('href',"http://192.168.1.10:8080/restfull/first/getFile/"+fileName)
    aTag.href="http://192.168.1.10:8080/restfull/first/getFile/"+fileName;
    aTag.innerHTML=fileName;
    aTag.style.color='black';
    aTag.style.textDecoration='none';
    aTag.onmouseover=function setAtag(){
      aTag.style.color='blue';
      aTag.style.textDecoration='underline';
    };
    aTag.onmouseleave=function setAtag(){
      aTag.style.color='black';
      aTag.style.textDecoration='none';
    };

    
  aTag.addEventListener('click', () => {
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    document.getElementById("innerToastMsg").innerHTML=fileName+' downloaded.....';

    toast.show()
  })

 


    return aTag;
}




