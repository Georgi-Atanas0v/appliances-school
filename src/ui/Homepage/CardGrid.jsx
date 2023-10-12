import "./CardGrid.css";

function CardGrid() {
  return (
    <div className="parent-div">
      <div className="mt-5 card-container mx-auto">
        <div className="card card-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1672192166376-80b36e85cdb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwZnJ5ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="image h-[100%] w-[500px] "
            alt="productimg"
          />

          <h1 className="h1text md:text-base text-sm">Mini Stoves</h1>
          <button className="h1text md:text-base mt-[30px] md:mt-[40px] text-sm">
            View Collections
          </button>
        </div>
        <div className="card">
          <img
            src="https://plus.unsplash.com/premium_photo-1664372899448-05788a69406a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="image h-[100%] w-[500px]"
            alt="productimg"
          />
          <h1 className="h1text md:text-base text-sm">Dish Washers</h1>
          <button className="h1text md:text-base mt-[30px] md:mt-[40px] text-sm">
            View Collections
          </button>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1580929753603-10519c6e480a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="image h-[100%] w-[500px]"
            alt="productimg"
          />
          <h1 className="h1text md:text-base text-sm">Stoves</h1>
          <button className="h1text md:text-base mt-[30px] md:mt-[40px] text-sm">
            View Collections
          </button>
        </div>
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/refrigerator-fridge-realistic-set-isolated-cold-storage-units-with-products-open-closed-door_1284-27090.jpg?size=626&ext=jpg&ga=GA1.2.123749698.1696789874&semt=sph"
            className="image h-[100%] w-[500px]"
            alt="productimg"
          />
          <h1 className="h1text md:text-base text-sm">Fridges</h1>
          <button className="h1text md:text-base mt-[30px] md:mt-[40px] text-sm">
            View Collections
          </button>
        </div>
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/spoon-spatula-hanging-wall_1308-72026.jpg?size=626&ext=jpg&ga=GA1.1.123749698.1696789874&semt=sph"
            className="image h-[100%] w-[500px]"
            alt="productimg"
          />

          <h1 className="h1text md:text-base text-sm text">Cutlery</h1>
          <button className="h1text md:text-base mt-[30px] md:mt-[40px] text-sm">
            View Collections
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
