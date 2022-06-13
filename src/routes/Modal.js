import React from "react";
import styles from "./Home.module.css";
import PropTypes from "prop-types";
import Comment from "./Comment";

const Modal = (props) => {
  const { srcImg, data, state, closeModal } = props;

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
        <div className={styles.modalreview}>
          <div className={styles.Modalimg}>
            <img
              className={styles.Modalimg2}
              src={srcImg}
              alt="이미지가없어요"
              width="300px"
              height="400px"
            />
          </div>
          <Comment className={styles.Commentdiv} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

Modal.propTypes = {
  srcImg: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default React.memo(Modal);
