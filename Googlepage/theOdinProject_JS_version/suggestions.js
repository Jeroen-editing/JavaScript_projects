const selector = document.getElementById('selector');

let selectorValue = 0;

const suggestionsHidden = document.getElementById('listHidden');
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

// window.onload = defaultValue;
//
// function defaultValue() {
//     selectorValue = 6;
//     showSuggestions();
// }

selector.addEventListener('change', getValue);

function getValue() {
    selectorValue = 0;
    //selectorValue = +(selector[selector.selectedIndex].value);
    selectorValue = +(selector.value);
    console.log(typeof selectorValue + selectorValue);
    showSuggestions();
}

suggestionsHidden.classList.add('suggestions-hidden');

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
        lineBetween.classList.remove('shortLineBetween');
        lineBetween.classList.remove('lineBetween');
        extraSpace.classList.remove('extraSpace');
        arrowDown.classList.remove('arrowDownBox-active');
    } else if (selectorValue === 6) {
        suggestionsHidden.classList.remove('suggestions-hidden');
        suggestionListOne.classList.add('suggestionsList-active');
        suggestionListTwo.classList.remove('suggestionsList-active');
        suggestionListThree.classList.add('suggestionsList-active');
        suggestionListFour.classList.remove('suggestionsList-active');
        suggestionListFive.classList.remove('suggestionsList-active');
        suggestionListSix.classList.remove('suggestionsList-active');
        suggestionListSeven.classList.remove('suggestionsList-active');
        suggestionListEight.classList.remove('suggestionsList-active');
        lineBetween.classList.remove('shortLineBetween');
        lineBetween.classList.remove('lineBetween');
        extraSpace.classList.remove('extraSpace');
        arrowDown.classList.remove('arrowDownBox-active');
    } else if (selectorValue === 9) {
        suggestionsHidden.classList.remove('suggestions-hidden');
        suggestionListOne.classList.add('suggestionsList-active');
        suggestionListTwo.classList.remove('suggestionsList-active');
        suggestionListThree.classList.add('suggestionsList-active');
        suggestionListFour.classList.remove('suggestionsList-active');
        suggestionListFive.classList.add('suggestionsList-active');
        suggestionListSix.classList.remove('suggestionsList-active');
        suggestionListSeven.classList.remove('suggestionsList-active');
        suggestionListEight.classList.remove('suggestionsList-active');
        lineBetween.classList.add('shortLineBetween');
        lineBetween.classList.remove('lineBetween');
        extraSpace.classList.add('extraSpace');
        arrowDown.classList.add('arrowDownBox-active');
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
        lineBetween.classList.remove('shortLineBetween');
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
        lineBetween.classList.remove('shortLineBetween');
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
        lineBetween.classList.remove('shortLineBetween');
        lineBetween.classList.add('lineBetween');
        extraSpace.classList.add('extraSpace');
        arrowDown.classList.add('arrowDownBox-active');
    }
}