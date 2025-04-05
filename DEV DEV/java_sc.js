const validateForm = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("PLease fill out all form");
        return false;
    } else {
        alert("Hurray you did it!!");
        return true;
    }
}