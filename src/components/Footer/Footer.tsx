import { useBooleanContext } from "../../context/FooterContext";
import "./footer.css";
export default function Footer() {
  const { booleanValue } = useBooleanContext();
  return (
    <>
      <footer
        className={`h-[568px] md:h-[30dvh] lg:h-[400px] w-full text-[#222] fixed left-0 bottom-0 p-6 bg-white  ${
          booleanValue ? "z-[999999]" : "z-[-1]"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-5 lg:mb-10">
          <img
            src="https://images.unsplash.com/photo-1687904364304-3fa792cdb55a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-[24px] md:w-[250px] lg:w-[400px] lg:mt-2  object-cover"
          />
          <div className="flex flex-col md:flex-col relative">
            <div className="mb-3 flex">
              <h1 className="footer-title">Lets connect</h1>
              <button className="self-end">GET IN TOUCH</button>
            </div>
            <div className="flex flex-col md:flex-row gap-1 lg:gap-5">
              <a
                href="#"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit"
              >
                Instagram
              </a>
              <a
                href="www.twitter.com"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit"
              >
                Twitter
              </a>
              <a
                href="#"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end text-xs mr-5">Miguel Rodríguez</div>
      </footer>
    </>
  );
}
