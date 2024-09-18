export default function Navbar() {
  return (
    <div className="text-white fixed top-6 left-6 right-6 z-50 mix-blend-difference flex justify-between">
      <button className="hidden sm:flex spacing min-w-[200px] text-start">
        AVAILABLE FOR WORK
      </button>
      <h1 className="spacing text-2xl font-bold">{"{ Miguel Rodríguez }"}</h1>
      <button className="hidden sm:flex justify-end text-end spacing min-w-[200px]">
        ABOUT ME
      </button>
    </div>
  );
}
