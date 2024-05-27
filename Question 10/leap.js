//If the date is valid find out whether the given year is leap year or not? using js or python.
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true; 
        }
    } else {
        return false; 
    }
}

let year = 2002;
console.log(`Is ${year} a leap year? ${isLeapYear(year)}`);
//Output: Is 2002 a leap year? false