/* jshint esversion:6, node:true */

jQuery.fn.dropdownList = function () {
    let select = $(this).css('display', 'none');
    let parent = select.parent();

    // Step 1: div class dropdown wrapper
    let wrapper = $('<div>')
        .addClass('dropdown-list')
        .append(select)
        .prependTo(parent);

    // Step 2: div current
    let current = $('<div>')
        .addClass('current')
        .attr('data-value', '')
        .text(select.children().first().text())
        .appendTo(wrapper)
        .on('click', function () {
            optionsContainer.toggle();
        });
        
    // Step 3: div options container
    let optionsContainer = $('<div>')
        .addClass('options-container')
        .css({
            'position': 'absolute',
            'display': 'none'
        }).appendTo(wrapper)
        .on('click', '.dropdown-item', function () {
            let clicked = $(this);

            current
                .attr('data-value', clicked.attr('data-value'))
                .text(clicked.text());

            optionsContainer.toggle();
        });

    // Step 4: divs with options
    for (let i = 0; i < select.children().length; i += 1) {
        $('<div>')
            .addClass('dropdown-item')
            .attr('data-value', `value-${i + 1}`)
            .attr('data-index', `${i}`)
            .text($(select.children()[i]).text())
            .appendTo(optionsContainer);
    }

    return wrapper;
};

$('#the-select').dropdownList();