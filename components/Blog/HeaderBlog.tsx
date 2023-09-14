// import {useRouter} from "next/router";


import {useRouter} from "next/router";

export default function HeaderBlog() {
    const router = useRouter()
    return (
        <div className={""}>
            <div className={"flex bg-slate-200 justify-around m-auto "}>
                <div className={"m-10"}>
                    <div className={"flex text-base"}>
                        <p> By Themadbrains in </p>
                        <p className={"text-blue-400"}> inspiration </p></div>
                <h3 className={"text-blue-900 text-3xl"}> Why Swift UI Should Be on the <br/> Radar of Every Mobile
                    Developer </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempos Lorem ipsum
                    dolor sitamet, <br/> consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <button
                        className={"bg-white hover:bg-[#49BBBD] rounded-3xl border-none text-[#49BBBD] hover:text-white w-40 h-10 "}> Start
                        learning
                        now
                    </button>
                </div>
                <div><img src={'icons/Group 40.png'} className={"w-[95%] m-5"}/></div>
            </div>
        </div>

    )
}