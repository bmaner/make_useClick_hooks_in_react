import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

// import React, { useState, useEffect, useRef } from "react";

// export default App = () => {
//   const potato = useRef();
//   setTimeout(() => console.log(potato.current), 5000);
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//       <input ref={potato} placeholder="la" />
//     </div>
//   );
// };
