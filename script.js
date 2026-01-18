// ================= PAGE SWITCHING =================
function switchPage(pageId, el) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  // Show selected page
  document.getElementById(pageId).classList.add("active");

  // Update bottom nav
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });
  el.classList.add("active");
}

// ================= DARK MODE =================
function toggleDark() {
  const app = document.getElementById('app');
  const toggle = document.getElementById('darkModeToggle');
  
  app.classList.toggle('dark');
  
  if (toggle) {
    toggle.classList.toggle('active');
  }
  
  // Save preference
  localStorage.setItem('darkMode', app.classList.contains('dark'));
}

// Load dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const app = document.getElementById('app');
  const toggle = document.getElementById('darkModeToggle');
  
  if (darkMode) {
    app.classList.add('dark');
    if (toggle) {
      toggle.classList.add('active');
    }
  }
});

// ================= SERVICE DETAILS =================
function toggleServiceDetails(card) {
  card.classList.toggle('expanded');
}

// ================= PORTFOLIO FILTERING =================
function filterPortfolio(category) {
  const items = document.querySelectorAll('.portfolio-item');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter items
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// ================= CONTACT FORM =================
function handleContactSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Show success message
  alert(`Thank you for your message, ${data.name}! We'll get back to you soon at ${data.email}.`);
  
  // Reset form
  event.target.reset();
  
  // In a real app, you would send this data to a server
  console.log('Form submitted:', data);
}

// ================= NOTIFICATIONS =================
function showNotifications() {
  alert('You have 3 new notifications:\n\n1. New project inquiry\n2. Payment received\n3. Team meeting at 3 PM');
}

// ================= FONT SIZE =================
function changeFontSize(size) {
  const app = document.getElementById('app');
  
  // Remove existing size classes
  app.classList.remove('font-small', 'font-medium', 'font-large');
  
  // Add new size class
  if (size !== 'medium') {
    app.classList.add(`font-${size}`);
  }
  
  // Save preference
  localStorage.setItem('fontSize', size);
}

// Load font size preference
window.addEventListener('DOMContentLoaded', () => {
  const fontSize = localStorage.getItem('fontSize');
  if (fontSize && fontSize !== 'medium') {
    document.getElementById('app').classList.add(`font-${fontSize}`);
  }
});

// ================= TOGGLE SWITCHES =================
document.addEventListener('DOMContentLoaded', () => {
  // Add click handlers to all toggle switches
  document.querySelectorAll('.toggle-switch').forEach(toggle => {
    toggle.addEventListener('click', function() {
      // Don't toggle dark mode switch here (it has its own handler)
      if (this.id !== 'darkModeToggle') {
        this.classList.toggle('active');
      }
    });
  });
});
