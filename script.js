/**
 * Countdown Timer Script
 * Target: January 18, 2026 at 8:00 AM IST
 */

(function() {
  // Target date: January 18, 2026 at 8:00 AM IST (UTC+5:30)
  const targetDate = new Date('2026-01-18T08:00:00+05:30').getTime();

  // DOM elements
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  /**
   * Pad number with leading zero if needed
   */
  function padNumber(num) {
    return num.toString().padStart(2, '0');
  }

  /**
   * Update countdown display
   */
  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // If countdown is complete, stop at zero
    if (difference <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update DOM
    daysEl.textContent = padNumber(days);
    hoursEl.textContent = padNumber(hours);
    minutesEl.textContent = padNumber(minutes);
    secondsEl.textContent = padNumber(seconds);
  }

  // Initial update
  updateCountdown();

  // Update every second
  setInterval(updateCountdown, 1000);
})();
