import './index.css';

const meusProjetos = [
  {
    id: 1,
    nome: "mais-clinica",
    descricao: "Plataforma completa para gestão de clínicas médicas e odontológicas. Oferece controle eficiente de agendamentos, prontuários eletrônicos e gestão de pacientes, otimizando a rotina do consultório.",
    tecnologias: ["JavaScript", "React", "Bootstrap", "Node.js"],
    github: "https://github.com/MatheusTLampugnani/mais-clinica",
    link: "https://matheustlampugnani.github.io/mais-clinica/"
  },
  {
    id: 2,
    nome: "MoneyBoard",
    descricao: "Aplicação web inteligente para gestão financeira pessoal. Permite o acompanhamento detalhado de receitas, despesas e saldo, fornecendo uma visão clara da saúde financeira através de uma interface intuitiva.",
    tecnologias: ["JavaScript", "React", "Bootstrap", "Node.js"],
    github: "https://github.com/MatheusTLampugnani/MoneyBoard",
    link: "https://moneyboard.onrender.com",
  },
  {
    id: 3,
    nome: "Imobilizados",
    descricao: "Sistema corporativo voltado para o controle e gestão patrimonial. Facilita o registro, acompanhamento e movimentação de ativos imobilizados, garantindo maior controle administrativo para empresas.",
    tecnologias: ["JavaScript", "React", "Bootstrap", "Node.js"],
  },
  {
    id: 4,
    nome: "Geek Loop",
    descricao: "Plataforma interativa desenvolvida para engajar a comunidade da cultura pop. Focada em proporcionar uma experiência de usuário dinâmica através de recursos modernos e conteúdo sobre o ecossistema geek.",
    tecnologias: ["JavaScript", "React", "Bootstrap"],
    github: "https://github.com/MatheusTLampugnani/geek-loop",
    link: "https://geekloop.onrender.com/",
  },
  {
    id: 5,
    nome: "Floréssia Pratas",
    descricao: "Vitrine virtual e e-commerce desenvolvido para a marca de joias Floréssia Pratas. Focado em proporcionar uma experiência de compra elegante e intuitiva, destacando o catálogo de produtos com um design moderno e responsivo.",
    tecnologias: ["JavaScript", "React", "Bootstrap"],
    github: "https://github.com/MatheusTLampugnani/floressia-pratas",
    link: "https://floressiapratas.onrender.com//",
  },
  {
    id: 6,
    nome: "bom-burguer",
    descricao: "Sistema digital para gestão de pedidos e catálogo de hamburguerias. Desenvolvido para melhorar a experiência de compra do cliente e otimizar o fluxo de preparação e entrega do estabelecimento.",
    tecnologias: ["JavaScript", "React", "Bootstrap"],
    github: "https://github.com/MatheusTLampugnani/bom-burguer",
    link: "https://matheustlampugnani.github.io/bom-burguer/",
  },
  {
    id: 7,
    nome: "sei",
    descricao: "Aplicação web frontend com foco em usabilidade e design responsivo. Construída para apresentar dados de forma clara e moderna na interface do usuário, garantindo uma navegação fluida.",
    tecnologias: ["JavaScript", "React", "Bootstrap", "Node.js"],
    github: "https://github.com/MatheusTLampugnani/sei"
  },
  {
    id: 8,
    nome: "checklist",
    descricao: "Gerenciador de tarefas robusto com foco em produtividade. Permite a criação, organização, acompanhamento de status e automatização de rotinas diárias de forma simples e eficiente.",
    tecnologias: ["Python", "Django"],
    github: "https://github.com/MatheusTLampugnani/checklist"
  }
];

function App() {
  return (
    <div className="min-h-screen w-full min-w-[100vw] overflow-x-hidden bg-slate-50 font-sans bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] selection:bg-indigo-200 selection:text-indigo-900">
      <header className="relative w-full bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-900 text-white py-24 sm:py-32 mb-16 shadow-2xl rounded-b-[2.5rem] sm:rounded-b-[4rem] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Matheus Lampugnani
          </h1>
          <span className="inline-block text-base sm:text-lg md:text-xl font-medium text-indigo-900 bg-white/95 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
            Desenvolvedor Web | Full Stack
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-12 flex items-center justify-center md:justify-start">
          <span className="mr-4 text-4xl sm:text-5xl">Meus Projetos</span> 
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {meusProjetos.map((projeto) => (
            <div key={projeto.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mb-4">{projeto.nome}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">{projeto.descricao}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {projeto.tecnologias.map(tech => (
                    <span key={tech} className="bg-slate-50 text-slate-600 border border-slate-200 text-xs px-3 py-1.5 rounded-lg font-semibold tracking-wide hover:bg-slate-100 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100">
                {projeto.github ? (
                  <a 
                    href={projeto.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm py-3 px-4 rounded-xl font-medium transition-colors shadow-md hover:shadow-lg active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    Código
                  </a>
                ) : (
                  <span className="flex-1 flex items-center justify-center gap-2 bg-slate-50 text-slate-400 text-sm py-3 px-4 rounded-xl font-medium cursor-not-allowed border border-slate-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Privado
                  </span>
                )}
                
                {projeto.link ? (
                  <a 
                    href={projeto.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-3 px-4 rounded-xl font-medium transition-colors shadow-md hover:shadow-lg active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Acessar
                  </a>
                ) : (
                  <div className="hidden sm:block flex-1"></div>
                )}
              </div>

            </div>
          ))}
        </div>
      </main>
      
      <section className="w-full bg-white border-t border-slate-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10">Vamos trabalhar juntos?</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://github.com/MatheusTLampugnani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-md">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/matheus-lampugnani-1156b1231/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-md">
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-600 font-medium text-lg">
            <a href="mailto:matheuslampugnani123@gmail.com" className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 hover:border-indigo-200 px-6 py-4 rounded-2xl border border-slate-100 shadow-sm transition-all hover:-translate-y-1 cursor-pointer">
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="break-all sm:break-normal">matheuslampugnani123@gmail.com</span>
            </a>

            <a href="https://wa.me/5564992563950" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 hover:border-indigo-200 px-6 py-4 rounded-2xl border border-slate-100 shadow-sm transition-all hover:-translate-y-1 cursor-pointer">
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(64) 99256-3950</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full text-center py-8 bg-slate-50 text-slate-500 text-sm border-t border-slate-200">
        <p>© {new Date().getFullYear()} Matheus Lampugnani. Feito com React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;