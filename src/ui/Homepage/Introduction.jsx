import IntroductionItem from "./IntroductionItem";
import "./Introduction.css";

function Introduction() {
  const introductions = [
    {
      number: 1,
      heading: "В бизнеса повече от 15 години",
      paragraph: "Пазарувай сега",
    },
    {
      number: 2,
      heading: "Доставяме из цяла Европа",
      paragraph: "Пазарувай сега",
    },
    {
      number: 3,
      heading: "Правилния избор",
      paragraph: "Пазарувай сега",
    },
  ];

  return (
    <div className="parent-div gap-10 mt-5 mb-5 w-[100vw] px-5 py-5 divide-y xmd:divide-y-0 xmd:divide-x divide-stone-500">
      {introductions.map((introduction) => (
        <IntroductionItem
          introduction={introduction}
          key={introduction.number}
        />
      ))}
    </div>
  );
}

export default Introduction;

{
  /* <div className="item-property w-[400px]">
        <h1>01</h1>
        <h1>В бизнеса вече над 15 години</h1>
        <p>for all orders mroe tan 140$</p>
      </div>
      <div className="item-property w-[400px]">
        <h1>02</h1>
        <h1>Доставки из цяла Българияy</h1>
        <p>for all orders mroe tan 140$</p>
      </div>
      <div className="item-property w-[400px]">
        <h1>03</h1>
        <h1>Твоят Правилен Избор</h1>
        <p>for all orders mroe tan 140$</p>
      </div> */
}
