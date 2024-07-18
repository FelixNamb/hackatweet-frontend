import { useDispatch, useSelector } from "react-redux";

function Tweet(props) {
  return (
    <div className={styles.topCenterContent}>
      <div className={styles.title}>
        <div className={styles.textContent}></div>
      </div>
      <div className={styles.tweetInfos}>
        <div className={styles.tweetLimit}></div>
        <div className={styles.buttonTweet}></div>
      </div>
    </div>
  );
}

// Un tweet ne peut pas dépasser 280 caractères,
// si un tweet appartient à l’utilisateur connecté, il doit pouvoir le liker
// mais aussi le supprimer mais si ce n’est pas le sien,
// il aura seulement la possibilité de le liker.

export default Tweet;
