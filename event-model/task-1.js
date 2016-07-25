/* jshint esversion:6, node:true */

/*
Create a function that takes an id or DOM element and:
* If an id is provided, select the element
* Finds all elements with class button or content within the provided element
 * Change the content of all .button elements with "hide"
* When a .button is clicked:
 * Find the topmost .content element, that is before another .button and:
  * If the .content is visible:
    * Hide the .content
    * Change the content of the .button to "show"
  * If the .content is hidden:
    * Show the .content
    * Change the content of the .button to "hide"
  * If there isn't a .content element after the clicked .button and before other .button, do nothing
* Throws if:
  * The provided DOM element is non-existant
  * The id is neither a string nor a DOM element
*/

module.exports = function solve() {
  return function (selector) {
    if (typeof (selector) === 'string') {
      selector = document.getElementById(selector);
      if (!selector) {
        throw new Error();
      }
    }
    else if (!(selector instanceof HTMLElement)) {
      throw new Error();
    }

    var buttons = document.querySelectorAll('.button'),
      len = buttons.length, i;

    for (i = 0; i < len; i += 1) {
      buttons[i].innerHTML = 'hide';
    }

    function clickEvent(ev) {
      var target = ev.target,
        nextSibling = target.nextElementSibling;

      if (target.className === 'button') {
        while (nextSibling) {
          if (nextSibling.className === 'content') {
            
            if (nextSibling.style.display === 'none') {
              nextSibling.style.display = '';
              target.innerHTML = 'hide';
            } else {
              nextSibling.style.display = 'none';
              target.innerHTML = 'show';
            }
            break;
          } else if (nextSibling.className === 'button') {
            break;
          }

          nextSibling = nextSibling.nextElementSibling;
        }
      }
    }

    selector.addEventListener('click', clickEvent);
  };
}