$(document).ready(function () {

  $('#addMessage').on('submit', function (e) {
    e.preventDefault();
    var item = $('form input');
    var msg = { msgItem: item.val() };

    $.ajax({
      type: 'POST',
      url: '/msg',
      data: msg,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });

    return false;

  });

  $('#findMessage > button').on('click', function (e) {
    e.preventDefault();
    var idText = $('#retrieveItem').val()

    $.ajax({
      type: 'GET',
      url: '/msg/' + idText,
      success: function (data) {
        console.log(data)
        $('#findMessage  #results').append('<p>' + data.msgItem + '</p>')
      }
    });

    return false;

  });

  /*
    $('#addMessage').on('submit', function (e) {
      $('li').on('click', function () {
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/msg/' + item,
          success: function (data) {
            //do something with the data via front-end framework
            location.reload();
          }
        });
      });
  */
});
