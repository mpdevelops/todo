import { useState, useEffect } from "react";

// custom hook that sets aside a piece of state,
// initializes it with whatever we pass in,
// then uses useEffect to sync localstorage whenver that data changes

function UseLocalStorageState(key, defaultVal) {
  // creates a piece of state based off of value in localstorage (or default)
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      // if try doesn't work, we set val to be whatever user passed in
      value = defaultVal;
    }
    return value;
  });
  // useEffect updates localstorage whenever state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}

export default UseLocalStorageState;
