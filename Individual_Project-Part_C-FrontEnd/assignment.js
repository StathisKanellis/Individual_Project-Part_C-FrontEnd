
function submitForm(){
    var formData=readForm();
    insertRecord(formData);  
    upDate(formData);
    resetForm();
}

function readForm(){
    var formData = {};
    formData["title"]=document.getElementById("title").value;
    formData["descreption"]=document.getElementById("descreption").value;
    formData["subDateTime"]=document.getElementById("subDateTime").value;
    formData["oralMark"]=document.getElementById("oralMark").value;
    formData["totalMark"]=document.getElementById("totalMark").value;
    return formData;
}

function insertRecord(data){
    var table=document.getElementById("assignmentList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.title;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.descreption;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.subDateTime;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.oralMark;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.totalMark;
    cell6=newRow.insertCell(5);
    cell6.innerHTML= "<a onClick='onEdit(this)'>Edit</a> <a onClick='upDate(this)'>Update</a>";
}

function resetForm(){
    document.getElementsById("title").this.reset();
    document.getElementsById("descreption").this.reset();
    document.getElementsById("subDateTime").this.reset();
    document.getElementsById("oralMark").this.reset();
    document.getElementsById("totalMark").this.reset();
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementsById("title").value=selectedRow.cells[0].innerHTML;
    document.getElementsById("descreption").value=selectedRow.cells[1].innerHTML;
    document.getElementsById("subDateTime").value=selectedRow.cells[2].innerHTML;
    document.getElementsById("oralMark").value=selectedRow.cells[3].innerHTML;
    document.getElementsById("totalMark").value=selectedRow.cells[4].innerHTML;
}

function upDate(formData){
    selectedRow.cells[0].innerHTML=formData.title;
    selectedRow.cells[1].innerHTML=formData.descreption;
    selectedRow.cells[2].innerHTML=formData.subDateTime;
    selectedRow.cells[3].innerHTML=formData.oralMark;
    selectedRow.cells[4].innerHTML=formData.totalMark;
}
