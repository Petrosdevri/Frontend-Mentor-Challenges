const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const workStats = document.getElementById('work-stats');
const workPreviousStats = document.getElementById('work-previous-stats');
const playStats = document.getElementById('play-stats');
const playPreviousStats = document.getElementById('play-previous-stats');
const studyStats = document.getElementById('study-stats');
const studyPreviousStats = document.getElementById('study-previous-stats');
const exerciseStats = document.getElementById('exercise-stats');
const exercisePreviousStats = document.getElementById('exercise-previous-stats');
const socialStats = document.getElementById('social-stats');
const socialPreviousStats = document.getElementById('social-previous-stats');
const selfCareStats = document.getElementById('self-care-stats');
const selfCarePreviousStats = document.getElementById('self-care-previous-stats');

daily.addEventListener('click', () => {
  if(weekly.classList.contains('clicked')) {
    weekly.classList.remove('clicked');
  }
  if(monthly.classList.contains('clicked')) {
    monthly.classList.remove('clicked');
  }
  daily.classList.add('clicked');
  workStats.innerHTML = '5hrs';
  workPreviousStats.innerHTML = 'Last Week - 7hrs';
  playStats.innerHTML = '1hr';
  playPreviousStats.innerHTML = 'Last Week - 2hrs';
  studyStats.innerHTML = '0hrs';
  studyPreviousStats.innerHTML = 'Last Week - 1hr';
  exerciseStats.innerHTML = '1hr';
  exercisePreviousStats.innerHTML = 'Last Week - 1hr';
  socialStats.innerHTML = '0hrs';
  socialPreviousStats.innerHTML = 'Last Week - 1hr';
  selfCareStats.innerHTML = '1hr';
  selfCarePreviousStats.innerHTML = 'Last Week - 3hrs';
});

weekly.addEventListener('click', () => {
  if(daily.classList.contains('clicked')) {
    daily.classList.remove('clicked');
  }
  if(monthly.classList.contains('clicked')) {
    monthly.classList.remove('clicked');
  }
  weekly.classList.add('clicked');
  workStats.innerHTML = '32hrs';
  workPreviousStats.innerHTML = 'Last Week - 36hrs';
  playStats.innerHTML = '10hrs';
  playPreviousStats.innerHTML = 'Last Week - 8hrs';
  studyStats.innerHTML = '4hrs';
  studyPreviousStats.innerHTML = 'Last Week - 7hrs';
  exerciseStats.innerHTML = '4hrs';
  exercisePreviousStats.innerHTML = 'Last Week - 5hrs';
  socialStats.innerHTML = '5hrs';
  socialPreviousStats.innerHTML = 'Last Week - 10hrs';
  selfCareStats.innerHTML = '2hrs';
  selfCarePreviousStats.innerHTML = 'Last Week - 2hrs';
});

monthly.addEventListener('click', () => {
  if(daily.classList.contains('clicked')) {
    daily.classList.remove('clicked');
  }
  if(weekly.classList.contains('clicked')) {
    weekly.classList.remove('clicked');
  }
  monthly.classList.add('clicked');
  workStats.innerHTML = '103hrs';
  workPreviousStats.innerHTML = 'Last Week - 128hrs';
  playStats.innerHTML = '23hrs';
  playPreviousStats.innerHTML = 'Last Week - 29hrs';
  studyStats.innerHTML = '13hrs';
  studyPreviousStats.innerHTML = 'Last Week - 19hrs';
  exerciseStats.innerHTML = '11hrs';
  exercisePreviousStats.innerHTML = 'Last Week - 18hrs';
  socialStats.innerHTML = '21hrs';
  socialPreviousStats.innerHTML = 'Last Week - 23hrs';
  selfCareStats.innerHTML = '7hrs';
  selfCarePreviousStats.innerHTML = 'Last Week - 11hrs';
});