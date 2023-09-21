import {IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouter} from "next/router";
import SettingsIcon from '@mui/icons-material/Settings';

function BodyLeftMeeting() {
    const router = useRouter();
    return (
        <div className="w-[70%]">
            <div>
                <div className="flex m-20">
                    <div onClick={() => router.push('/blog')} className="bg-[#49BBBD] border-none w-[3%] h-[40px] m-5 ">
                        <IconButton>
                            <ArrowBackIcon className="text-white"/>
                        </IconButton>
                    </div>
                    <div className="bg-white rounded-xl border-none  w-[100%] ">
                        <div className="flex justify-between m-5">
                            <div><p> UX/UI Design Confrence Meeting </p>
                                <p> 9 Lesson 6h30min </p></div>
                            <IconButton>
                                <SettingsIcon className="text-[#25264180]"/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
            <img src="icons/Group 416.png" className="ml-20"/>
        </div>
    )
}

export default BodyLeftMeeting;