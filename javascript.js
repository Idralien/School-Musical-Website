/*function countdown(days, elementId) {
    let totalSeconds = days * 24 * 60 * 60;
    const el = document.getElementById(elementId);

    const interval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            el.textContent = "Countdown finished!";
        } else {
            const days = Math.floor(totalSeconds / (24 * 60 * 60));
            const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
            const seconds = totalSeconds % 60;
            el.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            totalSeconds--;
        }
    }, 1000);
}


// Example usage: <div id="countdown"></div>
countdown(2, "countdown");
*/

var countDownDate = new Date("Jun 15, 2026 20:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "D " + hours + "U "
    + minutes + "M " + seconds + "S ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "IT'S TIME!";
    }
}, 1000);

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Ticket modal functionality
        const ticketButtons = document.querySelectorAll('.ticket-card button, .hero-bg button:first-child');
        const modal = document.getElementById('ticket-modal');
        const closeModal = document.getElementById('close-modal');
        
        ticketButtons.forEach(button => {
            button.addEventListener('click', function() {
                modal.classList.remove('hidden');
            });
        });
        
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });