/* jshint esversion:6, node:true */

// Create a function that takes a selector and:
// Finds all elements with class button or content within the provided element
//  - Change the content of all .button elements with "hide"
// When a .button is clicked:
// Find the topmost .content element, that is before another .button and:
//  - If the .content is visible:
//    - Hide the .content
//    - Change the content of the .button to "show"
//  - If the .content is hidden:
//    - Show the .content
//    - Change the content of the .button to "hide"
//  - If there isn't a .content element after the clicked .button and before other .button, do nothing
// Throws if:
//  - The provided ID is not a jQuery object or a string

module.exports = function solve() {
    return function (selector) {
        if (selector === undefined || selector === null) {
            throw new Error('Invalid selector');
        }

        if (typeof selector !== 'string') {
            throw new Error('Invalid selector');
        }


        if (!$(selector).length) {
            throw new Error('Invalid selector');
        }

        $selectedEl = $($(selector)[0]);

        var $buttons = $selectedEl.children('.button');
        var $contents = $selectedEl.children('.content');

        $buttons.each(function () {
            $(this).html('hide');
        });

        if ($buttons === null || $buttons === undefined) {
            return;
        }

        if ($contents === null || $contents === undefined) {
            return;
        }

        $selectedEl.on('click', '.button', function () {
            var $this = $(this);
            var $nextEl = $this.next();
            while ($nextEl.length) {
                if ($nextEl.hasClass('button')) {
                    return;
                }

                if ($nextEl.hasClass('content')) {
                    if ($this.html() === 'hide') {
                        $this.html('show');
                        $nextEl.hide();
                    } else {
                        $this.html('hide');
                        $nextEl.css('display', '');
                    }
                    return;
                }
                $nextEl = $nextEl.next();
            }
        });
    };
};