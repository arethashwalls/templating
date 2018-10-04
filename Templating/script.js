
var template = document.getElementById('template').innerHTML;
var compiled = Handlebars.compile(template);
var rendered = compiled({name: "Aretha"});
document.getElementById('placeholder').innerHTML = rendered;
