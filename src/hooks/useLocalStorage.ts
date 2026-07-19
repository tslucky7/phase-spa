import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [item, setItem] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    if (saved === null) {
      return initialValue;
    }
    return JSON.parse(saved);
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [key, item]);
  return [item, setItem] as const;
}