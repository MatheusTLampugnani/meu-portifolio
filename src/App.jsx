import { useState, useEffect } from 'react';
import './index.css';

const meusProjetos = [
  {
    id: 1,
    nome: "inventario-bobinas",
    descricao: "Sistema corporativo sob medida desenvolvido para automatizar a contagem de estoque e conciliação física de bobinas industriais com dados oficiais do SAP. Permite leituras rápidas via câmera móvel, coletores de códigos de barras ou análises em lote de filmagens aéreas capturadas por drones, identificando divergências instantaneamente.",
    tecnologias: ["React", "Supabase", "jsQR", "Bootstrap", "html5-qrcode"],
    categoria: "Full Stack"
  },
  {
    id: 2,
    nome: "mais-clinica",
    descricao: "Plataforma completa para gestão integrada de clínicas médicas e odontológicas. Facilita o controle de agendamentos de consultas, o cadastro e edição de prontuários eletrônicos de pacientes com anexos de exames, e o acompanhamento detalhado de atendimentos de forma simples e intuitiva.",
    tecnologias: ["React", "Node.js", "Express", "Supabase", "Bootstrap"],
    categoria: "Full Stack",
    github: "https://github.com/MatheusTLampugnani/mais-clinica",
    link: "https://matheustlampugnani.github.io/mais-clinica/"
  },
  {
    id: 3,
    nome: "MoneyBoard",
    descricao: "Sistema web inteligente para planejamento e controle financeiro pessoal. Oferece visualização clara do fluxo de caixa e saldos por meio de painéis e gráficos interativos, classificação de receitas e despesas em categorias coloridas e ferramentas dinâmicas para acompanhamento de metas de economia.",
    tecnologias: ["React", "Supabase", "Recharts", "Bootstrap", "React Router"],
    categoria: "Full Stack",
    github: "https://github.com/MatheusTLampugnani/MoneyBoard",
    link: "https://moneyboard.onrender.com",
  },
  {
    id: 4,
    nome: "Imobilizados",
    descricao: "Solução voltada para o controle e auditoria física de ativos imobilizados corporativos. Permite realizar a busca unificada de bens, sessões de auditorias em lote agrupadas por Centro de Custo, sinalização automática de divergências e exportação de relatórios profissionais em planilhas ou arquivos PDF.",
    tecnologias: ["React", "Node.js", "Express", "Supabase", "jsPDF", "PDFKit", "PWA"],
    categoria: "Full Stack",
  },
  {
    id: 5,
    nome: "Geek Loop",
    descricao: "Loja virtual moderna e interativa especializada em tecnologia e cultura pop. Traz uma experiência de compra engajadora, destacando um construtor de setups personalizado com descontos progressivos para compras em lote, painel administrativo seguro para controle de estoque e catálogo, e avaliações de clientes.",
    tecnologias: ["React", "Supabase", "React Router", "Bootstrap", "React Toastify"],
    categoria: "Frontend",
    github: "https://github.com/MatheusTLampugnani/geek-loop",
    link: "https://geekloop.onrender.com/",
  },
  {
    id: 6,
    nome: "Floréssia Pratas",
    descricao: "E-commerce de alto padrão desenvolvido para a marca de joias Floréssia Pratas. Proporciona uma jornada de compra elegante e responsiva com sistema de favoritos, gestão de múltiplos endereços de entrega e fechamento de pedidos inteligente integrado de forma automatizada ao WhatsApp do atendimento comercial.",
    tecnologias: ["React", "Supabase", "React Router", "React Bootstrap", "React Icons"],
    categoria: "Frontend",
    github: "https://github.com/MatheusTLampugnani/floressia-pratas",
    link: "https://floressiapratas.onrender.com//",
  },
  {
    id: 7,
    nome: "bom-burguer",
    descricao: "Painel interativo em tempo real para gerenciamento e fluxo de pedidos de hamburguerias e restaurantes. Conta com um painel visual em formato Kanban para organizar e mover pedidos por etapas de preparação (do recebimento à entrega), controle de histórico e relatórios consolidados de vendas.",
    tecnologias: ["React", "React Router", "React Bootstrap"],
    categoria: "Frontend",
    github: "https://github.com/MatheusTLampugnani/bom-burguer",
    link: "https://matheustlampugnani.github.io/bom-burguer/",
  },
  {
    id: 8,
    nome: "sei",
    descricao: "Sistema de gestão acadêmica e administrativa escolar unificada. Centraliza cadastros e acompanhamentos de alunos, professores e disciplinas, trazendo ferramentas inteligentes para evitar conflitos de horários em turmas e salas, além de calendários acadêmicos e painéis informativos de dados.",
    tecnologias: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "Bootstrap"],
    categoria: "Frontend",
    github: "https://github.com/MatheusTLampugnani/sei"
  },
  {
    id: 9,
    nome: "checklist",
    descricao: "Aplicativo corporativo focado na simplificação e registro de vistorias e inspeções veiculares. Permite aos operadores registrar a placa, inspecionar de forma ágil o estado de conservação de componentes do veículo em categorias (Bom, Regular e Ruim), incluir fotos e observações e salvar o histórico.",
    tecnologias: ["Python", "Django", "HTML5", "CSS3", "JavaScript"],
    categoria: "Backend",
    github: "https://github.com/MatheusTLampugnani/checklist"
  }
];

