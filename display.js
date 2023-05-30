$(document).ready(function(){
    getData();
});

function getData(){
    let localStoragedData=localStorage.getItem("student");
    let studentobj=JSON.parse(localStoragedData);
    $("#firstName").text(studentobj.firstName);
    $("#lastName").text(studentobj.lastName);
    $("#gender").text(studentobj.gender);
}