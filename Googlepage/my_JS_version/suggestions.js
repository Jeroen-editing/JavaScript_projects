//const selector = document.getElementById('selector');
let selectorValue;

const suggestionsHidden = document.getElementById('listHidden')
const suggestionListOne = document.getElementById('suggestionsListOne');
const suggestionListTwo = document.getElementById('suggestionsListTwo');
const suggestionListThree = document.getElementById('suggestionsListThree');
const suggestionListFour = document.getElementById('suggestionsListFour');
const suggestionListFive = document.getElementById('suggestionsListFive');
const suggestionListSix = document.getElementById('suggestionsListSix');
const suggestionListSeven = document.getElementById('suggestionsListSeven');
const suggestionListEight = document.getElementById('suggestionsListEight');

const lineBetween = document.getElementById('lineBetweenSuggestions');
const extraSpace = document.getElementById('aboveFooter');
const arrowDown = document.getElementById('arrowDown');

suggestionsHidden.classList.add('suggestions-hidden');

window.onload = defaultValue;

function defaultValue() {
    selectorValue = 6;
    showSuggestions();
}

function getValue() {
    selectorValue = 0;
    selectorValue = +(this.innerText);
    showSuggestions();
}

function showSuggestions() {

    if (selectorValue === 0) {
        suggestionsHidden.classList.add('suggestions-hidden');
        suggestionListOne.classList.remove('suggestionsList-active');
        suggestionListTwo.classList.remove('suggestionsList-active');
        suggestionListThree.classList.remove('suggestionsList-active');
        suggestionListFour.classList.remove('suggestionsList-active');
        suggestionListFive.classList.remove('suggestionsList-active');
        suggestionListSix.classList.remove('suggestionsList-active');
        suggestionListSeven.classList.remove('suggestionsList-active');
        suggestionListEight.classList.remove('suggestionsList-active');
        lineBetween.classList.remove('lineBetween');
        extraSpace.classList.remove('extraSpace');
        arrowDown.classList.remove('arrowDownBox-active');
    } else if (selectorValue === 3) {
        suggestionsHidden.classList.remove('suggestions-hidden');
        suggestionListOne.classList.add('suggestionsList-active');
        suggestionListTwo.classList.remove('suggestionsList-active');
        suggestionListThree.classList.remove('suggestionsList-active');
        suggestionListFour.classList.remove('suggestionsList-active');
        suggestionListFive.classList.remove('suggestionsList-active');
        suggestionListSix.classList.remove('suggestionsList-active');
        suggestionListSeven.classList.remove('suggestionsList-active');
        suggestionListEight.classList.remove('suggestionsList-active');
        lineBetween.classList.remove('lineBetween');
        extraSpace.classList.remove('extraSpace');
        arrowDown.classList.remove('arrowDownBox-active');
    } else if (selectorValue === 6) {
        suggestionsHidden.classList.remove('suggestions-hidden');
        suggestionListOne.classList.add('suggestionsList-active');
        suggestionListTwo.classList.add('suggestionsList-active');
        suggestionListThree.classList.remove('suggestionsList-active');
        suggestionListFour.classList.remove('suggestionsList-active');
        suggestionListFive.classList.remove('suggestionsList-active');
        suggestionListSix.classList.remove('suggestionsList-active');
        suggestionListSeven.classList.remove('suggestionsList-active');
        suggestionListEight.classList.remove('suggestionsList-active');
        lineBetween.classList.remove('lineBetween');
        extraSpace.classList.remove('extraSpace');
        arrowDown.classList.remove('arrowDownBox-active');
    } else if (selectorValue === 12) {
        suggestionsHidden.classList.remove('suggestions-hidden');
        suggestionListOne.classList.add('suggestionsList-active');
        suggestionListTwo.classList.add('suggestionsList-active');
        suggestionListThree.classList.add('suggestionsList-active');
        suggestionListFour.classList.add('suggestionsList-active');
        suggestionListFive.classList.remove('suggestionsList-active');
        suggestionListSix.classList.remove('suggestionsList-active');
        suggestionListSeven.classList.remove('suggestionsList-active');
        suggestionListEight.classList.remove('suggestionsList-active');
        lineBetween.classList.remove('lineBetween');
        extraSpace.classList.remove('extraSpace');
        arrowDown.classList.remove('arrowDownBox-active');
    } else if (selectorValue === 18) {
        suggestionsHidden.classList.remove('suggestions-hidden');
        suggestionListOne.classList.add('suggestionsList-active');
        suggestionListTwo.classList.add('suggestionsList-active');
        suggestionListThree.classList.add('suggestionsList-active');
        suggestionListFour.classList.add('suggestionsList-active');
        suggestionListFive.classList.add('suggestionsList-active');
        suggestionListSix.classList.add('suggestionsList-active');
        suggestionListSeven.classList.remove('suggestionsList-active');
        suggestionListEight.classList.remove('suggestionsList-active');
        lineBetween.classList.add('lineBetween');
        extraSpace.classList.add('extraSpace');
        arrowDown.classList.add('arrowDownBox-active');
    } else {
        suggestionsHidden.classList.remove('suggestions-hidden');
        suggestionListOne.classList.add('suggestionsList-active');
        suggestionListTwo.classList.add('suggestionsList-active');
        suggestionListThree.classList.add('suggestionsList-active');
        suggestionListFour.classList.add('suggestionsList-active');
        suggestionListFive.classList.add('suggestionsList-active');
        suggestionListSix.classList.add('suggestionsList-active');
        suggestionListSeven.classList.add('suggestionsList-active');
        suggestionListEight.classList.add('suggestionsList-active');
        lineBetween.classList.add('lineBetween');
        extraSpace.classList.add('extraSpace');
        arrowDown.classList.add('arrowDownBox-active');
    }
}


