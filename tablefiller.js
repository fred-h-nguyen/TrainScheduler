$(document).ready(function () {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyClvqW6iB8T3MIvtg6aZsnoYB1n5T1_1Yg",
    authDomain: "train-scheduler-4f8d3.firebaseapp.com",
    databaseURL: "https://train-scheduler-4f8d3.firebaseio.com",
    projectId: "train-scheduler-4f8d3",
    storageBucket: "",
    messagingSenderId: "470336295918",
    appId: "1:470336295918:web:f95c8f5a96dfb31d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database()

  //variables needed for the sheet

  var trainName = '';
  var destination = '';
  var firstTime = '';
  var frequency = 0;
  var nextTime = '';
  var minutesAway = 0;


  // on click get information from the form
  $('#submit').on('click', function (event) {
    event.preventDefault();

    trainName = $('#trainName').val().trim();
    destination = $('#destination').val().trim();
    firstTime = $('#firstTime').val().trim();
    frequency = $('#frequency').val().trim();

    database.ref().push({
      train: trainName,
      destination: destination,
      startTime: firstTime,
      frequency: frequency,
    });

    $('#trainName').val('');
    $('#destination').val('');
    $('#firstTime').val('');
    $('#frequency').val('');
  });

// pull data from firebase and DOM manipulation in tbody


//moment.js shennanigans to calculate next time of train arrival and how many minutes till next arrival



});