const habilidades = [
  {
    categoria: "Frontend",
    itens: [
      { nome: "React & Next.js", nivel: "95%" },
      { nome: "JavaScript (ES6+)", nivel: "90%" },
      { nome: "Tailwind CSS", nivel: "95%" },
      { nome: "Bootstrap", nivel: "85%" },
      { nome: "HTML5 & CSS3", nivel: "95%" }
    ]
  },
  {
    categoria: "Backend & Cloud",
    itens: [
      { nome: "Node.js & Express", nivel: "85%" },
      { nome: "Python & Django", nivel: "75%" },
      { nome: "Supabase & Firebase", nivel: "90%" },
      { nome: "PostgreSQL & MongoDB", nivel: "80%" },
      { nome: "RESTful APIs", nivel: "90%" }
    ]
  },
  {
    categoria: "Diferenciais",
    itens: [
      { nome: "Integração SAP (CSV)", nivel: "95%" },
      { nome: "Visão Computacional / QRs", nivel: "80%" },
      { nome: "Design Responsivo & UX", nivel: "90%" },
      { nome: "Arquitetura Mobile-First", nivel: "95%" },
      { nome: "Git & Versionamento", nivel: "90%" }
    ]
  }
];

function App() {
  const [filtro, setFiltro] = useState("Todos");
  const [saudacao, setSaudacao] = useState("Olá");

  useEffect(() => {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) setSaudacao("Bom dia");
    else if (hora >= 12 && hora < 18) setSaudacao("Boa tarde");
    else setSaudacao("Boa noite");
  }, []);

  const projetosFiltrados = filtro === "Todos"
    ? meusProjetos
    : meusProjetos.filter(p => p.categoria === filtro);

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen relative overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-[35%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-4s' }}></div>
      <div className="absolute bottom-[5%] left-[-5%] w-[450px] h-[450px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-8s' }}></div>

      {/* Header / Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl border-white/5">
        <a href="#" className="text-xl font-extrabold tracking-tight text-white hover:opacity-80 transition-opacity">
          Matheus<span className="text-indigo-400">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#sobre" className="hover:text-white hover:scale-105 transition-all">Sobre</a>
          <a href="#projetos" className="hover:text-white hover:scale-105 transition-all">Projetos</a>
          <a href="#habilidades" className="hover:text-white hover:scale-105 transition-all">Habilidades</a>
          <a href="#contato" className="hover:text-white hover:scale-105 transition-all">Contato</a>
        </nav>
        <a
          href="#contato"
          className="bg-indigo-600/90 hover:bg-indigo-500 text-white text-xs px-4 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-95 border border-indigo-400/20"
        >
          Contratar
        </a>
      </header>

      {/* Hero Section */}
      <section id="sobre" className="pt-32 pb-24 md:pt-44 md:pb-36 max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-white max-w-4xl leading-tight">
            Matheus Lampugnani
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
            Desenvolvedor Web | Full Stack
          </p>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
            Especialista em construir aplicações de alta performance, aliando designs impecáveis e responsivos com arquiteturas backend robustas, escaláveis e integradas na nuvem.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projetos"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-8 py-3.5 rounded-2xl shadow-xl shadow-indigo-500/20 transition-all hover:-translate-y-1 hover:shadow-indigo-500/30 active:scale-95"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-2xl border border-slate-800 transition-all hover:-translate-y-1 active:scale-95"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projetos" className="py-24 max-w-6xl mx-auto px-6 relative z-10 border-t border-slate-900/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Trabalhos Recentes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Meus Projetos</h2>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosFiltrados.map((projeto) => (
            <div
              key={projeto.id}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group ${projeto.destaque
                ? "border-indigo-500/30 hover:border-indigo-500/60 shadow-xl shadow-indigo-500/5"
                : "hover:border-slate-800"
                }`}
            >
              {/* Highlight Gradient Overlay for Featured Projects */}
              {projeto.destaque && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500/20 to-purple-500/20 w-32 h-32 rounded-full blur-2xl opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity"></div>
              )}

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {projeto.nome}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {projeto.descricao}
                </p>

                {/* Tech badging */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-950 text-slate-300 border border-slate-800 text-[11px] px-2.5 py-1 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-900">
                {projeto.github ? (
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs py-3 px-4 rounded-xl font-medium transition-all active:scale-95 shadow-md"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    Código
                  </a>
                ) : (
                  <span className="flex-1 flex items-center justify-center gap-2 bg-slate-950/40 text-slate-500 border border-slate-900 text-xs py-3 px-4 rounded-xl font-medium cursor-not-allowed">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Privado
                  </span>
                )}

                {projeto.link ? (
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs py-3 px-4 rounded-xl font-medium transition-all active:scale-95 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Acessar
                  </a>
                ) : (
                  <div className="hidden sm:block flex-1"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 max-w-5xl mx-auto px-6 relative z-10 border-t border-slate-900/60">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Competências</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Habilidades Técnicas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {habilidades.map((grupo) => (
            <div key={grupo.categoria} className="glass-card rounded-3xl p-8 border hover:border-slate-800 transition-colors">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 pb-3 border-b border-slate-900">
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                {grupo.categoria}
              </h3>

              <div className="space-y-5">
                {grupo.itens.map((skill) => (
                  <div key={skill.nome} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{skill.nome}</span>
                      <span className="text-[11px] font-mono text-indigo-400 font-bold">{skill.nivel}</span>
                    </div>
                    {/* Visual indicators */}
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-900">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-1000 group-hover:opacity-80"
                        style={{ width: skill.nivel }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 max-w-4xl mx-auto px-6 text-center relative z-10 border-t border-slate-900/60">
        <div className="glass-card rounded-[2.5rem] p-12 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 w-96 h-96 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Vamos Criar Algo Incrível?</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-6">Entre em Contato</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Seja para novas oportunidades de negócios, propostas de desenvolvimento ou colaborações, estou sempre aberto a conversar.
          </p>

          {/* Social Links Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/MatheusTLampugnani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-950 hover:bg-slate-900 hover:border-slate-700 text-slate-300 px-8 py-4 rounded-full font-semibold border border-slate-800 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-lampugnani-1156b1231/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-950/30 border border-blue-900/30 hover:border-blue-900/60 hover:bg-blue-950/50 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-md"
            >
              LinkedIn
            </a>
          </div>

          {/* Quick Communication Blocks */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-300 font-medium text-sm md:text-base">
            <a
              href="mailto:matheuslampugnani123@gmail.com"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-950/80 hover:bg-slate-950 hover:border-indigo-500/40 px-6 py-4 rounded-2xl border border-slate-900 shadow-sm transition-all hover:-translate-y-1 cursor-pointer"
            >
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="break-all font-mono">matheuslampugnani123@gmail.com</span>
            </a>

            <a
              href="https://wa.me/5564992563950"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-950/80 hover:bg-slate-950 hover:border-emerald-500/40 px-6 py-4 rounded-2xl border border-slate-900 shadow-sm transition-all hover:-translate-y-1 cursor-pointer"
            >
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.638 1.98 14.154.95 11.516.95c-5.44 0-9.866 4.372-9.87 9.802 0 1.83.483 3.61 1.397 5.174l-.986 3.6 3.693-.972zm11.722-6.84c-.324-.162-1.92-.949-2.217-1.058-.297-.11-.513-.162-.73.162-.216.324-.837 1.058-1.026 1.275-.19.216-.378.243-.702.08-1.62-.815-2.836-1.74-3.965-3.68-.297-.51.297-.473.85-1.57.095-.19.047-.354-.024-.513-.071-.162-.622-1.498-.853-2.053-.225-.54-.452-.465-.62-.474-.16-.008-.344-.01-.527-.01-.184 0-.483.068-.735.341-.253.272-.965.943-.965 2.3 0 1.356.989 2.664 1.127 2.85.137.189 1.947 2.973 4.717 4.168.659.284 1.173.454 1.574.582.661.21 1.263.18 1.739.109.531-.08 1.92-.786 2.19-1.506.27-.72.27-1.338.19-1.472-.08-.135-.297-.216-.621-.378z" />
              </svg>
              <span className="font-mono">(64) 99256-3950</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-slate-500 text-xs border-t border-slate-900/60 relative z-10 bg-slate-950/30">
        <p>© {new Date().getFullYear()} Matheus Lampugnani. Feito usando React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;