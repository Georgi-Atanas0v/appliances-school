import "./WelcomeAbout.css";
function WelcomeAbout() {
  return (
    <div className="welcome__about">
      <div className="grid__container mt-5 gap-5 md:gap-10 ">
        <div className="content__container mt-10  sm:px-10">
          <p className="text-[28px] sm:text-[50px] leading-none">
            Вашето място за всичко
          </p>
          <p className="mt-3 sm:mt-5 text-base sm:text-lg">
            Предоставяме на клиентите най-висококачествените продукти в сферата
            на бялата техника, които да улеснят ежедневния живот и да ги
            направят по-екологично осведомени.
          </p>
        </div>
        <img
          alt="appliance img"
          src="https://images.unsplash.com/photo-1584143987552-0ab1f595af6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGlhbmNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
}

export default WelcomeAbout;
