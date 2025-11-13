// Fade-in animation for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(30px)';
  sec.style.transition = 'all 1s ease';
  observer.observe(sec);
});

//  EmailJS Setup
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔹 Replace with your actual EmailJS Public Key
})();

function sendMessage(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  status.innerText = "⏳ Sending message...";

  const params = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(() => {
      status.innerText = "✅ Message sent successfully!";
      status.style.color = "green";
      e.target.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      status.innerText = "❌ Failed to send message. Please try again later.";
      status.style.color = "red";
    });
}
