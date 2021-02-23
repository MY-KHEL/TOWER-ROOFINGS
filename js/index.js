var nav = document.getElementById('nav');

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.scrollY > 0) {
      nav.classList.add('scroll')
    } else {
     nav.classList.remove('scroll')
    }
  }

  var year = new Date()
  var time = year.getFullYear()

x = document.getElementById('year').innerHTML = time