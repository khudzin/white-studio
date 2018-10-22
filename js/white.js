// Back to Top button  
    (function() {
      'use strict';

      function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
          goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
          goTopBtn.classList.remove('back_to_top-show');
        }
      }

      function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 0);
        }
      }

      var goTopBtn = document.querySelector('.back_to_top');

      window.addEventListener('scroll', trackScroll);
      goTopBtn.addEventListener('click', backToTop);
    })();
    //end


//Show-hide services
    function s1() {
        let i = document.querySelector("#s1");
        if (i.style.display === "none") {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    }
    function s2() {
        let i = document.querySelector("#s2");
        if (i.style.display === "none") {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    }
    function s3() {
        let i = document.querySelector("#s3");
        if (i.style.display === "none") {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    }
    //end


//Price change w/ vue
    var sheetUrl = 'https://spreadsheets.google.com/feeds/list/1vcz6CMv4dYi3_XP5EO9SSLBUdAKFEBgDxe6WaWvQ7Js/od6/public/values?alt=json'

    var blog = new Vue({
      el: '#price',
      
      data: {
    		entries: null
    	},
      
      watch: {
    		currentPage: 'fetchData'
    	},

      created: function () {
        this.fetchData()
      },
      
      methods: {
        fetchData: function () {
          var xhr = new XMLHttpRequest()
          var self = this
          xhr.open('GET', sheetUrl )
          xhr.onload = function () {        
            self.entries = JSON.parse(xhr.responseText)
            self.entries = self.entries.feed.entry        
            console.log(self.entry)
          }
          xhr.send()
        },
    //functions

      },  
      
    })
    //end


//Menu button on smal screen
  function show() {document.querySelector(".nav").classList.toggle('active');}
  function act() {document.querySelector(".toggle-btn").classList.toggle('active');}
  //end