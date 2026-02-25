function updateClock() {
    const now = new Date();
    
    // Format Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Format Date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Add a nice reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.glass-container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 1s cubic-bezier(0.22, 1, 0.36, 1)';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});
