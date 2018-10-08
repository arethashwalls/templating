Handlebars.registerHelper("formatNum", function(population){
    var formattedPop = "";
    population = population.toString();
    for(var i = population.length - 1; i >= 0; i--) {
        formattedPop = population[i] + formattedPop;
        if((population.length - i) % 3 === 0 ) {
            formattedPop = "," + formattedPop;   
        }
    }
    return formattedPop;
});