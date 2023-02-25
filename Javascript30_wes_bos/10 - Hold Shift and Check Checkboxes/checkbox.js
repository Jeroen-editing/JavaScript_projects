const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

//console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    // check if they have the shift key down
    // AND check if they ar checking it

    let inBetween =  false;
    if (e.shiftKey && this.checked) {
        // now we can go ahead and check all those in between
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them inbetween!')
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
    //console.log(lastChecked)
}

checkboxes.forEach(checkbox => checkbox
    .addEventListener('click', handleCheck));

