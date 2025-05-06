/**
 * Main JavaScript for the Website Status Checker
 * 
 * This file handles:
 * 1. Form validation with real-time feedback
 * 2. Loading animations during form submission
 * 3. Random fun messages for status results
 * 4. Visual effects and animations
 */

// DOM element references
const form = document.getElementById('url-form');
const spinner = document.getElementById('loading-spinner');
const submitBtn = document.getElementById('submit-btn');
const urlInput = document.getElementById('id_url');
const urlIcon = document.getElementById('url-icon');

// Add Bootstrap styling to the Django-generated input
urlInput.classList.add('form-control');

/**
 * Collection of humorous messages displayed when a site is UP
 * These add personality to successful status checks
 */
const upMessages = [
  "Woohoo! This site is more reliable than my ex!",
  "Up and running smoother than my coffee-fueled morning routine!",
  "This website is alive and kicking like my neighbor's stereo at 2 AM!",
  "Site's up! Unlike my motivation to go to the gym!",
  "It's alive! Dr. Frankenstein would be proud of this server!",
  "Houston, we have connection! This site is more stable than my Wi-Fi!",
  "Good news! This site shows up better than I do to my Zoom meetings!",
  "Up and running like my thoughts at 3 AM when I'm trying to sleep!",
  "Online! Unlike my dating prospects after I mentioned I love coding!",
  "Working perfectly! If only my life were running this smoothly...",
  "Site's up and ready, like me at 3AM playing 'just one more game'!",
  "Running great! Better uptime than my productivity during work from home!",
  "Faster response than customer service on a holiday weekend!",
  "This connection is stronger than my relationship with vegetables!",
  "Working fine! If only my alarm clock was this reliable on Mondays...",
  "Up and visible, unlike those matching socks I can never find!",
  "More alive than my houseplants after a two-week vacation!",
  "Functioning better than my brain before the first coffee of the day!",
  "Responsive! Unlike my crush reading messages on 'seen'!",
  "More available than GPUs during a crypto mining boom!",
  "More consistent than my workout schedule during the holidays!"
];

/**
 * Collection of humorous messages displayed when a site is DOWN
 * These add personality to failed status checks
 */
const downMessages = [
  "Oops! This site is ghosting you harder than my Tinder matches!",
  "Down like my phone battery when I need it most!",
  "This site has vanished like my snacks in a shared fridge!",
  "Site's down! Probably took a coffee break without telling anyone.",
  "Error 404: Website is playing hide and seek (and winning!).",
  "This website is more unavailable than concert tickets on release day!",
  "Down and out like my workout plans after day three!",
  "Not responding! Just like my roommate when it's their turn to do dishes!",
  "Gone like my motivation after seeing how many emails I have to answer!",
  "Disappeared faster than free food in the office break room!",
  "This website ghosted you harder than that person you met at the conference!",
  "Down like my mood when someone eats the leftovers I was saving!",
  "Missing in action like that one AirPod I can never find!",
  "Offline like my brain during an important meeting!",
  "Less reachable than customer support on a Sunday!",
  "Vanished like my productivity when I open social media for 'just 5 minutes'!",
  "Gone like my plans to go to bed early tonight!",
  "This site is more absent than my cat when visitors come over!",
  "As responsive as my fitness app after six months of inactivity!",
  "As available as concert tickets after they've been on sale for 0.0001 seconds!",
  "Less reliable than weather forecasts during spring season!"
];

/**
 * Selects a random message from either up or down message arrays
 * @param {boolean} isUp - Whether the site is up (true) or down (false)
 * @returns {string} A randomly selected message appropriate for the status
 */
function getRandomMessage(isUp) {
  const messages = isUp ? upMessages : downMessages;
  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Validates if a string is a properly formatted URL
 * Checks for domain pattern and TLD after removing protocol and www
 * @param {string} url - The URL to validate
 * @returns {boolean} True if URL is valid, false otherwise
 */
function isValidURL(url) {
  // Simple regex to check for domain with extension
  // This checks if there's at least one dot followed by 2-63 characters after removing http/https
  const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  return /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](\.[a-zA-Z]{2,63})+/.test(domain);
}

/**
 * Form submission handler
 * Validates the URL before submission and adds loading animations
 */
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // First validate the URL before submitting
  const url = urlInput.value.trim();
  if (!isValidURL(url)) {
    // Mark input as invalid if URL format is incorrect
    urlInput.classList.add('is-invalid');
    urlInput.classList.remove('is-valid');
    urlIcon.className = 'fas fa-exclamation-circle input-icon';
    urlIcon.style.color = 'var(--danger)';
    return;
  }
  
  // Show loading animation
  spinner.style.display = 'flex';
  submitBtn.disabled = true;
  
  // Animate the button text
  submitBtn.innerHTML = '<i class="fas fa-radar me-2"></i> Checking...';
  submitBtn.style.width = submitBtn.offsetWidth + 'px'; // Prevent width change
  
  // Add scanning animation to body
  document.body.classList.add('scanning');
  
  // Submit the form after a short delay to show the animation
  setTimeout(() => {
    form.submit();
  }, 800);
});

/**
 * Real-time URL input validation
 * Updates visual feedback as user types
 */
urlInput.addEventListener('input', function () {
  const value = this.value.trim();
  
  // Handle empty input case
  if (value === '') {
    this.classList.remove('is-valid', 'is-invalid');
    urlIcon.className = 'fas fa-globe input-icon';
    urlIcon.style.color = '#c5d0e6';
    return;
  }
  
  // Validate URL format and update visual indicators
  if (isValidURL(value)) {
    this.classList.add('is-valid');
    this.classList.remove('is-invalid');
    urlIcon.className = 'fas fa-check-circle input-icon';
    urlIcon.style.color = 'var(--success)';
  } else {
    this.classList.add('is-invalid');
    this.classList.remove('is-valid');
    urlIcon.className = 'fas fa-exclamation-circle input-icon';
    urlIcon.style.color = 'var(--danger)';
  }
});

// Initialize input validation state if there's a value (e.g., on page reload)
if (urlInput.value) {
  urlInput.dispatchEvent(new Event('input'));
}

// Set a random fun message in the status container if it exists
const funMessageEl = document.getElementById('fun-message');
if (funMessageEl) {
  const isUp = funMessageEl.closest('.status-up') !== null;
  funMessageEl.textContent = getRandomMessage(isUp);
}

// Add floating animation to robot icons
document.querySelectorAll('.fas.fa-robot').forEach(robot => {
  robot.classList.add('robot-float');
});
