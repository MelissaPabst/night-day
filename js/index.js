
// This is an "event handler" runs right after the
// browser loads your page, which is just when the page
// is "ready" for your javascript to interact with
// the HTML content.
$(document).ready(function(){


    $('#orb').click(function() {

        // Note that we're indenting another level here.
        // It helps you see that this code is inside the
        // #orb click handler function.

        // Once "orb" is clicked it runs this if/else statement
        // which first looks to see if the orb has the ".sun" class.
        if ($('#orb').hasClass('sun')) {
            // If it does, then let's remove the sun class and add
            // the moon class instead.
            $('#orb').removeClass('sun').addClass('moon');
        } else {
            // If it doesn't have the sun class, it must have the
            // moon class already. We should remove moon and add sun.
            $('#orb').removeClass('moon').addClass('sun');
        }

        //same thing for the #sky div.
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }


        // This is similar, but instead of toggling between two classes
        // we just need to adds or removes the "visible" class to mulitple objects.
        if ($('#moonspot1').hasClass('visible')) {
            $('#moonspot1').removeClass('visible');
        } else {
            $('#moonspot1').addClass('visible');
        }

        if ($('#moonspot2').hasClass('visible')) {
            $('#moonspot2').removeClass('visible');
        } else {
            $('#moonspot2').addClass('visible');
        }

        if ($('#moonspot3').hasClass('visible')) {
            $('#moonspot3').removeClass('visible');
        } else {
            $('#moonspot3').addClass('visible');
        }

    }); // End of #orb click handler

}); // End of document ready handler
