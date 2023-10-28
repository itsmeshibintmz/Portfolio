function sendMail(){
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
const serviceID = "service_jduvbac";
const templateID = "template_wd5l7bl"

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your Message Sent Successfully");
    })
.catch((err)=>console.log(err));
}