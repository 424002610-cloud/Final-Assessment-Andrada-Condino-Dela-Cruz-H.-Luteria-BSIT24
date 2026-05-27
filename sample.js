/**
 * Multi-Artist Dynamic Workspace Content Matrix Data Store
 */
const artistData = {
  member1: {
    themeClass: "theme-member1",
    intro: "Hi! I am <strong>Jack</strong>. My favorite artist is <strong>Sleeping with Sirens</strong> because of their high-octane post-hardcore energy and Kellin Quinn's incredible vocal range.",
    logo: "JACK // SWS",
    heroTitle: "Let's Cheers to This",
    heroTagline: "Dive deep into the golden era of post-hardcore, unforgettable high notes, and raw alternative rock anthems.",
    heroBtn: "Join the SWS Family",
    heroBg: "linear-gradient(180deg, rgba(13, 21, 39, 0.4), #0d1527), url('swsbg.png')",
    secTitle: "SWS Essentials",
    secSub: "Albums that defined modern alternative scene culture.",
    modalTitle: "Join the Sleeping with Sirens Fan Network",
    artistValue: "Sleeping with Sirens",
    cards: [
      { title: "With Ears to See...", text: "The iconic debut album that shook the alternative underground scene.", img: "sws1.jpg", link: "https://open.spotify.com/album/1oRHYWmIhP5bmXYerh9qXj?si=UaEqNlWfTFq0sl9j2wGL6A" },
      { title: "Let's Cheers to This", text: "Massive anthems tracking hope, dynamic guitar riffs, and personal triumphs.", img: "sws3.jpg", link: "https://open.spotify.com/album/3RSJ0kbP7TxLRqH7BqX8Gl?si=ANRtbc2LQfafpriS4RRMOA" },
      { title: "Madness Era", text: "A beautifully polished transition into mainstream melodic rock structures.", img: "sws.jpg", link: "https://readdork.com/track/sleeping-with-sirens-madness" }
    ]
  },
  member2: {
    themeClass: "theme-member2",
    intro: "What's up! I am <strong>Vonn</strong>. I have massive respect for <strong>J. Cole</strong> due to his deep lyricism, real-life storytelling concepts, and pure contribution to hip-hop culture.",
    logo: "VONN // COLE",
    heroTitle: "The Dreamville State",
    heroTagline: "Step into the workspace of one of hip-hop's greatest modern lyricists—no features required.",
    heroBtn: "Enter Dreamville Network",
    heroBg: "linear-gradient(180deg, rgba(20, 10, 28, 0.4), #140a1c), url('jcolebg.png')",
    secTitle: "Cole's Discography Legends",
    secSub: "Masterclass albums built entirely around poetic, hard-hitting truth.",
    modalTitle: "Register for Dreamville Updates",
    artistValue: "J. Cole",
    cards: [
      { title: "2014 Forest Hills Drive", text: "A legendary double-platinum journey back to childhood roots and humility.", img: "jcole1.png", link: "https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG?si=23ab6a40f47949e3" },
      { title: "4 Your Eyez Only", text: "A heartbreakingly beautiful conceptual jazz-rap tribute to a fallen friend.", img: "jcole2.png", link: "https://open.spotify.com/album/3CCnGldVQ90c26aFATC1PW?si=xtVD9354TSSKwy7b0afJJA" },
      { title: "The Off-Season", text: "Pure raw lyricism, stellar flows, and top-tier technical rap performance.", img: "jcole3.jpg", link: "https://medium.com/modern-music-analysis/the-off-season-by-j-cole-774a342ff8e6" }
    ]
  },
  member3: {
    themeClass: "theme-member3",
    intro: "I'm Zyann, and Keshi’s moody lo-fi beats and falsetto are my ultimate late-night vibe. I'm so hooked that he was my #1 Spotify Top Artist last year.",
    logo: "ZYANN // KESHI",
    heroTitle: "Requiem & Melancholy",
    heroTagline: "Experience the ultimate late-night blend of underground lo-fi hip-hop aesthetics and acoustic alt-R&B.",
    heroBtn: "Access Cult Keshi VIP",
    heroBg: "linear-gradient(180deg, rgba(26, 17, 5, 0.4), #1a1105), url('keshibg.jpg')",
    secTitle: "EPs & Studio Journeys",
    secSub: "Warm guitar plucks meeting moody sub-bass lines perfectly.",
    modalTitle: "Subscribe to Keshi's Cult Mailing List",
    artistValue: "Keshi",
    cards: [
      { title: "skeletons EP", text: "The foundational bedroom-pop tracks that defined his signature atmospheric aesthetic.", img: "keshi1.png", link: "https://open.spotify.com/album/14IZ6aHadzsKrNMnntwLb0?si=3luLfTCiT_-GlLWSHZM_ig" },
      { title: "Gabriel (2022)", text: "His big studio breakthrough fusing orchestral designs with massive R&B drops.", img: "keshi2.webp", link: "https://open.spotify.com/track/4RfjLV2FwnrxCjhCA3ZHf0?si=d785281aedd144fc" },
      { title: "Requiem (2024)", text: "A deeper, mature dive into love, loss, and the pressures of global touring.", img: "keshi3.jpg", link: "https://www.buzzfeed.com/jessicabui1/keshi-requiem-interview" }
    ]
  },
  member4: {
    themeClass: "theme-member4",
    intro: "Hello, <strong>Harvey</strong> here. I'm a huge fan of <strong>The 1975</strong> because of their unique, chaotic mix of 80s pop, indie rock, and clever cultural commentary.",
    logo: "HARVEY // 1975",
    heroTitle: "At Their Very Best",
    heroTagline: "Step inside Matty Healy’s brilliant, self-aware world of art-pop, heavy saxophones, and cultural satire.",
    heroBtn: "Get Tour Announcements",
    heroBg: "linear-gradient(180deg, rgba(5, 20, 16, 0.4), #051410), url('the1975.png')",
    secTitle: "Evolving Album Formats",
    secSub: "From minimalist monochrome post-punk to neon dance anthems.",
    modalTitle: "Apply for The 1975 Presale Access Codes",
    artistValue: "The 1975",
    cards: [
      { title: "The 1975 (2013)", text: "Moody, guitar-driven retro indie-pop anthems about youth and UK night-culture.", img: "the19751.jpg", link: "https://open.spotify.com/album/6Z1zv6Hw9bdvSoxI5uYk2h?si=Z3N8htEaRp6Bia4j9OrqUw" },
      { title: "I Like It When You Sleep...", text: "An absolute maximalist 80s neon synthpop explosion with sprawling ambient soundscapes.", img: "the19752.png", link: "https://open.spotify.com/album/12zl1WmHPFCSyKYbL4vBZn?si=hW77HspxQ3W7TspDcR5HcQ" },
      { title: "Being Funny In A Foreign Language", text: "A stripped-back, organic, ultra-tight collection of perfect classic pop melodies.", img: "aboutyou.png", link: "https://vickyxleigh.medium.com/being-funny-in-a-foreign-language-album-review-e755ac0a1d80" }
    ]
  }
};

