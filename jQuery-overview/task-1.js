// Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:

// The UL must have a class items-list
// Each of the LIs must:
//  - have a class list-item
//  - content "List item #INDEX"
//    - The indices are zero-based
// If the provided selector does not selects anything, do nothing
// Throws if
//  - COUNT is a Number, but is less than 1
//  - COUNT is missing, or not convertible to Number
//    - Example:
//      - Valid COUNT values:
//      - 1, 2, 3, '1', '4', '1123'
//    Invalid COUNT values:
//      - '123px' 'John', {}, []

module.exports = function solve() {
    return function (selector, count) {
        if (selector === undefined || selector === null || Array.isArray(selector)) {
            throw new Error('Not a valid selector');
        }

        if (!count) {
            throw new Error('COUNT is missing');
        }
        if (!Number(count)) {
            throw new Error('COUNT not convertible to Number');
        }
        if (count < 1) {
            throw new Error('Count can\'t be less than 1');
        }

        let ul = $('<ul />').addClass('items-list');

        for (let i = 0; i < count; i += 1) {
            let li = $('<li />', {
                class: 'list-item'
            }).html('List item #' + i);
            ul.append(li);
        }

        $(selector).append(ul);
    };
};
