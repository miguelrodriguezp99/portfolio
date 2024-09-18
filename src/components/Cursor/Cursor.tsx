import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }, []);

  /* Hover del cursor */
  useEffect(() => {
    const cursorHover = document.querySelectorAll(".cursor-hover");
    cursorHover.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor") as HTMLElement;
        cursor.classList.add("cursor-expanded");
      });

      item.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor") as HTMLElement;
        cursor.classList.remove("cursor-expanded");
      });
    });

    const cursorHover2 = document.querySelectorAll(".cursor-hover2");
    cursorHover2.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor") as HTMLElement;
        cursor.classList.add("cursor-expanded2");
      });

      item.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor") as HTMLElement;
        cursor.classList.remove("cursor-expanded2");
      });
    });
  }, []);

  return (
    <div className="cursor fixed w-5 h-5 bg-white rounded-full pointer-events-none translate-x-[-50%] translate-y-[-50%] mix-blend-difference"></div>
  );
};

export default Cursor;
