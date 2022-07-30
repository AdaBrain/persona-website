import { FaHeart } from "react-icons/fa"

const SecondSection = () => {
    return <>
        <div className="second-section w-screen mt-2 container mx-auto bg-[#3B3F8C] rounded-xl shadow-xl border-t-8 border-[#F2CF8D] p-5">
            <h1 className="text-[#F2CF8D] text-xl">News - Devlogs</h1>

            {/* News Items */}
            {/* conent like  read more */}
            <div className="flex flex-col">
                <div className="news-item flex my-3 p-3 border border-[#F2CF8D] rounded-xl justify-between items-center">
                    <div className="text-md text-[#F2CF8D]">
                        <p>[Update 12.5] Dungeon and Dragon 5e, start at Adabrain</p>    
                    </div>                    
                    <div className="like flex">
                        <FaHeart className="text-2xl text-[#BF0B3B]" />
                        <p className="likes text-[#1F2440] text-lg font-bold">108</p>
                    </div>
                    <a href="#">
                        <button className=
                        "bg-[#292759] text-[#F2CF8D] p-3 rounded-xl border-t-4 border-[#F2CF8D] hover:bg-[#1F2440] hover:border-none"
                        >read more</button>
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default SecondSection;