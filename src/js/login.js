import {userfun} from "./user.js";

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("mail").value;
    var password = document.getElementById("pswd").value;
    var userType = userfun(email);

    switch (userType) {
        case "admin":
            var admins = JSON.parse(localStorage.getItem("admins")) || [];
            var adUser = admins.find(adUser => adUser.email == email);
            if (adUser != null) {
                if (password == adUser.password) {
                    alert("Login Successfuly")
                    localStorage.setItem("loggedInUser", adUser.email)
                    window.location = "admin.html"
                } else {
                    alert("Incorrect Email or Password ")
                }
            } 
            else {
               alert("Your are not a Member, Please Sign Up")
               window.location="register.html"    
            }
            break
        case "customer":
            default :
            var customers = JSON.parse(localStorage.getItem("customers")) || [];
            var custUser = customers.find(custUser => custUser.email == email);
            if (custUser != null) {
                    if (password == custUser.password) {
                        alert("Login Successfuly")
                        localStorage.setItem("loggedInUser", custUser.email)
                        window.location = "customer.html"
                    } else {
                        alert("Incorrect Email or Password ") 
                    }
            } else {
                alert("Your are not a Member, Please Sign Up")
                window.location="register.html"    
             }
            break          
             
    }      
})

