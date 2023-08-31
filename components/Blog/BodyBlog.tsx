const blogList = [
    {
        id: '1',
        name: 'UX/UI',
        img: 'icons/Group42.png'
    },
    {
        id: '2',
        name: 'React',
        img: 'icons/Group46.png'
    },
    {
        id: '3',
        name: 'PHP',
        img: 'icons/Group44.png'
    },
    {
        id: '4',
        name: 'javaScript',
        img: 'icons/Group45.png'
    }
]

function BodyBlog() {
    return (
        <div className={"m-10 "}>
            <div className={""}>
                <h3> Reading blog list </h3>
            </div>
            <div className={"flex  justify-around"}>
                {
                    blogList?.length && blogList.map((blog: any, index: number) => {
                        return (
                            <div key={index + blog.id} className={"relative "}>
                                <img src={blog.img} className={""}/>
                                <div className={'absolute top-[80%] left-[30%]'}>
                                    <button
                                        className={"cursor-pointer h-[40px] absolute bottom-0 left-0 rounded-[12px] border-none text-black bg-white/70 w-40 ml- "}>
                                        {blog.name}
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default BodyBlog;