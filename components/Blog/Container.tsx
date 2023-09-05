function Container() {
    return (
        <div className={" bg-slate-200 "}>
            <div className={"flex justify-between text-2xl ml-10"}>
            <h3> Related Blog </h3>
                <p className={"text-cyan-300 mr-10"}> See all </p>
            </div>
            <div className={"flex justify-around text-gray-500  text-center "}>
                <div className={"bg-white p-12  m-5 border-none  rounded-3xl  shadow-[ 0px 0px 20px #262D7614]"}>
                    <img src={'icons/Q_B_H1.png'} className={"w-[90%]"}/>
                    <p className={'text-black text-left'}> Class adds $30 million to its balance sheet for a
                        Zoom-friendly edtech solution</p>
                    <p className={' text-left'}> Class, launched less than a year ago by Blackboard
                        co-founder <br/> Michael Chasen, integrates
                    exclusively...</p>
                    <p className={" underline underline-offset-1 text-left "}> Read more </p>
            </div>
                <div className={"bg-white p-12  m-5 border-none  rounded-3xl  shadow-[ 0px 0px 20px #262D7614]"}>
                    <img src={'icons/Q_B_H2.png'} className={"w-[90%]"}/>
                    <p className={'text-black text-left'}> Class adds $30 million to its balance sheet for a
                        Zoom-friendly edtech solution</p>
                    <p className={' text-left'}> Class, launched less than a year ago by Blackboard
                        co-founder <br/> Michael Chasen, integrates
                        exclusively...</p>
                    <p className={'underline underline-offset-1  text-left '}> Read more </p>
                </div>
            </div>
        </div>
    )
}

export default Container;