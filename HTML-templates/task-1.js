/* jshint esversion:6, node:true */

// Define a function that sets the template inside a provided element.

//  * The template should generate the table with class .items-table following the rules:

//    * A data object is provided and it contains two properties:
//      *  headers - an array of strings that should be used in the template to generate the headers of the table
//      * items - an array of objects, where every object has keys col1, col2 and col3

function solve() {
    return function (selector) {
        var template =
            `<table class="items-table"> 
                <thead> 
                    <tr>
                        <th>#</th>
                        {{#each headers}}
                        <th>{{this}}</th>
                        {{/each}}
                    </tr>
                </thead>
                <tbody>
                {{#each items}}
                    <tr>
                      <td>{{@index}}</td>
                      <td>{{this.col1}}</td>
                      <td>{{this.col2}}</td>
                      <td>{{this.col3}}</td>
                    </tr>
                {{/each}}
                </tbody>
          </table>`;

        $(selector).html(template);
    };
}

