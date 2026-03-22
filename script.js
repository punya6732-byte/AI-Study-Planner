function generatePlan(){
    let subject=document.getElementById("subject").Value;
    let date=document.getElementById("examDate").value;
if (subject===""|| date==="")
{
    document.getElementById("output").innerhtml="Please fill all fields!";
    return;
}
document.grtElementById("output").innerhtml="Study"+subject+"daily until " +date+"*~*"}