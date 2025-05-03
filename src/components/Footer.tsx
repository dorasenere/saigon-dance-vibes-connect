
import { Flag } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-auto py-16 glass-card border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold neon-text">Saigon Dance Vibes</span>
            </div>
            <p className="text-white/70 mb-4">
              Connecting dance enthusiasts across Ho Chi Minh City since 2023
              <br />
              <span className="text-white/50 text-sm">Kết nối những người yêu khiêu vũ tại Thành phố Hồ Chí Minh từ 2023</span>
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                  Home
                  <span className="text-white/40 text-sm ml-2">Trang chủ</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/70 hover:text-primary transition-colors">
                  Events
                  <span className="text-white/40 text-sm ml-2">Sự kiện</span>
                </Link>
              </li>
              <li>
                <Link to="/communities" className="text-white/70 hover:text-primary transition-colors">
                  Communities
                  <span className="text-white/40 text-sm ml-2">Cộng đồng</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-primary transition-colors">
                  Blog
                  <span className="text-white/40 text-sm ml-2">Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/travel-deals" className="text-white/70 hover:text-primary transition-colors">
                  Travel Deals
                  <span className="text-white/40 text-sm ml-2">Ưu đãi du lịch</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Dance Styles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Zouk
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Bachata
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Salsa
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Kizomba
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  All Styles
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Get updates on events and news
              <span className="block text-white/50 text-sm">Cập nhật sự kiện và tin tức</span>
            </p>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-black/30 border-white/10 focus-visible:ring-primary" 
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-xs text-white/40">Join 2000+ subscribers</p>
            
            <div className="mt-6">
              <h4 className="text-white mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="flex gap-2 text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>District 1, Ho Chi Minh City</span>
                </li>
                <li className="flex gap-2 text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>info@saigondancevibes.com</span>
                </li>
                <li className="flex gap-2 text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>+84 123 456 789</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center md:flex md:justify-between text-white/60 text-sm">
          <p>© 2025 Saigon Dance Vibes. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            <a href="#" className="mr-4 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
