import DateRangeIcon from '@mui/icons-material/DateRange';
import IconButton from '@mui/material/IconButton';

function BodyRightMeeting() {
    return (
        <div className="w-[30%] m-10">
            <div className="w-[95%] bg-white rounded-xl border-none">
                <div className='m-10'><p className='text-[30px] text-[#25264 1] font-bold'> Course Contents </p>
                    <div className='flex justify-between'>
                        <div><p className='text-[#49BBBD] text-[14px]'> 2/5 COMPLETED </p></div>
                        <div><IconButton> <DateRangeIcon className="text-[#49BBBD]"/> </IconButton></div>
                    </div>
                    <img src="icons/Group 317.png"/>
                    <div className='mt-10'>
                        <img src="icons/Group 320.png"/>
                        <img src="icons/Group 322.png"/>
                        <img src="icons/Group 325.png"/>
                        <img src="icons/Group 326.png"/>
                        <img src="icons/Group 429.png"/>
                    </div>
                </div>
            </div>
            <img src="icons/Group 419.png"/>

        </div>
    )
}

export default BodyRightMeeting;