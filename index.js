// opcja #1

// const fs = require("fs").promises;

// fs.readFile("readme.txt")
// .then((data) => {
//     console.log(data.toString())
// })
// .catch((error) => {
//     console.log(error)
// });

// fs jest częścią js, nie trzeba instalować

// opcja #2 - funkcja asynchroniczna
// const fs = require("fs");

// fs.readFile("readme.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data.toString());
// })

// // err i data zawsze są argumentami callbacku w tym przypadku

// console.log("zajęcia")

// opcja #3 - funkcja synchroniczna, więc bez callbacków i promise, a z try/catch
// try catch konieczne do error handlingu w synchronicznych
// const fs = require("fs");

// try {
//     const data = fs.readFileSync("readme.txt");
//     console.log(data.toString());
// } catch (err) {
//     console.log(err);
// }


// console.log("zajęcia");

// w praktyce korzystamy tylko z ASYNCHRONICZNYCH 
