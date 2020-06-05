
function submitForm(){
    var formData=readForm();
    insertRecord(formData);  
    upDate(formData);
    resetForm();
}

function readForm(){
    var formData = {};
    formData["student"]=document.getElementById("student").value;
    formData["Gender"]=document.getElementsByName("Gender").value;
    formData["course"]=document.getElementById("course").value;
    formData["Type"]=document.getElementsByName("Type").value;
    formData["subDateTime"]=document.getElementById("subDateTime").value;
    return formData;
}

function insertRecord(data){
    var table=document.getElementById("studentCourseList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.student;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.Gender;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.course;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.Type;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.subDateTime;
    cell6=newRow.insertCell(5);
    cell6.innerHTML= "<a onClick='onEdit(this)'>Edit</a> <a onClick='upDate(this)'>Update</a>";
}

function resetForm(){
    document.getElementsById("student").this.reset();
    document.getElementsByName("Gender").this.reset();
    document.getElementsById("course").this.reset();
    document.getElementsByName("Type").this.reset();
    document.getElementsById("subDateTime").this.reset();
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementsById("student").value=selectedRow.cells[0].innerHTML;
    document.getElementsByName("Gender").value=selectedRow.cells[1].innerHTML;
    document.getElementsById("course").value=selectedRow.cells[2].innerHTML;
    document.getElementsByName("Type").value=selectedRow.cells[3].innerHTML;
    document.getElementsById("subDateTime").value=selectedRow.cells[4].innerHTML;
}

function upDate(formData){
    selectedRow.cells[0].innerHTML=formData.student;
    selectedRow.cells[1].innerHTML=formData.Gender;
    selectedRow.cells[2].innerHTML=formData.course;
    selectedRow.cells[3].innerHTML=formData.Type;
    selectedRow.cells[4].innerHTML=formData.subDateTime;
}