// ==========================================================================
// A. MAIN TAB SELECTOR EVENT DELEGATION SYSTEM
// ==========================================================================
document.getElementById('memberTabs').addEventListener('click', function(e) {
  const clickedButton = e.target.closest('.nav-link');
  if (!clickedButton) return;

  const memberKey = clickedButton.getAttribute('data-member');
  if (!memberKey) return;

  const data = artistData[memberKey];
  
  document.querySelectorAll('#memberTabs .nav-link').forEach(btn => btn.classList.remove('active'));
  clickedButton.classList.add('active');

  document.body.className = data.themeClass;
  document.getElementById('memberIntroText').innerHTML = data.intro;
  document.getElementById('siteLogo').innerText = data.logo;
  document.getElementById('heroTitle').innerText = data.heroTitle;
  document.getElementById('heroTagline').innerText = data.heroTagline;
  document.getElementById('heroBtn').innerText = data.heroBtn;
  document.getElementById('sectionTitle').innerText = data.secTitle;
  document.getElementById('sectionSubtitle').innerText = data.secSub;
  document.getElementById('contactModalLabel').innerText = data.modalTitle;
  document.getElementById('selectedArtistInput').value = data.artistValue; 

  document.getElementById('dynamicHero').style.background = data.heroBg;

  data.cards.forEach((cardData, idx) => {
    const offset = idx + 1;
    document.getElementById(`cardTitle${offset}`).innerText = cardData.title;
    document.getElementById(`cardText${offset}`).innerText = cardData.text;
    document.getElementById(`cardImg${offset}`).src = cardData.img;
    document.getElementById(`cardBtn${offset}`).href = cardData.link;
  });
});

