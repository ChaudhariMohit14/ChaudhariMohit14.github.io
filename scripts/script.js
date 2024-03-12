let menu=document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");
let m=document.querySelector(".main-body")
let count=0;
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    

    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});



function resume(){
    window.open("https://drive.google.com/file/d/1F5ujtvgZIAnHClptRedDL1viNDaUKHGC/view?usp=drive_link",`_blank`)
  }
  




document.querySelector(".home").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".about").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".skills").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".projects").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".contact").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});


//  Send Email from contact form

function sendMail(){

 var parms={
    name : document.getElementById("name1").value,
    email : document.getElementById("email1").value,
    project : document.getElementById("project1").value,
    message : document.getElementById("message1").value,
 };
console.log("hello")
 const serviceid="service_bfa2vd6";
 const templateid="template_7axkaig";

 emailjs
 .send(serviceid,templateid,parms)
 .then((res) => {
    document.getElementById("name1").value="";
    document.getElementById("email1").value="";
    document.getElementById("project1").value="";
    document.getElementById("message1").value="";

    console.log(res);

    alert("Your Message Sent Successfully");
 })
 .catch((err) => {
    console.log(err);
    alert("Error occured please try again later");
 } )

}