// Import the Workbox class from 'workbox-window'
import { Workbox } from 'workbox-window';

// Import the Editor class from './editor'
import Editor from './editor';

// Import './database' and '../css/style.css'
import './database';
import '../css/style.css';

// Get a reference to the main container element with id 'main'
const main = document.querySelector('#main');

// Clear the inner HTML of the main container
main.innerHTML = '';

// Function to display a loading spinner in the main container
const loadSpinner = () => {
  // Create a div element for the spinner
  const spinner = document.createElement('div');
  // Add 'spinner' class to the spinner div
  spinner.classList.add('spinner');
  // Set inner HTML for the spinner div
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner" />
    </div>
  `;
  // Append the spinner div to the main container
  main.appendChild(spinner);
};

// Create an instance of the Editor class
const editor = new Editor();

// Check if the Editor instance is undefined
if (typeof editor === 'undefined') {
  // If undefined, display a loading spinner
  loadSpinner();
}

// Check if service workers are supported in the browser
if ('serviceWorker' in navigator) {
  // Create an instance of the Workbox class with the path to the service worker file
  const workboxSW = new Workbox('/src-sw.js');
  // Register the Workbox service worker
  workboxSW.register();
} else {
  // Log an error message if service workers are not supported
  console.error('Service workers are not supported in this browser.');
}
