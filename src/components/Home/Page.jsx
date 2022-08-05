import React from "react";
import { useRef, useImperativeHandle } from "react";
import Typed from "react-typed";
import "./Page.css";


const Page = () => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return (
    <div className="page relative -z-10  w-full flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center h-[600px]">
        <div className="block text-center mt-8 ml-9">
          <h3 className="mb-6 text-3xl md:6xl font-bold ">
            check all our
            <Typed
              strings={[" update", " product", " items"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </h3>
          <p className="text-2xl text-center mb-8">Do you enjoy our cookies</p>
          <FancyButton ref={inputRef} forwardedref={ref} >
            Order Now
          </FancyButton>
          ;
          {/* <button className="button hover:bg-cyan-400 transition-colors text-lightCream text-lg"></button> */}
        </div>
      </div>
    </div>
  );
};

const ref = React.createRef();

const FancyButton = React.forwardRef((props, ref) => (
  <button {...props}
    ref={ref}
    className="button hover:bg-cyan-400 transition-colors text-lightCream text-lg"
  >
    {props.children}
  </button>
));

export { Page as Ekene};
