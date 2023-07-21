import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  console.log(book);
  return (
    <Link  to= {`show-book/${book._id}`} className=" border-2 rounded-md border-[#FFC107] flex flex-col justify-center items-center p-2 text-white  ">
      <img src={book.imgURL} className=" h-40 w-32" alt="thumbnail" />
      <div className="text-left">
        <h2 className= "font-bold">{book.title}</h2>
        <h3 className="">{book.author}</h3>
        <h4 className="">{book.description}</h4>
      </div>
    </Link>
  );
}

export default BookCard;
