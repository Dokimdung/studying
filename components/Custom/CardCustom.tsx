import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GridViewIcon from '@mui/icons-material/GridView';
import {useRouter} from "next/router";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

type props = {
    content: string,
    img: string,
    // price: number,
    title: string,
    users: any
}

export default function CardCustom({content, img, title, users = {}}: props) {
    const router = useRouter()

    return (
        <Card sx={{width: '20%', borderRadius: '20px'}} onClick={() => router.push('/coursesdetail')}>
            <CardMedia
                component="img"
                image={img || "icons/Group40.png"}
                alt=""
                className={"p-5 h-[200px] rounded-3xl"}
            />
            <CardActions disableSpacing className={'w-full '}>
                <div className={"flex justify-between flex-auto"}>
                    <div>
                        <IconButton aria-label="accesstime">
                            <GridViewIcon/>
                        </IconButton>
                        <span className={"text-[#696984]"}>Design</span>
                    </div>
                    <div>
                        <IconButton aria-label="accesstime">
                            <AccessTimeIcon/>
                        </IconButton>
                        <span className={"text-[#696984]"}> 3 Month</span>
                    </div>
                </div>

            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={"text-[#252641] text-left text-2xl"}>
                    {title}
                </Typography>
                <Typography className={"text-left text-[#696984] "} variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <div className={"flex justify-between flex-auto items-center"}>
                    {
                        !users ?
                            <div className={'flex items-center'}>
                                <div>
                                    <IconButton aria-label="share">
                                        <Avatar>KD</Avatar>
                                    </IconButton>
                                </div>
                                <span>{users?.name || 'Anonymous'}</span>
                            </div>
                            : <div className={'flex items-center'}/>
                    }
                    <div>
                        <span className={"line-through text-[#00000080] text-[18px]"}>  $100 </span> <span
                        className={"text-[#49BBBD] text-[24px] "}> $80 </span>
                    </div>
                </div>
            </CardActions>
        </Card>
    );
}
