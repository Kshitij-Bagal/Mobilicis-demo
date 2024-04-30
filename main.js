
let popup = document.querySelector(".popup");  

function openPopup() {
  document.getElementById('popup').style.display = 'block';
  document.querySelector('.popup-overlay').style.display = 'block';
  containerElement.setAttribute('class', 'blur');  }
  
  function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.querySelector('.popup-overlay').style.display = 'none';
  containerElement.setAttribute('class', null);}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let section = document.querySelector('section');
let cover_div = document.querySelector('.cover_div');
let openRegister = document.querySelector('.openRegister');
let openLogin = document.querySelector('.openLogin');

openRegister.addEventListener('click', () => {
  cover_div.style.transform = "rotateY(180deg)";
  section.style.height = "450px";
});
openLogin.addEventListener('click', () => {
  cover_div.style.transform = "rotateY(0deg)";
  section.style.height = "300px";
});


function toggleLanguage() {
  const languageSelect = document.getElementById('languageSelect');
  const selectedLanguage = languageSelect.value;

  if (selectedLanguage === 'en') {
    document.getElementById('englishVersion').style.display = 'block';
    document.getElementById('japaneseVersion').style.display = 'none';
  } else if (selectedLanguage === 'ja') {
    document.getElementById('englishVersion').style.display = 'none';
    document.getElementById('japaneseVersion').style.display = 'block';
  }
}

// Event listener for language select change
document.getElementById('languageSelect').addEventListener('change', toggleLanguage);

// Initial toggle to display the default language
toggleLanguage();




















































  // <!--<section class="job-search">
  //     <h2>Search for Jobs</h2>
  //     <form action="/jobs" method="GET">
  //       <input type="text" name="q" placeholder="Keyword">
  //       <select name="location">
  //         <option value="">All Locations</option>
  //         <option value="tokyo">Tokyo</option>
  //         <option value="osaka">Osaka</option>
  //         <option value="kyoto">Kyoto</option>
  //       </select>--></input>