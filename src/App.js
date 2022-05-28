import { useState } from "react";
import booksjson from "./Books.json";
import appstyles from "./App.module.css";
function App() {
  const [books, setBooks] = useState(booksjson);

  console.log(books);
  return (
    <div className={appstyles.app}>
      {books.map((books) => (
        <div key={books.No}>
          <h2>"{books.Name}"</h2>
          <p>지은이 : {books.Writer}</p>
          <ul>
            {books.Word.map((W) => (
              <li key={W}>핵심단어 : {W}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
