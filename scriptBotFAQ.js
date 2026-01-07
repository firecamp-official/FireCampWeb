const chatHeader = document.getElementById('chat-header');
        const chatBody = document.getElementById('chat-body');
        const chatMessages = document.getElementById('chat-messages');
        const chatOptions = document.getElementById('chat-options');

        const faqTree = {
            question: "Salut ! Je suis ton assistant Sparky ! Je suis là pour répondre à tes questions 💌😁",
            options: [
                {
                    text: "Sites à partir de templates",
                    response: "Voici nos options de templates détaillées :",
                    next: [
                        {
                            text: "Simple (3 pages, 250€)",
                            response: `**Simple – 3 pages – 250€**\n- Pages incluses : Landing, texte simple, responsive\n- Pages supplémentaires : 50€/page\n- Notes : idéal pour un site rapide et clair\n- Ajout de fonctionnalités simples (formulaire auto-reply, galerie simple) : 50-100€`,
                            next: []
                        },
                        {
                            text: "Avancé (3 pages, 400€)",
                            response: `**Avancé – 3 pages – 400€**\n- Pages incluses : Landing, sections interactives, animations CSS/JS\n- Pages supplémentaires : 75€/page\n- Notes : parfait pour un site moderne avec animations\n- Ajout de fonctionnalités moyennes (chat simple, slider dynamique) : 120-200€`,
                            next: []
                        },
                        {
                            text: "Premium (3 pages, 600€)",
                            response: `**Premium – 3 pages – 600€**\n- Pages incluses : Design premium, sections dynamiques, animations poussées\n- Pages supplémentaires : 100€/page\n- Notes : site haut de gamme pour un rendu pro\n- Ajout de fonctionnalités complexes (intégration API, chat complet) : 250-400€`,
                            next: []
                        }
                    ]
                },
                {
                    text: "Sites personnalisés",
                    response: "Options sur-mesure avec détails :",
                    next: [
                        {
                            text: "5 pages – 700€",
                            response: `**5 pages – 700€**\n- Design personnalisé et responsive\n- Ajout de pages supplémentaires : 100€/page\n- Idéal pour un site moderne, adapté PME\n- Fonctionnalités : selon complexité (50-400€)`,
                            next: []
                        },
                        {
                            text: "10 pages – 1200€",
                            response: `**10 pages – 1200€**\n- Design complet pour PME\n- Pages supplémentaires : 90€/page\n- Intégrations basiques incluses\n- Fonctionnalités : selon complexité (50-400€)`,
                            next: []
                        },
                        {
                            text: "15 pages – 1700€",
                            response: `**15 pages – 1700€**\n- Site complet avec sections dynamiques et animation légère\n- Pages supplémentaires : 80€/page\n- Fonctionnalités : selon complexité (50-400€)`,
                            next: []
                        }
                    ]
                },
                {
                    text: "Ajout de fonctionnalités",
                    response: "Voici les types et exemples :",
                    next: [
                        {
                            text: "Simple – 50-100€",
                            response: `Exemples :\n- Menu interactif / animations JS → 80€\n- Galerie simple → 50-100€`,
                            next: []
                        },
                        {
                            text: "Moyen – 120-200€",
                            response: `Exemples :\n- Chatbot FAQ → 150€\n- Formulaire tri + auto-reply → 150€\n- Galerie filtrable dynamique → 180€`,
                            next: []
                        },
                        {
                            text: "Complexe – 250-400€",
                            response: `Exemples :\n- Intégration API externe (paiement, maps…) → 300-400€\n- Chat complet avec login → 350€`,
                            next: []
                        }
                    ]
                },
                {
                    text: "Forfaits mensuels",
                    response: "Maintenance & modifications :",
                    next: [
                        {
                            text: "Basique – 30€/mois",
                            response: `**Basique – 30€/mois**\n- 2 mois offerts\n- 10 changements d’images + 10 de texte / mois\n- Extras : 5€/modif`,
                            next: []
                        },
                        {
                            text: "Normal – 50€/mois",
                            response: `**Normal – 50€/mois**\n- Choix payant\n- 20 changements d’images + 30 de texte / mois\n- Extras : 5€/modif`,
                            next: []
                        },
                        {
                            text: "Premium – 90€/mois",
                            response: `**Premium – 90€/mois**\n- 1 mois offert\n- 40 changements d’images + texte illimité\n- Extras : 7€/modif`,
                            next: []
                        }
                    ]
                },
                {
                    text: "Packs complémentaires",
                    response: "Optionnels :",
                    next: [
                        { text: "Démarrage – 100€", response: "Installation template, logo + couleurs + textes de base", next: [] },
                        { text: "Visibilité – 150€", response: "SEO de base + intégration réseaux sociaux", next: [] },
                        { text: "Interactif – 200€", response: "Une fonctionnalité interactive incluse (chat, formulaire avancé, galerie dynamique)", next: [] },
                        { text: "Support technique – 50€/mois", response: "Maintenance, mises à jour, sauvegardes", next: [] }
                    ]
                }
            ]
        };

        let currentNode = faqTree;

        function showMessage(text, sender = "robot") {
            const div = document.createElement('div');
            div.classList.add('message', sender);
            div.textContent = text;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showOptions(options) {
            chatOptions.innerHTML = '';
            if (options.length === 0) {
                const btn = document.createElement('button');
                btn.textContent = "Recommencer";
                btn.onclick = () => startChat();
                chatOptions.appendChild(btn);
            } else {
                options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.textContent = opt.text;
                    btn.onclick = () => {
                        showMessage(opt.text, "user");
                        showMessage(opt.response);
                        currentNode = opt;
                        showOptions(opt.next || []);
                    }
                    chatOptions.appendChild(btn);
                });
            }
        }

        function startChat() {
            chatMessages.innerHTML = '';
            currentNode = faqTree;
            showMessage(currentNode.question);
            showOptions(currentNode.options);
        }

        chatHeader.addEventListener('click', () => {
            chatBody.style.display = chatBody.style.display === 'none' ? 'block' : 'none';
        });

        // Démarrage automatique
        startChat();
