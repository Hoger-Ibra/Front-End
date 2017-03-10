function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Fill in missing box(s)");
        return false;
    }
}