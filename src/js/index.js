import '../css/index.scss';
import $ from "jquery";

// Declare html files to ensure they are watched in the npm task
require('../index.html');

$(function() {
    console.log('Joel is in the console.');
});

const appDiv = document.getElementById('app');
const name = 'Joel';

appDiv.innerHTML = `Welcome to ${name}'s webpack boilerplate!`;