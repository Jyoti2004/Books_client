import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../config";
import * as dayjs from "dayjs";

function ShowBookDetails() {
  //inbuilt hook in react-router-dom
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/book/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(book)


  const handleDelete = () => {
    axios.delete(`${apiUrl}/api/book/${id}`)
    .then(res => navigate("/"))
  }


  return (
    <div className="flex flex-col gap-10 w-full p-5 items-center">
      <h1 className="text-white text-5xl font-bold">Book's Record</h1>
      <Link to={"/"} className="w-full flex justify-start">
        <button className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFc107] hover:text-black border-[#FFC107]  text-[#FFC107]">
          Show Book List
        </button>
      </Link>

      <h3 className="text-5xl font-bold text-white">Book's Info</h3>
      <hr/>


    <div>


      <div>
       <div className="flex  justify-between p-3 px-4 bg-[#212529] gap-52 text-white hover:bg-[#323539] border-b-2 ">
        <h1 className="w-32">1</h1>
        <h1 className="w-32">Title</h1>
        <h1 className="w-32">{book.title}</h1>
       </div>


       <div className="flex  justify-between p-3 px-4 bg-[#212529] gap-72 w-full text-white hover:bg-[#323539] border-b-2 "><h1 className="w-32">2</h1>
       <h1 className="w-32">ISBN</h1>
       <h1 className="w-32">{book.isbn}</h1></div>
       
       
       <div className="flex justify-between  p-3 px-4 bg-[#212529] gap-72 w-full text-white hover:bg-[#323539] border-b-2 "><h1 className="w-32">3</h1>
       <h1 className="w-32">Author</h1>
       <h1 className="w-32">{book.author}</h1></div>
       
       
       <div className="flex justify-between  p-3 px-4 bg-[#212529] gap-72 w-full text-white hover:bg-[#323539] border-b-2 "><h1 className="w-32">4</h1>
       <h1 className="w-32">Publisher</h1>
       <h1 className="w-32">{book.publisher}</h1></div>
      
      
       <div className="flex  justify-between p-3 px-4 bg-[#212529] gap-72 w-full text-white hover:bg-[#323539] border-b-2 "><h1 className="w-32">5</h1>
       <h1 className="w-32">Published Date</h1>
       <h1 className="w-32">{dayjs(book.published_Date).format("DD/MM/YYYY")}</h1></div>
       
       
       <div className="flex justify-between  p-3 px-4 bg-[#212529] gap-72 w-full text-white hover:bg-[#323539] border-b-2 "><h1 className="w-32">6</h1>
       <h1 className="w-32"> Buy Now</h1>
       <a  className="w-32" href={book.whereToBuy} rel="moreferrer" target="_blank"> Buy It Here</a></div>
       

      </div>

      <div className="flex w-full my-2 justify-between ">
        <Link to= {`/edit-book/${book._id}`} className="px-4 p-2 border-2 hover:bg-[#17A2B8] hover:text-white border-[#17A2B8] text-[#17A2B8]">Update Book</Link>
        <button  onClick= {handleDelete} className="px-10 p-2 border-2 hover:bg-red-500 hover:text-white border-red-500 text-red-500">Delete Book</button>
      </div>
     
    </div>
    </div>
  );
}

export default ShowBookDetails;
