// jshint esversion:6
// console.log(module);

// module.exports= "Hello World";      this exports the Hello World 
// module.exports = getData;           this exports the whole date function as a string
//module.exports = getData;              // this exports the result of the getData Function;

// module.exports.getData = getDate;           // module is a object and getData is a property.


// function  getDate()
// {
//     let today = new Date();
//     let options =
//     {
//         weekday:"long",
//         day : "numeric",
//         month:"long"
//     };

// // let day = today.toLocaleDateString("en-us" , options);
// // return day;

// // optimised :
// return today.toLocaleDateString("en-us " , options);
// }

// module.xports.getDate = function()
exports.getData = function()
{
    const today = new Date();
    const options = 
    {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    const day = today.toLocaleDateString("en-us", options );
    return today.toLocaleTimeString("en-us" , options);
}

// module.exports.getDay = function()
exports.getDay = function()
{
    const today = new Date();
    const options =
    {
        weekday:"long",
    };

// let day = today.toLocaleDateString("en-us" , options);
// return day;

// optimised :
return today.toLocaleDateString("en-us",options);
}

// console.log(module.exports);