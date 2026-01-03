import React from "react";
import {useState} from "react"

export default function Check() {
    const[amount,setAmount]=useState(272727)
  const copy = () => {
    navigator.clipboard.writeText(amount);
  };

  return (
    <>
      <span>Hello World</span>
      <button onClick={copy}>Copy</button>
    </>
  );
}
