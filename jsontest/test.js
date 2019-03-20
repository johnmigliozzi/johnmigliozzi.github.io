"use strict"

function getFile(){

  return fetch('https://johnmigliozzi.com/misc/test1.json',{
    mode:{
      'no-cors'
    }
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
    }
  }).then((response) => response.json())
};

function getData(){

  return Promise.all([getFile()])

};

getData()
  .then(([data]) => {



    var html = "<h1>Descriptions</h1>";

    for(var i in data){

      html += "<h3>" + data[i].ID + ":  " + data[i].Description + "</h3>";

    }

    document.getElementById("jsonContent").innerHTML = html;

  })
