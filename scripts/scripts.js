document.addEventListener('DOMContentLoaded', function() {

  
  // TO LOADS SECTIONS DYNAMICALLY
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);}
      });
  },{threshold: 0.3 //40%
  });

  sections.forEach(section => {
      observer.observe(section);
  });


  // SKILLS SECTION
  const expandButtons = document.querySelectorAll('.expand-btn');
  
  expandButtons.forEach(button => {
    button.addEventListener('click', function() {
      const details = this.parentElement.querySelector('.additional-details');
      const isOpen = details.classList.toggle('expanded');
      this.setAttribute('aria-expanded', isOpen);
      this.querySelector('i').classList.toggle('fa-plus');
      this.querySelector('i').classList.toggle('fa-minus');

      // Toggle the height animation
      if (isOpen) {
        details.style.height = details.scrollHeight + 'px';
      } else {
        details.style.height = '0';
      }
    });

    });
   
});

//NAVIGATION BAR
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});



// EDUCATION AND EXPERIENCE SECTION
function showTimeline(timeline) {
    const academics = document.getElementById('academics');
    const work = document.getElementById('work');
    
    if (timeline === 'academics') {
        academics.style.display = 'block';
        work.style.display = 'none';
    } else {
        academics.style.display = 'none';
        work.style.display = 'block';
    }
}


// PROJECT SECTION


var modal = document.getElementById('project-modal');
var btns = document.getElementsByClassName("btn-project-details");
var span = document.getElementsByClassName("close")[0];

// Mock data
var projects = {
  project1: {
    title: "Responsive Recipe Hub",
    description: "Responsive Recipe Hub is a dynamic recipe website I designed and developed using HTML and CSS. This project demonstrates my expertise in crafting well-structured web pages.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "github.com"
  },
  project2: {
    title: "Personal Finance Tracker",
    description: "Personal Finance Tracker is a excel-sheet designed to empower users with financial mangement tools. This project demonstrate my ability to combine by excel skills with an understanding of financial principles",
    technologies: ["Excel", "VBA", "Finance"],
    link: "github.com"
  },

  project3: {
    title: "ProjectName",
    description: "This section will going to have complete description of the project you are showcasing",
    technologies: ["Tech1", "Tech2", "Tech3"],
    link: "github.com" //link the page to redirect, here
  },
  project4: {
    title: "ProjectName",
    description: "This section will going to have full description of the project you are showcasing",
    technologies: ["Tech1", "Tech2", "Tech3"],
    link: "github.com" //link the page to redirect, here
  }
  // Add more projects as needed
};

// When the user clicks the button, open the modal 
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    var projectId = this.getAttribute('data-project-id');
    var project = projects[projectId];

    if (project) {
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-description').textContent = project.description;
      var techList = document.getElementById('modal-technologies');
      techList.innerHTML = "";
      project.technologies.forEach(function(tech) {
        var li = document.createElement('li');
        li.textContent = tech;
        techList.appendChild(li);
      });
      document.getElementById('modal-link').href = project.link;
      modal.style.display = "block";
      modal.classList.add('show');
    }
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modal.classList.remove('show');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.remove('show');
  }
}

