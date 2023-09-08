import CardCustom from "@/components/Custom/CardCustom";
import {styled} from '@mui/material/styles';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';

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

function Lasttest() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={"bg-slate-200 "}>
            <div className={"flex justify-between ml-20"}>
                <p className={"text-[30px]"}>Student are viewing</p>
                <p className={"text-[#49BBBD] text-[30px] font-normal mr-24"}> See all </p>
            </div>
            <div className={"flex justify-around  p-20 "}>
                {
                    arrTest?.length && arrTest.map((value, index) => {
                        return (
                            <CardCustom key={index} users={null} title={value.title}
                                        img={value.img || './icons/Group40.png'}
                                        content={value.content}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Lasttest;