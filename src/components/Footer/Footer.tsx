import './footer.css';
export default function Footer() {
  return (
    <>
      <footer
        className={`w-full bg-[#f9f9f9] text-[#222] sticky bottom-0 p-4 sm:p-6 z-[-1] sm:z-[0]
          `}
      >
        <div className="flex flex-col md:flex-row gap-2 md:h-full">
          <img
            src="./miguel.png"
            className="rounded-[24px] md:w-[45%] min-w-[330px] md:min-h-full md:min-w-[350px] aspect-[1.3/1] object-cover"
          />
          <div className="flex flex-col md:flex-col lg:w-full mt-2 sm:mt-0">
            <div className="mb-3 flex relative min-w-full md:min-w-fit xl:w-fit lg:items-center lg:justify-center lg:h-full">
              <div className="relative w-full">
                <h2 className="footer-title md:w-full lg:w-[8.5ch] xl:w-[8.5ch]">
                  Lets connect
                </h2>

                <a
                  href="mailto:miguelrodriguez.p99@gmail.com"
                  className="absolute right-0 top-0 lg:top-auto flex lg:bottom-0 lg:right-[-20px] sm:p-3 "
                >
                  <button
                    className="flex sm:flex spacing text-start bg-[#222] 
                  items-center justify-center rounded-full h-[35px] sm:h-[40px] 
                  cursor-none gap-3 px-2 relative about-button"
                  >
                    <p className="h-[6px] w-[6px] rounded-full bg-transparent"></p>
                    <p
                      className="min-h-[7px] min-w-[7px] absolute left-[10%] bg-[#d6d6d6] rounded-full
                 button-circle"
                    ></p>

                    <p className="text-[#d6d6d6] text-sm about-text-footer">
                      GET IN TOUCH
                    </p>
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col mt-3 sm:mt-0 mb-16 sm:mb-0 lg:flex-row gap-1 lg:gap-3 lg:ml-3 md:text-xl lg:text-2xl ">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit cursor-hover2"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit cursor-hover2"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-rodríguez-pérez-45598b1b7"
                target="_blank"
                rel="noreferrer"
                className="footer-link cursor-hover2 hover:text-[#6d6d6d] transition-colors duration-300 w-fit cursor-hover2"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="w-full self-end">
          <p className="text-[10px] text-[#222222] text-left md:text-right mt-2">
            Miguel Rodríguez
          </p>
        </div>
      </footer>
    </>
  );
}
