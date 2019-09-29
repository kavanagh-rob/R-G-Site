(function($) {
    $(function onDocReady() {
        $('#rsvpForm').submit(handleRSVP);
    });

    function handleRSVP(event) {
        var rsvpData = {};
        rsvpData.name = $('#nameInput').val() ? $('#nameInput').val() : "N/A";
        rsvpData.email = $('#emailInput').val() ? $('#emailInput').val() : "N/A";
        rsvpData.isAttending = $('input[name="Attending"]:checked').val();
        rsvpData.hasGuest = $('input[name="Guest"]:checked').val();
        rsvpData.guestName =  $('#guestNameInput').val() ? $('#guestNameInput').val() : "N/A";
        rsvpData.day2 = $('input[name="Day2"]:checked').val()
        rsvpData.comment = $('#commentText').val() ? $('#commentText').val() : "N/A";
        event.preventDefault();
       
        sendRSVP(rsvpData,
            function rsvpSuccess() {
                alert("Thanks " + rsvpData.name + " your RSVP has been submitted.\n\n" 
                + "• Name: "+rsvpData.name+"\n" 
                + "• Attending: "+rsvpData.isAttending+"\n"  
                + "• Guest: "+rsvpData.hasGuest+"\n"  
                + "• Name of Guest: "+rsvpData.guestName+"\n"  
                + "• Can I make day 2: "+rsvpData.day2+"\n\n"  
                + "• Comment: "+rsvpData.comment+"\n\n"  
                 );
            },
            function rsvpError(err) {
                alert(err);
            }
        );
    }
})(jQuery); 


function sendRSVP(rsvpData, onSuccess, onFailure) {
    var data = {};
    data.rsvpData = rsvpData;
    data.rsvpData.source = "website-test";
    $.ajax({
        url: "https://37xim6z6ic.execute-api.eu-west-1.amazonaws.com/live/rsvp",
        data: JSON.stringify(data),
        cache: false,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function (successData) {
            onSuccess();
        },
        error: function (errorData) {
            onFailure();
        }
    });
}
