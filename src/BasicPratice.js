import Button from "./Button";
import styles from "./BasicPractice.module.css";
import { useState, useEffect } from "react";

function BasicPratice() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  const hideEvent = () => {
    setShowing((prev) => !prev);
  };

  console.log("i run all the time");

  // Excute useEffect when first render
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // Excute useEffect when first render or count state chages
  useEffect(() => {
    console.log("I run when count changes.");
  }, [count]);

  // Excute useEffect when first render or keyword state changes
  useEffect(() => {
    console.log("I run when keyword changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when count or keyword changes.");
  }, [count, keyword]);
  return (
    <div>
      <h1>Basic Practice</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Serach here."
      />
      <h1 className={styles.title}>{count}</h1>
      <button onClick={onClick}>click me</button>
      <button onClick={hideEvent}>{showing ? "hide" : "show"}</button>
      {showing ? <Button text="hello"></Button> : null}
    </div>
  );
}

export default BasicPratice;
