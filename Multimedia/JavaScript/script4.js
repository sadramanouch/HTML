function generateEmail(form) {
    console.log(form);
    // let fname = document.getElementById("fname").value;
    let fname = form["fname"].value;
    console.log(fname);
    let Lname = form["Lname"].value;
    console.log(Lname);

    let emailaddress = fname + "." + Lname +"@Langara.ca";
    let email = document.getElementById("email");
    email.innerHTML = emailaddress;

    form.reset();
    form[0].focus();
}