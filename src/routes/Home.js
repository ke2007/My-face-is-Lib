import { useState } from "react";
import booksjson from "./Books.json";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const [books, setBooks] = useState(booksjson);
  return (
    <div className={styles.Booka}>
      {books.map((books) => (
        <div className={styles.Book}>
          <div key={books.No}>
            <img
              src={books.Img}
              alt={books.Name}
              className={styles.Book__img}
              width="400"
              height="600"
            />
            <div className={styles.Book__title}>"{books.Name}"</div>
            <div className={styles.Book__genres}> 지은이 : {books.Writer}</div>
            <div className={styles.Book__year}>
              <ul>
                {books.Word.map((W) => (
                  <li key={W}>핵심단어 : {W}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
