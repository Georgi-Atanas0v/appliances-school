import Footer from "../Footer/Footer";
import PageNav from "../PageNav/PageNav";
import "./Contact.css";
import InfoContact from "./InfoContact";

function Contact() {
  return (
    <div>
      <PageNav />
      <div className="mt-[100px]">
        <InfoContact />
        <div className="cont w-full">
          <div className="email__container space-y-5 px-4 py-3 sm:py-6 w-[50vw]">
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Име</label>
              <input
                type="text"
                className="input grow"
                placeholder="Име"
              ></input>
            </div>
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Email</label>
              <input
                type="email"
                className="input grow"
                placeholder="Email"
              ></input>
            </div>
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Телефон</label>
              <input
                type="tel"
                className="input grow"
                placeholder="Телефон"
              ></input>
            </div>
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-30">Съобщение</label>
              <textarea className="input grow" />
            </div>
          </div>
          <button className="mb-10 bg-[#7D7C7C] rounded-full text-center text-base sm:text-xl py-1.5 px-4 sm:py-2.5 sm:px-10 text-white">
            Изпрати
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
