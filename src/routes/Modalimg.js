import React from "react";
import { useState } from "react";
import styles from "./Home.module.css";
import PropTypes from "prop-types";
import Comment from "./Comment";
import booksjson from "./Books.json";

function Modalimg(srcimg) {
  const [books] = useState(booksjson);
  const [imgsrc, setImgsrc] = useState("");
  const { srcimg } = props;

  books.filter(function (e) {
    return e.books.Name === { data };
  });
}

Modalimg.prototype = {
  srcimg: PropTypes.string.isRequired,
};

export default Modalimg;
