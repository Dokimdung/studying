import {useRouter} from "next/router";

function ContainerAll() {
    const router = useRouter();
    return (
        <div className="bg-[#252641] m-20 text-center text-white  rounded-[20px]">
            <h3 className="text-[36px] font-bold">Online coaching lessons for remote learning. </h3>
            <p className="font-sembold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
                Lorem ipsum dolor <br/> sitamet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            <div onClick={() => router.push('/search')}>
                <button
                className="text-black hover:text-white  border-none  rounded-[10px] hover:rounded-[10px] bg-white hover:bg-[#49BBBD] p-4 m-10">
                Start learning now
                </button>
            </div>
        </div>
    )
}

export default ContainerAll;