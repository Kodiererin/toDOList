//      Happy Chhat Puja

console.log("Hello World");

const express = require("express");
const bodyParser = require('body-parser');
const date = require(__dirname+ "/date.js");        // as out module is local so we have to use __dirname+"filename"
  
//console.log("From Data Module  ->"+date);              // the exported data of the modeule will be shown here.
// console.log("From Data Module  ->"+date());

const app = express();
// let items = ["BuyFood","CookFood","Take Food"];

let work = [];
let items = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');               //EJS

app.get("/",function(req,res)
{
    let today = new Date();
    // let options =
    // {
    //     weekday:"long",
    //     day : "numeric",
    //     month:"long"
    // };

    // The above line commented has been sent to the file date.js file

    // let day = date();               // we are activating the getDate from date.js
    let day = date.getData();
    // let day = date.getDay();

    // let day = today.toLocaleDateString("en-us" , options);
    res.render("list",{listTitle:day, newlistItems:items})      // this is a Key Value Pair
    // res.render('list',{todayIS:date}); x
    // jo ki tm ExpressJS me bhejne ho!.

});

app.post("/",function(req,res)
{
    console.log(req.body)
    let item= req.body.newItem;

    console.log("The List is "+req.body.list)

    if(req.body.list === "Work")                    // yha pe work ka value Work hai
    {
        work.push(item);
        res.redirect("/work")
        // console.log("Work Array "+work);
    }
    else
    {
        items.push(item);
        res.redirect("/");
        
        // console.log("Items Item "+items);
        console.log(item);
    }

    // let item= req.body.newItem+"";
    // if(item.length>1)
    // {
    //     console.log(item);

    //     items.push(item);
    // }
    // if(item.length>1)
    // {
    //     console.log(item);
    //     // console.log(items); 

    //     items.push(item);
    // }
    // res.redirect("/"); // res.redirect takes the data and saves it into a variable. It then Redirects it to the home route that is app.get and it will res.render the list template passing in both the kind of daya and new List item.
    });

    app.get("/work",function(req,res)
    {
        res.render("list",{listTitle:"Work List" , newlistItems: work})
    })

    // app.post("/work",function(req,res)
    // {
    //     console.log(req.body)
    //     let items = req.body.newItem;
    //     work.push(items);
    //     res.redirect("/work");
    // })

    app.get("/about",function(req,res)
    {
        res.render("about");
    })

app.listen(3000,function()
{
    console.log("Server Has Started On Port 3000");
})

