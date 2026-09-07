# Leitura, cores e controles

A camada `css/visual-system.css`, carregada após os estilos de cada página, reúne o acabamento visual compartilhado.

## Paleta

- Laranja principal: `#f58220`.
- Dourado da família do logotipo: `#fcb817`.
- Texto sobre o laranja principal: `#21170e`.
- Laranja escuro para texto em superfície clara: `#874600`.

Os laranjas dos estilos existentes foram aproximados da mesma família de matiz, preservando sua luminância relativa para manter o contraste. As variações claras e escuras cumprem funções diferentes; aplicar o laranja principal em todo texto pequeno sobre branco prejudicaria a leitura. Fotos, logotipos e outras imagens não foram recoloridos.

## Tipografia

Textos corridos partem de 16 px e crescem suavemente até 17 px. Conteúdo editorial usa até 18 px, entrelinha de 1,75 e largura máxima de 68 caracteres. Títulos preservam sua hierarquia, com menos peso nos níveis secundários. Campos de formulário mantêm pelo menos 16 px. Descrições dos cards e informações de contato receberam tamanho e entrelinha maiores.

## Botões

Ações principais usam cantos de 12 px, fonte de peso 600 e pelo menos 44 px de altura. Sombras e efeitos de relevo foram reduzidos. O botão principal da home usa fundo laranja sólido com texto escuro. Cores funcionais, como o verde do WhatsApp, permanecem distintas. Foco por teclado continua visível e a preferência por movimento reduzido é respeitada.

## Validação

Verificações locais de HTML, CSS, JavaScript, build e integração, além de testes no Chromium para contraste sobre superfícies sólidas, navegação, fluxos e responsividade. Os testes automatizados não substituem avaliação em aparelhos físicos, outros navegadores ou inspeção de texto sobre fotos.
