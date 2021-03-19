
$(document).ready(function() {


	$('body').videoBG({
		position:"fixed",
		zIndex:0,
		mp4:'video/christmas_snow.mp4',
		ogv:'video/christmas_snow.ogv',
		webm:'video/christmas_snow.webm',
		poster:'video/christmas_snow.jpg',
		opacity: 1,
		fullscreen:true,
	});
	
	
	$('#hero').videoBG({
		mp4:'video/christmas_snow.mp4',
		ogv:'video/christmas_snow.ogv',
		webm:'video/christmas_snow.webm',
		poster:'video/christmas_snow.jpg',
		scale:true,
		zIndex:0,
		opacity: 1,
	});
			
})