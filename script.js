var nouns = Array("truthers", "devoted Christians", "religious fanatics", "conspiracists", "schemers", "zealots", "bringers of peace");
var adjectives = ["high", "towering", "soaring", "high-rise", "sky-scraping", "top", "peak", "record"];
var verbs = ["shrinked", "withdrew", "condensed", "scaled down", "retracted", "lessened", "reduced", "decreased"];

$(document).ready(function() {
	$("h1").hover(changeStyle);
	$("h2").hover(changeStyle);
	$("h3").hover(changeStyle);
	$("ul").hover(changeStyle);
    $("li").hover(changeStyle);

    $(".noun").click(changeNoun);
    $(".verb").click(changeVerb);
    $(".adj").click(changeAdjective);

    function changeStyle() {
    	$(this).toggleClass("hovered");
    }

    function changeNoun() {
    	var randomNoun = nouns[Math.floor(Math.random()*nouns.length)];
    	$(this).text(randomNoun);
    }

    function changeVerb() {
    	var randomVerb = verbs[Math.floor(Math.random()*verbs.length)];
    	$(this).text(randomVerb);
    }

    function changeAdjective() {
    	var randomAdj = adjectives[Math.floor(Math.random()*adjectives.length)];
    	$(this).text(randomAdj);
    }
});