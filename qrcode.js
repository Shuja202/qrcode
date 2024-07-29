const qrcode = require ('qrcode');

let data = [
    {
        name: "Apple",
        Price: 150,
    },
    {
        name: "something",
        Price: 1700,
    },
];

let instring = JSON.stringify(data);

//qrcode.toString (instring,{type: "terminal"},function(err,qrcode)){console.log(qrcode)};