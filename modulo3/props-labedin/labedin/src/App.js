import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFG0C5JJwmvkQ/profile-displayphoto-shrink_800_800/0/1650041890769?e=1655942400&v=beta&t=ogLJxLaGzOSoFRkN-GlCJAoKCtJyKJIYS26rAfI0rQM" 
          nome="Giovana Martinho" 
          descricao="Oi, me chamo Giovana, tenho 22 anos, sou desenvolvedora Front-End, tenho como habilidades JAVASCRIPT, HTML E CSS. Estou cursando na Labenu, onde faço projetos de fixação, individuais e em grupo que são aderentes ao mercado de trabalho."
        />
        
        <ImagemButton 
          imagem="https://cdn.onlinewebfonts.com/svg/img_70394.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
          <CardPequeno 
           tipo = "E-mail:"
           descricao = "giomalaqui@gmail.com"/>

          <CardPequeno 
           tipo = "Endereço:"
           descricao = "São Vicente/SP"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.vimeocdn.com/portrait/38328401_640x640" 
          nome="Curso (Labenu)" 
          descricao="Desenvolvedora Front-End | Javascript - HTML- CSS - React" 
        />
        
        <CardGrande 
          imagem="https://www.cafefloresta.com.br/wp-content/uploads/2018/12/Banner-quem-somos.jpg" 
          nome="Promotora de vendas café floresta" 
          descricao="Abastecimento, moagem de café, pedido de mercadoria." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
