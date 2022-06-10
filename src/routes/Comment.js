import React, { Component } from "react";
import styles from "./Home.module.css";

export class Comment extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      replies: [],
    };
  }
  regeistComent = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  inputComment = (e) => {
    const add = this.state.replies;
    add.push(this.state.comment);
    this.setState({
      replies: this.state.replies,
      comment: "",
    });
  };
  PressClick = (e) => {
    this.inputComment();
  };
  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.inputComment();
    }
  };
  render() {
    return (
      <>
        <ul className={styles.ui}>
          {this.state.replies.map((el, idx) => (
            <li className={styles.list} key={idx}>
              {el}
            </li>
          ))}
        </ul>
        <section className={styles.ReviewSection}>
          <span>
            <i></i>
          </span>
          <input
            type="text"
            placeholder="댓글 달기"
            className={styles.inputReview}
            onChange={this.regeistComent}
            onKeyPress={this.pressEnter}
            value={this.state.comment}
          />
          {this.state.comment ? (
            <button className={styles.Reviewbutton} onClick={this.PressClick}>
              <img
                src={require("./img/1232.png")}
                width="30px"
                height="30px"
                alt="X"
              />
            </button>
          ) : null}
        </section>
      </>
    );
  }
}
export default Comment;
