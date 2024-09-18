import "./quote.css";

const Quote = () => {
  return (
    <div className="bg-[#222] pt-[10vh] md:pt-[5vh] lg:pt-[35vh] pb-24 px-6 quote-grid text-white grid-cols-1 md:grid-cols-12 gap-y-6">
      <div className="md:col-start-2 md:col-end-5 text-[20px] md:text-[28px]">
        I build digital platforms that keep the user connected.
      </div>
      <div className="md:col-start-7 md:col-end-12 text-[20px] md:text-[28px] md:mt-6">
        In a digital world where the focus often lies on an efficient user
        experience, I want to add an extra layer of joy. I believe that is what
        leaves a lasting impression.
      </div>
    </div>
  );
};

export default Quote;
