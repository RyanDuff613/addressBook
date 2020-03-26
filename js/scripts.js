$(document).ready(function() {

  $('#theForm').submit(function(event){
    event.preventDefault();
    
    var name = $('#name').val();
    var address1 = $('#address1').val();
    var address2 = $('#address2').val();
    var phone = $('#phone').val();
    var email = $('#email').val();

    console.log(name, address1, address2, phone, email);
    $('#contactList').after(name+'<br>'+address1+'<br>'+address2+'<br>'+phone+'<br>'+email+'<br>'+'<p><hr></p>');
  });


});