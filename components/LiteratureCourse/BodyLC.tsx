const  blogList = [
   {
    id:'1',
    name: 'All Benefits of PLUS',
    img: "icons/Group 194.png",
    title:"$24",
   },
   {
    id:'2',
    name: 'All Benefits of PLUS',
    img: "icons/Group 195.png",
    title:"$25",
   },
   {
    id:'3',
    name: 'All Benefits of PLUS',
    img: "icons/Group 197 .png",
    title:"$27",
   },
   {
    id:'4',
    name: 'All Benefits of PLUS',
    img: "icons/Group 196 .png",
    title:"$29",
   },
   {
    id:'5',
    name: 'All Benefits of PLUS',
    img: "icons/Group 198.png",
    title:"$30",
   },
   {
    id:'6',
    name: 'All Benefits of PLUS',
    img: "icons/Group 199.png",
    title:"$20",
   },
] 
function BodyLC (){
    return(
        <div>
            <div className="flex ml-20"> 
                <button className="bg-[#BBBBBB80] hover:bg-[#49BBBD] text-[#696969] hover:text-white m-10 border-none rounded-xl w-[5%] h-[40px]"> About </button>
                <button className="bg-[#BBBBBB80] hover:bg-[#49BBBD] text-[#696969] hover:text-white m-10 border-none rounded-xl w-[5%] h-[40px]"> Coures </button>
                <button className="bg-[#BBBBBB80] hover:bg-[#49BBBD] text-[#696969] hover:text-white m-10 border-none rounded-xl w-[5%] h-[40px]"> Notes </button>
                <button className="bg-[#BBBBBB80] hover:bg-[#49BBBD] text-[#696969] hover:text-white m-10 border-none rounded-xl w-[5%] h-[40px]"> Project </button>
                <button className="bg-[#BBBBBB80] hover:bg-[#49BBBD] text-[#696969] hover:text-white m-10 border-none rounded-xl w-[5%] h-[40px]"> Podcast</button>
                <button className="bg-[#BBBBBB80] hover:bg-[#49BBBD] text-[#696969] hover:text-white m-10 border-none rounded-xl w-[5%] h-[40px]"> Book </button>
                <button className="bg-[#BBBBBB80] hover:bg-[#49BBBD] text-[#696969] hover:text-white m-10 border-none rounded-xl w-[5%] h-[40px]"> Review </button>
            </div>
            <div> 
                <h3 className="ml-20 text-[30px]   ">Literature course </h3>
                <div className="grid grid-cols-3 gap-0">
                {
                    blogList?.length && blogList.map((blog: any, index: number) => {
                        return (
                            < div key={index + blog.id}
                                 className={" bg-white  p-3 border-none  rounded-3xl  drop-shadow-[ 0px 20px 20px #262D7614] m-20 "}>
                                <img className=' rounded-[10px] w-[100%]' style={{background: blog?.color}} src={blog?.img} alt=""/>                                                                 
                                      <div className="flex justify-between">   <p className={" text-[25px] "}>{blog.name} </p>
                                        <p className="text-[#49BBBDCC] text-[30px] font-bold ">{blog.title}</p> </div>
                            </div> ) })  }
            </div>
            </div>
            <img src="icons/Group042.png" className="ml-[600px]"/>
        </div>
    )
}
export default BodyLC;