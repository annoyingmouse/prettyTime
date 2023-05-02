(($)=> {
    $.fn.prettyTime = function() {
        return this.each(function() {
            const $this = $(this);
            $this.text(minutesToHours($this.attr("data-time")));
        });
    };
    const minutesToHours = minutes => {
        let returnString;
        const hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        const hoursString = NumberToWord(hours);
        const minutesString = NumberToWord(minutes);
        if (hours > 0) {
            if (minutes > 0) {
                switch (minutes) {
                    case 15:
                        returnString = (hoursString) ? hoursString + " and a quarter hours" : "invalid";
                        break;
                    case 30:
                        returnString = (hoursString) ? hoursString + " and a half hours" : "invalid";
                        break;
                    case 45:
                        returnString = (hoursString) ? hoursString + " and three quarter hours" : "invalid";
                        break;
                    default:
                        if(hoursString){
                            returnString = (hoursString) ? hoursString + " hour" : "invalid";
                            if (hours > 1){
                                returnString += "s";
                            }
                            returnString += " and " + minutesString + " minute";
                            if(minutes > 1){
                                returnString += "s";

                            }
                        }else{
                            returnString = "invalid";
                        }
                        break;
                }
            }else{
                returnString = hoursString + " hour";
                if (hours > 1) {
                    returnString += "s";
                }
            }
        } else {
            if (minutes > 0) {
                switch (minutes) {
                    case 15:
                        returnString = "quarter of an hour";
                        break;
                    case 30:
                        returnString = "half an hour";
                        break;
                    case 45:
                        returnString = "three quarters of an hour";
                        break;
                    default:
                        returnString = minutesString + " minute";
                        if (minutes > 1){
                            returnString += "s";
                        }
                        break;
                }
            }
        }
        return returnString;
    }
    const NumberToWord = num => {
        let returnValue;
        const units = ["","one","two","three","four","five","six","seven","eight","nine"];
        const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
        const tens = ["","","twenty","thirty","forty","fifty"];
        if (num % 1 === 0){
            if(num < 20){
                if(num < 10){
                    returnValue = units[num];
                }else{
                    returnValue = teens[num - 10];
                }
            }else{
                if(num % 10 === 0){
                    returnValue = tens[parseInt(num / 10)];
                }else{
                    returnValue = tens[parseInt(num / 10)] + "-" + units[num % 10];
                }
            }
        }else{
            returnValue = "invalid";
        }
        return returnValue;
    }
})(jQuery);

