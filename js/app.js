$(document).ready(function () {

  function searchYoutube(term) {
    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      data: {
        part: 'snippet',
        key: 'AIzaSyCylpVLLgIb-l-10jl9Qa-FlePZfp0R-Jc',
        q: term
      }
    }).done(function (results) {
      $.each(results.items, function (index, value) {
        $('.search-results').append('<li id="' + value.id.videoId + '"><a href="#"><img src=' + value.snippet.thumbnails.medium.url +
          '></a></li>');
      });
    });
  }

  $('#submit-button').on('click', function () {
    event.preventDefault();

    $('.search-results li').remove();

    var searchTerm = $('#text-input').val();
    searchYoutube(searchTerm);
});

  $('.search-results').on('click', 'li', function() {
 	$('.lightbox-container').empty();
 	$('.lightbox-container').append('<iframe width="560" height="315" src="https://youtube.com/embed/' + $(this).attr('id') + '" frameborder="0" allowfullscreen></iframe>');
  	// console.log($(this).attr('href'));

  	//<a class="thumbnails" href="https://www.youtube.com/watch?v=' +
    //      value.id.videoId + '">
  });
});
