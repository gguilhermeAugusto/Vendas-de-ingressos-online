document.addEventListener('DOMContentLoaded', function() {
    // Lista de eventos com descrições detalhadas
    const events = [
        {
            id: 1, 
            name: "Palestra: Inteligência Artificial", 
            date: "22/08/2024", 
            location: "Teatro César Cava", 
            price: 50,
            description: "Nesta palestra, especialistas em Inteligência Artificial (IA) discutirão as últimas inovações e tendências dessa tecnologia, que está revolucionando várias indústrias. O evento abordará tópicos como aprendizado de máquina, redes neurais, IA em aplicações reais e os desafios éticos e sociais que surgem com o uso crescente da IA. Ideal para profissionais da área de tecnologia, estudantes e entusiastas que desejam entender o impacto e as oportunidades trazidas pela IA."
        },
        {
            id: 2, 
            name: "Workshop: Desenvolvimento Web", 
            date: "23/08/2024", 
            location: "Teatro César Cava", 
            price: 60,
            description: "Este workshop prático é voltado para desenvolvedores que buscam aprimorar suas habilidades em desenvolvimento web. Durante o evento, os participantes irão trabalhar em projetos reais utilizando as tecnologias mais modernas, como HTML5, CSS3, JavaScript, e frameworks populares como React e Node.js. O workshop também abordará práticas recomendadas para a criação de sites responsivos e acessíveis, além de dicas sobre performance e segurança na web."
        },
        {
            id: 3, 
            name: "Seminário: Segurança da Informação", 
            date: "24/08/2024", 
            location: "Teatro César Cava", 
            price: 70,
            description: "O seminário sobre Segurança da Informação reunirá especialistas para discutir as principais ameaças cibernéticas enfrentadas hoje em dia, bem como estratégias eficazes para proteger dados e sistemas. Entre os temas abordados estarão a proteção contra ataques cibernéticos, criptografia, gestão de riscos, e as melhores práticas para garantir a segurança em ambientes corporativos e pessoais. Este evento é essencial para profissionais de TI, administradores de rede, e qualquer pessoa interessada em proteger suas informações online."
        }
    ];

    // Exibir lista de eventos na página inicial
    const eventListDiv = document.getElementById('event-list');
    if (eventListDiv) {
        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event-item';
            eventDiv.innerHTML = `
                <h2>${event.name}</h2>
                <p>Data: ${event.date}</p>
                <p>Local: ${event.location}</p>
                <p>Preço: R$ ${event.price.toFixed(2)}</p>
                <a href="event.html?id=${event.id}">Ver detalhes</a>
            `;
            eventListDiv.appendChild(eventDiv);
        });
    }

    // Exibir detalhes do evento na página de detalhes
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    if (eventId) {
        const event = events.find(e => e.id == eventId);
        if (event) {
            const eventDetailsDiv = document.getElementById('event-details');
            eventDetailsDiv.innerHTML = `
                <h2>${event.name}</h2>
                <p>Data: ${event.date}</p>
                <p>Hora: 19:00</p>
                <p>Local: ${event.location}</p>
                <p>Descrição: ${event.description}</p>
                <p>Preço: R$ ${event.price.toFixed(2)}</p>
                <p>Ingressos disponíveis: 250</p>
            `;

            // Cálculo do preço total dos ingressos
            const ticketQuantityInput = document.getElementById('ticket-quantity');
            const totalPriceSpan = document.getElementById('total-price');
            ticketQuantityInput.addEventListener('input', function() {
                const total = ticketQuantityInput.value * event.price;
                totalPriceSpan.textContent = total.toFixed(2);
            });
        }
    }
});
