
/*
  Layout
 */

const swiper = new Swiper('#brands .swiper', {
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    }
  }
});


const swiper2 = new Swiper('#feed .swiper', {
  


  loop:true,
  
  autoplay: {
    delay: 2000,
  },
  
  slidesPerView: 2,
  spaceBetween: 60,

  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    }
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

const swipercont = new Swiper('#swipercon .swiper', {
 

  

});


/*
  Main Content
 */

/*
  Home Page
 */
/*
  Out Latest Projects
 */

  const projectsFiltersBtns = document.querySelectorAll("#latest-projects [data-filter]");
  const projects = document.querySelectorAll("#latest-projects [data-cat]");
  
  function projectFilterClickHandler(e) {
    const clickedBtn = e.target;
    const filterButtons= document.querySelectorAll("button.transition-colors")
    filterButtons.forEach((filterButton)=>{

      filterButton.classList.remove("active")

    })
    clickedBtn.classList.add("active")
    const projectSelector = clickedBtn.getAttribute("data-filter");
  
    if (projectSelector === "all") return projects.forEach(function (project) {
      project.classList.remove("hide");
    });
  
    const relatedProjects = document.querySelectorAll(`#latest-projects [data-cat="${projectSelector}"]`);
  
    projects.forEach(function (project) {
      project.classList.add("hide");
    })
  
    relatedProjects.forEach(function (project) {
      project.classList.remove("hide");
    })
  }
  
  projectsFiltersBtns.forEach(function (projectFilterBtn) {
    projectFilterBtn.addEventListener('click', projectFilterClickHandler);
  })
  
  

