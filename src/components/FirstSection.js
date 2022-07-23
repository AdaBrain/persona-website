import bg1 from "../assets/images/bg-1.jpeg";
import { MdKeyboardArrowDown } from "react-icons/md";

const FirstSection = () => {
  const styles = {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "../assets/images/mymind.jpeg"
    })`,
  };

  return (
    <>
      <div
        className="first-section-contain w-screen h-96 outline mt-2 grid grid-cols-2 container mx-auto"
        style={styles}
      >
        <div className="col-1 text-center pt-20">
          <h1 className="text-3xl ">Welcome to AdaWorld!</h1>
          <h2 className="text-xl">Code, Game, and Arts</h2>
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
          <p className="text-sm mt-3 text-gray-500">
            By using AdaWorld, you agree to its license and privacy statement.
          </p>
        </div>
        <div className="col-2">
          <h1>Col-2</h1>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
