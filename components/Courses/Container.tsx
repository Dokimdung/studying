import CardCustom from "@/components/Custom/CardCustom";
import {styled} from '@mui/material/styles';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
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

function Container() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={"bg-slate-200"}>
            <div className={"flex justify-between m-20 "}>
                <p className={"text-[30px]"}>Recommended for you</p>
                <p className={"text-[#49BBBD] text-[30px] font-normal"}> See all </p>
            </div>
            <div className={"flex  justify-around"}>
                {
                    arrTest?.length && arrTest.map((value, index) => {
                        return (
                            <CardCustom key={index} users={null} title={value.title}
                                        img={value.img || './icons/Group40.png'} content={value.content}/>)
                    })
                }
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

export default Container;