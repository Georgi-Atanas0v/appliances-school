import Item from "./Item";
import "./Shop.css";
import "../PageNav/PageNav";
import PageNav from "../PageNav/PageNav";
import Footer from "../Footer/Footer";

const applianceProducts = [
  {
    id: 1,
    name: "Refrigerator",
    price: 799.99,
    description:
      "A high-capacity, energy-efficient refrigerator with adjustable shelves and digital temperature control.",
    image: "https://example.com/images/refrigerator.jpg",
  },
  {
    id: 2,
    name: "Washing Machine",
    price: 499.99,
    description:
      "Front-loading washing machine with multiple wash cycles and a large drum for heavy loads.",
    image: "https://example.com/images/washing_machine.jpg",
  },
  {
    id: 3,
    name: "Microwave Oven",
    price: 149.99,
    description:
      "A compact microwave oven with multiple power levels and a turntable for even cooking.",
    image: "https://example.com/images/microwave_oven.jpg",
  },
  {
    id: 4,
    name: "Dishwasher",
    price: 649.99,
    description:
      "Efficient dishwasher with multiple cleaning modes and adjustable racks for various dish sizes.",
    image: "https://example.com/images/dishwasher.jpg",
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 79.99,
    description:
      "Programmable coffee maker with a built-in grinder and a warming plate.",
    image: "https://example.com/images/coffee_maker.jpg",
  },
  {
    id: 6,
    name: "Toaster",
    price: 29.99,
    description:
      "2-slice toaster with multiple browning settings and a removable crumb tray.",
    image: "https://example.com/images/toaster.jpg",
  },
  {
    id: 7,
    name: "Oven Range",
    price: 899.99,
    description:
      "Gas oven range with convection cooking and a spacious cooktop with multiple burners.",
    image: "https://example.com/images/oven_range.jpg",
  },
  {
    id: 8,
    name: "Air Conditioner",
    price: 399.99,
    description:
      "Window-mounted air conditioner with adjustable temperature settings and a remote control.",
    image: "https://example.com/images/air_conditioner.jpg",
  },
  {
    id: 9,
    name: "Vacuum Cleaner",
    price: 149.99,
    description:
      "Bagless vacuum cleaner with powerful suction and HEPA filtration for allergen removal.",
    image: "https://example.com/images/vacuum_cleaner.jpg",
  },
  {
    id: 10,
    name: "Blender",
    price: 69.99,
    description:
      "High-speed blender with multiple blending modes and a durable stainless steel blade.",
    image: "https://example.com/images/blender.jpg",
  },
  {
    id: 11,
    name: "Clothes Dryer",
    price: 549.99,
    description:
      "Electric clothes dryer with multiple drying cycles and a large drum capacity.",
    image: "https://example.com/images/clothes_dryer.jpg",
  },
  {
    id: 12,
    name: "Electric Kettle",
    price: 39.99,
    description:
      "Fast-boiling electric kettle with automatic shutoff and a large water capacity.",
    image: "https://example.com/images/electric_kettle.jpg",
  },
  {
    id: 13,
    name: "Food Processor",
    price: 119.99,
    description:
      "Food processor with various attachments for chopping, slicing, and shredding.",
    image: "https://example.com/images/food_processor.jpg",
  },
];

function Shop() {
  return (
    <div>
      <PageNav />
      <div className="product__parent mt-[100px]">
        <div className="product__container">
          {applianceProducts.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
