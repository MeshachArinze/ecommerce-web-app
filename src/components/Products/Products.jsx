import { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);

  let component = true;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(
          new URL("https://fakestoreapi.com/products?sort=asc/"),
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "omit",
            },
            
          }
        );

        if (component && response.ok) {
          setData(await response.clone().json());
          setFilter(await response.json());
          setLoading(false);
        } else {
          response.status;
        }

        if (!response) {
          let promise = Promise.reject(new Error("Promise Failed!"));
          setTimeout(() => promise.catch((err) => alert("caught")), 1000);
          window.addEventListener("unhandledrejection", (event) =>
            console.log(event.reason)
          );
        }

        return () => {
          component = false;
        };
      } catch (err) {
        {
          `JSON Error: " + ${err.message}`;
        }

        window.addEventListener("unhandledrejection", (event) =>
          console.log(event.reason)
        );

        if (err instanceof ReferenceError) {
          return <div>("ReferenceError")</div>; // "ReferenceError" for accessing an undefined variable
        } else {
          throw err; // rethrow (*)
        }
      }
    })() ?? [];
  }, []);

  const Loading = useCallback(() => {
    let count = 4;
    let per = 16;
    let loading = setInterval(animate, 50);
    function animate() {
      if (count === 100 && per === 400) {
        // document.querySelector(".percent").className = "blink";
        // document.querySelector(".text").style.display = "block";
        clearInterval(loading);
      } else {
        per = per + 4;
        count = count + 1;
        // document.querySelector(".progress").style.width = per + "px";
        // document.querySelector(".percent").textContent =
        //   count + "%";
      }
    }
    return (
      <div className="loaing text-4xl mb-9">
        <div className="percent blink">No existing data</div>
        <div  className="text text-lightCream">No data to display</div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    );
  }, []);

  const Category = (category) => {
    const filter = data
      .filter((x) => x.category === category)
      .sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
    setFilter(filter);
  };

  const ShowProduct = () => {
    
    return (
      <div className="w-full flex flex-col space-x-9 bg-lightCream">
        <div className="flex w-full px-2 flex-wrap justify-around gap-4 mb-16 ">
          <button
            onClick={() => setFilter(data)}
            className="bg-lightOrange hover:bg-purple-800 min-w-[10ch] text-sky-50 px-6 py-2 rounded-4xl"
          >
            All
          </button>
          <button
            onClick={() => Category("men's clothing")}
            className="px-4 py-2 rounded-4xl text-sky-50 bg-lightOrange hover:bg-purple-800"
          >
            men's clothing
          </button>
          <button
            onClick={() => Category("women's clothing")}
            className="hover:bg-purple-800 px-4 py-2 rounded-4xl text-sky-50 bg-lightOrange"
          >
            women's clothing
          </button>
          <button
            onClick={() => Category("jewelery")}
            className="hover:bg-purple-800  px-4 py-2 rounded-4xl text-sky-50 bg-lightOrange"
          >
            jewelery
          </button>
          <button
            onClick={() => Category("electronics")}
            className="hover:bg-purple-800 px-4 py-2 rounded-4xl text-sky-50 bg-lightOrange"
          >
            electronics
          </button>
        </div>
        <ul className="gallery" role="list">
          {filter
            .filter((post) => {
              if (query === "") {
                return post;
              } else if (
                post.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .map((product, index) => {
              return (
                <li
                  key={index}
                  className="containImg flex flex-col w-full px-8"
                >
                  <figure tabIndex="0">
                    <img alt="" src={product.image} srcSet="" />
                    <figcaption>
                      <Link to={`products/${product.id}/`}>buy now</Link>
                    </figcaption>
                  </figure>
                  <div className="middle flex space-x-6 text-2xl justify-between overflow-hidden">
                    <span className="set">${product.price}</span>
                    <span className="set">{product.title.substring(0, 6)}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="w-full   flex flex-col gap-9">
          <div className="bg-darkBlue  flex flex-col gap-9">
            <h2 className="text-center text-6xl ">Latest Collection</h2>
            <div className="flex justify-center mb-9">
              <p className="translate-y-[.5rem] w-[2rem] text-lg text-lightOrange translate-x-12 ">
                {<FaSearch />}
              </p>
              <input
                placeholder="Enter Title"
                className="search px-12 py-2 w-[10rem] border-none rounded-2xl outline-none"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  ">
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
