import styles from '../../../styles/BodyStyle.module.css'

export default function Footer() {
    return (
        <div style={{background: '#252641', marginTop: '70px'}}>
            <div style={{display: 'flex'}} className={'flex justify-center'}>
                <div className={'flex items-center'}>
                    <img src={'icons/logo.png'} alt={""} style={{marginTop: '50px'}}/>
                    <div style={{border: '1px solid  gray', width: 2, height: '80px', marginLeft: 20, marginTop: 50}}/>
                    <h3 style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#fff',
                        marginTop: '50px',
                        marginLeft: 30
                    }}> Virtual Class for Zoom </h3>
                </div>
            </div>
            <h3 style={{
                fontSize: '26px',
                fontWeight: '600',
                color: '#B2B3CF',
                marginTop: '50px',
                textAlign: 'center'
            }}> Subscribe to get our
                Newsletter</h3>
            <div className={styles.footer__button} style={{textAlign: "center"}}>
                <input
                    defaultValue={'Your Email'}
                    style={{
                        borderRadius: '80px',
                        width: '300px',
                        height: '40px',
                        border: '1px solid #7fcecf',
                        textAlign: 'left',
                        padding: 7
                    }}
                    type="text"/>

                <button style={{
                    borderRadius: '80px',
                    width: '100px',
                    height: '40px',
                    border: '1px solid #B2B3CF',
                    color: '#ffffff',
                    margin: '20px',
                    background: '#B2B3CF'
                }}> Subscribe
                </button>
            </div>
            <div className={" text-[#B2B3CF] text-center text-[20px]"}>
                <p> Careers | Privacy Policy | Teems & Conditions</p>
            </div>
            <div>
                <div
                    style={{fontSize: '22px', fontWeight: '400', color: '#B2B3CF', textAlign: 'center', padding: 10}}> ©
                    2021 Class Technologies
                    Inc.
                </div>
            </div>
        </div>
    )
}