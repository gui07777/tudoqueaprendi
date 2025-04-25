var name = document.getElementById('name');
var email = document.getElementById('email');
var cellphone = document.getElementById('cellphone');
var register = document.getElementById('register');

function welcomeMessage() {
    alert("Seja bem-vindo")
}

function errorMessage() {
    alert("Opss... preencha o campo corretamente! ")
}


    register.addEventListener("click", function () {
        var nameValue = name.value.trim();
        var emailValue = email.value.trim();
        var cellphoneValue = cellphone.value.trim();


        if (nameValue.length > 15) {
            errorMessage()
        return;
        }
        if (emailValue.length > 20 && emailValue.length < 5) {
            errorMessage()
        return;
        }
        if (cellphoneValue.length > 8) {
            errorMessage()
        return;
        }
    },
    
    welcomeMessage()

)

