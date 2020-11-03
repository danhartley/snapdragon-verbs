import { useState, useEffect } from 'preact/hooks';

export const useLocalStorageState = (key, defaultValue = '', language) => {

    const languagekey = `${key}_${language}`;

    const _state = JSON.parse(window.localStorage.getItem(languagekey));

    const [state, setState] = useState(_state || defaultValue);
  
    useEffect(() => {
      window.localStorage.setItem(languagekey, JSON.stringify(state));
    });
  
    return [state, setState];

  };