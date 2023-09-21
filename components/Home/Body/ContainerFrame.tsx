import styles from '../../../styles/BodyStyle.module.css'

const ContainerFrame = () => {
    return (
        <div className={styles.container_frame}>
            <h3 style={{fontSize: '35px', fontWeight: '700', textAlign: 'center', color: '#2F327D'}}> Our Success</h3>
            <div className={styles.container_frame_text}>
                <p style={{fontSize: '24px', fontWeight: '400', textAlign: 'center', color: '#696984'}}
                   className={styles.container_frame_text}>
                    Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec<br/>
                    nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
            </div>
            <div className={styles.container_frame_img}>
                <img src={'/icons/Frame 55.png'} alt="" className={styles.container_frame_img__img}/>
            </div>
        </div>
    )
}

export default ContainerFrame;