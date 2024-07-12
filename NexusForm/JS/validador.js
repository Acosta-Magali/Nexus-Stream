function useRegex(input) {
    let regex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
    return regex.test(input);
}

let largo_contrasenia = 8;


//async function signUp(email, password) {
//    const url = "/api/signup"
//
//    try {
//        const response = await fetch(url, {
//            method: "POST",
//            body: JSON.stringify({email: email, password: password}),
//        });
//
//        if (!response.ok){
//            throw new Error(`Response status: ${response.status}`);
//        }
//    } catch (error) {
//        console.error(error.message);
//    }
//}

function testInputs() {

    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if ( useRegex(email) && password.length >= largo_contrasenia ) {

        window.open('/NexusForm/completatusdatos.html')

    }

}
function testInputs2() {

    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if ( useRegex(email) && password.length >= largo_contrasenia ) {

        signUp(email, password);

        window.open('/Nexus-Stream/perfiles.html')

    }

}

