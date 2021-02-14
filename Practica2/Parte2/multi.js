var request = require("request");
var DOMParser = require("xmldom").DOMParser;

const query = (Temp, elementToParse) => {
  xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
      <Multiply xmlns="http://tempuri.org/">
        <intA>3</intA>
        <intB>9</intB>
      </Multiply>
    </soap12:Body>
  </soap12:Envelope>>`;

  options = {
    method: "POST",
    url: "http://www.dneonline.com/calculator.asmx",
    headers: {
      'Content-Type': 'application/soap+xml'
    },
    body: xml
  };
  return new Promise((resolve, reject) => {
    request(options, function(error, response) {
      if (error) {
        reject(new Error(error));
        return;
      }
      text = response.body;
      console.log("RESPUESTA MULTIPLICACION -> ", text)
    });
  });
};
exports.query = query
