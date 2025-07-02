  
        // Mobile navigation toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const nav = document.querySelector('nav');
        
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileToggle.querySelector('i').classList.toggle('fa-bars');
            mobileToggle.querySelector('i').classList.toggle('fa-times');
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

       /* // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                nav.classList.remove('active');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-times');
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });*/
        /*
        // Animate on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.animation = "fadeInUp 0.8s ease forwards";
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animateElements.forEach(element => {
                element.style.opacity = 0;
                observer.observe(element);
            });
        });*/
        /*
        // Form submission via email
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const quantity = document.getElementById('quantity').value;
            const address = document.getElementById('address').value;
            const notes = document.getElementById('notes').value;
            
            // Create email body
            const subject = `New Order for Radiant Locks Hair Serum`;
            const body = `Name: ${name}%0D%0A%0D%0AEmail: ${email}%0D%0A%0D%0AQuantity: ${quantity}%0D%0A%0D%0AShipping Address: ${address}%0D%0A%0D%0ANotes: ${notes || 'None'}`;
            
            // Create mailto link (will open user's email client)
            const mailtoLink = `mailto:orders@radiantlocks.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('orderForm').reset();
            
            // Scroll to success message
            document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
        });
  
    */