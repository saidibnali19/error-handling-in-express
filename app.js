const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 3000;

// app.get("/", (req, res) => {
//     throw new Error("BROKEN");
// });

// app.get("/", (req, res, next) => {
//     fs.readFile("/file-does-not-exist", (err, data) => {
//         if (err) next(err);
//         else {
//             res.send(data);
//         }
//     });
// });

// app.get(
//     "/",
//     (req, res, next) => {
//         fs.writeFile("/inaccessible-path", "data", next);
//     },
//     (req, res) => {
//         res.send("OK");
//     }
// );

// app.get("/", (req, res, next) => {
//     setTimeout(() => {
//         try {
//             throw new Error("Broken");
//         } catch (err) {
//             next(err);
//         }
//     }, 100);
// });

app.get("/", (req, res, next) => {
    Promise.resolve().then(() => {
        throw new Error("Broken")
    }).catch(next)
})

app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
