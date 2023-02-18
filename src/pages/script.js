const loginButton = document.querySelector('.loginButton');
loginButton.addEventListener('click', function() {
  if (typeof netlifyIdentity === 'undefined') {
    const script = document.createElement('script');
    script.src = "https://identity-js.netlify.com/v1/netlify-identity-widget.js";
    document.head.appendChild(script);
  }

  // Andere code die na het laden van het script moet worden uitgevoerd
});