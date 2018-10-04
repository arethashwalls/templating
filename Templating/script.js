$(document).ready(function() {
    function renderHandlebarTemplate(templateId, context) {
        //var template = $(templateId);
        var compiled = Handlebars.compile($(templateId).html());
        return compiled(context);
    }


    var $titlePlaceholder = $('#title-ph');
    
    $('#tokyo-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {city: 'Tokyo', cityNL: '東京', region: 'Kantō', state: 'Japan'}))
    });
    
    $('#jakarta-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template',{city: 'Jakarta', cityNL: 'Jakarta', region: 'Special Capital Region of Jakarta', state: 'Indonesia'}));
    });
    
    $('#delhi-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {city: 'Delhi', cityNL: 'दिल्ली', region: 'National Capital Territory of Delhi', state: 'India'}));
    });
    
    $('#manila-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {city: 'Manila', cityNL: 'Maynilà', region: 'National Capital Region', state: 'The Philippines',}));
    });
    
    $('#seoul-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {city: 'Seoul', cityNL: '서울', region: 'Seoul Capital Area', state: 'South Korea',}));
    });

});