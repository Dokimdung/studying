import ScheduleIcon from '@mui/icons-material/Schedule';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {useRouter} from "next/router";

function BodyRightCalender1() {
    const router = useRouter()
    return (
        <div className="w-[70%]">
            <div className="bg-[#49BBBD] ">
                <h3 className="text-white text-[45px]  m-0 ml-10 "> Learn about Adobe XD & Prototyping</h3>
                <div className="flex justify-between">
                    <p className="text-white ml-10 text-[24px]"> Introduction about XD</p>
                    <IconButton>
                        <ScheduleIcon className="text-white"/><p className="text-white text-[16px]"> 1 hours</p>
                    </IconButton>
                </div>
            </div>
            <div className="m-10">
                <h3 className='text-[30px] text-[#252641] font-bold '>Create new event </h3>
                <p className='text-[18px] text-[#696984] '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem </p>
            </div>
            <div className='m-10 bg-white rounded-2xl border-none '>
                <div className='m-5'>
                    <h3 className=' text-[18px] text-[#5B5B5B] font-bold '> Event Name </h3>
                    <input type="text"
                           defaultValue={'Adobe XD Auto - Animate : Your Guide to Creating'}
                           className='text-[#9D9B9B] text-[18px] border-[#9D9B9B] border-[0.1px] rounded-[5px] w-[100%] h-[40px]'/>
                    <div className='flex justify-between'>
                        <div className='w-[45%]'>
                            <h3 className=' text-[18px] text-[#5B5B5B] font-bold '> Start date / Time</h3>
                            <input type="text"
                                   defaultValue={'September 24, 2017 07:59 am'}
                                   className='text-[#9D9B9B] text-[18px] border-[#9D9B9B] border-[0.1px] rounded-[5px] w-[100%] h-[40px] '/>
                        </div>
                        <div className='w-[45%]'>
                            <h3 className=' text-[18px] text-[#5B5B5B] font-bold '> End date / Time</h3>
                            <input type="text"
                                   defaultValue={'September 24, 2017 07:59 am'}
                                   className='text-[#9D9B9B] text-[18px] border-[#9D9B9B] border-[0.1px] rounded-[5px] w-[100%] h-[40px]'/>
                        </div>
                    </div>
                    <h3 className=' text-[18px] text-[#5B5B5B] font-bold '> Location</h3>
                    <input type="text"
                           defaultValue={'2118 Thornridge Cir, Syracuse, Connecticut 35624g'}
                           className='text-[#9D9B9B] text-[18px] border-[#9D9B9B] border-[0.1px] rounded-[5px] w-[100%] h-[40px]'/>
                    <div className='flex justify-between'>
                        <div className='w-[45%]'>
                            <h3 className=' text-[18px] text-[#5B5B5B] font-bold '> Notification</h3>
                            <select
                                className='text-[#9D9B9B] text-[18px] border-[#9D9B9B] border-[0.1px] rounded-[5px] w-[100%] h-[40px]'>
                                <option value={"30 mins"}> 30 mins</option>
                                <option value={"30 mins"}> 45 mins</option>
                                <option value={"30 mins"}> 60 mins</option>
                                <option value={"30 mins"}> 90 mins</option>
                            </select></div>
                        <div className='w-[45%]'>
                            <h3 className=' text-[18px] text-[#5B5B5B] font-bold '> Email</h3>
                            <input type="text"
                                   defaultValue={'jessica.hansome@example.com'}
                                   className='text-[#9D9B9B] text-[18px] border-[#9D9B9B] border-[0.1px] rounded-[5px] w-[100%] h-[40px]'/>
                        </div>
                    </div>
                    <h3 className=' text-[18px] text-[#5B5B5B] font-bold '> Event Description </h3>
                    <input type="text"
                           defaultValue={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur '}
                           className='text-[#9D9B9B] text-[18px] border-[#9D9B9B] border-[0.1px] rounded-[5px] w-[100%] h-[200px] '/>
                    <div onClick={() => router.push('/calendar2')} className=''>
                        <button
                            className='bg-white hover:bg-[#49BBBD] text-[#49BBBD] hover:text-white text-center h-[40px] w-[200px] rounded-xl  hover:border-none ml-[950px] m-10'> Save
                            Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BodyRightCalender1;