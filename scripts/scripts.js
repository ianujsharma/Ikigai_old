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
    title: "Responsive Blog Website",
    description: "A minimalist responsive blog website template offers a clean, simple design with a focus on content. It features a streamlined layout, intuitive navigation, and responsive elements that adjust to any screen size. The template emphasizes readability and user experience, ensuring a smooth browsing experience across all devices.
",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "carouselblog.cloud"
  },
  project2: {
    title: "Portfolio Management",
    description: "Managed a diversified investment portfolio, focusing on asset allocation and risk management. Conducted in-depth market research to identify high-potential investments. Regularly reviewed performance to ensure alignment with financial goals and risk tolerance.",
    technologies: ["Excel", "Mathematics", "Finance"],
    link: "return.xlsx"
  },

  project3: {
    title: "Bdugeting and Forecasting",
    description: "Developed comprehensive budgeting and forecasting models to track revenue and expenses. Analyzed financial data to provide accurate projections for future periods. Enabled strategic decision-making by ensuring financial targets and resources were effectively allocated.",
    technologies: ["Mathematics", "Excel", "Finance"],
    link: "https://github.com/" //link the page to redirect, here
  },
  project4: {
    title: "Financial Analysis",
    description: "Conducted a detailed analysis of financial statements to assess the company's performance and financial health. Utilized key financial ratios and metrics to identify strengths, weaknesses, and potential risks. Provided actionable insights to support strategic decision-making and business growth.",
    technologies: ["Excel", "VBA", "Finance"],
    link: "https://github.com/" //link the page to redirect, here
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

