import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../public/assets/logofinal.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-10 border-t-1 border-[#f3cc8a]">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src={Logo}
              alt="The Continental Logo"
              width={150}
              height={75}
            />
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-gold-500 font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gold-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/rooms" className="hover:text-gold-500">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gold-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/membership" className="hover:text-gold-500">
                  Membership
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-gold-500">
                  Events
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gold-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gold-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-gold-500 font-semibold mb-2">Contact Us</h4>
            <p>The Continental Hotel</p>
            <p>123 Elite Avenue, New York, NY 10001</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@thecontinental.com</p>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-gold-500 font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/thecontinental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400"
              >
                <IoLogoFacebook size={30} />
              </a>
              <a
                href="https://instagram.com/thecontinental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400"
              >
               <AiFillInstagram size={30} />
              </a>
              <a
                href="https://twitter.com/thecontinental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400"
              >
               <BsTwitterX size={30} />
              </a>
              <a
                href="https://linkedin.com/company/thecontinental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400"
              >
              <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-gold-500 font-semibold mb-2">Stay Connected</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-l-full bg-gray-800 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold-500 text-black rounded-r-full hover:bg-gold-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-700 pt-4">
          {/* Legal Links */}
          <ul className="flex space-x-4 text-sm mb-4 md:mb-0">
            <li>
              <a href="/privacy" className="hover:text-gold-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gold-500">
                Terms & Conditions
              </a>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-sm text-cutomGold">
            © 2024 The Continental Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
