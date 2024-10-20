Este **Semáforo** é uma simulação simples de um semáforo funcional feita com HTML, CSS e JavaScript. 

Ele consiste em um retângulo vertical que contém três luzes circulares, representando as cores típicas de um semáforo: vermelho, amarelo e verde. Abaixo do semáforo, há um poste cinza, que dá uma aparência mais realista. O semáforo é responsivo, ou seja, ele se ajusta automaticamente a diferentes tamanhos de tela, tornando-o adequado para visualização em dispositivos móveis e desktop.

## Funcionalidades:##

**Ciclo de Luzes:**

O semáforo segue uma ordem específica de iluminação das luzes:
Amarelo: A primeira luz a acender ao carregar a página.
Vermelho: Acende logo após a luz amarela.
Verde: Acende por último, após o vermelho.
Este ciclo se repete indefinidamente a cada 2 segundos.
Transições suaves:

A transição entre as luzes é feita de forma suave com um efeito de opacidade, criando uma mudança visual agradável quando a luz se acende e apaga.
Responsividade:

O semáforo adapta-se automaticamente a diferentes tamanhos de ecrã. Em dispositivos com ecrãs menores, como smartphones, o semáforo e as luzes diminuem de tamanho, mantendo a sua proporção e funcionalidade.
Poste realista:

O poste foi adicionado na base do semáforo para dar uma aparência mais realista, simulando um semáforo de rua.
Uso de JavaScript:

O comportamento das luzes é controlado por JavaScript, que alterna entre as luzes de acordo com a ordem estabelecida. A função setInterval é usada para mudar a luz a cada 2 segundos, garantindo a continuidade do ciclo.
Início ao carregar a página:

Assim que a página é carregada, a luz amarela acende automaticamente, e o ciclo começa de acordo com a ordem estabelecida.
Este semáforo é uma implementação simples e eficiente para demonstrar conceitos básicos de animação e controle de elementos com JavaScript, além de boas práticas de design responsivo com CSS.
