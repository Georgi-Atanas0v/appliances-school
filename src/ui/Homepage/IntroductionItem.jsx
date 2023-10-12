import "./IntroductionItem.css";

function IntroductionItem({ introduction }) {
  return (
    <div className="item-property w-[50vw] sm:px-5">
      <div className="parent-content">
        <h2 className="md:pl-5 mb-1 mt-3 text-[20px] sm:text-[30px] xmd:text-2xl">{`0${introduction.number}`}</h2>
        <h1 className="text-[15px] sm:text-[30px  ]  xmd:text-xl mt-5">
          {introduction.heading}
        </h1>
        <button className="text-[15px] sm:text-[20px] xmd:text-[20px] mt-3 sm:mt-[30px] bg-stone-300 text-stone-800 rounded-md px-2">
          {introduction.paragraph}
        </button>
      </div>
    </div>
  );
}

export default IntroductionItem;
