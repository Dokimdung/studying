import ScheduleIcon from '@mui/icons-material/Schedule';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {useRouter} from "next/router";

function BodyRightView() {
    const router = useRouter()
    return (
        <div className="w-[70%]">
            <div className="bg-[#49BBBD] ">
                <h3 className="text-white text-[45px]   m-0 ml-10 "> Learn about Adobe XD & Prototyping</h3>
                <div className="flex justify-between">
                    <p className="text-white  text-[24px]  ml-10"> Introduction about XD</p>
                    <IconButton>
                        <ScheduleIcon className="text-white"/><p className="text-white text-[16px]"> 1 hours</p>
                    </IconButton>
                </div>
            </div>
            <div className="m-10">
                <h3 className='text-[30px] text-[#252641] font-bold '>Share and refer </h3>
                <p className='text-[18px] text-[#696984] '> Lorem ipsum dolor sit amet, consectetur adi piscing elit,
                    sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
                    eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit,
                    sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                    elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
                    eiusmodLorem dolor sit amet, consectetur adipiscing</p>
                <div onClick={() => router.push('/calendar1')}>
                    <img src="icons/Group 382.png " className='w-[100%]'></img></div>
            </div>
        </div>
    )
}

export default BodyRightView;