module.exports = function toReadable (number, init = true) {
    const unit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dozens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const numberStr = number.toString();
    let strLength = numberStr.length;
    result = ""
    // 3 digit
    if (strLength == 3) {
        result = unit[numberStr[0]] + " hundred " + toReadable(number % 100, false)
    }
    //2 digit
    else if (strLength == 2) {
        //10-19 case
        if (numberStr[0] == 1) {
            result = teens[number-10]
        }
        //20-99 case
        else {
            result = dozens[numberStr[0]-2] + " " + toReadable(number % 10, false);
        }
    }
    //0 digit
    else if (number === 0 && init) {
        result = unit[number]
    }
    //1 digit
    else if (strLength == 1 && number != 0) {
        result = unit[number];
    }
    return result.trim()
}

