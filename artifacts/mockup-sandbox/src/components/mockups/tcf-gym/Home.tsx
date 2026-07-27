import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, Mail, MapPin, ChevronRight, CheckCircle2, Star, Clock, Dumbbell, Activity, Calendar, ArrowRight, User, Play, ChevronLeft, ChevronRight as ChevronRightIcon, Quote } from 'lucide-react';

const displayFont = "font-['Bebas_Neue'] tracking-wide";
const sansFont = "font-['Inter']";

const THEME = {
  bg: 'bg-[#0A0A0A]',
  bgAccent: 'bg-[#111111]',
  bgCard: 'bg-[#1A1A1A]',
  text: 'text-white',
  textMuted: 'text-[#A0A0A0]',
  border: 'border-white/10',
  primary: 'bg-[#E8272A] text-white',
  primaryHover: 'hover:bg-[#C21F21]',
  primaryText: 'text-[#E8272A]',
  secondaryText: 'text-[#F5A623]',
};

// Smooth scroll utility
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${THEME.bg} ${THEME.text} ${sansFont} overflow-x-hidden selection:bg-[#E8272A] selection:text-white`}>
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        .hero-clip { clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%); }
        .stat-card-clip { clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; opacity: 0; transform: translateY(30px); }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
      `}} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('home')}>
            <span style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-4xl leading-none text-white tracking-wider flex items-center gap-1`}>
              T<span className={THEME.primaryText}>C</span>F
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0] mt-1 font-semibold">The Calcutta Fitness</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider">
            {['Home', 'About', 'Classes', 'Schedule', 'Trainers', 'Pricing'].map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-[#E8272A] transition-colors">
                {item}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a href="https://instagram.com/tcfchainofgyms22" target="_blank" rel="noreferrer" className="text-white hover:text-[#E8272A] transition-colors">
              <Instagram size={20} />
            </a>
            <button onClick={() => scrollToSection('contact')} className={`${THEME.primary} ${THEME.primaryHover} px-6 py-2.5 font-bold uppercase tracking-wider text-sm transition-colors rounded-sm skew-x-[-10deg] inline-block`}>
              <span className="skew-x-[10deg] inline-block">Join Now</span>
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-t border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
            {['Home', 'About', 'Classes', 'Schedule', 'Trainers', 'Pricing', 'Contact'].map(item => (
              <button 
                key={item} 
                onClick={() => { scrollToSection(item.toLowerCase()); setMobileMenuOpen(false); }} 
                className={`text-left text-xl uppercase tracking-wider text-white hover:text-[#E8272A] py-2 border-b border-white/5`}
                style={{fontFamily: "'Bebas Neue', sans-serif"}}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/__mockup/images/tcf-hero.jpg" alt="TCF Gym Interior" className="w-full h-full object-cover object-center opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-36 md:pt-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="h-[2px] w-12 bg-[#E8272A]"></div>
              <span style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-[#F5A623] text-xl tracking-widest`}>Kolkata's Elite Training Ground</span>
            </div>
            
            <h1 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-7xl md:text-9xl leading-[0.85] text-white mb-6 animate-fade-in-up delay-100 uppercase`}>
              Forge Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8272A] to-[#F5A623]">Legacy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed animate-fade-in-up delay-200">
              Raw ambition wrapped in premium infrastructure. For serious athletes and determined beginners ready to forge discipline into results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button onClick={() => scrollToSection('pricing')} className={`${THEME.primary} ${THEME.primaryHover} px-8 py-4 font-bold uppercase tracking-wider transition-colors rounded-sm skew-x-[-10deg] flex items-center justify-center group`}>
                <span className="skew-x-[10deg] flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button onClick={() => scrollToSection('classes')} className="px-8 py-4 font-bold uppercase tracking-wider transition-colors rounded-sm skew-x-[-10deg] border border-white/20 hover:border-[#E8272A] hover:bg-[#E8272A]/10 text-white flex items-center justify-center">
                <span className="skew-x-[10deg] flex items-center gap-2">
                  <Play size={16} fill="currentColor" />
                  View Classes
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 w-full z-20 transform translate-y-1/2 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '2000+', label: 'Active Members' },
                { value: '15+', label: 'Expert Trainers' },
                { value: '25+', label: 'Weekly Classes' },
                { value: '10+', label: 'Years Experience' }
              ].map((stat, i) => (
                <div key={i} className={`${THEME.bgAccent} border ${THEME.border} p-6 stat-card-clip text-center shadow-2xl`}>
                  <h3 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-4xl md:text-5xl ${THEME.primaryText}`}>{stat.value}</h3>
                  <p className="text-xs uppercase tracking-widest text-[#A0A0A0] font-semibold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 md:pt-40 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E8272A] transform -translate-x-4 translate-y-4 rounded-sm"></div>
              <img src="/__mockup/images/tcf-about.jpg" alt="TCF Training" className="relative z-10 w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
              
              <div className="absolute -bottom-8 -right-8 z-20 bg-[#1A1A1A] p-6 border border-white/10 stat-card-clip max-w-[200px] hidden md:block">
                <div className="flex gap-2 text-[#F5A623] mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide">Rated 5 Stars by 500+ Clients</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-[#E8272A] text-xl tracking-widest`}>About TCF</span>
                <div className="h-[1px] w-20 bg-white/20"></div>
              </div>
              <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-6xl uppercase leading-[0.9] mb-8`}>
                More Than a Gym. <br/>
                <span className="text-white/40">An Institution.</span>
              </h2>
              
              <div className="space-y-6 text-[#A0A0A0] leading-relaxed mb-10 font-light text-lg">
                <p>
                  Located in the heart of Kolkata on Jamini Roy Sarani, The Calcutta Fitness Studio represents the pinnacle of physical conditioning. We've stripped away the nonsense to focus on what matters: grit, determination, and real results.
                </p>
                <p>
                  Whether you're stepping onto the lifting platform for the first time or prepping for your next competition, our world-class infrastructure and elite coaching staff provide the exact environment you need to excel.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'World-class Equipment',
                  'Certified Elite Trainers',
                  'Tailored Nutrition Plans',
                  'Premium Ambience'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className={THEME.primaryText} />
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button onClick={() => scrollToSection('contact')} className={`${THEME.primary} ${THEME.primaryHover} px-8 py-4 font-bold uppercase tracking-wider transition-colors rounded-sm skew-x-[-10deg]`}>
                <span className="skew-x-[10deg] inline-block">Discover More</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process / How it works */}
      <section className="py-20 bg-[#111111] relative border-y border-white/5">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-6xl uppercase`}>The TCF <span className={THEME.primaryText}>Method</span></h2>
            <p className="text-[#A0A0A0] mt-4 max-w-xl mx-auto">A proven three-step methodology designed to maximize your genetic potential and forge unbreakable discipline.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <Activity size={40} />, title: "01. Assessment", desc: "We analyze your baseline metrics, movement patterns, and specific goals to craft a bespoke roadmap." },
              { icon: <Dumbbell size={40} />, title: "02. Execution", desc: "Enter the forge. You put in the raw effort under the exact supervision of our elite coaching staff." },
              { icon: <Star size={40} />, title: "03. Evolution", desc: "We track your metrics, optimize your nutrition, and push you past plateaus to ensure continuous growth." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="w-24 h-24 mx-auto bg-[#1A1A1A] border border-white/10 flex items-center justify-center rounded-sm rotate-45 mb-10 group-hover:bg-[#E8272A] transition-colors duration-500">
                  <div className="-rotate-45 text-white group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                </div>
                <h3 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-3xl uppercase tracking-wider mb-4`}>{step.title}</h3>
                <p className="text-[#A0A0A0] font-light leading-relaxed">{step.desc}</p>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-2/3 w-full h-[1px] bg-gradient-to-r from-[#E8272A] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/__mockup/images/tcf-classes-bg.jpg" alt="Classes bg" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0A0A0A]/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-[#E8272A] text-xl tracking-widest`}>Our Programs</span>
                <div className="h-[1px] w-20 bg-white/20"></div>
              </div>
              <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-7xl uppercase leading-none`}>
                Elite <span className="text-white/40">Classes</span>
              </h2>
            </div>
            <button onClick={() => scrollToSection('schedule')} className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:text-[#E8272A] transition-colors">
              Full Schedule <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Strength Training", duration: "60 Min", level: "All Levels", img: "tcf-hero.jpg" },
              { name: "Cardio Blast", duration: "45 Min", level: "High Intensity", img: "tcf-about.jpg" },
              { name: "Yoga & Flexibility", duration: "60 Min", level: "Beginner Friendly", img: "tcf-trainer-4.jpg" },
              { name: "CrossFit", duration: "50 Min", level: "Advanced", img: "tcf-classes-bg.jpg" },
              { name: "Zumba Dance", duration: "45 Min", level: "All Levels", img: "tcf-hero.jpg" },
              { name: "Boxing & MMA", duration: "90 Min", level: "Intermediate", img: "tcf-trainer-3.jpg" },
            ].map((cls, i) => (
              <div key={i} className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer border border-white/5">
                <img src={`/__mockup/images/${cls.img}`} alt={cls.name} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
                  <div className="flex gap-3 mb-4">
                    <span className="text-[10px] uppercase tracking-widest bg-[#E8272A] text-white px-2 py-1">{cls.duration}</span>
                    <span className="text-[10px] uppercase tracking-widest bg-white/10 text-white px-2 py-1 backdrop-blur-md">{cls.level}</span>
                  </div>
                  <h3 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-4xl uppercase tracking-wider mb-2 group-hover:text-[#F5A623] transition-colors`}>{cls.name}</h3>
                  <div className="h-[2px] w-12 bg-[#E8272A] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator */}
      <BMICalculatorSection />

      {/* Schedule Section */}
      <ScheduleSection />

      {/* Meet Our Trainers */}
      <section id="trainers" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-7xl uppercase mb-4`}>
              Elite <span className={THEME.primaryText}>Coaching</span>
            </h2>
            <p className="text-[#A0A0A0] max-w-2xl mx-auto">Our trainers aren't just certified; they are seasoned athletes dedicated to extracting your absolute best.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Arjun Das", role: "Head Strength Coach", exp: "12 Years", img: "tcf-trainer-3.jpg" },
              { name: "Priya Sen", role: "Yoga & Mobility", exp: "8 Years", img: "tcf-trainer-4.jpg" },
              { name: "Vikram Singh", role: "CrossFit Specialist", exp: "10 Years", img: "tcf-trainer-1.jpg" },
              { name: "Neha Roy", role: "HIIT & Nutrition", exp: "6 Years", img: "tcf-trainer-2.jpg" },
            ].map((trainer, i) => (
              <div key={i} className="group relative">
                <div className="relative h-[450px] overflow-hidden mb-6 rounded-sm border border-white/5">
                  <div className="absolute inset-0 bg-[#E8272A]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                  <img src={`/__mockup/images/${trainer.img}`} alt={trainer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0A0A0A] to-transparent translate-y-full group-hover:translate-y-0 transition-transform z-20 flex justify-center gap-4">
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#E8272A] rounded-full flex items-center justify-center transition-colors backdrop-blur-md">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h3 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-3xl uppercase tracking-wider mb-1`}>{trainer.name}</h3>
                  <p className="text-[#E8272A] font-semibold text-sm uppercase tracking-widest mb-2">{trainer.role}</p>
                  <p className="text-[#A0A0A0] text-sm">Experience: {trainer.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Memberships */}
      <PricingSection />

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-7xl uppercase leading-none`}>
                Intel & <span className={THEME.primaryText}>Insights</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:text-[#E8272A] transition-colors">
              View All Articles <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Optimizing Macros for Heavy Lifting Days", date: "OCT 12, 2024", cat: "Nutrition", img: "tcf-blog.jpg" },
              { title: "The Psychology of Breaking Plateaus", date: "SEP 28, 2024", cat: "Mindset", img: "tcf-classes-bg.jpg" },
              { title: "Recovery Protocols Used by Pro Athletes", date: "SEP 15, 2024", cat: "Recovery", img: "tcf-hero.jpg" },
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-[240px] overflow-hidden rounded-sm mb-6 relative">
                  <img src={`/__mockup/images/${post.img}`} alt={post.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute top-4 left-4 bg-[#E8272A] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white z-10">
                    {post.cat}
                  </div>
                </div>
                <p className="text-[#A0A0A0] text-sm uppercase tracking-widest font-semibold mb-3 flex items-center gap-2">
                  <Calendar size={14} /> {post.date}
                </p>
                <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-[#E8272A] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="w-12 h-[2px] bg-white/20 group-hover:w-24 group-hover:bg-[#E8272A] transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#111111] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-7xl uppercase mb-4`}>
              Client <span className={THEME.primaryText}>Legacies</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", role: "Amateur Boxer", text: "The coaching at TCF is unlike anything in Kolkata. They didn't just change my body; they forged my mindset. Highly recommended for serious people." },
              { name: "Ananya M.", role: "Working Professional", text: "I struggled with consistency for years. The environment here demands greatness, and you eventually rise to meet it. 15kg down and counting." },
              { name: "Karthik D.", role: "Powerlifter", text: "Premium equipment, raw atmosphere. It's the perfect balance. If you are serious about lifting heavy, this is the only studio in the city that matters." },
            ].map((t, i) => (
              <div key={i} className="bg-[#1A1A1A] p-8 border border-white/5 stat-card-clip relative">
                <Quote className="absolute top-6 right-6 text-white/5" size={60} />
                <div className="flex gap-1 text-[#F5A623] mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[#A0A0A0] font-light leading-relaxed mb-8 relative z-10 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-sm">{t.name}</h4>
                    <p className="text-[#E8272A] text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-[#E8272A] text-xl tracking-widest`}>Get In Touch</span>
                <div className="h-[1px] w-20 bg-white/20"></div>
              </div>
              <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-7xl uppercase leading-none mb-10`}>
                Start Your <br/> Transformation
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center text-[#E8272A] shrink-0 border border-white/10 rounded-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-[#A0A0A0]">Jamini Roy Sarani, Kolkata,<br/>West Bengal 700019</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center text-[#E8272A] shrink-0 border border-white/10 rounded-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-[#A0A0A0]">09073905215</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center text-[#E8272A] shrink-0 border border-white/10 rounded-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-[#A0A0A0]">info@calcuttafitness.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111111] p-8 border border-white/5 stat-card-clip">
              <h3 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-4xl uppercase mb-8`}>Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Name</label>
                    <input type="text" className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#E8272A] transition-colors" placeholder="YOUR NAME" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Phone</label>
                    <input type="tel" className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#E8272A] transition-colors" placeholder="YOUR PHONE" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Email</label>
                  <input type="email" className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#E8272A] transition-colors" placeholder="YOUR EMAIL" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Message</label>
                  <textarea rows={4} className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#E8272A] transition-colors resize-none" placeholder="HOW CAN WE HELP YOU?"></textarea>
                </div>
                <button type="submit" className={`w-full ${THEME.primary} ${THEME.primaryHover} py-4 font-bold uppercase tracking-wider transition-colors rounded-sm flex items-center justify-center gap-2 group`}>
                  Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-16 h-[400px] w-full border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3684.5097449553535!2d88.35623067605917!3d22.56011933342371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a0b3ffcf6d%3A0xc3bb9910d5ab9bf8!2sJamini%20Roy%20Sarani%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715421350000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <span style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl leading-none text-white tracking-wider flex items-center gap-1 mb-2`}>
                T<span className={THEME.primaryText}>C</span>F
              </span>
              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
                The Calcutta Fitness Studio.<br/>
                Kolkata's elite training ground for those who demand more from themselves.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/tcfchainofgyms22" className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#E8272A] flex items-center justify-center transition-colors rounded-sm text-white border border-white/10">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-2xl uppercase tracking-wider mb-6`}>Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Trainers', 'Pricing', 'Contact'].map(link => (
                  <li key={link}>
                    <button onClick={() => scrollToSection(link === 'About Us' ? 'about' : link.toLowerCase())} className="text-[#A0A0A0] hover:text-[#E8272A] transition-colors text-sm font-semibold uppercase tracking-wide">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-2xl uppercase tracking-wider mb-6`}>Programs</h4>
              <ul className="space-y-3">
                {['Strength Training', 'Cardio Blast', 'CrossFit', 'Yoga & Flexibility', 'Boxing'].map(link => (
                  <li key={link}>
                    <button onClick={() => scrollToSection('classes')} className="text-[#A0A0A0] hover:text-[#E8272A] transition-colors text-sm font-semibold uppercase tracking-wide">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-2xl uppercase tracking-wider mb-6`}>Working Hours</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2 text-[#A0A0A0]">
                  <span className="font-semibold uppercase">Mon - Fri</span>
                  <span>06:00 - 22:00</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2 text-[#A0A0A0]">
                  <span className="font-semibold uppercase">Saturday</span>
                  <span>08:00 - 20:00</span>
                </li>
                <li className="flex justify-between pb-2 text-[#A0A0A0]">
                  <span className="font-semibold uppercase">Sunday</span>
                  <span className="text-[#E8272A]">Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#666666] text-xs font-semibold uppercase tracking-widest">
              © {new Date().getFullYear()} The Calcutta Fitness Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-[#666666] text-xs font-semibold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function BMICalculatorSection() {
  const [data, setData] = useState({ weight: '', height: '', age: '', sex: 'male', activity: 'moderate' });
  const [result, setResult] = useState<{ value: string; category: string; color: string; message: string } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(data.weight);
    const h = parseFloat(data.height) / 100; // cm to m
    
    if (w > 0 && h > 0) {
      const bmi = w / (h * h);
      let cat = '';
      let color = '';
      let msg = '';
      
      if (bmi < 18.5) {
        cat = 'Underweight'; color = 'text-[#F5A623]'; msg = 'You need to build solid mass. Our strength coaches can construct the perfect bulk program.';
      } else if (bmi < 24.9) {
        cat = 'Optimal'; color = 'text-green-500'; msg = 'Excellent baseline. Time to focus on performance, strength, and definition.';
      } else if (bmi < 29.9) {
        cat = 'Overweight'; color = 'text-[#F5A623]'; msg = 'A perfect starting point for a cutting phase. Join our high-intensity programs.';
      } else {
        cat = 'Obese'; color = 'text-[#E8272A]'; msg = 'The hardest step is starting. We have the expertise to guide your complete transformation.';
      }
      
      setResult({ value: bmi.toFixed(1), category: cat, color, message: msg });
    }
  };

  return (
    <section className="py-20 bg-[#1A1A1A] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-6xl uppercase leading-none mb-6`}>
              Calculate Your <span className={THEME.primaryText}>Baseline</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg font-light mb-10 max-w-md">
              Understanding your current physical state is the first step toward forging a better one. Calculate your Body Mass Index to start.
            </p>
            
            {result && (
              <div className="bg-[#111111] p-6 border border-white/10 stat-card-clip mb-10 animate-fade-in-up">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#A0A0A0] mb-1 font-semibold">Your BMI Score</p>
                    <h3 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl text-white leading-none`}>{result.value}</h3>
                  </div>
                  <div className={`px-4 py-1 border ${result.color.replace('text-', 'border-')} ${result.color} text-sm font-bold uppercase tracking-wider`}>
                    {result.category}
                  </div>
                </div>
                <p className="text-[#A0A0A0] text-sm">{result.message}</p>
              </div>
            )}
          </div>
          
          <div className="bg-[#111111] p-8 md:p-10 border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8272A] blur-[100px] opacity-20 pointer-events-none"></div>
            
            <form onSubmit={calculateBMI} className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Weight / kg</label>
                  <input type="number" required value={data.weight} onChange={e => setData({...data, weight: e.target.value})} className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#E8272A] transition-colors" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Height / cm</label>
                  <input type="number" required value={data.height} onChange={e => setData({...data, height: e.target.value})} className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#E8272A] transition-colors" placeholder="0.00" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Age</label>
                  <input type="number" required value={data.age} onChange={e => setData({...data, age: e.target.value})} className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#E8272A] transition-colors" placeholder="0" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Sex</label>
                  <select value={data.sex} onChange={e => setData({...data, sex: e.target.value})} className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#E8272A] transition-colors appearance-none">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className={`w-full ${THEME.primary} ${THEME.primaryHover} py-4 font-bold uppercase tracking-wider transition-colors rounded-sm`}>
                Calculate BMI
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [activeDay, setActiveDay] = useState('Monday');
  
  // Dummy data generator for schedule
  const generateSchedule = (day: string) => [
    { time: '06:00 - 07:00 AM', class: 'Strength Training', trainer: 'Arjun Das', type: 'Weights' },
    { time: '08:00 - 09:00 AM', class: day === 'Tuesday' || day === 'Thursday' ? 'CrossFit' : 'Yoga & Flex', trainer: 'Priya Sen', type: 'Endurance' },
    { time: '05:30 - 06:30 PM', class: 'Cardio Blast', trainer: 'Neha Roy', type: 'Cardio' },
    { time: '07:30 - 09:00 PM', class: 'Boxing & MMA', trainer: 'Vikram Singh', type: 'Combat' },
  ];

  return (
    <section id="schedule" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-7xl uppercase mb-4`}>
            Training <span className={THEME.primaryText}>Schedule</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map(day => (
            <button 
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all rounded-sm skew-x-[-10deg] border 
                ${activeDay === day 
                  ? 'bg-[#E8272A] border-[#E8272A] text-white' 
                  : 'bg-transparent border-white/20 text-[#A0A0A0] hover:border-white/50 hover:text-white'}`}
            >
              <span className="skew-x-[10deg] inline-block">{day}</span>
            </button>
          ))}
        </div>
        
        <div className="bg-[#111111] border border-white/10 rounded-sm overflow-hidden">
          {generateSchedule(activeDay).map((slot, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors ${i !== 0 ? 'border-t border-white/5' : ''}`}>
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <p style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-2xl text-[#E8272A] tracking-wide`}>{slot.time}</p>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h4 className="text-xl font-bold uppercase tracking-wide mb-1">{slot.class}</h4>
                <span className="text-xs uppercase tracking-widest text-[#F5A623] px-2 py-1 bg-[#F5A623]/10 rounded-sm inline-block">{slot.type}</span>
              </div>
              <div className="w-full md:w-1/4 flex items-center gap-3 mb-4 md:mb-0">
                <User size={18} className="text-[#A0A0A0]" />
                <span className="text-[#A0A0A0] font-semibold">{slot.trainer}</span>
              </div>
              <div className="w-full md:w-auto md:ml-auto">
                <button className="px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Basic",
      price: isAnnual ? 14400 : 1500,
      period: isAnnual ? "/year" : "/mo",
      desc: "Perfect for beginners establishing a routine.",
      features: ["Access to gym equipment", "Locker room access", "1 Free Assessment", "Standard Support"]
    },
    {
      name: "Standard",
      price: isAnnual ? 24000 : 2500,
      period: isAnnual ? "/year" : "/mo",
      desc: "Our most popular plan for dedicated athletes.",
      popular: true,
      features: ["All Basic features", "Access to all group classes", "Monthly body assessment", "Basic Diet Plan", "Priority Support"]
    },
    {
      name: "Premium",
      price: isAnnual ? 38400 : 4000,
      period: isAnnual ? "/year" : "/mo",
      desc: "The ultimate transformation package.",
      features: ["All Standard features", "2 PT Sessions / month", "Custom Nutrition Plan", "Recovery Area Access", "Guest Pass (2/mo)"]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#111111] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-[#E8272A] text-xl tracking-widest`}>Memberships</span>
              <div className="h-[1px] w-20 bg-white/20"></div>
            </div>
            <h2 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-5xl md:text-7xl uppercase leading-none`}>
              Choose Your <span className="text-white/40">Path</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 bg-[#1A1A1A] p-2 rounded-sm border border-white/10">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-colors ${!isAnnual ? 'bg-[#E8272A] text-white' : 'text-[#A0A0A0] hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 ${isAnnual ? 'bg-[#E8272A] text-white' : 'text-[#A0A0A0] hover:text-white'}`}
            >
              Annually <span className="text-[10px] bg-white text-black px-1.5 py-0.5 rounded-sm">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-8 md:p-10 border transition-all duration-300 ${plan.popular ? 'bg-[#1A1A1A] border-[#E8272A] shadow-[0_0_30px_rgba(232,39,42,0.15)] transform md:-translate-y-4' : 'bg-[#0A0A0A] border-white/10 hover:border-white/30'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8272A] text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                  Most Popular
                </div>
              )}
              
              <h3 style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-4xl uppercase tracking-wider mb-2`}>{plan.name}</h3>
              <p className="text-[#A0A0A0] text-sm mb-8 h-10">{plan.desc}</p>
              
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
                <span className="text-xl text-[#A0A0A0] font-semibold">₹</span>
                <span style={{fontFamily: "'Bebas Neue', sans-serif"}} className={`text-6xl leading-none`}>{plan.price.toLocaleString('en-IN')}</span>
                <span className="text-[#A0A0A0] font-semibold">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className={plan.popular ? 'text-[#E8272A]' : 'text-white/40'} />
                    <span className="font-medium text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 font-bold uppercase tracking-wider transition-colors rounded-sm ${plan.popular ? 'bg-[#E8272A] hover:bg-[#C21F21] text-white' : 'bg-white hover:bg-gray-200 text-black'}`}>
                Join {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
