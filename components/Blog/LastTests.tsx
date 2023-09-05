const blogList = [
    {
        id: '1',
        img: 'icons/Group 42.png'
    },
    {
        id: '2',

        img: 'icons/Group 43.png'
    },
    {
        id: '3',
        img: 'icons/Group 42.png'
    },
    {
        id: '4',

        img: 'icons/Group 43.png'
    }
]


function LastTests() {
    return (
        <div>
            <div className={"flex justify-between text-2xl ml-10"}>
            <h3> Marketing Articles </h3>
                <p className={"text-cyan-300 mr-10"}> See all</p></div>
            <div className={"flex justify-around text-center"}>
                {
                    blogList?.length && blogList.map((blog: any, index: number) => {
                        return (
                            <div key={index + blog.id}
                                 className={"bg-white p-2  m-5 border-none  rounded-3xl  shadow-[ 0px 0px 20px #262D7614] "}>
                                <img src={blog.img} className={" w-[95%]"}/>
                                <h3 className={'text-left'}> AWS Certified solutions Architect </h3>
                                <p className={'text-left'}> Lorem ipsum dolor sit amet, <br/> consectetur adipising
                                    elit, <br/> sed do eiusmod tempor </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LastTests;