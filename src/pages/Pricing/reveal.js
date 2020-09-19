import React, { useRef, useEffect, useState } from "react";
// import plus from './plus.svg';
// import minus from './minus.svg';
import "./style.scss";
const RevealDrop = ({ header, children, open = false, head }) => {
  const headRef = useRef();
  const [change, setChange] = useState(false);
  function handleClick(e) {
    setChange(!change);
    if (!e.target.className.includes("rx_hd")) return;
    e.target.classList.toggle("active");
    e.target.parentNode.parentNode.children[1].classList.toggle("show");
  }
  return (
    <div className="rx_drop">
      <div style={{ display: "flex" }}>
        <div className="rx_hd" onClick={handleClick}>
          {React.cloneElement(header, {
            ref: headRef,
            src: !change ? `/images/plusfaq.svg` : `/images/minusfaq.svg`
          })}
        </div>
        {console.log(head)}
        <div>{head}</div>
      </div>
      <div className={`rx_con ${open ? "open" : ""}`}>{children}</div>
    </div>
  );
};
export default RevealDrop;
