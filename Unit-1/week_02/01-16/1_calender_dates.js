var year = 2021;

function calender(input){
    for (var jan = 1; jan < 2; jan++){
        for(var jan_date = 1; jan_date <= 31; jan_date++){
            console.log(input + "-" + jan + "-" + jan_date)
        }
    }
    for (var feb = 2; feb < 3; feb++){
        var date = 28;
        for(var feb_date = 1; feb_date <= date; feb_date++){
            if(input % 4 == 0 && input % 100 != 0 || input % 400 == 0){
                date = 29;
                console.log(input + "-" + feb + "-" + feb_date)
            }
            else {
                console.log(input + "-" + feb + "-" + feb_date)
            }
        }
    }
    for (var mar = 3; mar < 4; mar++){
        for(var mar_date = 1; mar_date < 31; mar_date++){
            console.log(input + "-" + mar + "-" + mar_date)
        }
    }
    for (var apr = 4; apr < 5; apr++){
        for(var apr_date = 1; apr_date < 31; apr_date++){
            console.log(input + "-" + apr + "-" + apr_date)
        }
    }
    for (var may = 5; may < 6; may++){
        for(var may_date = 1; may_date <= 31; may_date++){
            console.log(input + "-" + may + "-" + may_date)
        }
    }
    for (var jun = 6; jun < 7; jun++){
        for(var jun_date = 1; jun_date < 31; jun_date++){
            console.log(input + "-" + jun + "-" + jun_date)
        }
    }
    for (var jul = 7; jul < 8; jul++){
        for(var jul_date = 1; jul_date <= 31; jul_date++){
            console.log(input + "-" + jul + "-" + jul_date)
        }
    }
    for (var aug = 8; aug < 9; aug++){
        for(var aug_date = 1; aug_date <= 31; aug_date++){
            console.log(input + "-" + aug + "-" + aug_date)
        }
    }
    for (var sept = 9; sept < 10; sept++){
        for(var sept_date = 1; sept_date < 31; sept_date++){
            console.log(input + "-" + sept + "-" + sept_date)
        }
    }
    for (var oct = 10; oct < 11; oct++){
        for(var oct_date = 1; oct_date <= 31; oct_date++){
            console.log(input + "-" + oct + "-" + oct_date)
        }
    }
    for (var nov = 11; nov < 12; nov++){
        for(var nov_date = 1; nov_date < 31; nov_date++){
            console.log(input + "-" + nov + "-" + nov_date)
        }
    }
    for (var dec = 12; dec < 13; dec++){
        for(var dec_date = 1; dec_date <= 31; dec_date++){
            console.log(input + "-" + dec + "-" + dec_date)
        }
    }
}
calender(year)