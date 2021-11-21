import { useState, useEffect } from 'react';
import cookie from '@/utils/cookie';

function getDefaultValue(value) {
  let defaultValue;
  switch (typeof value) {
    case 'string':
      defaultValue = '';
      break;
    case 'number':
      defaultValue = 0;
      break;
    case 'boolean':
      defaultValue = false;
      break;
    default:
      defaultValue = value;
      break;
  }

  return defaultValue;
}

export const getPersistState = (value, key) => {
  if (value) return value;
  if (typeof window !== 'undefined') {
    return cookie.get(key, document.cookie);
  }

  return getDefaultValue(value);
};

const usePersistState = (initState) => {
  const [state, setState] = useState();

  useEffect(() => {
    setState(initState);
  }, [initState]);

  return state;
};

export default usePersistState;
