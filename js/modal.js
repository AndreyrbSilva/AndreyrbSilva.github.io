// DADOS DOS PROJETOS

const myProjects = {
    "descartecerto": {
        title: 'DescarteCerto - Reciclagem Gamificada',
        date: 'Junho / 2026',
        shortDescription: 'Aplicativo mobile com scanner de IA, gamificação (streak, ranking) e painéis exclusivos para professores e admin.',
        description: 'O <strong>DescarteCerto</strong> é um aplicativo mobile que transforma a reciclagem em um jogo competitivo e educativo para o ambiente escolar (Projeto Integrador - SENAC).<br><br>O aluno aponta a câmera para um resíduo, a inteligência artificial (MobileNet) identifica a categoria (plástico, papel, metal, orgânico ou vidro) e recompensa com pontos. A plataforma evoluiu para contar com perfis dinâmicos customizáveis, notificações push em tempo real para ranking e módulos exclusivos de gestão para Professores e Administradores.<br><br><strong>Principais Funcionalidades:</strong><br>• Scanner de resíduos por IA.<br>• Gamificação: Pontos, Streak, Troféus e Missões diárias.<br>• Módulo Professor: Avaliação de turmas, Pódio e TeacherStatsBar.<br>• Painel Administrativo com dashboard completo.<br>• Segurança: JWT, bcrypt, AES, 2FA e Rate Limiting.',
        videoSrc: 'https://streamable.com/e/ld965t',
        technologies: [
            { icon: 'fa-brands fa-react', title: 'React Native + Expo SDK 54' },
            { icon: 'fa-brands fa-node-js', title: 'Node.js + Fastify 5' },
            { icon: 'fa-solid fa-database', title: 'Prisma 7 + PostgreSQL (Supabase)' },
            { icon: 'fa-brands fa-python', title: 'Python + FastAPI (AI)' },
            { icon: 'fa-solid fa-leaf', title: 'Zustand + React Query' },
            { icon: 'fa-brands fa-github', title: 'Vitest + CI/CD (GitHub Actions)' }
        ],
        site: 'https://expo.dev/artifacts/eas/eFpZo6LH3Nk8DU1UbFngWt.apk', 
        repository: 'https://github.com/AndreyrbSilva/Descarte-Certo',
        figma: 'https://www.figma.com/design/BFCU5zRmcbjUzBN9iBxXdG/Descarte-Certo?node-id=0-1&t=YgRpyujrJZyj6L6y-1',
        notion: '',
        trello: 'https://trello.com/invite/b/6a1387183d9db992d4570eb0/ATTI897625145d586b5ad8dfec434397c7d2AA5490EA/descartecerto-pi',
        miro: ''
    },

    "pontoplus": {
        title: 'PontoPlus - Parada Inteligente',
        date: '9 de Dezembro de 2025',
        shortDescription: 'Protótipo IoT de mobilidade urbana que simula o funcionamento de transporte público conectado, exibindo o tempo estimado de chegada (ETA) em tempo real.',
        description: 'O <strong>PontoPlus</strong> é uma solução voltada para cidades inteligentes, criada para otimizar a experiência de passageiros e a gestão de transporte público. O projeto simula a integração de sensores IoT (GPS, DHT11, LDR, Ultrassom) com um sistema web interativo.<br><br>No backend, a aplicação utiliza <strong>Python com Flask</strong> para processar requisições e cálculos de rotas (OSRM), armazenando frotas, linhas e dados de sensores em um banco de dados NoSQL georreferenciado no <strong>MongoDB Atlas</strong>.<br><br><strong>Principais Funcionalidades:</strong><br>• Monitoramento de frotas e exibição do Tempo Estimado de Chegada (ETA).<br>• Rastreamento via coordenadas geográficas (GeoJSON).<br>• Consumo de API própria via Fetch API no front-end.<br>• Interface dinâmica com atualização automática dos dados.',
        videoSrc: 'https://streamable.com/e/73a8lx',
        technologies: [
            { icon: 'fa-brands fa-python', title: 'Python (Flask)' },
            { icon: 'fa-solid fa-database', title: 'MongoDB Atlas' },
            { icon: 'fa-brands fa-js', title: 'JavaScript (Fetch API)' },
            { icon: 'fa-brands fa-html5', title: 'HTML5' },
            { icon: 'fa-brands fa-css3-alt', title: 'CSS3' },
            { icon: 'fa-solid fa-microchip', title: 'Simulação IoT (Sensores)' }
        ],
        site: 'https://pontoplus-qfq2.onrender.com/', 
        repository: 'https://github.com/AndreyrbSilva/PontoPlus_ParadaInteligente_PI',
        figma: '',
        notion: '',
        trello: '',
        miro: ''
    },
    
    "senkas": {
        title: 'SENKAS - Auditoria e Compliance',
        date: '18 de Junho de 2025',
        shortDescription: 'Aplicativo Android nativo focado na gestão de auditoria e compliance do Senac, com integração de banco de dados local (Room) e relatórios gerados via API em Python.',
        description: 'O <strong>SENKAS</strong> é um aplicativo Android nativo voltado para a gestão de auditoria e compliance do Senac. Ele automatiza o acompanhamento de ações, cálculo de progresso e atribuição de tarefas entre colaboradores.<br><br>Neste projeto em equipe, atuei diretamente na <strong>UI/UX e na criação das animações nativas</strong>, garantindo uma experiência moderna e fluida. O sistema utiliza Kotlin, Room (SQLite) para armazenamento local e consome uma API em Python (Flask) para geração dinâmica de relatórios em PDF, Word e Excel.<br><br><strong>Principais Funcionalidades:</strong><br>• Gestão completa de pilares, ações e atividades.<br>• Controle de acesso por perfis de usuário.<br>• Cálculo automático de porcentagem de execução.<br>• Geração e download de relatórios via integração com API externa.',
        videoSrc: 'https://streamable.com/e/4urpki?', 
        technologies: [
            { icon: 'fa-brands fa-android', title: 'Android Nativo' },
            { icon: 'fa-solid fa-database', title: 'SQLite / Room' },
            { icon: 'fa-brands fa-python', title: 'Python (API Relatórios)' },
            { icon: 'fa-brands fa-figma', title: 'UI/UX Design no Figma' },
            { icon: 'fa-brands fa-trello', title: 'Gestão no Trello' }
        ],
        site: '', 
        repository: 'https://github.com/AndreyrbSilva/SENAC-PE-ProjetoPI-Senkas',
        figma: 'https://www.figma.com/design/hzO79KFKydvrj3Y4NApAbE/Projeto-do-Grupo-4?node-id=2-6',
        notion: 'https://www.notion.so/Sistema-de-Ouvidoria-do-SENAC-1a6cf81c640d8080b6d3f4cd051740fa?pvs=4',
        trello: 'https://trello.com/invite/b/67ec3fa72b0388fbbbc61382/ATTI65e83e7e71fbc4b6e05d9965b82e2f0fDD78737D/projeto-integrador',
        miro: 'https://miro.com/app/board/uXjVIFXhKPU=/?inviteKey=VzVFWVVWTWl6dU13cFJuN2wvVjE4UytHVXlhak5KNWtXblhKY2x5ZkRkd0pXdlYvVDlqZTZHdjlJeWRBTzB0S1kzT1E2RE84bEt2VDkzTzNXVXBHaURrZlk4NlVtVmc4SzJVQllVM0hPZHlYQ0hNcjQ0a0JJR2Mra0tnVFNwTFJyVmtkMG5hNDA3dVlncnBvRVB2ZXBnPT0hdjE='
    },

    "landing_pontoplus": {
        title: 'Landing Page - PontoPlus',
        date: '27 de Novembro de 2025',
        shortDescription: 'Uma landing page moderna e responsiva criada para apresentar ao público o sistema de mobilidade urbana inteligente PontoPlus.',
        description: 'Desenvolvida como porta de entrada para o sistema <strong>PontoPlus</strong>, esta landing page tem o objetivo de apresentar de forma clara e atrativa as funcionalidades do projeto de IoT aplicado à mobilidade urbana.<br><br>O foco principal foi construir uma interface limpa com excelente navegação, utilizando apenas tecnologias front-end nativas para garantir a melhor performance e responsividade em qualquer dispositivo móvel ou desktop.',
        videoSrc: 'https://streamable.com/e/1hu1l6?',
        technologies: [
            { icon: 'fa-brands fa-html5', title: 'HTML5' },
            { icon: 'fa-brands fa-css3-alt', title: 'CSS3' },
            { icon: 'fa-brands fa-js', title: 'JavaScript (Vanilla)' },
            { icon: 'fa-brands fa-figma', title: 'Prototipação no Figma' }
        ],
        site: 'https://andreyrbsilva.github.io/Landing-Page-PontoPlus/', 
        repository: 'https://github.com/AndreyrbSilva/Landing-Page-PontoPlus',
        figma: '',
        notion: '',
        trello: '',
        miro: ''
    },

    "dogao_leo": {
        title: 'Dogão do Léo - O Gigante do Ibura',
        date: '25 de Janeiro de 2026',
        shortDescription: 'Landing page para lanchonete local com sistema inteligente de avaliações, que utiliza Google Sheets e Apps Script para filtrar e exibir depoimentos em tempo real.',
        description: 'Desenvolvida para transformar a presença digital do <strong>Dogão do Léo</strong>, esta landing page vai além de um simples menu, atuando como uma plataforma para exibir seus produtos.<br><br>O grande diferencial do projeto é o <strong>Sistema de Avaliações Inteligente</strong>. Utilizando Google Forms e Google Sheets como banco de dados, criei uma API com Google Apps Script que filtra automaticamente palavras ofensivas (via Regex) e exibe no site os comentários construtivos em tempo real, independentemente da nota.<br><br>👉 <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjODL4ruV00S77tL1GhBkaMF5zy8GjaNCgBHzhlUVlHhj-PQ/viewform" target="_blank" style="color: var(--primary); font-weight: 600; text-decoration: underline; text-underline-offset: 3px;">Clique aqui para testar o formulário ao vivo</a> e veja sua avaliação aparecer no mural do site!<br><br><strong>Principais Funcionalidades:</strong><br>• Interface Mobile First com animações de interseção.<br>• Curadoria e filtro de segurança automáticos para depoimentos (Regex).<br>• Integração nativa de front-end (Fetch API) com planilhas do Google.',
        videoSrc: 'https://streamable.com/e/z40chj?', 
        technologies: [
            { icon: 'fa-brands fa-html5', title: 'HTML5' },
            { icon: 'fa-brands fa-css3-alt', title: 'CSS3' },
            { icon: 'fa-brands fa-js', title: 'JavaScript (ES6+)' },
            { icon: 'fa-brands fa-google', title: 'Google Apps Script (API)' },
            { icon: 'fa-solid fa-table', title: 'Google Sheets (Banco de Dados)' }
        ],
        site: 'https://andreyrbsilva.github.io/dogao-do-leo-site/', 
        repository: 'https://github.com/AndreyrbSilva/dogao-do-leo-site', 
        figma: '',
        notion: '',
        trello: '',
        miro: ''
    },

    "lumiere_estetica": {
        title: 'Landing Page - Lumière Estética',
        date: '30 de Março de 2026',
        shortDescription: 'Landing page para clínica de estética com design sofisticado, animações de scroll, contador de estatísticas animado e integração com Google Maps.',
        description: 'Projeto de portfólio para o nicho de estética, construído com HTML, CSS e JavaScript puro, sem frameworks.<br><br>A identidade visual foi pensada do zero com paleta exclusiva, tipografia elegante e micro-interações que transmitem sofisticação.<br><br><strong>Principais Funcionalidades:</strong><br>• Animações de entrada via Intersection Observer.<br>• Cursor personalizado com efeito de expansão.<br>• Contador de estatísticas animado por scroll.<br>• Google Maps integrado na seção de localização.',
        videoSrc: 'https://streamable.com/e/y60d2x?',
        technologies: [
            { icon: 'fa-brands fa-html5', title: 'HTML5' },
            { icon: 'fa-brands fa-css3-alt', title: 'CSS3' },
            { icon: 'fa-brands fa-js', title: 'JavaScript (ES6+)' }
        ],
        site: 'https://andreyrbsilva.github.io/lumiere-estetica/', 
        repository: 'https://github.com/AndreyrbSilva/lumiere-estetica',
        figma: '',
        notion: '',
        trello: '',
        miro: ''
    },

    "mypokedex": {
        title: 'MyPokedex - Pokedex Interativa',
        date: '19 de Abril de 2026',
        shortDescription: 'Pokedex interativa que consome a PokéAPI para exibir informações detalhadas de cada Pokémon, com sistema de favoritos e design responsivo.',
        description: 'Desenvolvida como um projeto pessoal para explorar consumo de APIs e interatividade, a <strong>MyPokedex</strong> é uma aplicação web que utiliza a PokéAPI para buscar e exibir dados completos sobre os Pokémon.<br><br>O usuário pode navegar por uma lista paginada, visualizar detalhes como tipos, habilidades e estatísticas, e marcar seus Pokémon favoritos, que são armazenados localmente no navegador.<br><br><strong>Principais Funcionalidades:</strong><br>• Busca e exibição detalhada de Pokémon via PokéAPI.<br>• Sistema de favoritos com persistência local.<br>',
        videoSrc: 'https://streamable.com/e/jdezhb?',
        technologies: [
            { icon: 'fa-brands fa-react', title: 'React' },
            { icon: 'fa-solid fa-bolt', title: 'Vite' },
            { icon: 'fa-solid fa-wind', title: 'Tailwind CSS' },
            { icon: 'fa-brands fa-figma', title: 'Design no Figma' }
        ],
        site: 'https://mypokedex-rct.vercel.app/',
        repository: 'https://github.com/AndreyrbSilva/Pokedex-React',
        figma: '',
        notion: '',
        trello: '',
        miro: ''
    }
};

