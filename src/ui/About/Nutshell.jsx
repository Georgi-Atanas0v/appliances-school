import "./Nutshell.css";
function Nutshell() {
  return (
    <div
      className="parent-div text-center space-y-12 mb-[100px] md:mb-[200px] mt-[75px] md:mt-[150px]"
      id="parent-div"
    >
      <div className="space-y-12  sm:w-[50vw]">
        <h1 className="font-semibold text-3xl md:text-5xl">NTG Appliances</h1>
        <h2 className="font-semibold text-4xl sm:text-4xl lg:text-7xl">
          Надеждни уреди
        </h2>
        <p className="text-sm sm:text-xl">
          Ние вярваме, че качеството е от първостепенно значение. Предлагаме
          само продукти от най-добрите марки, като гарантираме тяхната
          надеждност и дълготрайност. Ангажирани сме с опазването на околната
          среда. Предлагаме продукти, които спестяват енергия и вода, и работим
          по намаляване на нашия екологичен отпечатък.
        </p>
      </div>
    </div>
  );
}

export default Nutshell;
