var $articleHeaders = $('h1');
console.log($articleHeaders);
$articleHeaders[0].innerHTML = 'apple';


var $oddArticles = $('article:nth-child(odd)');
$oddArticles.addClass('pretty');

var $hiddenDiv = $('#hidden-div')
var $button = $('#click-me');
console.log($button);
$button.click(function(){
  $hiddenDiv.toggleClass('hidden');
});