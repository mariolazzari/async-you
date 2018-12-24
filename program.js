const fs = require("fs");
const http = require("http");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) return console.log(err);

  console.log(data);
  /*
  http.get(data, res => {
    console.log(res);
  });

*/
});
