import { useState, useEffect } from 'preact/hooks';

export const useLocalStorageState = ({key, defaultValue = ''}) => {

    const _state = JSON.parse(window.localStorage.getItem(key));

    const [state, setState] = useState(_state || defaultValue);
  
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    });
  
    return [state, setState];

  };