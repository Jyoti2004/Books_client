import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs';
import { apiUrl } from '../config';

function UpdateBookInfo() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    description: "",
    author: "",
    isbn: "",
    published_Date: "",
    publisher: "",
    imgURL: "",
    whereToBuy: "",
  });

  useEffect(()=>{
    axios.get(`${apiUrl}/api/book/${id}`)
    .then(res=> setBook({
      title: res.data.title,
      description: res.data.description,
      author: res.data.author,
      isbn: res.data.isbn,
      published_Date: dayjs(res.data.published_Date).format("YYYY/MM/DD"),
      publisher: res.data.publisher,
      imgURL: res.data.imgURL,
      whereToBuy: res.data.whereToBuy,
    }));
  },[id])

console.log(book)

  const onChange=(e) => {
    setBook({...book,[e.target.name]: e.target.value});
  }


  const onSubmit=(e) => {
    e.preventDefault()
    // const data= {
    //   title: book.title,
    //   description: book.description,
    //   author: book.author,
    //   isbn: book.isbn,
    //   published_Date: book.published_Date,
    //   publisher: book.publisher,
    //   imgURL: book.imgURL,
    //   whereToBuy: book.whereToBuy,
    // }
    axios.put(`${apiUrl}/api/book/${id}`,book)
    .then(res=>{
      navigate("/")
    }).catch(err=>{console.log(err)});
  }



  return (
    <div className="flex flex-col gap-10 w-full p-5 items-center">
      <h1 className="text-white text-5xl font-bold">Edit Book</h1>

      <Link to={"/"} className="flex w-full justify-start">
      <button className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFc107] hover:text-black border-[#FFC107]  text-[#FFC107]">
          Show Book List
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
  )
}

export default UpdateBookInfo