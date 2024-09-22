import "./quote.css";

const Quote = () => {
  return (
    <div
      className="relative bg-[#222] pt-[10vh] md:pt-[5vh] lg:pt-[28vh] pb-24 px-6 
    quote-grid text-[#f9f9f9] grid-cols-1 md:grid-cols-12 gap-y-6 z-40 "
    >
      <div className="md:col-start-2 md:col-end-5 text-[20px] md:text-[28px]">
        I create digital platforms that keep users engaged.
      </div>
      <div className="md:col-start-7 md:col-end-12 text-[20px] md:text-[28px] md:mt-6">
        My passion is web application development, and my goal is for my
        projects to give people the same sense of satisfaction that I feel when
        creating them.
      </div>
    </div>
  );
};

export default Quote;
