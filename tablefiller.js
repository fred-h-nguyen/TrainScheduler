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

  // pull data from firebase
  database.ref().on('child_added', function (snapshot) {

    // Moment.JS shenanigans

    // get start time subtract 1 year 
    var currentTime = moment().format('hh:mm');
    var startTime = snapshot.val().startTime;
    var startTimeConverted = moment(startTime, 'HH:mm').subtract(1, 'years');

    // get difference between start time and now
    var tDiff = moment().diff(startTimeConverted, 'minutes');

    // remainder is saved to a var 
    var freq = snapshot.val().frequency;
    var remainder = tDiff % parseInt(freq);

    console.log(remainder);

    





    // frequency minus remainder is the time remaining

    // add time remaining to current time and that is when next train is arrived







    // DOM manipulation
    var trainDOM = $('<tr>');
    var nameDOM = $('<td>');
    var destinDOM = $('<td>');
    var nextDOM = $('<td>');
    var frequencyDOM = $('<td>');
    var minleftDOM = $('<td>');

    nameDOM.text(snapshot.val().train);
    nameDOM.appendTo(trainDOM);

    destinDOM.text(snapshot.val().destination);
    destinDOM.appendTo(trainDOM);

    frequencyDOM.text(freq);
    frequencyDOM.appendTo(trainDOM);

    nextDOM.text('');
    nextDOM.appendTo(trainDOM);

    minleftDOM.text('');
    minleftDOM.appendTo(trainDOM);


    trainDOM.appendTo($('#schedule'))




  })
});