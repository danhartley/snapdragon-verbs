import { useState, useEffect } from 'preact/hooks';

export const useLocalStorageState = (key, defaultValue = '') => {

    // const [state, setState] = useState(
    //   () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
    // );
    
    const [state, setState] = useState(defaultValue);
  
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    });
  
    return [state, setState];

  };