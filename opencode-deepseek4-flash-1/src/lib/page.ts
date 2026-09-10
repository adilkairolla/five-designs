import { useEffect } from "react";

export function usePage(title: string, fontHref?: string) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
    if (!fontHref) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontHref;
    document.head.appendChild(link);
    return () => link.remove();
  }, [title, fontHref]);
}
