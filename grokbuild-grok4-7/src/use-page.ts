import { useEffect } from "react";

export function usePage(title: string, background: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousBackground = document.body.style.backgroundColor;
    document.title = title;
    document.body.style.backgroundColor = background;
    return () => {
      document.title = previousTitle;
      document.body.style.backgroundColor = previousBackground;
    };
  }, [title, background]);
}
