var options = {
	offset: 200
}
var header = new Headhesive('header',options);
$('.handle').on('click', function(){
	$('nav ul').toggleClass('showing');
});