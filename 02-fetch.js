if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
const body= JSON.stringify({"color":"green"})
const headers = {"Content-Type":"application/json"}
fetch("/colors/1",{method:"PUT", headers:headers, body:body}).then(resp => resp.json()).then(body=>console.log(body))
