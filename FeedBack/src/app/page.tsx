"use client"

import { useState } from 'react';
import styles from './styles/styles.module.css'; // Importando o arquivo CSS para estilização

export default function Home() {
  const [rating, setRating] = useState<number | null>(null); // Definindo o tipo do estado como número ou nulo
  const [activeButton, setActiveButton] = useState<number | null>(null); // Estado para controlar o botão ativo
  const [showContent, setShowContent] = useState(true); // Estado para controlar a exibição do conteúdo do container
  const [message, setMessage] = useState(""); // Estado para controlar a mensagem adicional

  // Função para lidar com o clique em um botão de classificação
  const handleRatingClick = (value: number) => { // Definindo o tipo do parâmetro 'value' como número
    setRating(value);
    setActiveButton(value); // Definindo o botão clicado como ativo
  };

  // Função para lidar com o envio do feedback
  const handleSubmit = () => {
    // Verifica se um número foi selecionado antes de enviar o feedback
    if (rating !== null) {
      // Aqui você pode enviar o valor de rating para o backend ou fazer outra ação com ele
      setShowContent(false); // Oculta o conteúdo do container após o envio do feedback
      setMessage(`You selected: ${rating} of 5`); // Define a mensagem adicional
    }
  };
  
  return (
    <body>
      {showContent && (
        <div className={styles.container}>
          <div className={styles.imageBorder}>
            <img
              src="icon-star.svg" 
              className={styles.image}
            />
          </div>
          <h2> How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
  
          <div className={styles['rating-buttons']}>
            <button className={`${styles['rating-button']} ${activeButton === 1 ? styles.active : ''}`} onClick={() => handleRatingClick(1)}>1</button>
            <button className={`${styles['rating-button']} ${activeButton === 2 ? styles.active : ''}`} onClick={() => handleRatingClick(2)}>2</button>
            <button className={`${styles['rating-button']} ${activeButton === 3 ? styles.active : ''}`} onClick={() => handleRatingClick(3)}>3</button>
            <button className={`${styles['rating-button']} ${activeButton === 4 ? styles.active : ''}`} onClick={() => handleRatingClick(4)}>4</button>
            <button className={`${styles['rating-button']} ${activeButton === 5 ? styles.active : ''}`} onClick={() => handleRatingClick(5)}>5</button>
          </div>
          <div>
            {/* Desabilita o botão de envio se nenhum número for selecionado */}
            <button className={styles['submit-button']} onClick={handleSubmit} disabled={rating === null}>Submit</button>
          </div>
        </div>
      )}
      {message.trim() && (
        <div className={styles.showMessage}>
          <img 
            src="illustration-thank-you.svg"
            className={styles.image2}
          />
          <div className={styles.resultBorder}>
            <p>
              {message}
            </p> 
          </div>
          <h2>
            Thank you!
          </h2>
          <h3>
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch 
          </h3>      
        </div>
      )}
    </body>
  );
}
