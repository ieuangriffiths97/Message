$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var msg = {msgItem: item.val()};

      $.ajax({
        type: 'POST',
        url: '/msg',
        data: msg,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/msg/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
