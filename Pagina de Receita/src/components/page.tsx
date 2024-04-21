import styles from '@/components/styles.module.css'; // Importando o arquivo CSS para estilização

export default function Card() {
  return (
    <div className={styles.container}>
      <img
        src="image-omelette.jpeg"
        className={styles.image}
      />
      <div className={styles.description}>
        <h1>
          Simple Omelette Recipe
        </h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheesem, vegetables, or meats.
        </p>
      </div>
      <div className={styles.preparation}>
        <h3>
          Preparation Time
        </h3>
        <p className={styles.preparationList}>
          <span className={styles.asterisk}>*</span> <strong style={{ marginLeft: '15px' }}>Total:</strong> Approximately 10 minutes <br/><br/>
          <span className={styles.asterisk}>*</span> <strong style={{ marginLeft: '15px' }}>Preparation:</strong> 5 Minutes <br/><br/>
          <span className={styles.asterisk}>*</span> <strong style={{ marginLeft: '15px' }}>Cooking:</strong> 5 Minutes
        </p>
      </div>
      <div className={styles.ingredients}>
        <h2>
          Ingredients
        </h2>
        <p className={styles.ingredientsList}>
          <span className={styles.asterisk1}>*</span> 2-3 large eggs <br/><br/>
          <span className={styles.asterisk1}>*</span> Soft, to taste <br/><br/>
          <span className={styles.asterisk1}>*</span> Pepper, to taste <br/><br/>
          <span className={styles.asterisk1}>*</span> 1 tablespoon of butter or all <br/><br/>
          <span className={styles.asterisk1}>*</span> Optional fillings cheese, diced vegetables, cooked meats, herbs.<br/>
        </p>
        <div>
          <hr className={styles.hrLine} />
        </div>
      </div>
      <div className={styles.instructions}>
        <h2>
          Instructions
        </h2>
        <p className={styles.instructionsList}>
          <span className={styles.number}><strong>1.</strong></span> <strong style={{ marginLeft: '15px' }}>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of sait and pepper untill they are <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;well mixed. You can add a tablespoon of water or milk for a fluffer texture.<br /><br />
          <span className={styles.number}><strong>2.</strong></span> <strong style={{ marginLeft: '15px' }}>Heart the pan:</strong> Place a nan-stick frying pan over medium heart and add butter or all.<br/><br/>
          <span className={styles.number}><strong>3.</strong></span> <strong style={{ marginLeft: '15px' }}>Cook the omelette:</strong> Once the buffer is melted anda bubbing, pour in the eggs. Tilt the<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pan to ensure the eggs evenly coat the surface.<br /><br />
          <span className={styles.number}><strong>4.</strong></span> <strong style={{ marginLeft: '15px' }}>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slighty<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;runny in the middle, sprinkle your chosen fillings over one hailf of omelette.<br /><br />
          <span className={styles.number}><strong>5.</strong></span> <strong style={{ marginLeft: '15px' }}>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;over the fillings. Let if cook for another minute. then slide if anta a plate.<br /><br />
          <span className={styles.number}><strong>6.</strong></span> <strong style={{ marginLeft: '15px' }}>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.<br/>
        </p>
        <div>
          <hr className={styles.hrLine1} />
        </div>
      </div>
      <div className={styles.nutrition}>
        <h2>
          Nutrition
        </h2>
        <p>
          The table below shows nutrittional values per serving without the additional fillings.
        </p>
        <div className={styles.tabela}>
          <p>Calories <strong style={{ marginLeft: '325px' }} className={styles.number}> 277kcal</strong></p>
          <div><hr className={styles.hrLine2} /></div>
          <p>Carbs <strong style={{ marginLeft: '345px' }} className={styles.number}> 0g</strong></p>
          <div><hr className={styles.hrLine3} /></div>
          <p>Protein <strong style={{ marginLeft: '335px' }} className={styles.number}> 20g</strong></p>
          <div><hr className={styles.hrLine4} /></div>
          <p>Carbs <strong style={{ marginLeft: '345px' }} className={styles.number}> 0g</strong></p>
          <div><hr className={styles.hrLine5} /></div>
        </div>
      </div>
    </div>    
  );
}