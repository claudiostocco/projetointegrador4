$(".info-item .btn").click(function () {
    $(".container").toggleClass("log-in");
  });

// $(".container-form .btn:first").click(function () {
    // $('#form-item-container').html('<p>Clientes</p>');
    // $(".container").toggleClass("log-in");
  // });

$("#bCadRota").click(function () {
    $('#form-item-container').html('<iframe src="cadRota.html" frameborder="0" height="320px"></iframe>');
    $(".container").toggleClass("log-in");
  });

$("#bVerRota").click(function () {
    $('#form-item-container').html('<iframe src="verRota.html" frameborder="0" height="320px"></iframe>');
    $(".container").toggleClass("log-in");
  });

$("#bPd").click(function () {
    $('#form-item-container').html('<p>Pedidos</p>');
    $(".container").toggleClass("log-in");
  });

$("#bTeste").click(function () {
    $(".container").addClass("active");
  });

$(".container-form .btn:last").click(function () {
    $(".container").addClass("active");
    window.close();
  });
