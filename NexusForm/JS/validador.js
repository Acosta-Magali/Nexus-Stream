

        function useRegex(input) {
            let regex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
            return regex.test(input);
        }

        let largo_contrasenia = 8;

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

          

                window.open('/Nexus-Stream/perfiles.html')

            }

        }
    