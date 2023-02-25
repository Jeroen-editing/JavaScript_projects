// 2 ways of writing:
/*
var reg1 = /[a-z]/ig;
var reg2 = new RegExp(/[a-z]/,'i,g');
*/

// validation script here

const inputs = document.querySelectorAll('input');

const patterns = {

    username :/^[a-z\d]{5,12}$/i,

    email :/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

    password :/^[\w@-]{8,20}$/i,

    telephone :/^[0][4]\d{8}$/,

    slug :/^[a-z\d-]{8,20}$/

};


// validation function

function validate(field, regex) {

   if (regex.test(field.value)) {

       field.className = 'valid';

   } else {

       field.className = 'invalid';

   }


}

// collecting the input from each field with every keystroke


inputs.forEach((input) => {

    input.addEventListener('keyup', (e) => {


        console.log(validate(e.target, patterns[e.target.attributes.name.value]));

        /*if (check) {

            e.target.attributes.name.style.border ="2px solid green";

        }
        */
    });
});