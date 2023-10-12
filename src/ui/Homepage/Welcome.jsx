import "./Welcome.css";

function Welcome() {
  return (
    <div className="bg-cont">
      <div className="text-container">
        <div className="sm:w-[50%] w-[80%] xl:mr-[350px] md:mr-[250px] sm:mr-[150px] mr-[20px]">
          <h1 className="text-2xl md:text-[45px] leading-tight md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <p className="mt-5 xl:w-[50%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
            veritatis incidunt molestias alias minima facere, quia magni
            provident dignissimos qui temporibus dolorem odio voluptatibus illum
            eos! Sunt nostrum porro illo!
          </p>
          <button className="bg-[#7D7C7C] rounded-md mt-5 text-center text-sm py-0.5 px-4 sm:py-1 sm:px-6">
            Browse Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
