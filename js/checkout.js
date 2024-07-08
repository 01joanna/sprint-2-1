
// Exercise 6

// En aquest exercici hauràs d'implementar la lògica perquè els camps del formulari compleixin les següents condicions:
// - Tots els camps són obligatoris.
// - Tots els camps han de tenir almenys 3 caràcters.
// - El nom i cognoms han de contenir només lletres.
// - El telèfon ha de contenir només números.
// - La contrasenya ha d'incloure números i lletres.
// - L'email ha de tenir format d'email.
// Quan l'usuari/ària introdueixi un camp que no compleixi les validacions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge a la part inferior.

function validate(event) {
    var error = 0;

    var fName = document.getElementById("fName");
    var fLastName = document.getElementById("fLastN");
    var fEmail = document.getElementById("fEmail");
    var fAddress = document.getElementById("fAddress");
    var fPassword = document.getElementById("fPassword");
    var fPhone = document.getElementById("fPhone");

    var errorName = document.getElementById("errorName");
    var errorLastName = document.getElementById("errorLastN");
    var errorEmail = document.getElementById("errorEmail");
    var errorAddress = document.getElementById("errorAddress");
    var errorPassword = document.getElementById("errorPassword");
    var errorPhone = document.getElementById("errorPhone");

    errorName.innerHTML = "";
    errorLastName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorAddress.innerHTML = "";
    errorPassword.innerHTML = "";
    errorPhone.innerHTML = "";

    fName.classList.remove("is-invalid");
    fLastName.classList.remove("is-invalid");
    fEmail.classList.remove("is-invalid");
    fAddress.classList.remove("is-invalid");
    fPassword.classList.remove("is-invalid");
    fPhone.classList.remove("is-invalid");// - Tots els camps són obligatoris.
// - Tots els camps han de tenir almenys 3 caràcters.
// Quan l'usuari/ària introdueixi un camp que no compleixi les validacions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge a la part inferior.

// - El nom i cognoms han de contenir només lletres.
    if(fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)){
        fName.classList.add("is-invalid");
        error++;
        errorName.innerHTML = "The name must have at least 3 characters and only letters";
    }

    if(fLastName.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastName.value)) {
        fLastName.classList.add("is-invalid");
        error++;
        errorLastName.innerHTML = "The last name must have at least 3 characters and only letters";
    }

	// - L'email ha de tenir format d'email.
    if(fEmail.value.length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)) {
        fEmail.classList.add("is-invalid");
        error++;
        errorEmail.innerHTML = "The email must be valid and have at least 3 characters";
    }

    if(fAddress.value.length < 3) {
        fAddress.classList.add("is-invalid");
        error++;
        errorAddress.innerHTML = "The address must have at least 3 characters";
    }


// - La contrasenya ha d'incloure números i lletres.
    if(fPassword.value.length < 3 || !/^[a-zA-Z0-9]+$/.test(fPassword.value)) {
        fPassword.classList.add("is-invalid");
        error++;
        errorPassword.innerHTML = "The password must have at least 3 characters and include letters and numbers";
    }

// - El telèfon ha de contenir només números.
    if(fPhone.value.length < 3 || !/^[0-9]+$/.test(fPhone.value)) {
        fPhone.classList.add("is-invalid");
        error++;
        errorPhone.innerHTML = "The phone must have at least 3 characters and only numbers";
    }

	if (error > 0) {
        event.preventDefault();
		// comentado porque se repite el alert infinitamente
        // alert("Please, you need to fill all the fields correctly");
    } else {
        alert("OK");
    }

}

// cada vez que se envie el formulario, mostrar los errores
document.querySelector("form").addEventListener("submit", function(event) {
    validate(event);
});
