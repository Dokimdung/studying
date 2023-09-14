import {styled} from '@mui/material/styles';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Avatar from '@mui/material/Avatar';

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


function LasttestBlg() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={" bg-slate-200 "}>
            <div className={"flex justify-between text-2xl ml-10"}>
                <h3> Related Blog </h3>
                <p className={"text-cyan-300 mr-10"}> See all </p>
            </div>
            <div className={"flex justify-around text-gray-500  text-center  "}>
                <div className={"bg-white p-6  m-3 border-none  rounded-3xl  shadow-[ 0px 0px 20px #262D7614] w-[45%]"}>
                    <img src={'icons/Q_B_H1.png'} className={"w-[90%]"}/>
                    <div className="m-10">
                        <p className={'text-black text-left '}> Class adds $30 million to its balance sheet for
                            a <br/> Zoom-friendly edtech solution</p>
                        <div className="text-left"><IconButton aria-label="share">
                            <Avatar>KD</Avatar>
                            <span className="text-[18px]"> Kim Dung </span>
                        </IconButton></div>
                        <p className={' text-left'}> Class, launched less than a year ago by Blackboard
                            co-founder <br/> Michael Chasen, integrates exclusively...</p>
                        <div className="flex justify-between">
                            <div><p className={" underline underline-offset-1 text-left "}> Read more </p></div>
                            <div>
                                <IconButton>
                                    <RemoveRedEyeIcon className="text-[#49BBBD]"/> <span
                                    className="text-[16px]"> 234,076</span>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"bg-white p-6  m-3 border-none  rounded-3xl  shadow-[ 0px 0px 20px #262D7614] w-[45%]"}>
                    <img src={'icons/Q_B_H2.png'} className={"w-[90%]"}/>
                    <div className="m-10">
                        <p className={'text-black text-left'}> Class adds $30 million to its balance sheet for
                            a <br/> Zoom-friendly edtech solution</p>
                        <div className="text-left"><IconButton aria-label="share">
                            <Avatar>KD</Avatar>
                            <span className="text-[18px]"> Kim Dung </span>
                        </IconButton></div>
                        <p className={' text-left'}> Class, launched less than a year ago by Blackboard
                            co-founder <br/> Michael Chasen, integrates exclusively...</p>
                        <div className="flex justify-between">
                            <div><p className={" underline underline-offset-1 text-left "}> Read more </p></div>
                            <div>
                                <IconButton>
                                    <RemoveRedEyeIcon className="text-[#49BBBD]"/> <span
                                    className="text-[16px]"> 736,036</span>
                                </IconButton>
                            </div>
                        </div>
                    </div>
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

export default LasttestBlg;