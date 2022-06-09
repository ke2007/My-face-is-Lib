import React from "react";
import styles from "./Home.module.css";
import PropTypes from "prop-types";

const Modal = (props) => {
  const { data, state, closeModal } = props;
  return state ? (
    <div className={styles.Container}>
      <div className={styles.Overlay} onClick={(event) => closeModal(event)} />
      <div className={styles.Contents}>
        <div className={styles.Title}>
          {data}
          <div className={styles.Close} onClick={(event) => closeModal(event)}>
            X
          </div>
        </div>
        <div>{"아아"}</div>
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
