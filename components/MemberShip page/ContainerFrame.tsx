const blogList = [
    {
        id: '1',
        img: 'icons/Group243.png'
    },
    {
        id: '2',

        img: 'icons/Group243.png'
    },
    {
        id: '3',
        img: 'icons/Group243.png'
    },
    {
        id: '4',

        img: 'icons/Group243.png'
    }
]

function ContainerFrame() {
    return (
        <div>
            <div className={'bg-slate-200'}>
                <div className={"flex  text-2xl ml-[10%]"}>
                    <h3> What our students have to say</h3>
                </div>
                <div className={"flex justify-around text-center "}>
                    {
                        blogList?.length && blogList.map((blog: any, index: number) => {
                            return (
                                <div key={index + blog.id}
                                     className={"bg-white p-2  m-5 border-none  rounded-3xl  shadow-[ 0px 0px 20px #262D7614] "}>
                                    <img src={blog.img} className={" w-[40%]"}/>
                                    <h3 className={'text-center'}> Bulkin Simons </h3>
                                    <p className={'text-[#696984]'}> Lorem ipsum dolor sit amet,<br/>consectetur adipiscing
                                        elit, sed do <br/>eiusmodadipiscing elit, sed do <br/>eiusmod</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className={'flex bg-[#252641] justify-between m-[5%] border-solid rounded-[20px]'}>
                <h3 className={"text-white text-xl m-10"}> APP is available for free </h3>
                <div className={' flex m-10'}>
                    <div>
                        <button
                            className={"cursor-pointer h-[50px]  rounded-[12px]  border-solid hover:border-none  text-[#49BBBD] hover:text-white  bg-white hover:bg-[#49BBBD] w-40  "}>
                            Android App
                        </button>
                    </div>
                    <div>
                        <button
                            className={"cursor-pointer h-[50px]  rounded-[12px]  border-solid hover:border-none  text-[#49BBBD] hover:text-white  bg-white hover:bg-[#49BBBD] w-40  "}>
                            IOS App
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ContainerFrame;