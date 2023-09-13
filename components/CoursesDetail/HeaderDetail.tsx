import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useRouter} from "next/router";

<svg data-testid="DeleteIcon"></svg>


function HeaderDetail() {
    const router = useRouter()
    return (
        <div className=''>
            <div className=" ">
                <img src="icons/Group236.png" className="w-[100%]"/>
            </div>
            <div className="flex  justify-between">
                <div>
                    <div className="m-20 ">
                    <button
                        className="bg-gray-300 hover:bg-[#49BBBD] text-gray-500 hover:text-white text-center text-[20px] font-bold border-none rounded-[10px] p-6  ml-20 "> Overview
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-[#49BBBD] text-gray-500 hover:text-white text-center text-[20px] font-bold border-none rounded-[10px] p-6 ml-20 "> Overview
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-[#49BBBD] text-gray-500 hover:text-white text-center text-[20px] font-bold border-none rounded-[10px] p-6  ml-20 "> Overview
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-[#49BBBD] text-gray-500 hover:text-white text-center text-[20px] font-bold border-none rounded-[10px] p-6  ml-20  "> Overview
                    </button>
                    </div>
                    <div className=" bg-slate-200 rounded-3xl ml-[80px]">
                        < div className=" flex bg-slate-200 rounded-3xl  justify-around">
                            <div
                                className="bg-white  text-black text-center text-[20px] font-bold border-none rounded-[24px] m-5 h-[200px] w-[20%] ">
                            <p className="text-[30px]"> 4 out of 5</p>
                            <img src="icons/Group 29.png"/>
                                <p className="text-[20px] text-[#00000080]"> Top Raiting </p>
                        </div>
                            <div>
                                <div className="flex  "><p> 5 Stars </p>   <img src="icons/Group 273.png"
                                                                                className="p-6"/></div>
                                <div className="flex  "><p> 4 Stars </p>   <img src="icons/Group 273.png"
                                                                                className="p-6"/></div>
                                <div className="flex  "><p> 3 Stars </p>   <img src="icons/Group 273.png"
                                                                                className="p-6"/></div>
                                <div className="flex  "><p> 2 Stars </p>   <img src="icons/Group 273.png"
                                                                                className="p-6"/></div>
                                <div className="flex  "><p> 1 Stars </p>   <img src="icons/Group 273.png"
                                                                                className="p-6"/></div>
                            </div> 
                    </div>
                        <div className=' m-20'>
                            <div className={''}>
                                <div className='flex items-center justify-between'>
                                    <IconButton aria-label="share">
                                        <Avatar>KD</Avatar>
                                        <span> Kim Dung </span>
                                    </IconButton>
                                    <div>
                                        <IconButton aria-label="accesstime">
                                            <AccessTimeIcon/>
                                        </IconButton>
                                        <span className={"text-[#696984]"}> 3 Month</span>
                                    </div>
                                </div>
                                <span> <img src="icons/Group 29.png"/> </span>
                                <p className='text-[#696984] text-[20px]'> Class, launched less than a year ago by
                                    Blackboard co-founder Michael Chasen, <br/> integrates exclusively... </p>
                            </div>
                            <div style={{border: '0.1px solid #696984'}}></div>
                            <div className={''}>
                                <div className='flex items-center justify-between'>
                                    <IconButton aria-label="share">
                                        <Avatar>KD</Avatar>
                                        <span> Kim Dung </span>
                                    </IconButton>
                                    <div>
                                        <IconButton aria-label="accesstime">
                                            <AccessTimeIcon/>
                                        </IconButton>
                                        <span className={"text-[#696984]"}> 3 Month</span>
                                    </div>

                                </div>
                                <p className='text-[#696984] text-[20px]'> Class, launched less than a year ago by
                                    Blackboard co-founder Michael Chasen, <br/> integrates exclusively... </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl shadow-[0px 0px 20px] w-[25%]">
                    <img src="icons/Group236.png" className="w-[100%]  rounded-3xl p-3"/>
                    <div className="flex justify-around  m-5">
                        <p className="text-black text-[30px] font-bold"> $49.65 </p>
                        <p className="line-through text-[#00000080] text-[28px] "> $99.99</p>
                        <p className=" text-[#00000080] text-[28px]"> 50% Off </p>
                    </div>
                    <p className=" text-[#49BBBD] text-[20px] font-semibold text-center ">11 hour left at this
                        price </p>
                    <button onClick={() => router.push('/checkpage')}
                            className="bg-gray-300 hover:bg-[#49BBBD] text-gray-500 hover:text-white text-center text-[20px] font-bold border-none rounded-[10px] p-6 w-[90%] m-5 "> Buy
                        Now
                    </button>
                    <div style={{border: '0.2px solid #696984'}}></div>
                    <h3 className="m-5 text-[30px]"> This Course included </h3>
                    <div className=" text-[#00000070] m-5">
                        <div className=" flex"><Brightness7Icon className="text-[#49BBBD]  m-2"/>   <p> Money Back
                            Guarantee </p></div>
                        <div className=" flex"><CameraAltIcon className="text-[#49BBBD] m-2"/>  <p> Access on all
                            devices</p></div>
                        <div className=" flex"><DescriptionIcon className="text-[#49BBBD] m-2"/>  <p> Certification of
                            completion </p></div>
                        <div className=" flex"><SignalCellularAltIcon className="text-[#49BBBD] m-2"/>  <p> 32
                            Moduls</p></div>
                    </div>
                    <div style={{border: '0.2px solid #696984'}}></div>
                    <div className="m-5">
                        <h3 className="text-[30px]"> Training 5 or more people </h3>
                        <p className=" text-[#696984]"> Class, launched less than a year ago by Blackboard co-founder
                            Michael Chasen, integrates exclusively...</p>
                    </div>
                    <div style={{border: '0.2px solid #696984'}}></div>
                    <div className="m-5">
                        <h3 className="text-[30px]"> Share this course </h3>
                        <div className=" flex  text-[#696984] rounded-full  justify-around">
                            <div><TwitterIcon className=" hover:text-white hover:bg-cyan-500 rounded-3xl "/></div>
                            <div><FacebookIcon className=" hover:text-white hover:bg-blue-500  rounded-3xl"/></div>
                            <div><YouTubeIcon className=" hover:text-white hover:bg-red-500 rounded-3xl "/></div>
                            <InstagramIcon className=" hover:text-white hover:bg-orange-500 rounded-3xl"/>
                            <TelegramIcon className=" hover:text-white hover:bg-cyan-500 rounded-3xl"/>
                            <WhatsAppIcon className=" hover:text-white hover:bg-green-500 rounded-3xl "/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDetail;