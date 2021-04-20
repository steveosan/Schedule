
$(document).ready(function () {
    $("button").on("click", calculate);
});

$.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
}
function calculate()
{
    //Gather all input

    let daySelected = $("input[name=day]:checked").data("value")

    // OUTPUT!

    $(".output2").show();



    switch(daySelected){
        case "Monday":
            $("span#day").multiline('Work\n Class');
            $("span#event").multiline('6:00 AM - 2:00 PM\n 6:00 PM - 9:00 PM');
            break;
        case "Tuesday":
            $("span#day").multiline('Work\n Exersise');
            $("span#event").multiline('6:00 AM - 2:00 PM\n 5:00 PM - 6:00 PM');
            break;
        case "Wednesday":
            $("span#day").multiline('Work\n Class');
            $("span#event").multiline('6:00 AM - 2:00 PM\n 6:00 PM - 9:00 PM');
            break;
        case "Thursday":
            $("span#day").multiline('Work\n Class');
            $("span#event").multiline('6:00 AM - 2:00 PM\n 6:00 PM - 8:50 PM');
            break;
        case "Friday":
            $("span#day").multiline('Work\n Exersise');
            $("span#event").multiline('6:00 AM - 2:00 PM\n 5:00 PM - 6:00 PM');
            break;
        case "Saturday":
            $("span#day").multiline('Rest\n Exersise');
            $("span#event").multiline('All Day \n 5:00 PM - 6:00 PM');
            break;
            default:$("span#day").multiline('Church\n Exersise');
            $("span#event").multiline('10:00 AM - 11:00 AM\n 5:00 PM - 6:00 PM');
        } 
    }
