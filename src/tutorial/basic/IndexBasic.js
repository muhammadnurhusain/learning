import React from "react";

const books = [
  {
    id: 1,
    title: "Anxious People: A Novel",
    author: "Audible Audiobook",
    img: "https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    title: "Anxious People: A Novel 2",
    author: "Audible Audiobook 2",
    img: "https://m.media-amazon.com/images/I/81dILj5mNrS._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 3,
    title: "Anxious People: A Novel 3",
    author: "Audible Audiobook 3",
    img: "https://m.media-amazon.com/images/I/71ki8f20R7S._AC_UL480_FMwebp_QL65_.jpg",
  },
];

function IndexBasic() {
  return (
    <div className="booklist">
      {books.map((book) => {
        return <Book key={book.id} listBook={book} />;
      })}
    </div>
  );
}

const Book = (props) => {
  const { title, author, img } = props.listBook;
  return (
    <div className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </div>
  );
};

export default IndexBasic;
