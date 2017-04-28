'use strict';

let input = $("textarea");
let output = $("output");

function formatText (text) {
    return text.trim().replace(/' '+/g, ' ').replace(/\s+/g, ' ').toLowerCase();
}

input.on("input", function() {
    let value = input.val();
    let result = formatText(value);
    output.text(formatText(result));
});
