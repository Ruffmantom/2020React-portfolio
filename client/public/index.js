function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $(".navbar").css("background-color", "rgba(100, 100, 100)");

  } else {
    $(".navbar").css("background", "none");

  }
}

$(document).ready(function () {
  let overlayText = $('.overlay-text').text();
  console.log(overlayText)
  console.log(overlayText.toUpperCase())
  var upper = overlayText.toUpperCase()
// ------
 
 

  window.onscroll = function () { scrollFunction() };
  //setting burger change when clicked
  burger.on('click', function () {
    burger.css({ "background-image": "url('../../assets/images/x-w-min.png') !important" });
  })
  burger.on('click', function () {
    burger.css({ "background-image": "url('../../assets/images/burger-w-min.png') !important" });
   
  }) 
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

    $.post('/email',data, function() {
      console.log("Server recieved our data!")
    }
    );

  });

  // the end of document.ready
});