// LÓGICA DO MODAL DE PROJETOS

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-project-modal');
    const projectCards = document.querySelectorAll('.box'); 
    const title = document.getElementById('modalProjectTitle');
    const date = document.getElementById('modal-project-date');
    const desc = document.getElementById('modal-project-desc');
    const videoWrapper = document.getElementById('modal-video-wrapper');
    const iframe = document.getElementById('modal-project-video');
    const techContainer = document.getElementById('modal-tech-container');
    const linkSite = document.getElementById('link-site');
    const linkRepo = document.getElementById('link-repo');
    const linkFigma = document.getElementById('link-figma');
    const linkNotion = document.getElementById('link-notion');
    const linkTrello = document.getElementById('link-trello');
    const linkMiro = document.getElementById('link-miro');

    if (!modal || projectCards.length === 0) return;

    const toggleModal = (state) => {
        if (state) {
            modal.classList.add('active'); 
            document.body.style.overflow = 'hidden'; 
        } else {
            modal.classList.remove('active'); 
            document.body.style.overflow = 'auto'; 
            iframe.src = ''; 
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            
            const projectId = card.getAttribute('data-id');
            const data = myProjects[projectId];
            if (data) {
                title.textContent = data.title;
                date.textContent = data.date;
                desc.innerHTML = data.description; 

                techContainer.innerHTML = '';
                if (data.technologies && data.technologies.length > 0) {
                    data.technologies.forEach(tech => {
                        const i = document.createElement('i');
                        i.className = tech.icon;
                        i.title = tech.title; 
                        techContainer.appendChild(i);
                    });
                    techContainer.classList.remove('hidden-element');
                } else {
                    techContainer.classList.add('hidden-element');
                }

                if (data.videoSrc) {
                    videoWrapper.classList.remove('hidden-element');
                    let videoUrl = data.videoSrc;
                    if (videoUrl.includes('streamable.com')) {
                         videoUrl += '?autoplay=1&loop=0';
                    }
                    iframe.src = videoUrl;
                } else {
                    videoWrapper.classList.add('hidden-element');
                    iframe.src = '';
                }

                checkButton(linkSite, data.site);
                checkButton(linkRepo, data.repository);
                checkButton(linkFigma, data.figma);
                checkButton(linkNotion, data.notion);
                checkButton(linkTrello, data.trello);
                checkButton(linkMiro, data.miro);

                toggleModal(true);
            }
        });
    });

    const checkButton = (element, link) => {
        if (link && link !== '#') {
            element.classList.remove('hidden-element');
            element.href = link;
            
            // Tratamento especial para o botão de "site" virar "Instalar App" se for um APK
            if (element.id === 'link-site') {
                if (link.includes('.apk')) {
                    element.innerHTML = '<i class="fa-brands fa-android"></i> Instalar App';
                } else {
                    element.innerHTML = '<i class="fas fa-external-link-alt"></i> Acessar projeto';
                }
            }
            
        } else {
            element.classList.add('hidden-element');
        }
    }

    closeBtn.addEventListener('click', () => toggleModal(false));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) toggleModal(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal.classList.contains('active')) {
            toggleModal(false);
        }
    });
}

initProjectModal();