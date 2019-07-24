 $(document).ready(function(){

  alert('hello')
 
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

  //variables needed for the sheet

  var trainName = '';
  var destination =  '';
  var firstTime = '';
  var frequency = 0;
  
  
  // on click get information from the form
  $('#submit').on('click',function(event){
    event.preventDefault();

    console.log('clicked')

    trainName = $('#trainName').val().trim();
    destination = $('#destination').val().trim();
    firstTime = $('#firstTime').val().trim();
    frequency = $('#frequency').val().trim();

    console.log(trainName);
    console.log(destination);
    console.log(firstTime);
    console.log(frequency);




  });

 });