import { useState } from "react";
import booksjson from "./Books.json";
import styles from "./Home.module.css";
import Modal from "./Modal";
function Home() {
  const [books] = useState(booksjson);
  const [modalState, setModalState] = useState(false);
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event) => {
    event.preventDefault();
    setModalState(false);
  };

  const [Title, setTitle] = useState("");
  const onc = (event) => {
    setTitle(event.target.alt);
  };
  const [srcImg, setImgsrc] = useState("");
  const onc2 = (event) => {
    setImgsrc(event.target.src);
  };

  return (
    <div className={styles.Booka}>
      {books.map((books) => (
        <div key={books.No}>
          <div className={styles.Book}>
            <div>
              <img
                src={books.Img}
                alt={books.Name}
                onClick={openModal}
                onMouseDown={onc}
                onMouseEnter={onc2}
                className={styles.Book__img}
                width="200"
                height="300"
              />
              <div className={styles.Book__title}>"{books.Name}"</div>
              <div className={styles.li}>
                <div className={styles.Book__writer}>
                  지은이 : {books.Writer}
                </div>
                <div className={styles.Book__word}>
                  <ul>
                    {books.Word.map((W) => (
                      <li key={W}>핵심단어 : {W}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.Book__review}>
                  {"<- 책을 눌러서 독후감 써보자 !"}
                </div>
                <div className={styles.Book__review2}>
                  <img
                    src={require("./img/1.png")}
                    alt="없어용"
                    width="180px"
                    height="250px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <Modal
          srcImg={srcImg}
          data={Title}
          state={modalState}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}
export default Home;
