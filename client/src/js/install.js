// Get a reference to the install button element
const installButton = document.getElementById('buttonInstall');

// Logic for handling the Progressive Web App (PWA) installation prompt
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt for installing the PWA
  event.preventDefault();

  // Store the beforeinstallprompt event in the window.deferredPrompt property
  // Trigger the installation prompt later when the user clicks the install button
  window.deferredPrompt = event;

  // Show the install button by removing the 'hidden' class
  installButton.classList.toggle('hidden', false);
});

// Implement a click event handler on the `installButton` element
installButton.addEventListener('click', async () => {
  // Retrieve the stored beforeinstallprompt event
  const installPromptEvent = window.deferredPrompt;

  // If there's no stored event, return early
  if (!installPromptEvent) {
    return;
  }

  // Trigger the installation prompt
  installPromptEvent.prompt();

  // Clear the stored reference to the beforeinstallprompt event
  window.deferredPrompt = null;

  // Hide the install button by adding the 'hidden' class
  installButton.classList.toggle('hidden', true);
});

// Handler for the 'appinstalled' event
window.addEventListener('appinstalled', (event) => {
  // Clear the stored reference to the beforeinstallprompt event
  window.deferredPrompt = null;
});
