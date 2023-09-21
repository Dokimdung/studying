import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Background from '../../public/icons/Rectangle 193.png';
function HeaderLC (){
    return(
        <div className="">
            <div className=" flex test-gradient rounded-xl ">
                
                <div> <img src="icons/Ellipse 128.png" className='w-[90%] m-20'/></div>
               <div className="bg-white rounded-xl border-none m-20 "> 
                    <div className="flex m-10 justify-between "> 
                      <div> <p className='text-[30px] text-black font-semibold'> John Anderson</p>
                        <p className='text-[18px] text-[#2D3436B2]'> Assistant Professor at Mcmaster University</p></div>  
                        <div> 
                            <button className="bg-white hover:bg-[#49BBBD] text -[#49BBBD] hover:text-white rounded-xl hover:border-none w-[80%] h-[40px] m-10"> Enroll Now </button>
                        </div>
                    </div>
                    <p className='text-[25px] text-[#2D3436] m-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud </p>
                <div className='flex justify-around'> 
                    <div> 
                  <IconButton> 
                    <StarOutlineIcon className='text-[#2D3436CC]'/> 4.9 instructor Rating
                  </IconButton>
                  </div> 
                  <div> 
                    <IconButton> 
                        <RemoveRedEyeIcon className='text-[#2D3436CC]'/> 1,592 Students
                    </IconButton>
                  </div>
                  <div> 
                <IconButton> 
                    <PlayCircleOutlineIcon className='text-[#2D3436CC]'/> Courses

                </IconButton>
                  </div>
                  <div className=" flex  text-[#49BBBD] rounded-full ">
                        <div className='p-2'><TwitterIcon className=" bg-[#49BBBD] text-white hover:text-white hover:bg-cyan-500 rounded-3xl"/>
                        </div>
                        <div className='p-2'><FacebookIcon
                            className=" bg-[#49BBBD] text-white hover:text-white hover:bg-blue-500  rounded-3xl"/></div>
                        
                        <div className='p-2'><InstagramIcon
                            className=" bg-[#49BBBD] text-white hover:text-white hover:bg-orange-500 rounded-3xl"/></div>
            </div>
                </div>
               
            </div>
            </div>

        </div>
    )
}
export default HeaderLC;