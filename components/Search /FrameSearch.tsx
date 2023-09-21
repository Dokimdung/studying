function FrameSearch() {
    return (
        <div className="bg-slate-300/70 rounded-xl m-[100px]">
            <div className="flex justify-around">
                <div className="text-center">
                    <p className="text-[30px] text-[#252641] font-bold "> Know about learning <br/> learning platform
                    </p>
                    <div className={"flex m-5"}>
                        <img src={'icons/BG.png'} className="m-2"/>
                        <p className={"m-2 text-[18px] text-[#2D3436]"}> Free E-book, video & consolation </p></div>
                    <div className={"flex m-5"}>
                        <img src={'icons/BG.png'} className="m-2"/>
                        <p className={"m-2 text-[18px] text-[#2D3436]"}> Top instructors from around world </p></div>
                    <div className={"flex m-5"}>
                        <img src={'icons/BG.png'} className="m-2"/>
                        <p className={"m-2 text-[18px] text-[#2D3436]"}> Top courses from your team </p></div>
                    <button
                        className="bg-white text-[#49BBBD] hover:bg-[#49BBBD] hover:text-white hover:border-none border-[0.1px]  rounded-[12px]  w-[200px] h-[40px]"> Start
                        learning now
                    </button>

                </div>
                <div>
                    <img src="icons/Group 712.png" className="m-10 w-[90%]"/>
                </div>
            </div>

        </div>
    )
}

export default FrameSearch;