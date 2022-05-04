import React, { useState } from "react";
import axios from "axios";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
 ButtonLanguage,
 ContainerImage,
 ContainerGeneric,
 H1,
 Header,
 Image,
 Main,
 SwitchLanguage,
 Footer,
} from "./appStyled";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

function App() {
 const [portuguese, setPortuguese] = useState<boolean>(true);
 const [suggestion, setSuggestion] = useState<string>("");
 const [feedback, setFeedback] = useState<string>("");

 const Submit = async () => {
  try {
   const response = await API.post("/message", { text: suggestion });
   if (response.status === 200) {
    setFeedback(
     portuguese ? "Obrigado pelo feedback! :)" : "Thx for your feedback! :)"
    );
    setSuggestion("");
   }
  } catch (e) {
   setFeedback(
    portuguese
     ? "Algo deu errado ao enviar o seu feedback :("
     : "Something wrong with feedback :("
   );
  }
 };

 return (
  <Main>
   <Header>
    <SwitchLanguage>
     <ButtonLanguage
      type="button"
      disabled={portuguese}
      onClick={() => {
       setPortuguese(true);
      }}
     >
      {portuguese ? "Português" : "Portuguese"}
     </ButtonLanguage>
     <ButtonLanguage
      type="button"
      disabled={!portuguese}
      onClick={() => {
       setPortuguese(false);
      }}
     >
      {portuguese ? "Inglês" : "English"}
     </ButtonLanguage>
    </SwitchLanguage>
    <H1>{portuguese ? "Meu currículo" : "My resume"}</H1>
    <ContainerImage>
     <Image src="me.jpg" alt="Me" />
    </ContainerImage>
   </Header>

   <ContainerGeneric>
    <h2>{portuguese ? "Dados pessoais" : "Personal data"}</h2>

    <section>
     <p className="item">{portuguese ? "Nome:" : "Name:"}</p>
     <p> Luiz Sérgio Gomes da Cruz</p>
    </section>

    <section>
     <p className="item">{portuguese ? "Idade:" : "Age:"}</p>
     <p> 27</p>
    </section>

    <section>
     <p className="item">{portuguese ? "Endereço:" : "Adress:"}</p>
     <p>
      Rua República do Iraque - 80, Apartamento 32B, São José dos Campos - São
      Paulo (12216-540)
     </p>
    </section>

    <section>
     <p className="item">Cel:</p>
     <p>{portuguese ? "(12) 991262242" : "+5512 991262242"}</p>
    </section>

    <section>
     <p className="item">Email:</p>
     <p>lsgdc06@gmail.com</p>
    </section>

    <section>
     <p className="item">{portuguese ? "O que eu faço?" : "What do I do?"}</p>
     <p>
      {portuguese ? "Sou desenvolvedor FullStack" : "I am a FullStack dev"}
     </p>
    </section>

    <section>
     <a href="https://github.com/lgdacruz">
      <AiFillGithub size={30} />
      <p>GitHub</p>
     </a>
    </section>

    <section>
     <a href="https://www.linkedin.com/in/luiz-s%C3%A9rgio-gomes-da-cruz/">
      <AiFillLinkedin size={30} />
      <p>Linkedin</p>
     </a>
    </section>
   </ContainerGeneric>

   <ContainerGeneric>
    <h2>{portuguese ? "Sobre mim" : "About me"}</h2>

    <section>
     <p>
      {portuguese
       ? "Comecei a desenvolver Mobile/Web em dezembro de 2020 na linguagem Javascript com foco no framework React js, desde então venho estudando e desenvolvendo projetos próprios."
       : "I started to develop Mobile/Web in December 2020 in the Javascript language with a focus on the React js framework, since then I have been studying and developing my own projects."}
     </p>
    </section>
   </ContainerGeneric>

   <ContainerGeneric>
    <h2>{portuguese ? "Competências" : "Skills"}</h2>

    <section>
     <ul>
      <li>{portuguese ? "Habilidades interpessoais" : "Soft Skills"}</li>
      <ul className="macro">
       <li>{portuguese ? "Gosto de aprender" : "I love to learn"}</li>
       <li>
        {portuguese
         ? "Estou sempre disposto a me reinventar"
         : "I am always willing to reinvent myself"}
       </li>
       <li>
        {portuguese
         ? "Gosto e tenho facilidade para trabalhar em equipe"
         : "I like and have the ability to work in a team"}
       </li>
      </ul>
      <li>{portuguese ? "Habilidades técnicas" : "Technical Skills"}</li>
      <ul className="macro">
       <li>React Native</li>
       <li>React js</li>
       <li>Next js</li>
       <li>Node Js</li>
       <li>AWS</li>
       <li>MongoDB - NoSql</li>
       <li>DynamoDB - NoSql</li>
       <li>Typescript</li>
       <li>Intermediary English</li>
      </ul>
     </ul>
    </section>
   </ContainerGeneric>

   <ContainerGeneric>
    <h2>{portuguese ? "Experiência" : "Experience"}</h2>

    <section>
     <ul>
      <li>
       {portuguese
        ? "Publicação de aplicativo na play store e apple store"
        : "App Publishing on Play Store and Apple Store"}
      </li>
      <li>{portuguese ? "Deploy de API" : "API deploy"}</li>
      <li>
       {portuguese ? "Integração com API própria" : "Integration with own API"}
      </li>
      <li>
       {portuguese
        ? "Integração com API de terceiros"
        : "Third-party API integration"}
      </li>
      <li>{portuguese ? "Versionamento com GIT" : "Version with GitHub"}</li>
      <li>{portuguese ? "Testes" : "Tests"}</li>
      <li>Push notification</li>
      <li>Expo</li>
      <li>Styled components</li>
     </ul>
    </section>

    <section>
     <div>
      <h3>Cronograma com você</h3>
      <p>
       {portuguese
        ? "Eu idealizei, desenvolvi, coloquei em produção e dou manutenção em um aplicativo mobile chamado Cronograma com você, o aplicativo é um projeto meu. A aplicação está disponível na play store."
        : "I conceived, developed, put into production and maintain a mobile application called Chronogram with you, the application is a project of mine. The application is available on the play store."}
      </p>
      <a
       className="appLink"
       href="https://play.google.com/store/apps/details?id=cronograma.with.you"
      >
       {portuguese ? "O aplicativo na play store" : "The app on the play store"}
      </a>
     </div>
    </section>

    <section>
     <div>
      <h5>{portuguese ? "Características do app" : "App feature"}</h5>
      <ul>
       <li>
        {portuguese
         ? "O projeto está em produção e pode ser utilizado por qualquer usuário"
         : "The project is in production and can be use for any user"}{" "}
       </li>
       <li>
        {portuguese
         ? "As tecnologias utilizadas no projeto são React Native, Node js, MongoDB Atlas and Amazon S3"
         : "Techs used in project are React Native, Node js, MongoDB Atlas and Amazon S3"}{" "}
       </li>
       <li>
        {portuguese
         ? "A autenticação foi feita com token JWT"
         : "The auth is JWT token"}{" "}
       </li>
       <li>
        {portuguese
         ? "O app utiliza a API da Stripe para processar os pagamentos"
         : "The app uses Stripe API to process payment"}{" "}
       </li>
       <li>
        {portuguese
         ? "O app tem push notifications"
         : "The app has push notifications"}{" "}
       </li>
      </ul>
     </div>
    </section>

    <section>
     <p>
      {portuguese
       ? "Todo o design, desenvolvimento, publicação e manutenção do aplicativo foram e são feitos por mim. Esse projeto me proporcionou uma evolução muito rápida, pois como era um projeto real que eu coloquei em produção, eu encarei os desafios da vida real no desenvolvimento buscando sempre a melhor forma de resolver os problemas, esse projeto demorou cerca de 1 ano e 2 meses para ficar disponível na play store."
       : "All design, development, publishing and maintenance of the app was and is done by me. This project provided me with a very fast evolution, because as it was a real project that I put into production, I faced the real life challenges in development, always looking for the best way to solve the problems, this project took about 1 year and 2 months to be available on the play store."}
     </p>
    </section>
   </ContainerGeneric>

   <ContainerGeneric>
    <h2>{portuguese ? "Objetivos" : "Goals"}</h2>
    <p>
     {portuguese
      ? "Tenho como objetivo principal o eterno aperfeiçoamento técnico, pessoal e profissional, tento tornar o progresso e a evolução partes do meu dia a dia, e com isso me tornar um profissional chave em qualquer tipo de projeto que envolva a minha área."
      : "My main objective is the eternal technical, personal and professional improvement, I try to make progress and evolution part of my daily life, and with that I become a key professional in any type of project that involves my area."}
    </p>
   </ContainerGeneric>

   <ContainerGeneric>
    <h2>{portuguese ? "Educação" : "Education"}</h2>
    <p>
     {portuguese
      ? "Todo meu conhecimento foi construído através das documentações das tecnologias e colocando a mão na massa desenvolvendo meus próprios projetos."
      : "All my knowledge was built through the documentation of technologies and getting my hands dirty developing my own projects."}
    </p>
   </ContainerGeneric>

   <Footer>
    <h2>PS</h2>
    <p>
     {portuguese
      ? "Ah, e esse site/currículo também foi criado por mim, se tiver alguma sugestão, crítica ou elogio pode me mandar aqui em baixo que como eu disse ali em cima, eu sempre gosto de melhorar. A mensagem vai chegar direto pra mim. \n Desde já, muito obrigado por chegar até aqui e o interesse no meu trabalho! :)"
      : "Oh, and this site/curriculum was also created by me, if you have any suggestions, criticisms or compliments you can send me down here, as I said above, I always like to improve. The message will come straight to me. Thank you in advance for coming this far and for your interest in my work!"}
    </p>
    <p className="feedback">{feedback}</p>
    <input
     className="text"
     type="text"
     size={50}
     value={suggestion}
     onChange={(event) => setSuggestion(event.target.value)}
    />
    <button
     type="button"
     disabled={suggestion === "" && true}
     onClick={() => Submit()}
    >
     Enviar
    </button>
   </Footer>
  </Main>
 );
}

export default App;
