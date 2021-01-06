function register() {
   let email = document.getElementById("email").value;
   let passwd = document.getElementById("password").value;
   let promise = auth.createUserWithEmailAndPassword(email,passwd).then((user)=>{
       window.location.href = "index.html";
   }).catch((error)=>{
       alert(error.message);
   });
}

function login() {
   let email = document.getElementById("email").value;
   let passwd = document.getElementById("password").value;
   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
        return firebase.auth().signInWithEmailAndPassword(email, passwd).then((user)=>{
            window.location.href = "index.html";
        }).catch((error)=>{
            alert(error.message);
        });
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}

function forgotPassword() {
    let email = window.prompt("Please enter your email");
    let promise = auth.sendPasswordResetEmail(email);
    promise.catch (e => alert(e.message));
    alert("Email sent to "+email);
}

function logout() {
    auth.signOut();
}

let auth = firebase.auth();