// ==========================================================================
// PART B: 🔒 VALIDATION ENGINE & ASYNC DATA ROUTER (AJAX)
// ==========================================================================
const contactForm = document.getElementById('fanRegistrationForm');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const btnViewComments = document.getElementById('btnViewComments');
const commentsContainer = document.getElementById('commentsContainer');

const emailRegexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailField.addEventListener('input', function() {
  if (emailRegexPattern.test(emailField.value.trim())) {
    emailField.setCustomValidity(""); 
  } else {
    emailField.setCustomValidity("Invalid"); 
  }
});

messageField.addEventListener('input', function() {
  if (messageField.value.trim().length >= 20) {
    messageField.setCustomValidity(""); 
  } else {
    messageField.setCustomValidity("Too short");
  }
});

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();

  if (!emailRegexPattern.test(emailField.value.trim())) {
    emailField.setCustomValidity("Invalid");
  } else {
    emailField.setCustomValidity("");
  }

  if (messageField.value.trim().length < 20) {
    messageField.setCustomValidity("Too short");
  } else {
    messageField.setCustomValidity("");
  }

  if (!contactForm.checkValidity()) {
    contactForm.classList.add('was-validated');
    return;
  }

  const formData = new FormData(contactForm);

  fetch('comments.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) throw new Error('Data processing rejected by system server.');
    return response.json();
  })
  .then(result => {
    alert(`Success! Comment recorded safely under the ${formData.get('selectedArtist')} matrix.`);
    contactForm.reset();
    contactForm.classList.remove('was-validated');
    
    const registerModalEl = document.getElementById('contactModal');
    const modalInstance = bootstrap.Modal.getInstance(registerModalEl);
    if (modalInstance) modalInstance.hide();
    
    loadCommentsSystem();
  })
  .catch(error => {
    alert("Network System Error: " + error.message);
  });
}, false);

function loadCommentsSystem() {
  commentsContainer.innerHTML = '<p class="text-center text-muted py-3">Accessing database logs...</p>';
  
  fetch('comments.php')
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        commentsContainer.innerHTML = '<div class="alert alert-secondary text-center bg-dark border-secondary text-muted">No fan comments logged yet. Be the first!</div>';
        return;
      }
      
      let htmlContent = '';
      data.forEach(item => {
        htmlContent += `
          <div class="card mb-3 border-secondary bg-dark shadow-sm">
            <div class="card-body p-3 text-start">
              <div class="d-flex justify-content-between align-items-center mb-2 border-bottom border-secondary pb-2">
                <div>
                  <h6 class="fw-bold mb-0 text-white">${item.name} 
                    <span class="badge bg-primary ms-2 small" style="font-size:0.75rem;">${item.artist} Network</span>
                  </h6>
                  <small class="text-muted text-lowercase font-monospace" style="font-size:0.8rem;">${item.email}</small>
                </div>
                <span class="text-muted small">${item.timestamp}</span>
              </div>
              <p class="mb-1 text-light small"><strong class="text-info">Subj:</strong> ${item.subject}</p>
              <p class="mb-0 text-secondary small bg-secondary-dark p-2 rounded mt-2" style="white-space: pre-wrap;">${item.message}</p>
            </div>
          </div>
        `;
      });
      commentsContainer.innerHTML = htmlContent;
    })
    .catch(err => {
      commentsContainer.innerHTML = `<div class="alert alert-danger bg-dark border-danger text-danger">Error retrieving database streams: ${err.message}</div>`;
    });
}

btnViewComments.addEventListener('click', loadCommentsSystem);
document.querySelector('#memberTabs .nav-link.active').click();