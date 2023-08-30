import {useRouter} from "next/router";

const LogIn = () => {
    const router = useRouter()
    return (
        <div style={{display: 'flex', margin: "auto"}}>
            <div className={"relative"}>
                <img className={'p-5'} src={'icons/Rectangle 77.png'} alt={""}/>
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
                <h3 style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    color: ' #5B5B5B',
                    marginBottom: '50px',
                    textAlign: 'center'
                }}> Welcome to lorem..!</h3>
                <div style={{
                    background: '#afe8ea',
                    border: '1px soild #afe8ea',
                    borderRadius: '80px',
                    textAlign: 'center',
                    borderStyle: 'none'
                }}>
                    <button style={{
                        background: '#49BBBD',
                        border: '1px soild #49BBBD',
                        borderRadius: '80px',
                        width: '120px',
                        height: '30px',
                        fontSize: '16px',
                        margin: '10px',
                        borderStyle: 'none',
                        cursor: "pointer"
                    }}
                    >
                        Login
                    </button>
                    <button onClick={() => router.push('/signup')} style={{
                        background: '#afe8ea',
                        border: '1px soild #49BBBD',
                        borderRadius: '80px',
                        width: '120px',
                        height: '30px',
                        fontSize: '16px',
                        borderStyle: 'none',
                        cursor: "pointer"
                    }}>
                        Register
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
                        marginTop: '50px'
                    }}> User name</h3>
                    <input
                        defaultValue={'Enter your User name'}
                        style={{
                            borderRadius: '80px',
                            width: '300px',
                            height: '40px',
                            color: '#ACACAC',
                            border: '1px solid #7fcecf',
                            padding: 7
                        }}
                        type="text"/>
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#5B5B5B',
                        marginTop: '50px',
                        textAlign: 'left'
                    }}> Password</h3>
                    <div style={{display: 'flex'}}>
                        <input
                            defaultValue={'Enter your Password'}
                            style={{
                                borderRadius: '80px',
                                width: '300px',
                                color: '#ACACAC',
                                height: '40px',
                                border: '1px solid #7fcecf',
                                textAlign: 'left',
                                padding: 7
                            }}
                            type="password"/>
                        <img src={'icons/Group.png'} alt={""}
                             style={{marginLeft: '-35px', width: '5%', height: '10%', marginTop: '15px'}}/>
                    </div>
                </div>
                <div className={"flex"} style={{marginLeft: '-0px', marginTop: '20px'}}>

                    <input defaultValue={""}
                           style={{width: '15px', height: '15px', border: '1px solid #000000', background: '#ffffff'}}
                           type="checkbox"/>
                    <p style={{fontSize: '12px', fontWeight: '400', color: '#ACACAC', marginTop: '5px'}}> Rememebr
                        me </p>
                    <div>
                        <p style={{
                            fontSize: '12px',
                            fontWeight: '400',
                            color: '#ACACAC',
                            marginLeft: '110px',
                            marginTop: '5px'
                        }}> Forgot Password ?</p></div>
                </div>
                <div>
                    <button style={{
                        background: '#49BBBD',
                        border: '1px soild #49BBBD',
                        borderRadius: '80px',
                        width: '140px',
                        height: '40px',
                        fontSize: '16px',
                        marginLeft: '150px',
                        borderStyle: 'none'
                    }}> Login
                    </button>
                </div>
            </div>
        </div>
    )
}
export default LogIn;