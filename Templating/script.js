$(document).ready(function() {
    function renderHandlebarTemplate(templateId, context) {
        //var template = $(templateId);
        var compiled = Handlebars.compile($(templateId).html());
        return compiled(context);
    }


    var $titlePlaceholder = $('#title-ph'), $cityImage = $('#city-img'), $cityIcon = $('#city-icon');
    
    $('#tokyo-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {
            city: 'Tokyo', 
            cityNL: '東京', 
            region: 'Kantō', 
            state: 'Japan'
        }));
        $cityImage.attr('src','images/tokyo-sky.jpg');
        $cityIcon.attr('src','images/japan-flag.png');
    });
    
    $('#jakarta-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template',{
            city: 'Jakarta', 
            cityNL: 'Jakarta', 
            region: 'Special Capital Region of Jakarta', 
            state: 'Indonesia'
        }));
        $cityImage.attr('src','images/jakarta-sky.jpg');
        $cityIcon.attr('src','images/indonesia-flag.png');
    });
    
    $('#delhi-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {
            city: 'Delhi', 
            cityNL: 'दिल्ली', 
            region: 'National Capital Territory of Delhi', 
            state: 'India'
        }));
        $cityImage.attr('src','images/delhi-bazaar.jpg');
        $cityIcon.attr('src','images/india-flag.png');
    });
    
    $('#manila-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {
            city: 'Manila', 
            cityNL: 'Maynilà', 
            region: 'National Capital Region', 
            state: 'The Philippines',
        }));
        $cityImage.attr('src','images/manila-church.jpg');
        $cityIcon.attr('src','images/philippines-flag.png');
    });
    
    $('#seoul-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {
            city: 'Seoul', 
            cityNL: '서울', 
            region: 'Seoul Capital Area', 
            state: 'South Korea',
        })); 
        $cityImage.attr('src','images/seoul-festival.jpg');
        $cityIcon.attr('src','images/korea-flag.png');
    });

});