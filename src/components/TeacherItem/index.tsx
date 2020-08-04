import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/57637983?s=460&u=1eeefc4ba446d134ab0fbaeb256e5b864eb8a206&v=4" alt="Fabricio Silva"/>
        <div>
          <strong>Fabricio Silva</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/> <br/>
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pesosas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>
      
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;