var nameEle=document.getElementById('name');
var emailEle=document.getElementById('email');
var feedEle=document.getElementById('feed');
var btnEle=document.getElementById('btn');

btnEle.addEventListener("click",function(){
    if(nameEle.value==""||emailEle.value==""||feedEle.value=="")
    {
        alert("Please Enter All Fields");
    }
    else{
        alert("Form Submitted Successfully!")
    }
    var ulEle=document.getElementById('uls')
    var liEle=document.createElement('li');
    liEle.appendChild(document.createTextNode(feedEle.value));
    ulEle.appendChild(liEle);
    feedEle.value=="";

})