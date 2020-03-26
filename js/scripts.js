$(document).ready(function() {

  $('#theForm').submit(function(event){
    event.preventDefault();
    
    var name = $('#name').val();
    var address1 = $('#address1').val();
    var address2 = $('#address2').val();
    var phone = $('#phone').val();
    var email = $('#email').val();

    $('#contactList').prepend();
  });


});