const express = require ('express');
const app = express();
const request  = require('request');
const async = require('async');
const https = require('https')

// ----- GET -----
app.get('/listado', (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "https://gorest.co.in/public-api/users"
        }
        request(options, (error, response, body) => {
            var result = JSON.parse(body);
            console.log(result)
            callback(null, result)
        });
    }, (error, results) => {
        res.json(results);
    })
})

app.listen('8089', () => {
    console.log('Start ... ');
})


// ----- POST -----
const data = JSON.stringify({
    name :"Andrea Lopez Flores 201404134", 
    gender:"Female", 
    email:"andrea1@gmail.com",
    status:"Active"
})

const options = {
  hostname: 'gorest.co.in',
  path: '/public-api/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Accept': 'application/json',
    'Authorization': 'Bearer df5c9e0d3d3acffba80f810135ffc66dde0dd924ef66f052405f04f5eb099239' 
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

//req.on('error', error => {
//  console.error(error)
//})

//req.write(data)

// ----- PATCH -----
const data2 = JSON.stringify({
    name :"Andrea USAC 201404134", 
    gender:"Female", 
    email:"nuevo@gmail.com",
    status:"Active"
})

const options2 = {
  hostname: 'gorest.co.in',
  path: '/public-api/users/1530',
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data2.length,
    'Accept': 'application/json',
    'Authorization': 'Bearer df5c9e0d3d3acffba80f810135ffc66dde0dd924ef66f052405f04f5eb099239' 
  }
}

const req2 = https.request(options2, res2 => {
  console.log(`statusCode: ${res2.statusCode}`)

  res2.on('data', d => {
    process.stdout.write(d)
  })
})

req2.on('error', error => {
  console.error(error)
})

req2.write(data2)


// ----- DELETE -----
const data3 = JSON.stringify({
    name :"Andrea USAC 201404134", 
    gender:"Female", 
    email:"nuevo@gmail.com",
    status:"Active"
})

const options3 = {
  hostname: 'gorest.co.in',
  path: '/public-api/users/1506',
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data3.length,
    'Accept': 'application/json',
    'Authorization': 'Bearer df5c9e0d3d3acffba80f810135ffc66dde0dd924ef66f052405f04f5eb099239' 
  }
}

const req3 = https.request(options3, res3 => {
  console.log(`statusCode: ${res3.statusCode}`)

  res3.on('data', d => {
    process.stdout.write(d)
  })
})

req3.on('error', error => {
  console.error(error)
})

req3.write(data3)
req3.end()
