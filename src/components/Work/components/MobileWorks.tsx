import "../work.css";

export default function MobileWorks() {
  return (
    <div className="sm:hidden mobile-works bg-[#222]">
      <div className="mobile-workitem-container">
        <a>
          <img
            src="galaxy.jpg"
            alt="Miracle UI"
            className="mobile-workitem-image"
          />
          <div className="mobile-worktext-container">
            <div className="mobile-worktext-title">MIRACLE</div>
            <div className="mobile-worktext-button">button</div>
          </div>
        </a>
        <div className="mobile-work-gradient"></div>
      </div>
      <div className="mobile-workitem-container">
        <a>
          <img
            src="keyboard.jpeg"
            alt="Miracle UI"
            className="mobile-workitem-image"
          />
          <div className="mobile-worktext-container">
            <div className="mobile-worktext-title">RTP/99</div>
            <div className="mobile-worktext-button">button</div>
          </div>
        </a>
        <div className="mobile-work-gradient"></div>
      </div>
      <div className="mobile-workitem-container">
        <a>
          <img
            src="arquitectura.avif"
            alt="Miracle UI"
            className="mobile-workitem-image"
          />
          <div className="mobile-worktext-container">
            <div className="mobile-worktext-title">BENTOED</div>
            <div className="mobile-worktext-button">button</div>
          </div>
        </a>
        <div className="mobile-work-gradient"></div>
      </div>
    </div>
  );
}
