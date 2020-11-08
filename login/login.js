$(".info-item .btn").click(function () {
    $(".container").toggleClass("log-in");
  });

$("#bEntrar").click(function () {
  console.log("login... ");
  if (document.getElementById("cbLoginAnonimo").checked) {
    window.location.href = "../menu/menu.html";
    // window.open("../menu/menu.html","","",true);
  }
});