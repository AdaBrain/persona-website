import { FaHeart } from "react-icons/fa";

const newsData = [
    {topic: "[Update 12.5] Dungeon and Dragon 5e, start at Adabrain", like: "108", link: "#"},
    {topic: "[Update 10.1] Dungeon and Dragon 4e, Now at Adabrain", like: "5k", link: "#"},
    {topic: "[Update 12.5] Dungeon and Dragon 5e, start at Adabrain", like: "108", link: "#"},
    {topic: "[Update 10.1] Dungeon and Dragon 4e, Now at Adabrain", like: "5k", link: "#"},
    {topic: "[Update 12.5] Dungeon and Dragon 5e, start at Adabrain", like: "108", link: "#"},
    {topic: "[Update 10.1] Dungeon and Dragon 4e, Now at Adabrain", like: "5k", link: "#"},
]

const NewsItem = (props) => {
  const {topic, like, link} = props;

  return (
    <div className="news-item flex my-3 p-3 border border-[#F2CF8D] rounded-xl justify-between items-center">
      <div className="text-md text-[#F2CF8D] hover:text-white hover:cursor-pointer">
        <p>{topic}</p>
      </div>
      <div className="like flex">
        <FaHeart className="text-2xl text-[#BF0B3B] mr-1" />
        <p className="likes text-[#1F2440] text-lg font-bold">{like}</p>
      </div>
      <a href={link}>
        <button className="hidden lg:inline bg-[#292759] text-[#F2CF8D] p-3  rounded-xl border-t-4 border-[#F2CF8D] hover:bg-[#1F2440] hover:border-t-2">
          read more
        </button>
      </a>
    </div>
  );
};

const RenderNewsItems = () => {
  return newsData.map((news, idx) => <NewsItem topic={news.topic} like={news.like} link={news.link} key={idx} />)
}

const SecondSection = () => {
  return (
    <>
      <div className="second-section w-screen mt-2 container mx-auto bg-[#3B3F8C] rounded-xl shadow-xl border-t-8 border-[#F2CF8D] p-5">
        <h1 className="text-[#F2CF8D] text-xl">News - Devlogs</h1>

        {/* News Items */}
        {/* conent like  read more */}
        <div className="flex flex-col">
          {RenderNewsItems()}
        </div>
      </div>
    </>
  );
};

export default SecondSection;
