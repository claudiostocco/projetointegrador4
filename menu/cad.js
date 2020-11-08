$(".info-item .btn").click(function () {
    $(".container").toggleClass("log-in");
  });
  $("#bProcurar").click(function () {
    document.getElementById("edTime").value = "08:50";
    // $("#edTime").value = "08:50";
  });
  $("#bCadastrar").click(function () {
    $(".container").addClass("active");
  });
