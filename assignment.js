function feetToMile (feet){
    var mail = feet/ 5280;
    return mail;
}



function woodCalculator (chair,table, bed) {
    var forChair = chair * 1;
    var forTable = table * 3;
    var forBed = bed * 5;
    var totalNeed = forChair + forTable + forBed;
    
    return totalNeed;
} 





function brickCalculator( height){
    if(height <= 10){
        var result = height * 15 *1000;
    }
    else if(11 <= height && height <=20){
        var result = 150000 + ((height-10) *12 * 1000);
    }
    else if(height > 20){
        var result = 270000 + ((height-20) * 10 * 1000);
    }
    else{
        console.log("invalid input");
    }
    return result;
}





function tinyFriend(names){
    var short = names[0];
    for(var i = 0; i <names.length; i++){
        var currentnames = names[i];
        if(currentnames.length < short.length){
            short = currentnames;
        }
    }
     return short;
}
