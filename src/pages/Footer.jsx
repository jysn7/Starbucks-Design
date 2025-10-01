import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e3932] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Our Company</a></li>
            <li><a href="#" className="hover:text-white">Coffee</a></li>
            <li><a href="#" className="hover:text-white">Stories & News</a></li>
            <li><a href="#" className="hover:text-white">Investor Relations</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-bold mb-4">Careers</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Culture & Values</a></li>
            <li><a href="#" className="hover:text-white">Inclusion & Diversity</a></li>
            <li><a href="#" className="hover:text-white">College Achievement Plan</a></li>
            <li><a href="#" className="hover:text-white">International Careers</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-4">Social Impact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Ethical Sourcing</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Environment</a></li>
            <li><a href="#" className="hover:text-white">Stories</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-4">For Business Partners</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Landlord Support Center</a></li>
            <li><a href="#" className="hover:text-white">Suppliers</a></li>
            <li><a href="#" className="hover:text-white">Corporate Gift Cards</a></li>
            <li><a href="#" className="hover:text-white">Office Coffee</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Order & Pickup</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Order on the App</a></li>
            <li><a href="#" className="hover:text-white">Delivery</a></li>
            <li><a href="#" className="hover:text-white">Order Ahead</a></li>
            <li><a href="#" className="hover:text-white">Find a Store</a></li>
          </ul>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-[#d4e9e2]"><Facebook size={20} /></a>
          <a href="#" className="hover:text-[#d4e9e2]"><Twitter size={20} /></a>
          <a href="#" className="hover:text-[#d4e9e2]"><Instagram size={20} /></a>
          <a href="#" className="hover:text-[#d4e9e2]"><Youtube size={20} /></a>
        </div>

        <div className="text-xs text-gray-400 text-center space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">CA Supply Chain Act</a>
          <a href="#" className="hover:text-white">Cookie Preferences</a>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          © {new Date().getFullYear()} Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
