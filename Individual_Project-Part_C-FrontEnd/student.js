
function submitForm(){
    var formData=readForm();
    insertRecord(formData);  
    upDate(formData);
    resetForm();
}

function readForm(){
    var formData = {};
    formData["firstname"]=document.getElementById("firstname").value;
    formData["lastname"]=document.getElementById("lastname").value;
    formData["dateOfBirth"]=document.getElementById("dateOfBirth").value;
    formData["fees"]=document.getElementById("fees").value;
    return formData;
}

function insertRecord(data){
    var table=document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.firstname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.lastname;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.dateOfBirth;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.fees;
    cell5=newRow.insertCell(4);
    cell5.innerHTML= "<a onClick='onEdit(this)'>Edit</a> <a onClick='upDate(this)'>Update</a>";
}

function resetForm(){
    document.getElementsById("firstname").this.reset();
    document.getElementsById("lastname").this.reset();
    document.getElementsById("dateOfBirth").this.reset();
    document.getElementsById("fees").this.reset();
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementsById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementsById("lastname").value=selectedRow.cells[1].innerHTML;
    document.getElementsById("dateOfBirth").value=selectedRow.cells[2].innerHTML;
    document.getElementsById("fees").value=selectedRow.cells[3].innerHTML;
}

function upDate(formData){
    selectedRow.cells[0].innerHTML=formData.firstname;
    selectedRow.cells[1].innerHTML=formData.lastname;
    selectedRow.cells[2].innerHTML=formData.dateOfBirth;
    selectedRow.cells[3].innerHTML=formData.fees;
}
