import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer
        // className={`h-[568px] sm:h-[350px] md:h-[350px] lg:h-[400px] w-full text-[#222] fixed left-0 bottom-0 p-6 pb-0 bg-white
        //   ${booleanValue ? "z-[999999]" : "z-[-1]"}
        //   `}
        className={`h-ahto sm:h-auto md:h-auto lg:h-auto
          w-full bg-[#f9f9f9] text-[#222] sticky bottom-0 p-6 z-[0]
          `}
      >
        <div className="flex flex-col sm:flex-row gap-5 md:h-full">
          <img
            src="./miguel.png"
            className="rounded-[24px] sm:w-[45%] min-w-[330px] md:min-h-full md:w-[35%] md:min-w-[350px] object-cover"
          />
          <div className="flex flex-col md:flex-col lg:w-full">
            <div className="mb-3 flex relative min-w-full sm:min-w-fit sm:w-fit">
              <h1 className="footer-title md:text-pretty md:w-full lg:w-[10.5ch] xl:w-[8.5ch]">
                Lets connect
              </h1>
              <button className="absolute flex right-0 lg:bottom-0 p-3">
                GET IN TOUCH
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 mt-5 sm:mt-0  lg:ml-3 md:text-xl lg:text-2xl">
              <a
                href="#"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit cursor-hover2"
              >
                Instagram
              </a>
              <a
                href="www.twitter.com"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit cursor-hover2"
              >
                Twitter
              </a>
              <a
                href="#"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit cursor-hover2"
              >
                LinkedIn
              </a>
            </div>

            <div className="w-full h-auto">
              <p className="text-xs text-right">Miguel Rodríguez</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
