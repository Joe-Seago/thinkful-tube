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
      $.each(results.items, function (index) {
        $('.search-results').append('<li><a href="https://www.youtube.com/watch?v=' +
          results.items[index].id.videoId + '"><img src=' + results.items[index].snippet.thumbnails.medium.url +
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
});
