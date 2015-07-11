#!/bin/env node

// Node libraries
var express = require('express');
var request = require("request");
var async = require('async');
var rp = require('request-promise');
var _ = require('underscore');
var jade = require('jade');
var path = require('path');

// App settings.
var voterGuide = {};
voterGuide.candidates = {};
voterGuide.measures = {};
voterGuide.candidates.endpoint = "http://216.151.17.6:3000/api/votersedge/candidates/all";
voterGuide.measures.endpoint = "http://216.151.17.6:3000/api/votersedge/measures/all";
voterGuide.candidates.limit = 5;
voterGuide.measures.limit = 5;
voterGuide.localData = {};
voterGuide.candidates.fields = ['ballot_section', 'contest', 'name','party','yes_no','url']; // These are currently identical but this can be used to validate and limit data returned.
voterGuide.measures.fields = ['ballot_section', 'contest', 'identifier','topic','url'];

// Load data from API and process it. Return an array of formatted fields.
voterGuide.loadData = function(url, options, req, res){
  var self = this;
  console.log(url);
  var requestOpts = {
      uri: url,
      method: 'GET',
      options: options
  };
  // Use request-promise to load external dataset then process the results.
  rp(requestOpts)
    .then(function(body) {
        return self.filterData(JSON.parse(body), options);
      })
    .then(function(data){

      self.localData[options.dataType] = data;      
      
      // Return markup -- if not using ReactJS.
      // res.render(options.dataType, {
      //   title: 'API:' + options.dataType,
      //   data: data
      // });

      // Return JSON.
      res.writeHead(200, {"Content-Type": "application/json"});
      var json = JSON.stringify(self.localData[options.dataType]);
      res.end(json);
      return;
    })
    .catch(function(reason) {
      console.dir(reason);
    });

  return;
};

// Filter out extra data from API.
voterGuide.filterData = function(data, options) {
  parsedData = data;
  
  // Map and limit data.
  var filteredData = [];
  for(var i=0; i < voterGuide[options.dataType]['limit']; i++) {
    var record = parsedData[i];
    var formatted = {};
    console.log(voterGuide[options.dataType]['fields']);
    _.each(voterGuide[options.dataType]['fields'], function(field) { 
      formatted[field] = record[field];
    });
    filteredData.push(formatted);
  }
  return filteredData;
};

var app = module.exports = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));

// Load main page content.
app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

// Create callbacks for handling remotely consumed API data, run through a jade template and rendered as a partial.
// Note that this could also give back controlled JSON data for use with React, which would give a more front end flexibility.
// Using React on the front-end as an example here.
app.get('/api/measures', function(req, res) {
  voterGuide.loadData(voterGuide.measures.endpoint, {dataType: "measures"}, req, res);
});

app.get('/api/candidates', function(req, res) {
  voterGuide.loadData(voterGuide.candidates.endpoint, {dataType: "candidates"}, req, res);
});

app.listen(3000);