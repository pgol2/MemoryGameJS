$(document).ready(function() {

    var i = 0;
    var previousClick = 0;
    $('.wrapper').on("click", ".card", function() {
        toggleCard($(this));
        i++;
        
        if(i === 1) {
            previousClick = $(this);
        } else if(i === 2) {
            if( (previousClick.data("card") === $(this).data("card")) && previousClick !== $(this)) {
                // previousClick.css("visibility", "hidden");
                // $(this).css("visibility", "hidden");
                previousClick.animate({opacity: 0});
                $(this).animate({opacity: 0});
                
            }
        } else if( i > 2) {
            hideAll();
            i = 0;
        }
    });


    var toggleCard = function(Card) {
        Card.find('.front').toggle();
        Card.find('.back').toggle();
    }
    var hideAll = function() {
        $('.card').each(function() {
            $(this).find('.back').hide();
        })
    }
    
});
