import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="z-[99999] text-[#f9f9f9] fixed top-6 left-6 right-6 mix-blend-difference flex justify-between items-center">
      <button
        className="hidden sm:flex spacing text-start bg-[#f9f9f9] 
        items-center justify-center rounded-full h-[40px] cursor-none"
      >
        <p className="text-[#222] text-sm px-4 line-through">
          AVAILABLE FOR WORK
        </p>
      </button>
      <h1
        onClick={() => {
          setTimeout(() => {
            navigate("/");
          }, 100);
          return;
        }}
        className="spacing text-[14px] sm:text-2xl font-bold cursor-hover2 "
      >
        {"{ Miguel Rodríguez }"}
      </h1>
      <button
        onClick={() => {
          setTimeout(() => {
            const route = location.pathname === "/about" ? "/" : "/about";
            navigate(route);
          }, 100);
          return;
        }}
        className="flex sm:flex spacing text-start bg-[#f9f9f9] 
        items-center justify-center rounded-full h-[35px] sm:h-[40px] 
        cursor-none gap-2 px-4 relative about-button"
      >
        <p className="h-[6px] w-[6px] rounded-full bg-transparent"></p>
        <p
          className="min-h-[7px] min-w-[7px] absolute left-[13.5%]  bg-[#222] rounded-full
         button-circle"
        ></p>

        <p className="text-[#222] text-sm about-text">
          {location.pathname === "/about" ? "WORK" : "ABOUT ME"}
        </p>
      </button>
    </div>
  );
}
