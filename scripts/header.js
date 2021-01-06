let email_txt = document.getElementById("reg_email");
let logout_txt = document.getElementById("logout");
let login_txt = document.getElementById("login");
let register_txt = document.getElementById("register");
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("logged in");
        console.log(user.email);
        email_txt.textContent = user.email;
        email_txt.style.display = "block";
        logout_txt.style.display = "block";
        login_txt.style.display = "none";
        register_txt.style.display = "none";
    } else {
        console.log("Not logged in");
        email_txt.style.display = "none";
        logout_txt.style.display = "none";
        login_txt.style.display = "block";
        register_txt.style.display = "block";
    }
});