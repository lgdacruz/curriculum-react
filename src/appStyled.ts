import styled from "styled-components";

const theme = {
 veryDark: "#015f63",
 dark: "#089ea6",
 light: "#64b8bd",
 veryLight: "#abe7eb",
};

export const Main = styled.div`
 min-height: 100vh;
 display: block;
 margin: 1rem 10rem;
 justify-content: center;
 @media (max-width: 600px) {
  margin: 1rem 1rem;
 }
`;
export const Header = styled.header`
 margin: 5rem 0;
 display: flex;
 flex-direction: column;
 align-items: center;
`;
export const SwitchLanguage = styled.div`
 margin: 2rem 0;
`;
export const ButtonLanguage = styled.button`
 min-width: 100px;
 font-size: 1.1rem;
 background: ${(props) => (props.disabled ? "inherit" : "#333")};
 color: ${(props) => (props.disabled ? " #777" : theme.veryDark)};
 font-weight: bolder;
 border-radius: 5px;
 padding: 5px;
 border: none;
 margin: 0 2px;
 cursor: ${(props) => !props.disabled && "pointer"};
`;
export const H1 = styled.h1`
 text-align: center;
 color: ${theme.dark};
`;
export const ContainerImage = styled.div`
 display: flex;
 justify-content: center;
`;
export const Image = styled.img`
 width: 120px;
 border-radius: 100px;
 border: 2px solid ${theme.veryLight};
`;
export const ContainerGeneric = styled.div`
 margin: 3rem 0;
 padding: 5px;
 font-size: 1.2rem;
 :hover {
  box-shadow: 0px 10px 18px 10px #000;
 }
 h2 {
  font-size: 2.5rem;
  color: ${theme.dark};
 }
 section {
  display: flex;
  flex-direction: row;
  p {
   margin: 0.5rem 5px;
  }
  .item {
   color: ${theme.light};
  }
  a {
   display: flex;
   min-width: 200px;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   color: #000;
   background: ${theme.light};
   padding: 5px;
   border-radius: 10px;
   margin: 10px 0;
  }
  ul .macro {
   margin: 1rem 0;
  }
 }
`;
export const Footer = styled.footer`
 margin: auto;
 width: 70%;
 display: flex;
 align-self: center;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 1.2rem;
 form {
  display: flex;
 }
 input {
  border: none;
 }
 .text {
  width: 200px;
  height: 50px;
  display: flex;
  text-size-adjust: inherit;
  transition: width 0.5s ease-in-out;
  :focus {
   width: 100%;
  }
 }
 button {
  border: none;
  width: 100px;
  height: 30px;
  margin: 1rem;
  background: ${theme.veryLight};
  font-weight: bold;
  cursor: pointer;
 }
 .feedback {
  font-weight: bold;
  text-align: center;
  color: ${theme.dark};
 }
`;
