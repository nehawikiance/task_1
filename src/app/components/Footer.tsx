export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* Company Information */}
          <div>
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 mb-4"
            />
            <p className="text-sm leading-6">
              Wikiance is an emerging platform in the industry of technology
              providing numerous services. We are striving to offer professional
              services to startups, mid startups, and enterprises at the most
              reasonable price.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white hover:text-blue-500" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-500" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-500" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p className="text-xs mt-4">Copyright wikiance.com ©2024 Kolkata, India</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Policies */}
          <div>
            <h3 className="font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/data-protection" className="hover:underline">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="/security" className="hover:underline">
                  Wikiance Security
                </a>
              </li>
            </ul>
          </div>
  
          {/* Office Address */}
          <div>
            <h3 className="font-bold mb-4">Office Address</h3>
            <address className="not-italic text-sm leading-6">
              Wikiance<br />
              83, Sahid Colony, Panihati,<br />
              Kolkata, West Bengal 700114, India<br />
              <a href="tel:+919742188823" className="hover:underline">
                +91 9742188823
              </a><br />
              <a href="mailto:wikiance.com" className="hover:underline">
                wikiance.com
              </a>
            </address>
          </div>
        </div>
      </footer>
    );
  }
  