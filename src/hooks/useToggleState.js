import { useState } from "react";

export default function useToggle(initialVal = false) {
  //calls useState + reserves piece of state
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // returns piece of state and a function to toggle it
  return [state, toggle];
}
