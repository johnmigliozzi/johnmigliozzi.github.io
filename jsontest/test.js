"use strict"

function getFile(){

  return fetch('test1.json',{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
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
