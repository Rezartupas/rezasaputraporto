import { emailjsConfig } from './config.js';

(function() {
    // Inisialisasi EmailJS dengan Public Key Anda
    if (emailjsConfig.publicKey) {
        emailjs.init({
            publicKey: emailjsConfig.publicKey,
        });
    } else {
        console.error("EmailJS Public Key is not defined in config.js");
    }
})();

window.addEventListener('load', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, this)
                .then(() => {
                    submitButton.textContent = 'Message Sent!';
                    alert('Your message has been sent successfully!');
                    contactForm.reset(); // Mengosongkan field formulir
                }, (err) => {
                    submitButton.textContent = 'Send Failed';
                    alert('Failed to send message. Error: ' + JSON.stringify(err));
                }).finally(() => {
                    setTimeout(() => {
                        submitButton.textContent = originalButtonText;
                        submitButton.disabled = false;
                    }, 5000); // Reset tombol setelah 5 detik
                });
        });
    }
});