import { MdKeyboardArrowDown } from "react-icons/md";
import mockup from "../assets/images/deco.jpeg";

const FirstSection = () => {
  const styles = {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "../assets/images/mymind.jpeg"
    })`,
  };

  return (
    <>
      <div
        className="first-section-contain w-screen mt-2 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 container mx-auto bg-[#3B3F8C] rounded-xl shadow-xl"
        style={styles}
      >
        <div className="col-1 text-center pt-20 text-[#F2CF8D]">
          <h1 className="text-3xl font-bold">Welcome to AdaWorld!</h1>
          <h2 className="text-lg">Code, Game, and Arts</h2>
          <div className="button-group flex justify-center mt-5 gap-1">
            
            <a href="https://adabrain.tv">
              <button className="bg-blue-700 text-white px-8 py-2 hover:bg-blue-900">
                <h1 className="text-xl font-bold">Download AdaWorld</h1>
                <p>V19.0.2</p>
              </button>
            </a>

            <button className="bg-blue-700 text-white px-2 py-2 hover:bg-blue-900">
              <MdKeyboardArrowDown className="text-4xl" />
            </button>
          </div>

          {/* Term and conditions  */}
          <p className="text-sm mt-3 text-[#F2CF8D]">
            By using AdaWorld, you agree to its license and privacy statement.
          </p>
        </div>

        {/* Product Image */}
        <div className="col-2 mx-auto py-8">
          <img className="w-96 rounded-xl  border-b-8 border-neutral-500 shadow-2xl shadow-neutral-500 hover:-translate-y-4 duration-500" src={mockup} alt="" />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
