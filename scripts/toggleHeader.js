      //sticky header that also is set up to change the background header and
      //link colors
      const header = document.querySelector("header");
      const main = document.querySelector("main");
      const headerHeight = header.getBoundingClientRect().height;

      function toggleHeader() {
        if (window.scrollY > headerHeight) {
          header.classList.add(
            "sticky",
            "animate__animated",
            "animate__fadeInDown"
          );
        } else {
          header.classList.remove(
            "sticky",
            "animate__animated",
            "animate__fadeInDown"
          );
        }
      }

      window.addEventListener("scroll", toggleHeader);