/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Instagram, 
  ChevronRight, 
  CheckCircle2, 
  GraduationCap, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Users, 
  MessageSquare,
  ArrowUpRight,
  Target,
  Layout,
  Menu,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LOGO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6Ee20TjHIOiMsxj_jKyWegmdEWsWJM07Dlg1ZKPuuwTRuq5WY6FEq2KCMYOtRv70h2omN-61HP7dzzdJy7GU3IjIv1D3yd7MeuFzldGcZreFNe6zCkpT5vTHRBMnafZ-L_jyDMdoeR0VyccB2nQ_yKaTmxX118zdL-X2LhyphenhyphenXP9JArRoNbZKL3xxA72Cs/s320/impacto_logo_com_nome.png";
const ICON_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisXhXTGeWjZlXT5cbxcmeDokId1ZekKqZgIe0gsB6a1CwdaD3Egp2maq2PnmmJs0uxjlsRexknjcllIgMj7nhgBRhstDTggTG2EDY_ti3F2yXte-CZwaYIyxufb_L3suxcOgUG1IDQjJgoeMiydWalKvbs9lhXq0id6A7ngr16GQv4EdH5lszV4sypInY/s320/icone_impacto.png";
const HERO_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjp7dnNTewmMUCr2MI41s4rCSGmCuwGzgY4EUVb1c5N21eZRr0SYinXjBAD-iDM_6Ay_hQFMQRB8IiiWIuvhAhQYGIuehPiCPHRd-argaNWWt5tp_zr8AesOuwIQcaKwrAXJt2BdxQyVpfW1QlZbaBgt0BZdvju3bFdO0snEYbVLQj8wNE0iMmPHQmy6QM/s16000/heero2.png";
const ABOUT_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7MnUuaich5QRaKS0hRB8zqawC2zm007n1zuNaHwB5txRzF3xDY8RwdqRXGBTzaWjru0rrOl_vJk80NiXwwTXMB3cnpXmIwveAbwQrYtBdNWtraeZhETG47wh3IbUKhd_Ps2xQyhSGCEQK64yGE5Kb1_mk_EjUjWBRvnmsvJci-SurgaZJrd_wy8Qq6xI/w480-h640/sobre.png";

