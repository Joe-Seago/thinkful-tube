$(document).ready(function() {
	$('#submit-button').on('click', function() {
		event.preventDefault();
		var searchTerm = $('#text-input').val();
		$.ajax({
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCylpVLLgIb-l-10jl9Qa-FlePZfp0R-Jc&q=' + searchTerm,
			dataType: 'json',
		}).done(function(results) {
			$('results.items').each(function(index) {
			$('.search-results').append('<li><img src=' + results.items[index].snippet.thumbnails.medium.url + '></li>');
			console.log(results.items[index].snippet.title);
			console.log(results.items[index].snippet.thumbnails.medium.url);
			//console.log(results);
			});
		});
	});
});