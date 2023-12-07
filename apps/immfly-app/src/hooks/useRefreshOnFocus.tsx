import { useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export const useRefreshOnFocus = (callback: () => void) => {
  const enabledRef = useRef(false);

  useFocusEffect(
    useCallback(() => {
      if (enabledRef.current) {
        callback();
      } else {
        enabledRef.current = true;
      }
    }, [callback]),
  );
};