function StatCounter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: node,
        start: "top 95%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        setDisplayValue(Math.floor(obj.val));
      }
    });
  }, [value]);

  return (
    <span ref={counterRef}>
      {prefix}{displayValue.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Sobre', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Scroll Reveals
      const revealElements = document.querySelectorAll(".reveal-on-scroll");
      revealElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Bento Cards Stagger
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 75%"
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/556999244833", "_blank");
  };

  return (
    <div ref={mainRef} className="font-sans antialiased text-slate-900 bg-slate-50 overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 transition-all duration-300">
        <nav className="relative bg-brand-secondary/80 backdrop-blur-lg w-full max-w-7xl px-6 py-3 rounded-[2rem] flex flex-col shadow-xl border border-white/10 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Impacto Assessoria Logo" className="h-8 sm:h-10 w-auto" referrerPolicy="no-referrer" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-brand-yellow transition-colors">{link.name}</a>
              ))}
            </div>
            
            <button 
              onClick={handleWhatsApp}
              className="hidden md:flex bg-brand-yellow text-brand-secondary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white transition-all items-center gap-2 group shadow-md"
            >
              Falar com Especialista
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              className="md:hidden text-brand-yellow p-2 transition-transform active:scale-90" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="relative w-8 h-8">
                <Menu className={`absolute inset-0 w-8 h-8 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute inset-0 w-8 h-8 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Content (Expandable) */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
          >
            <div className="pt-6 pb-4 flex flex-col gap-4 border-t border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-brand-yellow transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <button 
                onClick={() => {
                  handleWhatsApp();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-brand-yellow text-brand-secondary py-4 rounded-2xl font-bold text-lg shadow-lg mt-4 flex items-center justify-center gap-2"
              >
                Falar com Especialista
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Impacto Assessoria Hero" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/60 via-brand-secondary/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-4xl flex flex-col gap-8 hero-content items-start">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 backdrop-blur-sm w-fit mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-bold text-brand-yellow tracking-[0.2em] uppercase whitespace-nowrap">Assessoria Acadêmica Premium</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight tracking-tight lg:max-w-3xl">
              Transforme sua <span className="text-brand-yellow">Jornada Acadêmica</span> com Excelência.
            </h1>
            <p className="text-lg sm:text-xl text-slate-100 font-light leading-relaxed max-w-2xl opacity-90">
              Auxiliamos em todas as etapas do seu projeto: da organização da ideia, escrita, formatação e revisão final, tudo dentro das normas da sua instituição.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
              <button 
                onClick={handleWhatsApp}
                className="bg-brand-yellow text-brand-secondary px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg animate-cta-pulse hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-yellow/30 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                Garantir Minha Aprovação
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <a 
                href="#services"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all flex items-center justify-center whitespace-nowrap"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-12 sm:py-16 bg-white relative z-20 -mt-20 mx-4 sm:mx-8 lg:mx-12 rounded-[2.5rem] shadow-2xl border border-slate-100 reveal-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center items-center">
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-display font-bold text-brand-primary">
                <StatCounter value={15000} prefix="+" />
              </span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Alunos Aprovados</span>
              <div className="h-1 w-12 bg-brand-yellow mx-auto rounded-full mt-2"></div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-display font-bold text-brand-primary">
                <StatCounter value={100} suffix="%" />
              </span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Entrega no Prazo</span>
              <div className="h-1 w-12 bg-brand-yellow mx-auto rounded-full mt-2"></div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-display font-bold text-brand-primary">
                <StatCounter value={10000} prefix="+" />
              </span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trabalhos Realizados</span>
              <div className="h-1 w-12 bg-brand-yellow mx-auto rounded-full mt-2"></div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-display font-bold text-brand-primary italic">Originais</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Sem Plágio</span>
              <div className="h-1 w-12 bg-brand-yellow mx-auto rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 reveal-on-scroll">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Soluções Completas</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-6">Oferecemos Suporte em todas as Vertentes Acadêmicas</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dificuldade em organizar suas ideias? Nós assumimos a parte técnica para que você foque no que realmente importa: seu aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
            {/* Service 1: Artigo */}
            <div className="bg-white p-8 rounded-3xl border border-brand-primary/20 shadow-xl hover:bg-brand-yellow hover:border-brand-yellow hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 animate-icon-soft" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-brand-primary">Artigo Científico</h4>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed group-hover:text-brand-primary/80">Desenvolvimento completo com fundamentação teórica sólida e formatação impecável para publicação.</p>
              <ul className="space-y-2 mb-8 text-sm">
                <li className="flex items-center gap-2 group-hover:text-brand-primary font-medium transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-yellow group-hover:text-brand-primary animate-icon-soft" /> Revisão Bibliográfica</li>
                <li className="flex items-center gap-2 group-hover:text-brand-primary font-medium transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-yellow group-hover:text-brand-primary animate-icon-soft" /> Normas ABNT/Vancouver</li>
              </ul>
              <button 
                onClick={handleWhatsApp}
                className="w-full border border-brand-primary/10 text-brand-primary/70 py-3 rounded-xl font-bold text-sm transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 2: TCC */}
            <div className="bg-white p-8 rounded-3xl border border-brand-primary/20 shadow-xl hover:bg-brand-yellow hover:border-brand-yellow hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 animate-icon-soft" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-brand-primary">TCC / Monografias</h4>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed group-hover:text-brand-primary/80">Assessoria integral do pré-projeto à versão final. Estrutura lógica e argumentação premium.</p>
              <ul className="space-y-2 mb-8 text-sm">
                <li className="flex items-center gap-2 group-hover:text-brand-primary font-medium transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-yellow group-hover:text-brand-primary animate-icon-soft" /> Organização de Ideias</li>
                <li className="flex items-center gap-2 group-hover:text-brand-primary font-medium transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-yellow group-hover:text-brand-primary animate-icon-soft" /> Revisão Ortográfica</li>
              </ul>
              <button 
                onClick={handleWhatsApp}
                className="w-full border border-brand-primary/10 text-brand-primary/70 py-3 rounded-xl font-bold text-sm transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 3: Projeto de Extensão (Featured) */}
            <div className="bg-brand-primary p-8 rounded-3xl border border-brand-primary shadow-lg relative lg:scale-105 z-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="absolute top-6 right-6 px-3 py-1 bg-brand-yellow rounded-full text-[10px] font-bold text-brand-secondary uppercase tracking-widest z-20 group-hover:scale-110 transition-transform">Destaque</div>
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center text-brand-secondary mb-6">
                <Target className="w-7 h-7 animate-icon-soft" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Projeto de Extensão</h4>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">Itinerário completo: Desenvolvimento no portal, banner individualizado e comprovações.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 bg-brand-yellow rounded-full flex items-center justify-center text-[10px] text-brand-secondary">1</div>
                  <p className="text-xs text-white/80"><strong className="text-white">Sem plágio:</strong> Produções autênticas.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 bg-brand-yellow rounded-full flex items-center justify-center text-[10px] text-brand-secondary">2</div>
                  <p className="text-xs text-white/80"><strong className="text-white">Banner Individual:</strong> Ação documentada.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 bg-brand-yellow rounded-full flex items-center justify-center text-[10px] text-brand-secondary">3</div>
                  <p className="text-xs text-white/80"><strong className="text-white">Aprovação Garantida:</strong> Protocolo completo.</p>
                </div>
              </div>
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-brand-yellow text-brand-secondary py-3 rounded-xl font-bold text-sm animate-cta-pulse hover:bg-white transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>

            {/* Service 4: Outros */}
            <div className="bg-white p-8 rounded-3xl border border-brand-primary/20 shadow-xl hover:bg-brand-yellow hover:border-brand-yellow hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-7 h-7 animate-icon-soft" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-brand-primary">Projetos Integradores</h4>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed group-hover:text-brand-primary/80">Assessoria para Projetos Integradores e MAPA. Organização sistêmica do seu portfólio acadêmico.</p>
              <ul className="space-y-2 mb-8 text-sm">
                <li className="flex items-center gap-2 group-hover:text-brand-primary font-medium transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-yellow group-hover:text-brand-primary animate-icon-soft" /> Formatação de Portal</li>
                <li className="flex items-center gap-2 group-hover:text-brand-primary font-medium transition-colors"><CheckCircle2 className="w-4 h-4 text-brand-yellow group-hover:text-brand-primary animate-icon-soft" /> Rápido e Organizado</li>
              </ul>
              <button 
                onClick={handleWhatsApp}
                className="w-full border border-brand-primary/10 text-brand-primary/70 py-3 rounded-xl font-bold text-sm transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS SECTION (BENTO GRID) */}
      <section id="differentials" className="py-16 sm:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4">Nossos Diferenciais</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">O que nos torna Líderes em Assessoria</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bento-grid">
            {/* Bento Card 1: Originality */}
            <div className="md:col-span-8 bg-slate-800 p-8 sm:p-12 rounded-[2.5rem] flex flex-col justify-between border border-slate-700 bento-item group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] -mr-32 -mt-32"></div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 text-brand-primary flex items-center justify-center mb-8">
                  <ShieldCheck className="w-6 h-6 animate-icon-soft" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">Trabalho 100% Original</h4>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  Lutamos contra o plágio. Todas as nossas produções são autênticas e passam por rigorosas ferramentas de detecção para garantir sua integridade acadêmica.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.pexels.com/photos/16160811/pexels-photo-16160811.jpeg",
                      "https://images.pexels.com/photos/36845948/pexels-photo-36845948.jpeg",
                      "https://images.pexels.com/photos/16160898/pexels-photo-16160898.jpeg",
                      "https://images.pexels.com/photos/16173670/pexels-photo-16173670.jpeg"
                    ].map((url, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center overflow-hidden">
                        <img 
                          src={url} 
                          alt="Estudante" 
                          referrerPolicy="no-referrer" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                  </div>
                 <span className="text-sm text-slate-400 font-medium">+15k Trabalhos Únicos</span>
              </div>
            </div>

            {/* Bento Card 2: Delivery */}
            <div className="md:col-span-4 bg-brand-yellow p-8 rounded-[2.5rem] flex flex-col justify-between bento-item shadow-2xl shadow-brand-yellow/20">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-8">
                <Clock className="w-6 h-6 animate-icon-soft" />
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold text-brand-secondary mb-2">Pontualidade Britânica</h4>
                <p className="text-brand-secondary/80 text-sm leading-relaxed">
                  Sabemos que prazos são sagrados na academia. Entregamos seu projeto sempre antes do limite máximo.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-brand-secondary/10">
                <span className="text-4xl font-display font-black text-brand-secondary">0%</span>
                <p className="text-brand-secondary/60 text-xs uppercase tracking-widest mt-1">Atrasos Registrados</p>
              </div>
            </div>

            {/* Bento Card 3: Support */}
            <div className="md:col-span-4 bg-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between border border-slate-700 bento-item">
              <div className="w-12 h-12 rounded-xl bg-slate-700 text-slate-400 flex items-center justify-center mb-8">
                <MessageSquare className="w-6 h-6 animate-icon-soft" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Suporte Humanizado</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Você não fala com robôs. Nossa equipe está disponível para tirar dúvidas e realizar ajustes personalizados.
                </p>
              </div>
            </div>

            {/* Bento Card 4: Multi-discipinary */}
            <div className="md:col-span-8 bg-gradient-to-br from-indigo-900 to-brand-secondary p-8 rounded-[2.5rem] flex items-center gap-8 border border-white/10 bento-item overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-brand-primary flex items-center justify-center mb-8">
                  <Users className="w-6 h-6 animate-icon-soft" />
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-4">Experiência Multi-setorial</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Assessoria completa em diversas áreas do conhecimento: Saúde, Engenharias, Humanas e Exatas. Domínio de todas as metodologias científicas.
                </p>
              </div>
              <div className="hidden lg:block w-1/3 aspect-square bg-white/5 rounded-full absolute -right-12 -bottom-12 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#fae793]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 reveal-on-scroll">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <img 
                  src={ABOUT_IMAGE} 
                  alt="Time Impacto Assessoria" 
                  className="rounded-[3rem] shadow-2xl object-cover w-full aspect-[3/4] border-8 border-white p-2 bg-slate-50 rotate-[-2deg]" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-6 glass p-6 rounded-3xl shadow-xl flex items-center gap-4 rotate-[4deg]">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center text-brand-yellow font-bold text-3xl">10+</div>
                  <div>
                    <p className="text-sm font-bold text-brand-primary">Anos de Mercado</p>
                    <p className="text-xs text-slate-500">Expertise Acadêmica</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 reveal-on-scroll">
              <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4">Sobre a Impacto</h2>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
                Ética, Transparência e a Sua Aprovação como Prioridade.
              </h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  A Impacto Assessoria nasceu da necessidade de oferecer um suporte acadêmico verdadeiramente profissional em Rondônia e para todo o Brasil. Entendemos que a rotina acadêmica é exaustiva e, muitas vezes, as normas e estruturas pedidas pelas instituições tornam-se barreiras para o sucesso do aluno.
                </p>
                <p>
                  Nossa missão é ser o seu braço direito estratégico. Trabalhamos com uma equipe multidisciplinar que preza pela <strong>autenticidade total</strong> das produções. Aqui, seu projeto de extensão, seu TCC ou seu artigo não é apenas mais um trabalho; é a materialização do seu diploma.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <img src={ICON_URL} alt="Icone Impacto" className="h-16 w-auto" referrerPolicy="no-referrer" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-slate-900">Aprovação Garantida</p>
                  <p className="text-sm text-slate-500">Seguimos rigorosamente os feedbacks dos seus orientadores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (SOCIAL PROOF) */}
      <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4">Prova Social</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">O que nossos alunos dizem</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal-on-scroll">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-6">
              <div className="relative bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4 mb-4">
                <div className="flex gap-1 text-yellow-400">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-xs animate-icon-soft">★</span>)}
                </div>
                <p className="text-slate-600 italic leading-relaxed text-sm lg:text-base">"O Projeto de Extensão no portal foi aprovado de primeira! Fiquei impressionado com a organização e com as fotos do banner. Recomendo muito."</p>
                {/* Bubble Tip */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white border-r border-b border-slate-100 rotate-45 transform"></div>
              </div>
              <div className="flex items-center gap-4 pl-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <img src="https://images.pexels.com/photos/7561911/pexels-photo-7561911.jpeg" alt="Avatar" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 leading-none">Carlos Silva</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Graduando em Direito</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col gap-6 md:-mt-4">
              <div className="relative bg-brand-primary p-8 rounded-[2rem] shadow-xl border border-brand-primary flex flex-col gap-4 mb-4 transform md:scale-105 z-10 transition-transform">
                <div className="flex gap-1 text-brand-yellow">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-xs animate-icon-soft">★</span>)}
                </div>
                <p className="text-white italic leading-relaxed text-sm lg:text-base">"Meu TCC foi elogiado pela banca pela estrutura lógica e ausência total de plágio. A equipe da Impacto me ajudou muito na revisão final."</p>
                {/* Bubble Tip */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-brand-primary border-r border-b border-brand-primary rotate-45 transform"></div>
              </div>
              <div className="flex items-center gap-4 pl-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <img src="https://images.pexels.com/photos/36629103/pexels-photo-36629103.jpeg" alt="Avatar" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 leading-none">Juliana Mendes</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Pós-graduação em Saúde</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col gap-6">
              <div className="relative bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4 mb-4">
                <div className="flex gap-1 text-yellow-400">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-xs animate-icon-soft">★</span>)}
                </div>
                <p className="text-slate-600 italic leading-relaxed text-sm lg:text-base">"Sempre que preciso de ajuda com Projetos Integradores recorro a eles. A entrega é rápida e o atendimento pelo WhatsApp é excelente."</p>
                {/* Bubble Tip */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white border-r border-b border-slate-100 rotate-45 transform"></div>
              </div>
              <div className="flex items-center gap-4 pl-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <img src="https://images.pexels.com/photos/7704090/pexels-photo-7704090.jpeg" alt="Avatar" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 leading-none">Marcos Oliveira</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Estudante de Engenharia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-brand-primary">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-yellow/10 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-8">
              Pronto para garantir a sua <span className="text-brand-yellow italic">Aprovação Final?</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Não deixe para a última hora. Garanta a tranquilidade que você merece com uma assessoria estratégica e profissional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={handleWhatsApp}
                className="w-full sm:w-auto bg-brand-yellow text-brand-secondary px-8 py-4 rounded-[2rem] font-bold text-lg animate-cta-pulse hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-yellow/20 flex items-center justify-center gap-4"
              >
                Solicitar Meu Orçamento
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-1">
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                    <p className="text-white font-bold text-sm tracking-widest">ATENDIMENTO ON-LINE</p>
                  </div>
                  <p className="text-slate-500 text-xs pl-4">Resposta média em 15 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-12 text-center md:text-left">
            <div className="flex flex-col gap-6 items-center md:items-start">
              <img src={LOGO_URL} alt="Impacto Footer" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
              <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                Assessoria acadêmica de alta performance. Excelência em TCCs, Artigos, Projetos de Extensão e formatação conforme normas institucionais.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-12 md:gap-24 items-center md:items-start">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <p className="text-brand-yellow font-bold text-sm uppercase tracking-widest">Contato</p>
                <div className="flex flex-col gap-2 text-slate-400 text-sm">
                  <a href="tel:+556999244833" className="hover:text-brand-yellow transition-colors">+55 (69) 99244-8333</a>
                  <p>Segunda à Sexta, 08h às 22h</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center md:items-start">
                <p className="text-brand-yellow font-bold text-sm uppercase tracking-widest">Social</p>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.instagram.com/impactoassessoria_ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-yellow hover:text-brand-secondary transition-all transform hover:-translate-y-1"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col items-center gap-4 text-xs text-slate-600 font-medium text-center">
            <p>© 2026 Impacto Assessoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
