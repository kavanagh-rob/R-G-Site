(function($) {
    $(function onDocReady() {
        $('#rsvpForm').submit(handleRSVP);
    });

    function handleRSVP(event) {
        var name = $('#nameInput').val();
        var isAttending = $('input[name="Attending"]:checked').value;
        var hasGuest = $('input[name="Guest"]:checked').value;
        var guestName = $('#guestNameInput').val();
        var day2 = $('input[name="Day2"]:checked').value;
        var comment = $('#commentText').val();
        event.preventDefault();
       
        sendRSVP(name, isAttending, hasGuest, guestName, day2, comment,
            function rsvpSuccess() {
                alert("Thanks " + name + " your RSVP has been submitted.\n\n" 
                + "• name: "+name+"\n" 
                + "• Attending: "+isAttending+"\n"  
                + "• Do I have a guest: "+hasGuest+"\n"  
                + "• Name of Guest: "+guestName+"\n"  
                + "• Can I make day 2: "+day2+"\n\n"  
                + "• Comment: "+comment+"\n\n"  
                 );
            },
            function rsvpError(err) {
                alert(err);
            }
        );
    }
})(jQuery); 


function sendRSVP(name, isAttending, hasGuest, guestName, day2, comment, onSuccess, onFailure) {
    $.ajax({
        url: "example.php",
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function (dataofconfirm) {
            // do something with the result
        }
    });
}