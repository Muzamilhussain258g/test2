import {  auth } from "./firebase.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// signup-page input fields start
let signupEmail = document.querySelector(".signup-email")
console.log(signupEmail.value)
let signupPass = document.querySelector(".signup-pass")
let signupBtn = document.querySelector("#signup-btn")
// signup-page input fields end

// sign up authentication start
signupBtn.addEventListener("click", () => {
    console.log("working")
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPass.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
    });
})
// sign up authentication end