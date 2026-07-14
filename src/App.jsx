import { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Cpu,
  Layers,
  Briefcase,
  GraduationCap,
  CheckCircle,
  ChevronUp,
  Menu,
  X,
  Send,
  User,
  Sparkles
} from 'lucide-react';
import './index.css';

// Ícones de marcas customizados (removidos nas versões recentes do Lucide)
const Github = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const meusProjetos = [
  {
    id: 1,
    nome: "mais-clinica",
    descricao: "Plataforma completa para gestão de clínicas médicas e odontológicas. Oferece controle eficiente de agendamentos, prontuários eletrônicos e gestão de pacientes, otimizando a rotina do consultório.",
    tecnologias: ["JavaScript", "React", "Bootstrap", "Node.js"],
    github: "https://github.com/MatheusTLampugnani/mais-clinica",
    link: "https://matheustlampugnani.github.io/mais-clinica/",
    categoria: "Full Stack"
  },
  {
    id: 2,
    nome: "MoneyBoard",
    descricao: "Aplicação web inteligente para gestão financeira pessoal. Permite o acompanhamento detalhado de receitas, despesas e saldo, fornecendo uma visão clara da saúde financeira através de uma interface intuitiva.",
    tecnologias: ["JavaScript", "React", "Bootstrap", "Node.js"],
    github: "https://github.com/MatheusTLampugnani/MoneyBoard",
    link: "https://moneyboard.onrender.com",
    categoria: "Full Stack"
  },
  {
    id: 3,
    nome: "Imobilizados",
    descricao: "Sistema corporativo voltado para o controle e gestão patrimonial. Facilita o registro, acompanhamento e movimentação de ativos imobilizados, garantindo maior controle administrativo para empresas.",
    tecnologias: ["JavaScript", "React", "Bootstrap"],
    categoria: "Frontend"
  },
  {
    id: 4,
    nome: "Geek Loop",
    descricao: "Plataforma interativa desenvolvida para engajar a comunidade da cultura pop. Focada em proporcionar uma experiência de usuário dinâmica através de recursos modernos e conteúdo sobre o ecossistema geek.",
    tecnologias: ["JavaScript", "React", "Bootstrap"],
    github: "https://github.com/MatheusTLampugnani/geek-loop",
    link: "https://geekloop.onrender.com/",
    categoria: "Frontend"
  },
  {
    id: 5,
    nome: "Floréssia Pratas",
    descricao: "Vitrine virtual e e-commerce desenvolvido para a marca de joias Floréssia Pratas. Focado em proporcionar uma experiência de compra elegante e intuitiva, destacando o catálogo de produtos com um design moderno e responsivo.",
    tecnologias: ["JavaScript", "React", "Bootstrap"],
    github: "https://github.com/MatheusTLampugnani/floressia-pratas",
    link: "https://floressiapratas.onrender.com//",
    categoria: "Frontend"
  },
  {
    id: 6,
    nome: "bom-burguer",
    descricao: "Sistema digital para gestão de pedidos e catálogo de hamburguerias. Desenvolvido para melhorar a experiência de compra do cliente e otimizar o fluxo de preparação e entrega do estabelecimento.",
    tecnologias: ["JavaScript", "React", "Bootstrap"],
    github: "https://github.com/MatheusTLampugnani/bom-burguer",
    link: "https://matheustlampugnani.github.io/bom-burguer/",
    categoria: "Frontend"
  },
  {
    id: 7,
    nome: "sei",
    descricao: "Aplicação web frontend com foco em usabilidade e design responsivo. Construída para apresentar dados de forma clara e moderna na interface do usuário, garantindo uma navegação fluida.",
    tecnologias: ["JavaScript", "React", "Bootstrap", "Node.js"],
    github: "https://github.com/MatheusTLampugnani/sei",
    categoria: "Full Stack"
  },
  {
    id: 8,
    nome: "checklist",
    descricao: "Gerenciador de tarefas robusto com foco em produtividade. Permite a criação, organização, acompanhamento de status e automatização de rotinas diárias de forma simples e eficiente.",
    tecnologias: ["Python", "Django"],
    github: "https://github.com/MatheusTLampugnani/checklist",
    categoria: "Backend"
  },
  {
    id: 9,
    nome: "inventario-bobinas",
    descricao: "Sistema de conciliação de estoque físico com dados oficiais do SAP. Oferece validação rápida por crachá corporativo, importação de CSVs, bipagem via scanner e processamento de vídeos de drone para decodificação em massa.",
    tecnologias: ["React", "Vite", "Supabase", "PostgreSQL", "Bootstrap"],
    categoria: "Full Stack"
  }
];

