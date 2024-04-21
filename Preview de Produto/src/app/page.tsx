import styles from './styles/styles.module.css'; // Importando o arquivo CSS para estilização

export default function Home() {
  return (
    <div className={styles.container}>
      <img
        src="image-product-desktop.jpg" // Substitua "image-product-desktop.jpg" com o caminho da sua imagem
        alt="Perfume"
        className={styles.image}
      />
      <div className={styles.productInfo}>
        <h2>Perfume</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={styles.price}>
          <span>$149.99</span>
          <span className={styles.discounted}>
            $169.99
            <span className={styles.promotionEnded}>✕</span> {/* Adicionando um "X" para indicar que a promoção acabou */}
          </span>
        </div>
        <button className={styles.addButton}>
          <img src="/icon-cart.svg" alt="Ícone do carrinho" className={styles.cartIcon} /> Add to Cart
        </button>
      </div>
    </div>
  );
};