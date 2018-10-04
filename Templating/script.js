function renderHandlebarTemplate(templateId, context) {
    var template = document.getElementById(templateId).innerHTML;
    var compiled = Handlebars.compile(template);
    return compiled(context);
}




document.getElementById('placeholder').innerHTML = renderHandlebarTemplate('template', {name: 'Aretha'});