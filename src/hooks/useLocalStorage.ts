import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [item, setItem] = useState<T>(initialValue);
  const saved = localStorage.getItem(key);
  if (!saved) {
    
  }
  return [item, setItem] as const;
}