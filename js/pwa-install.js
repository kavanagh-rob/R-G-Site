
'use strict'; 
var deferredInstallPrompt = null;
var installButton = document.getElementById('installButton');
var installedText = document.getElementById('installedText');
installButton.addEventListener('click', installPWA);

function installPWA(evt) {
  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);
}

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  // save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
  installedText.setAttribute('hidden', true);
}
