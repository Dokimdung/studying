import ScheduleIcon from '@mui/icons-material/Schedule';
import Avatar from '@mui/material/Avatar';
import CardCustom from "@/components/Custom/CardCustom";
import {styled} from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as React from 'react';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const arrTest = [
    {
        id: '1',
        img: '/icons/Group40.png',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        price: 0,
        time: new Date()
    },
    {
        id: '2',
        img: '/icons/Group 40.png',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        price: 0,
        time: new Date()
    },
    {
        id: '3',
        img: '/icons/Group40.png',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        price: 0,
        time: new Date()
    },
    {
        id: '4',
        img: '/icons/Group 40.png',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        price: 0,
        time: new Date()
    },

]

function BodyRightView() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="w-[70%]">
            <div className="bg-[#49BBBD] ">
                <h3 className="text-white text-[45px]  m-0 ml-10 "> Learn about Adobe XD & Prototyping</h3>
                <div className="flex justify-between">
                    <p className="text-white  text-[24px]  ml-10"> Introduction about XD</p>
                    <IconButton>
                        <ScheduleIcon className="text-white"/><p className="text-white text-[16px]"> 1 hours</p>
                    </IconButton>
                </div>
            </div>
            <div className="m-10">
                <div>
                    <div>
                        <iframe width="100%" height="450"
                                src="https://www.youtube.com/embed/13bObw7pwX4?si=Wb7BVAdAUnhdl6CZ"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <h3 className="text-[30px] text-[#252641]">O6 Super Coins on the way </h3>
                    <p className="text-[18px] text-[#696984]"> Lorem ipsum dolor sit amet, consectetur adi piscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
                        eiusmod</p>
                    <h3 className="text-[30px] text-[#252641]"> Who this course is for?</h3>
                    <p className="text-[18px] text-[#696984]">Lorem ipsum dolor sit amet, consectetur adi piscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
                        eiusmodL </p>
                    <h3 className="text-[30px] text-[#252641]">Archievable </h3>
                    <p className="text-[18px] text-[#696984]"> Lorem ipsum dolor sit amet, consectetur adi piscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
                        eiusmodLWho this course is for?
                        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do
                        eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit,
                        sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                        elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL</p>
                    <div className="bg-[#F48C064D] rounded-xl p-3">
                        <IconButton aria-label="share">
                            <Avatar>KD</Avatar>
                            <span> Kim Dung </span>
                            <span className='block'> <img src="icons/Group 29.png" className="block"/> </span>
                        </IconButton>
                        <p className="text-[18px] text-[#696984]"> Lorem ipsum dolor sit amet, consectetur adi piscing
                            elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem</p>
                    </div>
                    <div className='flex justify-between'>
                        <div><h3> Student also bought </h3></div>
                        <div className={"  flex justify-end  "}>
                            <div>

                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more">
                                    <button className={" text-white bg-[#49BBBD] border-none  m-5 "}><ArrowBackIosIcon/>
                                    </button>
                                </ExpandMore>
                            </div>
                            <div>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more">
                                    <button className={" text-white bg-[#49BBBD] border-none  m-5"}>
                                        <ArrowForwardIosIcon/></button>
                                </ExpandMore>
                            </div>
                        </div>
                    </div>
                    <div className={"flex  justify-around ml-10 "}>
                        {
                            arrTest?.length && arrTest.map((value, index) => {
                                return (
                                    <CardCustom key={index} users={null} title={value.title}
                                                img={value.img || './icons/Group40.png'} content={value.content}/>)
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BodyRightView;