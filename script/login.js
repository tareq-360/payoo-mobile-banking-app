// console.log("Login js add");

document.getElementById('login-btn').addEventListener("click",function(){
    // console.log("Login Button Clicked");

    const number=document.getElementById('input-number');
    const mobileNumber=number.value;

    const pin=document.getElementById('input-pin');
    const pinCode=pin.value;

    if(mobileNumber===("01857466794") && pinCode===("1234")){
        alert("Login Success");

        window.location.assign("/home.html");
        
        // console.log(pinCode);
    }else{
        alert("Login Failed");
        return;
    }
    
})