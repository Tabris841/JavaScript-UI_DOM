/* jshint esversion:6, node:true */

// Define a function that creates a div, containing a list with animals

// Many of the elements have classes, see them in the example
// The div should contain 2 elements:
// A h1 that always has the content "Animals"
// A UL with many LIs
// Every LI element has a single element - an anchor (<a>)

// The anchor has href and content
// The href of the anchor may come from the data object or if it is missing, always points to an default URL
// The default URL is "http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg"
// The content of the anchor is always built from the data object, but is different if a href is available or not:
// If a href is available, the content must be "See a THE_NAME_FROM_THE_DATA_OBJECT"
// Otherwise the content must be "No link for THE_NAME_FROM_THE_DATA_OBJECT, here is Batman!"

function solve() {
  var anchor = {
    urlProvided: '<a href="{{url}}">See a {{name}}</a>',
    urlNotProvided: '<a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">' +
    'No link for {{name}} , here is Batman!</a>'
  };

  return function (selector) {
    var template =
        '<div class="container">' +
        '<h1>Animals</h1>' +
        '<ul class="animals-list">' +
        '{{#each animals}}' +
        '<li>' +
        '{{#if url}}' +
        anchor.urlProvided +
        '{{else}}' +
        anchor.urlNotProvided +
        '{{/if}}' +
        '</li>' +
        '{{/each}}' +
        '</ul>' +
        '</div>';
    $(selector).html(template);
  };
}

module.exports = solve;

// var data = {
//     animals: [{
//         name: 'Lion',
//         url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
//     }, {
//             name: 'Turtle',
//             url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
//         }, {
//             name: 'Dog'
//         }, {
//             name: 'Cat',
//             url: 'http://i.imgur.com/Ruuef.jpg'
//         }, {
//             name: 'Dog Again'
//         }]
// }

// var result = solve();
// document.body.innerHTML = '<script id="template"></script>';
// result('#template');

// var templateFunc = Handlebars.compile($('#template').html());

// var output = templateFunc(data);

// document.body.innerHTML = output;