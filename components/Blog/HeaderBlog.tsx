export default function HeaderBlog() {
    return (
        <div className={""}>
            <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between', margin: "auto"}}>
                <div>
                    <img src={'/icons/logo2.png'} alt=""/>
                </div>
                <div className={'mr-5'} style={{fontSize: '22px'}}>
                    <a href=""> Home</a>
                    <a href=""> Courses</a>
                    <a href=""> Careers</a>
                    <a href=""> Blog</a>
                    <a href=""> About Us</a>
                </div>
            </div>
            <div className={"flex bg-slate-200 justify-around m-auto "}>
                <div className={"m-10"}>
                    <div className={"flex text-base"}>
                        <p> By Themadbrains in </p>
                        <p className={"text-blue-400"}> inspiration </p></div>
                <h3 className={"text-blue-900 text-3xl"}> Why Swift UI Should Be on the <br/> Radar of Every Mobile
                    Developer </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempos Lorem ipsum
                    dolor sitamet, <br/> consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <button className={" rounded-3xl border-none text-white bg-sky-400 w-40 h-10 "}> Start learning
                        now
                    </button>
                </div>
                <div><img src={'icons/Group 40.png'} className={"m-5"}/></div>
            </div>
        </div>

    )
}