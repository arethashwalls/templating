$(document).ready(function() {
    function renderHandlebarTemplate(templateId, context) {
        //var template = $(templateId);
        var compiled = Handlebars.compile($(templateId).html());
        return compiled(context);
    }


    var $titlePlaceholder = $('#title-ph'), $factsPlaceholder = $('#facts-ph'), $cityImage = $('#city-img'), $cityIcon = $('#city-icon');
    
    $('#tokyo-button').click(function() {
        $titlePlaceholder.html(renderHandlebarTemplate('#title-template', {
            city: 'Tokyo', 
            cityNL: '東京', 
            region: 'Kantō', 
            state: 'Japan'
        }));
        $factsPlaceholder.html(renderHandlebarTemplate('#facts-template',{
            pop: 38050000,
            area: 8547,
            facts: [
                {fact: 'The greater Tokyo metropolitan area includes the cities of Chiba, Kawasaki, Maebashi, Sagamihara, Saitama, Utsonomiya, and Yokohama.'},
                {fact: 'Tokyo\'s name was changed from Edo to Tokyo when Emperor Meiji made it the capital of Japan in 1868.'},
                {fact: 'Tokyo means Eastern Capital in Japanese.'},
                {fact: 'Tokyo will host the Summer Olympics in 2020.'},
                {fact: 'Tokyo was destroyed by Godzilla in 1954. Amazingly, no evidence of the destruction remains! Maybe Mothra helped them rebuild?'}
            ],
            largest: true,
            city: 'Tokyo', 
            state: 'Japan',
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
        $factsPlaceholder.html(renderHandlebarTemplate('#facts-template',{
            pop: 32275000,
            area: 3302,
            facts: [
                {fact: 'The greater Jakarta metropolitan area includes Bekasi, Bogor, Depok, Tangerang, and Tangerang Selatan, collectively known as Jabodetabek.'},
                {fact: 'The name Jakarta is derived from the Sanskrit words \'jaya\' and \'krta\', meaning \'victorious\' and \'accomplished\', respectively.'},
                {fact: 'Jakarta is located on Java, the world\'s most populous island—and the indirect namesake of one of teh most popular programming languages, by way of its most famous exports, coffee.'},
                {fact: 'Jakarta is currently sinking into the ocean by 17 cm a year.'},
                {fact: 'Jakarta is sometimes nicknamed the Big Durian.'}
                
            ],
            largest: true,
            city: 'Jakarta',
            state: 'Indonesia',
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
       $factsPlaceholder.html(renderHandlebarTemplate('#facts-template',{
            pop: 27280000,
            area: 2202,
            facts: [
                {fact:'The Central National Capital Region of India includes Delhi, Ghaziabad, Noida, Faridabad, Gurgaon, Bahadurgarh, and Kundli.'},
                {fact: 'The name Delhi is very ancient, and there\'s no current concensus on its origins.'},
                {fact: 'The Delhi area may have been settled before 2,000 BC.'},
                {fact: 'New Delhi is home to the world\'s second-largest book fair, the New Delhi World Book Fair.'},
                {fact: 'Along with soccer, Delhi\'s most popular sport is cricket, a game in which players leap around while making loud chirping noises.'}
            ],
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
        $factsPlaceholder.html(renderHandlebarTemplate('#facts-template',{
            pop: 24650000,
            area: 1787,
            facts: [
                {fact:'The National Capital Region includes 16 cities: the City of Manila, Quezon City, Caloocan, Las Piñas, Makati, Malabon, Mandaluyong, Marikina, Muntinlupa, Navotas, Parañaque, Pasay, Pasig, San Juan, Taguig, and Valenzuela.'},
                {fact: 'Manila\'s name comes from a Tagalog phrase meaning \'where indigo is found\'.'},
                {fact: 'The area around modern Manila has been inhabited since around 3,000 BC.'},
                {fact: 'A popular mode of public transportation in Manila are \'jeepneys\', customized Jeeps that originated as post-World War II military surplus vehicles.'},
                {fact: 'Manila is the most densely populated city on Earth, with 71,263 people per square kilometer in Manila proper.'}
            ],
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
        $factsPlaceholder.html(renderHandlebarTemplate('#facts-template',{
            pop: 24210000,
            area: 2745,
            facts: [
                {fact:'The Seoul Capital Area includes Seoul, Incheon, and the province of Gyeonggi.'},
                {fact: 'Seoul\'s name probably comes from the Korean word \'Seorabeol\', meaning \'capital city\'.'},
                {fact:'Seoul has the highest average internet speed in the world and free wi-fi in most public places.'},
                {fact: 'Seoul was home to the 1988 Summer Olympics.'},
                {fact: 'The city used to be surrounded by an enormous stone wall. Several portions of the wall still exist today.'}
            ],
            largest: true,
            city: 'Seoul',
            state: 'South Korea',
        }));
        $cityImage.attr('src','images/seoul-festival.jpg');
        $cityIcon.attr('src','images/korea-flag.png');
    });

});