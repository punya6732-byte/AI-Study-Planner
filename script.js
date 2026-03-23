function generatePlan(){
    let subject=document.getElementById("subject").Value;
    let date= new Date (document.getElementById("examDate").value);
    let today=new Date();
    let daysLeft=Math.ceil((date-today)/(1000*60*60*24));

if (subject===""|| daysLeft <=0){
    document.getElementById("output").innerhtml="Please fill all fields!";
    return;
}
let plan=" You have"+daysLeft+"days left.<br>";
for(let i=1;i<=daysLeft;i++){
    plan +="Day"+i+":Study"+subject+"<br>";
}
document.grtElementById("output").innerhtml=plan;
}
function translateToKorean(){
    document.querySelector("h1").innerText=""
}