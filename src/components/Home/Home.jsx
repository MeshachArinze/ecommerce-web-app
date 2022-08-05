import React, { useState, useEffect, useCallback } from "react";
import Products from "../Products/Products";
import { Ekene as Meshach } from "./Page";
import Pagination,{  Post} from "./Post";

const url = "https://fakestoreapi.com/products";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  console.log(posts);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))


      .catch((error) => setError(error.message));

      window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  if (error) return <h1>{error}</h1>;

  const Loading = () => {
    let count = 4;
    let per = 16;
    let loading = setInterval(animate, 50);
    const animate = () => {
      if (count === 100 && per === 400) {
        document.querySelector(".percent").classList.add("text-blink");
        document.querySelector(".text").style.display = "block";
        clearInterval(loading);
      } else {
        per = per + 4;
        count = count + 1;
        document.querySelector(".progress").style.width = per + "px";
        document.querySelector(".percent").textContent = count + "%";
      }
    };
    return (
      <div className="loaing text-4xl mb-9">
        <div className="percent">No existing data</div>
        <div className="text text-lightCream">No data to display</div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className=" flex flex-col ">
        <Meshach />
        <Products />
        <div className="bg-lightCream">
          
          {posts.length > 0 ? (
            <>
              <Pagination
                data={posts}
                RenderComponent={Post}
                title="Posts"
                pageLimit={5}
                dataLimit={10}
              />
            </>
          ) : (
            <h1>No Posts to display</h1>
          )} 
        </div>
      </div>
    </>
  );
};

export default Home;
