import React, { useState } from "react";
import "./Home.css";

export function Post (props){
  const { id, title, description, rating: { count}, image, } = props.data;
  console.log(title)
  return (
    <div className="post mb-8 ">
      <div className="mx-8 flex space-x-8 gap-4 " key={id}>
        <img
          className="max-w-[10rem] max-h-[10rem] -translate-x-8"
          src={image}
          alt={title}
        />
        <div className="flex posts flex-col items-center justify-center">
          <h1 className="text-2xl text-lightCream">{title.substring(0, 8)}</h1>
          <p className="text-2xl">{count}</p>
          <span className="text-lg text-lightCream">{description.substring(0, 20)}</span>
        </div>
      </div>
    </div>
  );
}

function Pagination({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
 }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    // not yet implemented
    setCurrentPage((page) => page + 1);
  };

  function goToPreviousPage() {
    // not yet implemented
    setCurrentPage((page) => page - 1);
  }

  const changePage = (event) => {
    // not yet implemented
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    // not yet implemented
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    // not yet implemented
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <h1>{title}</h1>

      {/* show the posts, 10 posts at a time */}
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;



// import React, { useEffect, useState } from "react"
// const App = ({ initialName = "" }) => {
//   const fetchDataFromLocalStorage = () => {
//     console.log("only once")
//     return localStorage.getItem("name")
//   }
//   const [name, setName] = useState(fetchDataFromLocalStorage || initialName)
//   useEffect(() => {
//     console.log("rerendering")
//     localStorage.setItem("name", name)
//   }, [name, setName])
//   const handleChange = e => {
//     setName(e.target.value)
//   }
//   return (
//     <div className="lazy">
//       <input value={name} onChange={handleChange} />
//       <p>{`My name is ${name}.`}</p>
//     </div>
//   )
// }
// export default App