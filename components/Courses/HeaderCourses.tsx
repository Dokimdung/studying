import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as React from 'react';

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

function HeaderCourses() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className=" bg-slate-200 w-full ">
            <div className="flex justify-between ml-20 ">
                <p className="text-3xl text-[#252641]"> Welcome back, ready for your next lesson?</p>
                <div><p className="text-2xl text-[#49BBBD] mr-24"> View hisotry</p></div>
            </div>
            <div className="  flex justify-around text-center p-20">
                <div className="bg-white p-3 m-2  border-none  rounded-3xl  shadow-[ 0px 0px 10px #262D7614]">
                    <img src="../icons/Group401.png" className="w-[90%]"/>
                    <p className="text-left text-[#252641] text-[20px]"> AWS Certified Solutions Architect </p>
                    <div className={'flex items-center'}>
                        <div>
                            <IconButton aria-label="share">
                                <Avatar>KD</Avatar>
                            </IconButton>
                        </div>
                        <span>Anonymous</span>
                    </div>
                    <img src='../icons/Group 273.png'/>
                    <p className="text-[16px] text-[#252641] text-right"> Lesson 5 of 7</p>
                </div>
                <div className="bg-white p-3 m-2  border-none  rounded-3xl  shadow-[ 0px 0px 10px #262D7614]">
                    <img src="../icons/Group402.png" className="w-[90%]"/>
                    <p className="text-left text-[#252641] text-[20px]"> AWS Certified Solutions Architect </p>
                    <div className={'flex items-center'}>
                        <div>
                            <IconButton aria-label="share">
                                <Avatar>KD</Avatar>
                            </IconButton>
                        </div>
                        <span>Anonymous</span>
                    </div>
                    <img src='../icons/Group 273.png'/>
                    <p className="text-[16px] text-[#252641] text-right"> Lesson 5 of 7</p>
                </div>
                <div className="bg-white p-3  m-2 border-none  rounded-3xl  shadow-[ 0px 0px 10px #262D7614]">
                    <img src="../icons/Group403.png" className="w-[90%]"/>
                    <p className="text-left text-[#252641] text-[20px]"> AWS Certified Solutions Architect </p>
                    <div className={'flex items-center'}>
                        <div>
                            <IconButton aria-label="share">
                                <Avatar>KD</Avatar>
                            </IconButton>
                        </div>
                        <span>Anonymous</span>
                    </div>
                    <img src='../icons/Group 273.png'/>
                    <p className="text-[16px] text-[#252641] text-right"> Lesson 5 of 7</p>
                </div>
            </div>
            <div className={"  flex justify-end m-5 "}>
                <div>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <button className={" text-white bg-[#49BBBD] border-none  m-5 "}><ArrowBackIosIcon/></button>
                    </ExpandMore>
                </div>
                <div>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <button className={" text-white bg-[#49BBBD] border-none  m-5"}><ArrowForwardIosIcon/></button>
                    </ExpandMore>
                </div>

            </div>

        </div>
    )
}

export default HeaderCourses;