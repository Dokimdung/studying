const blogList = [
    {
        id: '1',
        name: 'Jane Cooper',
        img: 'icons/image 10.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',


    },
    {
        id: '2',
        name: 'Adam',
        img: 'icons/image 102.png',

        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '3',
        name: 'Tomara',
        img: 'icons/image 101.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '4',
        name: 'Jungkook',
        img: 'icons/image 10.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '5',
        name: 'Rapmonster',
        img: 'icons/image 102.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '6',
        name: 'TaeHuynh',
        img: 'icons/image 101.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },


]


function FrameAllSearch() {


    return (
        < div className="m-20">
            <h3 className="text-[#252641] text-[30px] p-5 "> Choice favourite course from top category </h3>
            <div className="grid grid-cols-3 gap-3">
                {
                    blogList?.length && blogList.map((blog: any, index: number) => {
                        return (
                            <div key={index + blog.id}
                                 className={" p-3 border-none  rounded-3xl  shadow-[ 0px 0px 20px #262D7614]  text-center "}>


                                <img className='p-7 rounded-[10px]' style={{background: blog?.color}} src={blog?.img}
                                     alt=""/>

                                <div className={'bg-white'}>
                                    <div className="h-[50%]"></div>
                                    <div className="h-[50%] ">
                                        <p className={"font-bold  text-2xl "}>{blog.name} </p>
                                        <p className="text-[#696984]">{blog.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default FrameAllSearch;