import "./Footer.css";

function Footer() {
  return (
    <div className="w-[100vw] flex justify-center items-center bg-[#191717] mt-5">
      <div className="parent-cont w-[70vw] text-base sm:text-lg py-3 text-stone-300 mt-5 font-semibold">
        <div className="cont">
          <ul>
            <li>История</li>
            <li>Политика на поверителност</li>
            <li>Новини</li>
            <li>Правила и условия</li>
            <li>Галерия</li>
          </ul>
        </div>
        <div className="cont m-5">
          <ul>
            <li>Нови Поръчки</li>
            <li>Информация</li>
            <li>Връщания</li>
            <li>Доставки</li>
            <li>Помощ</li>
          </ul>
        </div>
        <div className="cont middle-cont">
          <ul>
            <li>Топ Брандове</li>
            <li>Информация Доставки</li>
            <li>Книга</li>
            <li>Кариери</li>
            <li>Разширено търсене</li>
            <li className="mt-5">©NTG APPLIANCES ALL RIGHTS RESERVED</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
