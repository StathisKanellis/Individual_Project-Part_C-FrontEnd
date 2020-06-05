
function submitForm(){
    var formData=readForm();
    insertRecord(formData);  
    upDate(formData);
    resetForm();
}

function readForm(){
    var formData = {};
    formData["title"]=document.getElementById("title").value;
    formData["stream"]=document.getElementById("stream").value;
    formData["type"]=document.getElementById("type").value;
    formData["startDate"]=document.getElementById("startDate").value;
    formData["endDate"]=document.getElementById("endDate").value;
    return formData;
}

function insertRecord(data){
    var table=document.getElementById("courseList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.title;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.stream;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.type;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.startDate;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.endDate;
    cell6=newRow.insertCell(5);
    cell6.innerHTML= "<a onClick='onEdit(this)'>Edit</a> <a onClick='upDate(this)'>Update</a>";
}

function resetForm(){
    document.getElementsById("title").this.reset();
    document.getElementsById("stream").this.reset();
    document.getElementsById("type").this.reset();
    document.getElementsById("startDate").this.reset();
    document.getElementsById("endDate").this.reset();
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementsById("title").value=selectedRow.cells[0].innerHTML;
    document.getElementsById("stream").value=selectedRow.cells[1].innerHTML;
    document.getElementsById("type").value=selectedRow.cells[2].innerHTML;
    document.getElementsById("startDate").value=selectedRow.cells[3].innerHTML;
    document.getElementsById("endDate").value=selectedRow.cells[4].innerHTML;
}

function upDate(formData){
    selectedRow.cells[0].innerHTML=formData.title;
    selectedRow.cells[1].innerHTML=formData.stream;
    selectedRow.cells[2].innerHTML=formData.type;
    selectedRow.cells[3].innerHTML=formData.startDate;
    selectedRow.cells[4].innerHTML=formData.endDate;
}