const habilidades = [
  {
    categoria: "Frontend",
    icon: <Code className="w-6 h-6 text-indigo-500" />,
    skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "Design Responsivo"]
  },
  {
    categoria: "Backend",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
    skills: ["Node.js", "Express.js", "PHP", "Python", "Django", "APIs RESTful", "Arquitetura MVC"]
  },
  {
    categoria: "Bancos de Dados",
    icon: <Database className="w-6 h-6 text-blue-500" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Modelagem de Dados", "ORM (Prisma / Django ORM)"]
  },
  {
    categoria: "Ferramentas & DevOps",
    icon: <Layers className="w-6 h-6 text-pink-500" />,
    skills: ["Git & GitHub", "Vite", "Docker", "Render / Vercel", "Eslint", "NPM / Yarn"]
  }
];

const timeline = [
  {
    id: 1,
    tipo: "trabalho",
    titulo: "Desenvolvedor Full Stack Independente",
    subtitulo: "Projetos Freelance e Autônomos",
    periodo: "2024 - Presente",
    descricao: "Desenvolvimento de ponta a ponta de soluções web para clientes. Criação de sistemas de gestão clínica (como mais-clinica) e sistemas de controle financeiro (como MoneyBoard), utilizando ecossistemas modernos de React, Node.js e bancos de dados SQL/NoSQL.",
    icon: <Briefcase className="w-5 h-5 text-white" />
  },
  {
    id: 2,
    tipo: "trabalho",
    titulo: "Contribuições Open Source & Projetos Próprios",
    subtitulo: "GitHub Developer",
    periodo: "2023 - Presente",
    descricao: "Criação de ferramentas utilitárias corporativas para controle de ativos (como Imobilizados) e gestão de produtividade diária (como checklist). Foco em código limpo, componentização e integração contínua.",
    icon: <Github className="w-5 h-5 text-white" />
  },
  {
    id: 3,
    tipo: "estudo",
    titulo: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    subtitulo: "Formação Acadêmica Superior",
    periodo: "2022 - 2024",
    descricao: "Formação focada em engenharia de software, modelagem de dados, algoritmos e estruturas de dados. Aplicação de padrões de design para a criação de sistemas web robustos e escaláveis.",
    icon: <GraduationCap className="w-5 h-5 text-white" />
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default dark
  });

  const [activeFilter, setActiveFilter] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormLoading(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/matheuslampugnani123@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Novo contato do Portfólio!"
        })
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 6000);
      } else {
        alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente enviar diretamente por e-mail ou WhatsApp.");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Ocorreu um erro de rede. Por favor, tente novamente ou fale comigo diretamente pelo WhatsApp.");
    } finally {
      setFormLoading(false);
    }
  };

  const filteredProjects = meusProjetos.filter(proj => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "React / Frontend") return proj.categoria === "Frontend";
    if (activeFilter === "Node.js / Full Stack") return proj.categoria === "Full Stack";
    if (activeFilter === "Python / Django") return proj.categoria === "Backend";
    return true;
  });

  const categories = ["Todos", "React / Frontend", "Node.js / Full Stack", "Python / Django"];

  return (
    <div className="min-h-screen w-full relative transition-theme font-sans selection:bg-indigo-200 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md transition-theme">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
              M
            </div>
            <span className="font-bold text-lg text-slate-800 dark:text-slate-100 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Matheus<span className="text-indigo-600 dark:text-indigo-400 font-extrabold">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sobre</a>
            <a href="#habilidades" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Habilidades</a>
            <a href="#projetos" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projetos</a>
            <a href="#carreira" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Carreira</a>
            <a href="#contato" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contato</a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Alternar tema"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 py-6 px-6 flex flex-col gap-5 absolute left-0 top-16 shadow-xl animate-fade-in">
            <a href="#sobre" onClick={() => setMenuOpen(false)} className="text-base font-semibold text-slate-700 dark:text-slate-200">Sobre Mim</a>
            <a href="#habilidades" onClick={() => setMenuOpen(false)} className="text-base font-semibold text-slate-700 dark:text-slate-200">Habilidades</a>
            <a href="#projetos" onClick={() => setMenuOpen(false)} className="text-base font-semibold text-slate-700 dark:text-slate-200">Projetos</a>
            <a href="#carreira" onClick={() => setMenuOpen(false)} className="text-base font-semibold text-slate-700 dark:text-slate-200">Carreira</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="text-base font-semibold text-slate-700 dark:text-slate-200">Contato</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200/40 bg-indigo-50/50 dark:bg-indigo-950/30 dark:border-indigo-900/40 text-indigo-600 dark:text-indigo-400 font-semibold text-sm animate-pulse">
            <Sparkles className="w-4 h-4" /> Disponível para novos projetos
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Olá, eu sou o <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Matheus Lampugnani
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Desenvolvedor Web & Full Stack focado em construir experiências digitais modernas, eficientes e visualmente impecáveis. Especialista em ecossistemas React, Node.js e Python.
          </p>

          {/* Socials & CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-3.5 px-8 rounded-2xl shadow-lg shadow-indigo-600/20 hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              Ver Projetos
            </a>

            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold py-3.5 px-8 rounded-2xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              Entre em contato
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5 pt-6 text-slate-500 dark:text-slate-400">
            <a href="https://github.com/MatheusTLampugnani" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/matheus-lampugnani-1156b1231/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:matheuslampugnani123@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end relative">
          {/* Avatar Premium */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Efeitos de Fundo Glowing */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 blur-2xl opacity-30 dark:opacity-40 animate-pulse"></div>

            {/* Card do Avatar */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 p-[3px] shadow-2xl">
              <div className="w-full h-full rounded-[2.3rem] bg-slate-900 flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-800 border border-slate-700/80 flex items-center justify-center text-white text-4xl font-extrabold shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30"></div>
                  MT
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Matheus Lampugnani</h3>
                  <p className="text-indigo-400 dark:text-indigo-300 font-semibold text-sm">Desenvolvedor Full Stack</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300 font-medium">React</span>
                  <span className="text-[10px] bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300 font-medium">Node</span>
                  <span className="text-[10px] bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300 font-medium">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MIM SECTION */}
      <section id="sobre" className="w-full bg-white/40 dark:bg-slate-950/20 py-24 border-y border-slate-200/50 dark:border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400">Sobre Mim</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Minha história no desenvolvimento</p>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto de Descrição */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Sempre fui fascinado por tecnologia e em como podemos criar soluções inovadoras que impactam diretamente a vida das pessoas. Essa paixão me levou à área de desenvolvimento de software, onde venho aprimorando minhas competências na construção de soluções completas de ponta a ponta.
              </p>
              <p>
                Meu foco é desenvolver aplicações de alta performance, utilizando o ecossistema <strong>React</strong> para o frontend, criando interfaces bonitas, responsivas e intuitivas. No backend, trabalho com <strong>Node.js</strong> e <strong>Django (Python)</strong>, estruturando arquiteturas seguras, eficientes e integradas a bancos de dados robustos.
              </p>
              <p>
                Acredito fortemente que o código de qualidade deve andar de mãos dadas com uma experiência do usuário polida e limpa. Sou uma pessoa pragmática, orientada a resultados e sempre pronta para desvendar novos desafios tecnológicos.
              </p>
            </div>

            {/* Estatísticas / Detalhes */}
            <div className="lg:col-span-5 grid grid-colfs-2 gap-4">
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl text-center space-y-2 shadow-sm transition-theme hover:-translate-y-1 hover:shadow-md">
                <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">3+</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Anos de Código</p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl text-center space-y-2 shadow-sm transition-theme hover:-translate-y-1 hover:shadow-md">
                <span className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">9+</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Projetos no GitHub</p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl text-center space-y-2 shadow-sm transition-theme hover:-translate-y-1 hover:shadow-md col-span-2">
                <span className="text-2xl font-extrabold text-pink-600 dark:text-pink-400">Full Stack</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">Foco de Atuação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES SECTION */}
      <section id="habilidades" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400">Habilidades</h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Meu Arsenal Tecnológico</p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {habilidades.map((group, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group relative overflow-hidden"
            >
              {/* Line top highlight */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {group.categoria}
                </h3>
              </div>

              <ul className="space-y-3 mt-2 flex-grow">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS SECTION */}
      <section id="projetos" className="w-full bg-white/40 dark:bg-slate-950/20 py-24 border-y border-slate-200/50 dark:border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400">Portfólio</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Meus Projetos Recentes</p>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${activeFilter === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25 border border-indigo-600"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((projeto) => (
              <div
                key={projeto.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden group relative"
              >
                {/* Visual Header / Cover Decorator */}
                <div className="h-32 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 dark:from-indigo-950/20 dark:to-purple-950/20 relative flex items-center justify-center border-b border-slate-100 dark:border-slate-800/80">
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold px-3 py-1 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/30 rounded-md">
                      {projeto.categoria}
                    </span>
                  </div>
                  <Sparkles className="w-10 h-10 text-indigo-500/20 dark:text-indigo-400/20 group-hover:scale-110 group-hover:text-indigo-500/40 transition-all duration-300" />
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3">
                    {projeto.nome}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                    {projeto.descricao}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projeto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700 text-xs px-2.5 py-1 rounded-md font-semibold tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                    {projeto.github ? (
                      <a
                        href={projeto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-white text-xs sm:text-sm py-2.5 px-4 rounded-xl font-bold transition-all hover:-translate-y-0.5"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    ) : (
                      <span className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-xs sm:text-sm py-2.5 px-4 rounded-xl font-bold cursor-not-allowed border border-slate-200/40 dark:border-slate-700/50">
                        Privado
                      </span>
                    )}

                    {projeto.link ? (
                      <a
                        href={projeto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs sm:text-sm py-2.5 px-4 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-md shadow-indigo-600/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Acessar
                      </a>
                    ) : (
                      <div className="flex-1 hidden sm:block"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO SECTION */}
      <section id="contato" className="w-full bg-white/40 dark:bg-slate-950/20 py-24 border-t border-slate-200/50 dark:border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400">Contato</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Vamos Conversar?</p>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            {/* Informações de Contato */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Diga um "Olá"!</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Estou interessado em propostas de trabalho integral, freelance ou simplesmente discutir novas tecnologias. Sinta-se à vontade para enviar uma mensagem por e-mail, telefone ou preenchendo o formulário ao lado.
                </p>
              </div>

              {/* Botões de Contato */}
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:matheuslampugnani123@gmail.com"
                  className="flex items-center gap-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-6 py-4 rounded-2xl shadow-sm transition-theme hover:-translate-y-0.5"
                >
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 break-all">matheuslampugnani123@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/5564992563950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-6 py-4 rounded-2xl shadow-sm transition-theme hover:-translate-y-0.5"
                >
                  <div className="p-3 rounded-xl bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">WhatsApp</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">(64) 99256-3950</span>
                  </div>
                </a>
              </div>

              {/* Botões de Redes Sociais */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/MatheusTLampugnani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-2xl shadow-sm transition-theme hover:-translate-y-0.5 text-sm"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/matheus-lampugnani-1156b1231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-2xl shadow-sm transition-theme hover:-translate-y-0.5 text-sm"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 sm:p-10 rounded-[2.5rem] shadow-sm relative overflow-hidden">
              <h4 className="text-xl font-bold text-slate-950 dark:text-white mb-6">Envie uma Mensagem Direta</h4>

              {formSubmitted ? (
                <div className="h-[320px] flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h5 className="text-lg font-bold text-slate-950 dark:text-white">Mensagem Enviada!</h5>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                    Obrigado pelo seu contato, Matheus responderá o mais breve possível.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">Seu Nome</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 rounded-2xl px-5 py-3.5 text-slate-800 dark:text-slate-100 font-medium text-sm focus:outline-none transition-colors"
                      placeholder="Ex: João Silva"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">Seu E-mail</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 rounded-2xl px-5 py-3.5 text-slate-800 dark:text-slate-100 font-medium text-sm focus:outline-none transition-colors"
                      placeholder="Ex: joao@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">Sua Mensagem</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 rounded-2xl px-5 py-3.5 text-slate-800 dark:text-slate-100 font-medium text-sm focus:outline-none transition-colors resize-none"
                      placeholder="Como posso te ajudar?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-indigo-600/25 hover:shadow-xl transition-all cursor-pointer text-sm disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {formLoading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-900 bg-white/70 dark:bg-slate-950/70 py-10 text-center space-y-4">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Matheus Lampugnani. Todos os direitos reservados.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Feito com React, Tailwind CSS e Lucide Icons.
        </p>
      </footer>

      {/* VOLTAR AO TOPO */}
      {showScrollTop && (
        <a
          href="#hero"
          className="fixed bottom-6 right-6 p-3.5 rounded-2xl bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 z-50 flex items-center justify-center animate-fade-in"
          aria-label="Voltar para o topo"
        >
          <ChevronUp className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

export default App;