(function($) {
    $(function onDocReady() {
        $('#smsForm').submit(handleSMSSubscription);
    });
    
    function handleSMSSubscription(event) {
        var smsData = {};
        smsData.name = $('#smsNameInput').val() ? $('#smsNameInput').val() : "N/A";
        smsData.phoneNumber = $('#smsPhoneNumberInput').val() ? $('#smsPhoneNumberInput').val() : "N/A";
        event.preventDefault();
       
        sendSMSInfo(smsData,
            function smsSuccess() {
                alert("Thanks " + smsData.name + " your have been subscribed to SMS updates from Gean & Rob.\n\n" 
                + " on phone: "+smsData.phoneNumber+"\n"  
                 );
            },
            function smsError(err) {
                alert(err);
            }
        );
    }
})(jQuery); 


function sendSMSInfo(smsData, onSuccess, onFailure) {
    var data = {};
    data.smsData = smsData;
    data.smsData.source = "website";
    $.ajax({
        url: "https://37xim6z6ic.execute-api.eu-west-1.amazonaws.com/live/sms-updates",
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
