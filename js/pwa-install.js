'use strict'; 
var deferredInstallPrompt = null;
var installButton = document.getElementById('installButton');
var installedText = document.getElementById('installedText');
installButton.addEventListener('click', installPWA);

function installPWA(evt) {
  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);

  deferredInstallPrompt.userChoice.then(function(outcome) { 
    postAnalytics(getInstallAnalyticsData(outcome), 'install')
  }); 

}

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  // save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
  installedText.setAttribute('hidden', true);
}


function getInstallAnalyticsData(installPrompt) {
  var analyticsData = {};
  analyticsData.installPrompt = installPrompt;
  analyticsData.installPrompt.platform = analyticsData.installPrompt.platform ? analyticsData.installPrompt.platform : 'N/A';
  return analyticsData;
}

function postAnalytics(analyticsData, analyticsType) {
  var data = {};
  data.analyticsData = analyticsData;
  data.analyticsData.type = analyticsType;
  try {
      $.ajax({
          url: "https://37xim6z6ic.execute-api.eu-west-1.amazonaws.com/live/analytics",
          data: JSON.stringify(data),
          cache: false,
          processData: false,
          contentType: false,
          type: 'POST',
          success: function (successData) {
          },
          error: function (errorData) {
          }
      });
    } catch(err) {
  }
}
