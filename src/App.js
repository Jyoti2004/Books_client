import ShowBookList from "./components/ShowBookList";
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import CreateBook from "./components/CreateBook";
import UpdateBookInfo from "./components/UpdateBook";
import ShowBookDetails from "./components/ShowBookDetails";

function App() {
  return (
    <BrowserRouter>
        <div className="bg-[#2C3E50] min-h-screen">
          <Routes>
            <Route exact path ="/" element={<ShowBookList/>}/>
            <Route path = "/create-book" element ={<CreateBook/>}/>
            <Route path = "/edit-book/:id" element ={<UpdateBookInfo/>}/>
            <Route path = "/show-book/:id" element = {<ShowBookDetails/>}/>
          </Routes>
      
      </div>
    </BrowserRouter>

  );
}

export default App;
