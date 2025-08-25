import { Link } from 'react-router-dom';
import { Cloud, Mail, Phone, MapPin, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-xl">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Vastcloud</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Platform hosting dan cloud services terpercaya untuk developer dan bisnis modern dengan performa tinggi dan support 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-primary transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-primary transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-primary transition-all">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produk</h3>
            <div className="space-y-2">
              <Link to="/cloud-hosting" className="block text-slate-300 hover:text-white transition-colors">
                Cloud Hosting
              </Link>
              <Link to="/shared-hosting" className="block text-slate-300 hover:text-white transition-colors">
                Shared Hosting
              </Link>
              <Link to="/vps-hosting" className="block text-slate-300 hover:text-white transition-colors">
                VPS Hosting
              </Link>
              <Link to="/vastpod" className="block text-slate-300 hover:text-white transition-colors">
                VASTPOD
              </Link>
              <Link to="/pricing" className="block text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <Link to="/support" className="block text-slate-300 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link to="/documentation" className="block text-slate-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link to="/status" className="block text-slate-300 hover:text-white transition-colors">
                Service Status
              </Link>
              <Link to="/community" className="block text-slate-300 hover:text-white transition-colors">
                Community
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">support@vastcloud.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-gradient-primary rounded-r-lg hover:shadow-glow transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400">
              © 2024 Vastcloud. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sla" className="text-slate-400 hover:text-white transition-colors">
                SLA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;