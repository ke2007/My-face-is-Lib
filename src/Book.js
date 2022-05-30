function Book({ Img, Name, Writer, Word }) {
  return (
    <div>
      <img src={Img} alt={Name} />
      <h2>"{Name}"</h2>
      <p> :{Writer}</p>
      <ul>{Word && Word.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}
export default Book;
