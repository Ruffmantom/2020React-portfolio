function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $(".navbar").css("background-color", "rgba(100, 100, 100)");

  } else {
    $(".navbar").css("background", "none");

  }
}

function deleteClasses() {
  $(".navbar").classList.remove("navbar-light");
  $(".navbar").classList.remove("bg-light");
}

$(document).ready(function () {
  deleteClasses();
  window.onscroll = function () { scrollFunction() };


  // contact form page------------------------------
  // --------------------------------------
  // -------------------------------

  $('#form').on('submit', (e) => {
    e.preventDefault();

    const email = $('#email').val().trim();
    const personsName = $('#name').val().trim();
    const message = $('#text').val().trim();

    const data = {
      email,
      personsName,
      message
    };

    $.post('/email', data, function () {
      console.log("Server recieved our data!")
    }
    );

  });

  // the end of document.ready
});



