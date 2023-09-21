import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function QuestionSearch(){

    return(
        <div className={"bg-slate-200 h-[700px] "}>
        <div className={" m-20 "}>
            <p className={"text-[30px] "}>What our students have to say</p>
        </div>
        <div className='flex bg-white rounded-xl m-10  justify-around'>
            <div>
                <img src="icons/Group 368.png" className='w-[100%]'/>
            </div>
            <div className='m-20'> 
                <p  className={"text-[30px] text-[#252641] font-extrabold "}>Savannah Nguyen </p>
                <p className={"text-[25px] text-[#252641]  font-semibold "}> tanya.hill@example.com</p>
                <p className={"text-[18px] text-[#696984] font-medium "}> Lorem ipsum dolor sit amet, consectetur adipising elit,<br/> sed do eiusmod tempor <br/> Lorem   ipsum dolor sit amet, consectetur adipising elit, <br/> sed do eiusmod tempor <br/> Lorem ipsum dolor sit amet, consectetur adipising elit,<br/> sed do eiusmod tempor</p>
                <div className=" flex  text-[#49BBBD] rounded-full ">
                        <div className='p-2'><TwitterIcon className=" bg-[#49BBBD] text-white hover:text-white hover:bg-cyan-500 rounded-3xl"/>
                        </div>
                        <div className='p-2'><FacebookIcon
                            className=" bg-[#49BBBD] text-white hover:text-white hover:bg-blue-500  rounded-3xl"/></div>
                        
                        <div className='p-2'><InstagramIcon
                            className=" bg-[#49BBBD] text-white hover:text-white hover:bg-orange-500 rounded-3xl"/></div>
            </div>
        </div>
        <div className='block m-20'> 
         <div className='m-5'> <img src="icons/Ellipse 123.png"/> </div>
       <div className='m-5'><img src="icons/Ellipse 124.png"/> </div>  
       <div className='m-5'>  <img src="icons/Ellipse 125.png"/> </div>  
       <div className='m-5'> <img src="icons/Ellipse 126.png"/> </div>  
        </div>
        </div>
        </div>
    )
}
export default QuestionSearch;