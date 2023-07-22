import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../config";

function CreateBook() {
  const [book, setbook] = useState({
    title: "",
    description: "",
    author: "",
    isbn: "",
    published_Date: "",
    publisher: "",
    imgURL: "",
    whereToBuy: "",
  });

  const navigate = useNavigate();

const onSubmit =(e)=>{
  e.preventDefault();
  axios.post(`${apiUrl}/api/book`, book)
  .then((res)=>{
    console.log(res.data);
    setbook({
    title: "",
    description: "",
    author: "",
    isbn: "",
    published_Date: "",
    publisher: "",
    imgURL: "",
    whereToBuy: "",
    })

  })
  //push to home route
navigate("/");
}



// console.log(book)
  const onChange=(e) => {
    setbook({...book,[e.target.name]: e.target.value});
  }


  return (
    <div className="flex flex-col w-full font-bold items-center p-5">
      <h1 className="text-white text-5xl font-bold">Create Book</h1>
      <Link to={"/"} className="w-full flex justify-start">
        <button className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFc107] hover:text-black border-[#FFC107]  text-[#FFC107]">
          Go To Book List
        </button>
      </Link>

      <form onSubmit= {onSubmit} className="flex flex-col gap-7 p-2 lg:w-[600px]">
        <div className="flex gap-3 w-full justify-between"> 
          <input name="title" onChange={onChange} className="p-2 bg- rounded-md outline-none border-2 border-transparent focus:border-[#FFC107] w-full"
            required
            type="text"
            placeholder="Title Of The Book"
            value={book.title}
          />
          <input name="isbn" onChange={onChange}  className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107] w-full" required type="number" placeholder="ISBN" value={book.isbn} />
          </div>
          <input name="author" onChange={onChange}  className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
            required
            type="text"
            placeholder="Author"
            value={book.author}
          />
          <input name="description" onChange={onChange}  className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
            required
            type="text"
            placeholder="Describe Your Book"
            value={book.description}
          />
          <input name="publisher" type="text" onChange={onChange}  className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]" placeholder="Publisher Name" value={book.publisher}/>

          <input name="published_Date" onChange={onChange}  className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
            required
            type="date"
            placeholder="Publisher"
            value={book.published_Date}
          />
          <input name="imgURL" onChange={onChange}  className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
            required  type="text"
            placeholder="image URL" value={book.imgURL}/>

            <input name="whereToBuy"  onChange={onChange}  className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
            required  type="text" placeholder="Where You Can buy From" value={book.whereToBuy}/>
          <button
            className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFc107] hover:text-black border-[#FFC107]  text-[#FFC107]"
            type="submit"
          >
            Submit
          </button>
      </form>
    </div>
  );
}

export default CreateBook;