let selectClass, selectElement, addFirstDiv, addSecondDiv, addThirdDiv;
// Look for any elements with the class "custom-select"
selectClass = document.getElementsByClassName('custom-select');


for (let i = 0; i < selectClass.length; i++) {
    selectElement = selectClass[i].getElementsByTagName('select')[0];
    // For each element, create a new DIV that will act as the selected item
    addFirstDiv = document.createElement('div');
    addFirstDiv.setAttribute('class', 'select-selected');
    addFirstDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;

    selectClass[i].appendChild(addFirstDiv);
    // For each element, create a new DIV that will contain the option list
    addSecondDiv = document.createElement('div');
    addSecondDiv.setAttribute('class', 'select-items select-hide');

    for (let j = 1; j < selectElement.length; j++) {

        // For each option in the original select element, create a new DIV that will act as an option item
        addThirdDiv = document.createElement('div');
        addThirdDiv.innerHTML = selectElement.options[j].innerHTML;
        addThirdDiv.addEventListener('click', function (e) {

            // When an item is clicked, update the original select box, and the selected item
            let selectParentElement, selectOlderChild, similarChildren;

            selectParentElement = this.parentNode.parentNode.getElementsByTagName('select')[0];

            selectOlderChild = this.parentNode.previousSibling;

            for (let i = 0; i < selectParentElement.length; i++) {

                if (selectParentElement.options[i].innerHTML == this.innerHTML) {

                    selectParentElement.selectedIndex = i;

                    selectOlderChild.innerHTML = this.innerHTML;

                    similarChildren = this.parentNode.getElementsByClassName('same-as-selected');

                    for (let k = 0; k < similarChildren.length; k++) {

                        similarChildren[k].removeAttribute('class');
                    }
                    this.setAttribute('class', 'same-as-selected');
                    break;
                }
            }
            selectOlderChild.click();
        });
        addSecondDiv.appendChild(addThirdDiv);
    }
    selectClass[i].appendChild(addSecondDiv);

    addFirstDiv.addEventListener('click', function (e) {
        // When the select box is clicked, close any other select boxes, and open/close the current select box
        e.stopPropagation();

        closeAllSelect(this);

        this.nextSibling.classList.toggle('select-hide');

        this.classList.toggle('select-arrow-active');
    });
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    selectClass[i].addEventListener('click', getValue);
}

function closeAllSelect(elmnt) {
    // A function that will close all select boxes in the document, except the current select box
    let selectedItems, selectedTags;
    let arrayItems = [];

    selectedItems = document.getElementsByClassName('select-items');

    selectedTags = document.getElementsByClassName('select-selected');

    for (let i = 0; i < selectedTags.length; i++) {

        if (elmnt == selectedTags[i]) {

            arrayItems.push(i);

        } else {

            selectedTags[i].classList.remove('select-arrow-active');
        }
    }

    for (let i = 0; i < selectedItems.length; i++) {

        if (arrayItems.indexOf(i)) {

            selectedItems[i].classList.add('select-hide');
        }
    }
}

// If the user clicks anywhere outside the select box, then close all select boxes
document.addEventListener('click', closeAllSelect);