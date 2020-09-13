// TIMEZONE (Ressources from https://www.geeksforgeeks.org/how-to-add-options-to-a-select-element-using-jquery/)
timeZones = {"GMT": "Greenwich", "UTC": "Universal", "ECT": "European Central Time", "EET": "Eastern European Time", "ART": "Egypt Standard Time", "MET": "Middle East", "NET": "Near East", "PLT": "Pakistan Lahore", "IST": "India Standard", "BST": "Bangladesh Standard", "VST": "Vietnam Standard", "CTT": "China Taiwan", "JST": "Japan Standard", "ACT": "Australia Central", "AET": "Australia Eastern", "SST": "Solomon Standard", "NST": "New Zealand Standard", "MIT": "Midway Islands", "HST": "Hawaii Standard", "AST": "Alaska Standard","PST": "Pacific Standard", "PNT": "Phoenix Standard ", "MST": "Mountain Standard", "CST": "Central Standard", "EST": "Eastern Standard", "IET": "Indiana Eastern Standard", "PRT": "Puerto Rico and US Virgin Islands", "CNT": "Canada Newfoundland", "AGT": "Argentina Standard", "BET": "Brazil Eastern", "CAT": "Central African" };
$.each(timeZones, function(key, value) {   
    $('.form-selector')
        .append($("<option></option>")
                   .attr("value", key)
                   .text(value)); 
});