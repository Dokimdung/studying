import * as React from 'react';
import CardCustom from "@/components/Custom/CardCustom";
import {styled} from '@mui/material/styles';
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
        img: '/icons/Group 401.png',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        price: 0,
        time: new Date()
    },
    {
        id: '2',
        img: '/icons/Group 402.png',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        price: 0,
        time: new Date()
    },
    {
        id: '3',
        img: '/icons/Group 403.png',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        price: 0,
        time: new Date()
    },
    {
        id: '4',
        img: '/icons/Group 404.png',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        price: 0,
        time: new Date()
    },

]


function BodySearch() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            <div className={" "}>
                <div className="flex justify-around m-20 ">
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
    )
}

export default BodySearch;
