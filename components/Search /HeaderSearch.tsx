function HeaderSearch() {
    return (
        <div className="">
            <div className="relative">
                <img src="icons/Group 180.png" className="w-[100%]"></img>
                <div className="ml-20 absolute top-[50%] left-[20%]">
                    <div className="flex bg-white border-none rounded-xl w-[100%]">
                        <input type="text" defaultValue={'Search your favourite course'}
                               className="text-[20px] text-[#83839A99] font-medium bg-white border-none rounded-xl w-[100%] h-[50px]"/>
                        <div>
                            <button
                                className="bg-white text-[#49BBBD] hover:bg-[#49BBBD] hover:text-white hover:border-none border-[0.1px]  rounded-[12px]  w-[80px] h-[40px] m-1"> Search
                            </button>
                        </div>
                    </div>
                    <select className="bg-white w-[10%] h-[40px] border-none rounded-xl m-5">
                        <option value={""}>Subject</option>
                        <option value={""}></option>
                        <option value={""}></option>
                        <option value={""}></option>
                    </select>
                    <select className="bg-white w-[10%] h-[40px] border-none rounded-xl m-5">
                        <option value={""}> Partnet</option>
                        <option value={""}></option>
                        <option value={""}></option>
                        <option value={""}></option>
                    </select>
                    <select className="bg-white w-[10%] h-[40px] border-none rounded-xl m-5">
                        <option value={""}> Program</option>
                        <option value={""}></option>
                        <option value={""}></option>
                        <option value={""}></option>
                    </select>
                    <select className="bg-white w-[10%] h-[40px] border-none rounded-xl m-5">
                        <option value={""}> Language</option>
                        <option value={""}> Vietnamese</option>
                        <option value={""}> Korean</option>
                        <option value={""}> English</option>
                        <option value={""}> Japanese</option>
                        <option value={""}> Swedish</option>
                        <option value={""}> China</option>
                    </select>
                    <select className="bg-white w-[10%] h-[40px] border-none rounded-xl m-5">
                        <option value={""}> Abaliability</option>
                        <option value={""}></option>
                        <option value={""}></option>
                        <option value={""}></option>
                    </select>
                    <select className="bg-white w-[15%] h-[40px] border-none rounded-xl m-5">
                        <option value={""}> Learning Type</option>
                        <option value={""}> Online</option>
                        <option value={""}> Offline</option>
                        <option value={""}></option>
                    </select>

                </div>
            </div>
        </div>
    )
}

export default HeaderSearch;