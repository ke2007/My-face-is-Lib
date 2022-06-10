import React from "react";
import { useState } from "react";
import styles from "./Home.module.css";
import PropTypes from "prop-types";
import Comment from "./Comment";
import booksjson from "./Books.json";

const Modal = (props) => {
  const [books] = useState(booksjson);
  const { data, state, closeModal } = props;

  return state ? (
    <div className={styles.Container}>
      <div className={styles.Overlay} onClick={(event) => closeModal(event)} />
      <div className={styles.Contents}>
        <div className={styles.Title} /*제목 div*/>
          "{data}" 한 줄 독후감
          <div className={styles.Close} onClick={(event) => closeModal(event)}>
            X
          </div>
        </div>
        <div /*내용 div*/>
          {data === books.Name ? (
            <div>
              <img
                src={books.Img}
                alt={books.Name}
                className={styles.Book__img}
                width="200"
                height="300"
              />
            </div>
          ) : null}
          <div className={styles.modalreview}>
            <div className={styles.Modalimg}></div>
            <Comment className={styles.Commentdiv} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

Modal.propTypes = {
  data: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default React.memo(Modal);
