const parseDate = (input) => {
    if (input.match(/\D/gm)) {
        return new Date(input);
    } else {
        return new Date(parseInt(input));
    }    
};

const convertToUnix = (dateObj) => {   
    return dateObj.getTime();  
};

const convertToUTC = (dateObj) => {
    return dateObj.toUTCString();  
};

const isValidDate = (dateObj) => {
    return (dateObj.toString() !== "Invalid Date");
};

module.exports = {parseDate, convertToUnix, convertToUTC, isValidDate}