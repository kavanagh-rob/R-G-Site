;( function( window ) {
    'use strict';

    document.getElementById('rsvpMastHeadButton').addEventListener( 'click', function() {
        postAnalytics('rsvpButtonMast');
    });

    document.getElementById('snapMastHeadButton').addEventListener( 'click', function() {
        postAnalytics('snapMastHeadButton');
    });

    document.getElementById('chatZoneButton').addEventListener( 'click', function() {
        postAnalytics('chatzone');
    });

    document.getElementById('snapZoneButton').addEventListener( 'click', function() {
        postAnalytics('snapzone');
    });

    

})( window );


function postAnalytics(elementClicked) {
    try {
        var data = getAnalyticsData(elementClicked);
        data.analyticsData.type = 'click-'+elementClicked;
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

  function getAnalyticsData(elementClicked){
    var data = {};
    data.analyticsData = {};
    data.analyticsData.elementClicked = elementClicked;

    if(window.navigator) {
        data.analyticsData.platform = data.analyticsData.platform ? data.analyticsData.platform : 'N/A';
    }
    return data;
  }
