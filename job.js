let jobsData; 
fetch('jobs.json')
  .then(response => response.json())
  .then(data => {
    jobsData = data; 
    const jobCardsContainer = document.getElementById('jobCardsContainer');
    renderJobCards(jobsData, jobCardsContainer);
  })
  .catch(error => console.error('Error fetching jobs:', error));


function renderJobCards(jobs, container) {
  container.innerHTML = '';
  jobs.forEach(job => {
    const jobCard = createJobCard(job);
    container.appendChild(jobCard);
  });
}

function createJobCard(job) {
  const jobCard = document.createElement('div');
  jobCard.classList.add('job');
  jobCard.innerHTML = `
  <div class="job-Titlescreen">
    <img class="job-icon" src="${job.image}">
    <div class="job-card-title"> 
      <p>${job.title}</p>
      <div class="job-title-details">
        <div class="job-title-opning">
          <img class="details-icon" src="Resource/opening.png">
          <span class="job-openings">${job.openings}</span>
          </div>
          <div class="job-title-salary">
          <img class="details-icon" src="Resource/salary.png">
          <span class="job-ctc">${job.ctc} Million Yen</span>  
          </div>
      </div>    
      <div class="job-tags">
        ${job.tags.map(tag => `<span>${tag}</span>`).join('')}
      </div>
    </div>
  </div>
    <div class="job-content">
      <p class="job-title">${job.title}</p>
      <p class="job-company">${job.company}</p>
      <p class="job-description">${job.description}</p>
      <div class="job-info">
      <div class="job-details">
      <span class="job-openings">${job.openings} Openings</span>
      <span class="job-ctc">${job.ctc} Million Yen</span>
      <span class="job-location">${job.location}</span></div>
      <button class="job-button">Apply Now</button>
      </div>
    </div>
  `;
  return jobCard;
}


function searchByTags() {
  const searchTerm = document.getElementById('searchInput-tag').value.toLowerCase();
  const jobCards = document.querySelectorAll('.job');

  jobCards.forEach(jobCard => {
    const jobTags = jobCard.querySelectorAll('.job-tags span');
    let matchFound = false;

    jobTags.forEach(tag => {
      const tagText = tag.textContent.toLowerCase();
      if (tagText.includes(searchTerm)) {
        matchFound = true;
      }
    });

    if (matchFound) {
      jobCard.style.display = 'flex';
    } else {
      jobCard.style.display = 'none';
    }
  });
}

function searchByTitle() {
  const searchTerm = document.getElementById('searchInput-title').value.toLowerCase();
  const jobCards = document.querySelectorAll('.job');

  jobCards.forEach(jobCard => {
    const jobTitle = jobCard.querySelector('.job-title').textContent.toLowerCase();

    if (jobTitle.includes(searchTerm)) {
      jobCard.style.display = 'flex';
    } else {
      jobCard.style.display = 'none';
    }
  });
}

function searchByCompany() {
  const searchTerm = document.getElementById('searchInput-company').value.toLowerCase();
  const jobCards = document.querySelectorAll('.job');

  jobCards.forEach(jobCard => {
    const jobCompany = jobCard.querySelector('.job-company').textContent.toLowerCase();

    if (jobCompany.includes(searchTerm)) {
      jobCard.style.display = 'flex';
    } else {
      jobCard.style.display = 'none';
    }
  });
}

document.getElementById('searchInput-tag').addEventListener('input', searchByTags);
document.getElementById('searchInput-title').addEventListener('input', searchByTitle);
document.getElementById('searchInput-company').addEventListener('input', searchByCompany);


const salarySlider = document.getElementById('salary-slider');
const openingsSlider = document.getElementById('openings-slider');

// Function to filter jobs by salary
function sortJobsBySalary(jobs, value) {
  return jobs.filter(job => job.ctc <= value);
}

// Function to filter jobs by openings
function sortJobsByOpenings(jobs, value) {
  return jobs.filter(job => job.openings <= value);
}

// Function to render job cards
function renderFilteredJobCards(jobs, container) {
  container.innerHTML = '';
  jobs.forEach(job => {
    const jobCard = createJobCard(job);
    container.appendChild(jobCard);
  });
}

// Event listener for salary slider
salarySlider.addEventListener('input', function() {
  const filteredJobs = sortJobsBySalary(jobsData, parseInt(this.value));
  renderFilteredJobCards(filteredJobs, document.getElementById('jobCardsContainer'));
});

// Event listener for openings slider
openingsSlider.addEventListener('input', function() {
  const filteredJobs = sortJobsByOpenings(jobsData, parseInt(this.value));
  renderFilteredJobCards(filteredJobs, document.getElementById('jobCardsContainer'));
});


var salaryValue= document.getElementById('salary-value');
salaryValue.innerHTML = salarySlider.value;
salarySlider.oninput = function(){
  salaryValue.innerHTML =" "+ this.value;
}

var openingsValue= document.getElementById('openings-value');
openingsValue.innerHTML = openingsSlider.value;
openingsSlider.oninput = function(){
  openingsValue.innerHTML =" "+ this.value;
}



