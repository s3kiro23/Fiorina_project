class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<footer class="footer-main-container">
    <div class="links-footer">
        <div class="links-list">
            <ul>
                <li><a href="#retour-haut">Home</a></li>
                <li><a href="#">Discovery</a></li>
                <li><a href="#">Photos</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="links-list">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Guidlines</a></li>
            </ul>
        </div>
        <div class="links-list">
            <ul>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-logo">
        <div class="logo">
            <a  href="#retour-haut">
                <img src="/assests/img/logo.jpg" alt="">
            </a>
        </div>
    </div>
    <div class="mail-socials">
        <div class="footer-mailing">
            <div class="mailing-container">
                <input type="email" name="email" id="email" placeholder="Email">
                <i class="fa-solid fa-location-arrow arrow"></i>
            </div>
            <div class="mailing-text">
                <span>Stay in touch with us for the freshest products!</span>
            </div>
        </div>
        <div class="socials-icons-container">
            <ul class="socials-icons-list">
                <li>
                    <a target="_blank" href="https://www.instagram.com/?hl=fr">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://twitter.com/?lang=fr">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://fr-fr.facebook.com/">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.google.fr/">
                        <i class="fa-solid fa-earth-americas"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>
        `;
  }
}

customElements.define("footer-component", Footer);
