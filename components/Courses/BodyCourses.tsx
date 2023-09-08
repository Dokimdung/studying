const blogList = [
    {
        id: '1',
        name: 'Design',
        img: 'icons/pen.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
        color: '#49BBBD4D'

    },
    {
        id: '2',
        name: 'Development',
        img: 'icons/tele.png',
        color: '#5B72EE4D',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '3',
        name: 'Development',
        img: 'icons/thung.png',
        color: '#9DCCFF4D',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '4',
        name: 'Business',
        img: 'icons/bag.png',
        color: '#00CBB84D',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '5',
        name: 'Marketing',
        img: 'icons/people.png',
        color: '#F48C064D ',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '6',
        name: 'Photography',
        img: 'icons/book.png',
        color: '#EE645B4D',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '7',
        name: 'Acting',
        img: 'icons/flim.png',
        color: '#2526414D',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    },
    {
        id: '8',
        name: 'Busuness',
        img: 'icons/bag.png',
        color: '#00CBB84D',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
    }

]


function BodyCourses() {


    return (
        < div className="m-20">
            <h3 className="text-[#252641] text-[30px] p-5 "> Choice favourite course from top category </h3>
            <div className="grid grid-cols-4 gap-4">
                {
                    blogList?.length && blogList.map((blog: any, index: number) => {
                        return (
                            <div key={index + blog.id}
                                 className={"bg-white p-3 border-none  rounded-3xl  shadow-[ 0px 0px 20px #262D7614]  text-center"}>

                                <img className='p-5 rounded-[10px]' style={{background: blog?.color}} src={blog?.img}
                                     alt=""/>

                                <div className={''}>
                                    <p className={"font-bold  text-2xl "}>{blog.name} </p>
                                    <p className="text-[#696984]">{blog.title}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default BodyCourses;