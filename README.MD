<h1 align="center">Actors Adm</h1>

<p align="center">Aplicação FullStack criada para praticar o relacionamento entre o Front-end com o back-end com o Framework Axios do javascript</strong>!</p>

<img width="100%" object-fit="cover" src="front/src/images/GetAllActors.gif" alt="Método GET" />

<img width="100%" object-fit="cover" src="front/src/images/RegisterActor.gif" alt="Método POST" />

<img width="100%" object-fit="cover" src="front/src/images/UpdateActor.gif" alt="Método PUT" />

<img width="100%" object-fit="cover" src="front/src/images/DeleteActor.gif" alt="Método Delete" />

<h2> Índice</h2>

* [Introdução](#intro)
* [Descrição do Projeto](#descrição-do-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Desenvolvedores e demais contribuidores](#pessoas-envolvidas)
* [Conclusão](#conclusão)

<h2 id="intro">Introdução</h2>

<p>Requisições HTTP são extremamente essenciais para o desenvolvimento web. Por meio delas, interligamos o front-end e o back-end, blocos primordiais em projetos fullstack que muitas vezes são vistos como partes isoladas. Enxergando a importância dessa conexão entre os dois, foi desenvolvida esta aplicação com o intuito de utilizar o React.js no front-end e o Node.js (que por sua vez se conecta com um banco de dados Mysql) no back-end, retornando para o front informações e processamentos realizados no back por meio do Axios, um dos frameworks mais famosos do javascript que trabalha de forma eficaz fazendo conexões HTTP. .</p>

<h2 id="descrição-do-projeto">Descrição do Projeto</h2>

<p>O Actors Adm é uma aplicação Dockerizada que se conecta à tabela actor do banco de dados Sakila disponibilizada pelo Mysql. Por meio do comando "docker-compose up" (necessário possuir o Docker instalado) são carregados três containers:</p>

<ol>
<li><h4>Api-container</h4></li> 


 <p>Contém o back-end do projeto onde é utilizado o Node.js para criar métodos HTTP de CRUD (criação, leitura, atualização e exclusão) por meio dos verbos GET, POST, PUT e DELETE, pertencentes à rota actors.</p>

<li><h4>Mysql-container</h4></li> 


 <p>Contém o banco de dados e o Mysql, onde é carregado automaticamente o sakila para uso da tabela actor.</p>

<li><h4>web-container</h4></li> 

 <p>Contém o Front-end do projeto, onde no componente Actors é possível por meio de quatro botões escolher qual a ação a ser executada pelo usuário, seja ela de criação, leitura, atualização ou exclusão. Ao clicar no botão correspondente, o componente relazionado ao método é carregado e é nele que é utilizado o axios para a conexão com o back-end.</p>
</ol>
</p>

<h2 id="tecnologias-utilizadas">Tecnologias utilizadas</h2>

* `HTML5`
* `CSS3`
* `Javascript (ECMAScript 2018 no Front e CommonJs no Back)`
* `React`
* `Docker e Docker-Compose`
* `Node.js`
* `Tailwind CSS`
* `Mysql`
* `Axios`

<h2 id="pessoas-envolvidas">Desenvolvedores e demais contribuidores</h2>

* <strong>Bruno Gabryell Cabral da Silva</strong> - Desenvolvedor Web;

<h2 id="conclusão">Conclusão</h2>

<p>Programar é um eterno aprendizado. Quanto mais se pratica, mais se melhora. Praticar conceitos de programação com coisas que se é apaixonado apimenta ainda mais a relação! Muitos aprendizados novos são adicionados a cada dia, fazendo com que este projeto já tenha valido a pena antes mesmo de ser concluído!</p>
