import React, { Component } from 'react';
import Moment from 'react-moment';

class Ticker extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Ticker">
        <ul>
          <li id="title" class="active left">Title: <span id="title-data"></span>
          </li>
          <li id="author" class="left">Author: <span id="author-data"></span>
          </li>
          <li id="game-code" class="active right">
          </li>
          <li id="time" class="active right">
          </li>
        </ul>
      </div>
    );
  }
}

export default Ticker;

// Setup
// var settings = {
//   rotation: {
//     delay: 3000,
//     fields: ['title','author'],
//     active: 'title'
//   },
//   data: {
//     delay: 3000
//   }
// }
//
// Functions
// $(function() {
//   getData();
//   rotateData();
//   setInterval(getData, settings.data.delay);
//   setInterval(rotateData, settings.rotation.delay);
//   setInterval(setNewTime, 1000);
// });
//
// function getData() {
//   $.ajax("/ticker/data.json", {cache: false}).done(function(data) {
//     $('#title-data').html(data.title);
//     $('#author-data').html(data.author);
//   });
// }
//
// var rotationIndex = 0;
// function rotateData() {
//   settings.rotation.fields.forEach(function(field) {
//     $('#'+field).removeClass('active');
//   });
//   $('#'+settings.rotation.fields[rotationIndex]).addClass('active');
//   if (rotationIndex < settings.rotation.fields.length - 1 ) {
//     rotationIndex++;
//   } else {
//     rotationIndex = 0;
//   }
// }
//
// function setNewTime() {
//   var now = moment().format('hh:mm:ss a');
//   $('#time').html(now)
// }
