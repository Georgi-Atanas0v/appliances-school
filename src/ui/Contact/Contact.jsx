import { useState } from "react";
import Footer from "../Footer/Footer";
import PageNav from "../PageNav/PageNav";
import "./Contact.css";
import InfoContact from "./InfoContact";
function Contact() {
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !name1 || !name2 || !name3) return;
    setName("");
    setName1("");
    setName2("");
    setName3("");
  }

  return (
    <div>
      <PageNav />
      <div className="mt-[100px]">
        <InfoContact />
        <form onSubmit={handleSubmit}>
          <div className="cont w-full">
            <div className="email__container space-y-5 px-4 py-3 sm:py-6 w-[50vw]">
              <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
                <label className="sm:basis-20">Име</label>
                <input
                  type="text"
                  className="input grow"
                  placeholder="Име"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
                <label className="sm:basis-20">Email</label>
                <input
                  type="email"
                  className="input grow"
                  placeholder="Email"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                ></input>
              </div>
              <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
                <label className="sm:basis-20">Телефон</label>
                <input
                  type="tel"
                  className="input grow"
                  placeholder="Телефон"
                  value={name2}
                  onChange={(e) =>
                    setName(Number(e.target.value) ? e.target.value : name2)
                  }
                ></input>
              </div>
              <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
                <label className="sm:basis-30">Съобщение</label>
                <textarea
                  className="input grow"
                  value={name3}
                  onChange={(e) => setName3(e.target.value)}
                />
              </div>
            </div>
            <button className="mb-10 bg-[#7D7C7C] rounded-full text-center text-base sm:text-xl py-1.5 px-4 sm:py-2.5 sm:px-10 text-white">
              Изпрати
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
