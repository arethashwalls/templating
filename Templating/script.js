$(document).ready(function() {
    function renderHandlebarTemplate(templateId, context) {
        var template = document.getElementById(templateId).innerHTML;
        var compiled = Handlebars.compile(template);
        return compiled(context);
    }


    var placeholder = $('#placeholder');

    placeholder.html(renderHandlebarTemplate('template', {name: 'Aretha'}));
});