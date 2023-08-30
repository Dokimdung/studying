import {useRouter} from "next/router";

const LogOut = () => {
    const router = useRouter()
    return (
        <div style={{display: 'flex', margin: "auto"}}>
            <div className={"relative"}>
                <img className={'p-5'} src={'icons/Rectangle 77 (1).png'} alt={""}/>
                <div className={"absolute bottom-0 left-0"} style={{lineHeight: '38px', margin: '50px'}}>
                    <h3 style={{fontSize: '25px', fontWeight: '800', color: '#ffffff'}}> Lorem Ipsum is simply </h3>
                    <p style={{fontSize: '20px', fontWeight: '400', color: '#ffffff'}}> Lorem Ipsum is simply </p>
                </div>
            </div>
            <div style={{
                fontWeight: '400',
                color: ' #5B5B5B',
                textAlign: 'center',
                margin: "auto"
            }}>
                <h3 style={{fontSize: '16px', fontWeight: '400', color: ' #5B5B5B', marginBottom: '50px',}}> Welcome to
                    lorem..!</h3>
                <div style={{
                    background: '#afe8ea',
                    border: '1px soild #afe8ea',
                    borderRadius: '80px',
                    textAlign: 'center',
                    borderStyle: 'none'
                }}>
                    <button onClick={() => router.push('/login')} style={{
                        background: '#afe8ea',
                        border: '1px soild #49BBBD',
                        borderRadius: '80px',
                        width: '120px',
                        height: '30px',
                        fontSize: '16px',
                        margin: '10px',
                        borderStyle: 'none',
                        cursor: "pointer"
                    }}> Login
                    </button>
                    <button style={{
                        background: '#49BBBD',
                        border: '1px soild #49BBBD',
                        borderRadius: '80px',
                        width: '120px',
                        height: '30px',
                        fontSize: '16px',
                        borderStyle: 'none',
                        cursor: "pointer"
                    }}> Register
                    </button>
                </div>
                <p style={{marginTop: '50px', textAlign: 'center'}}> Lorem Ipsum is simply dummy text of
                    the <br/> printing and typesetting industry.</p>
                <div style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    color: ' #5B5B5B',
                    textAlign: 'left',
                    marginTop: '50px'
                }}>
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: ' #5B5B5B',
                        textAlign: 'left',
                        marginTop: '50px',
                    }}>Email Address</h3>
                    <input
                        defaultValue={'Enter your Email Address'}
                        style={{
                            borderRadius: '80px',
                            width: '300px',
                            height: '40px',
                            color: '#ACACAC',
                            border: '1px solid #7fcecf',
                            textAlign: 'left',
                            padding: 7
                        }}
                        type="text"/>
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: ' #5B5B5B',
                        textAlign: 'left',
                        marginTop: '50px',
                    }}> User name</h3>
                    <input
                        defaultValue={'Enter your User name'}
                        style={{
                            borderRadius: '80px',
                            width: '300px',
                            height: '40px',
                            color: '#ACACAC',
                            border: '1px solid #7fcecf',
                            textAlign: 'left',
                            padding: 7
                        }}
                        type="text"/>
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: ' #5B5B5B',
                        marginTop: '50px',
                        textAlign: 'left'
                    }}> Password</h3>
                    <div style={{display: 'flex'}}>
                        <input
                            defaultValue={'Enter your Password'}
                            style={{
                                borderRadius: '80px',
                                width: '300px',
                                height: '40px',
                                color: '#ACACAC',
                                border: '1px solid #7fcecf',
                                textAlign: 'left',
                                padding: 7
                            }}
                            type="password"/>
                        <img src={'icons/Group.png'} alt={""}
                             style={{marginLeft: '-30px', width: '5%', height: '10%', marginTop: '15px'}}/>
                    </div>
                    <div>
                        <button style={{
                            background: '#49BBBD',
                            border: '1px soild #49BBBD',
                            borderRadius: '80px',
                            width: '140px',
                            height: '40px',
                            fontSize: '16px',
                            marginLeft: '160px',
                            borderStyle: 'none',
                            marginTop: '20px'
                        }}> Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogOut;