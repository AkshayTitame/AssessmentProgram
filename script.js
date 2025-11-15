const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting me. I’ll get in touch with you soon.");
  contactForm.reset();
}); 
 