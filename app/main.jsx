var Hello = require('./components/hello');
var Message = require('./components/message');

var appContainer = document.getElementById('app');
var hobbiesList = [
  {
    name:'dormir'
  },
  {
    name:'jugar'
  },
  {
    name:'ps3'
  }
];

ReactDOM.render(
  <Hello hobbies={hobbiesList}>
    <Message message="React Rules"></Message>
  </Hello>
, appContainer);
