saveLogin = () =>{
    const dbmail ="kavidu1@gmail.com";
    const dbpassword =12345;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(dbmail === email && dbpassword ==password){
        
        alert("login successful");
         window.location.href = "index.html";
    }else{
        alert("login fail");
    }
}