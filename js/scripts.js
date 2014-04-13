"use strict";


var $wrapper = $('.wrapper');

var Card = function() {
    this.html = '<div class="block"></div>';
    this.color = '#f22ed9';
}
var cards = [];
    for(var i =0; i<8; i++) {
        cards.push(new Card());
        $wrapper.append(cards[i]);
}

$(document).ready(function() {
    for(var i =0; i<8; i++) {
        if(cards[i].html !== undefined) {
            $wrapper.append(cards[i].html);
        } else {
            console.log("nie ma !");
        }
        
    }
});