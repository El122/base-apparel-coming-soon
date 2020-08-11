function validate() {
    let email = document.getElementById("email");

    if (email.validity.typeMismatch) {
        document.getElementsByClassName("error")[0].style.display = "block";
    }
}