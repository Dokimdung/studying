function HeaderCheck() {
    return (
        <div className="flex justify-around">

            <div className="bg-white rounded-2xl border-none w-[40%]  m-10">
                <div className="m-10">
                    <h3> Checkout </h3>
                    <p> Cart Type</p>
                    <img src="icons/Group 307.png"/>
                    <img src="icons/AMCE.png"/>
                    <img src="icons/Visa.png"/>
                    <img src=""/>
                </div>
                <div className="m-10">
                    <p> Name on Card </p>
                    <input
                        defaultValue={'Enter name on Card'}
                        style={{
                            borderRadius: '10px',
                            border: '0.5px solid #7fcecf',
                            textAlign: 'left',
                            padding: 7,
                            width: '100%',
                            color: '#9D9B9B',
                        }} type="text"/>
                    <p> Card Number </p>
                    <input
                        defaultValue={'Enter Card Number'}
                        style={{
                            borderRadius: '10px',
                            border: '0.5px solid #7fcecf',
                            textAlign: 'left',
                            padding: 7,
                            width: '100%',
                            color: '#9D9B9B',
                        }} type="text"/>
                    <div className="flex justify-between">
                        <div className="m-2">
                            <p> Expiration Date(MM/YY) </p>
                            <input
                                defaultValue={'Enter Expiration Date'}
                                style={{
                                    borderRadius: '10px',
                                    border: '0.5px solid #7fcecf',
                                    textAlign: 'center',
                                    padding: 7,
                                    width: '100%',
                                    color: '#9D9B9B',
                                }} type="text"/></div>
                        <div className="m-2">
                            <p> CVC </p>
                            <input
                                defaultValue={'Enter CVC '}
                                style={{
                                    borderRadius: '10px',
                                    border: '0.5px solid #7fcecf',
                                    textAlign: 'center',
                                    padding: 7,
                                    width: '100%',
                                    color: '#9D9B9B',
                                }} type="text"/></div>
                    </div>
                </div>
                <div className="m-10"><input defaultValue={' '} style={{borderRadius: '100px', textAlign: 'left',}}
                                             type="checkbox"/> Save my information for faster checkout
                </div>
                <div className="m-10">
                    <button
                        className="bg-gray hover:bg-[#49BBBD]  text-[#49BBBD] hover:text-white text-[26px] w-[100%] border-none rounded-2xl p-3"> Confirm
                        Payment
                    </button>
                </div>
            </div>
            <div className="bg-[#9DCCFF80] rounded-2xl border-none w-[40%] m-10 h-[640px]">
                <p className="text-[#252641] text-[24px] m-3"> Summary </p>
                <div className="flex m-5">
                    <img src="icons/Group123.png" className="w-[20%]"/>
                    <div className="m-1">
                        <p className="">adipising elit, sed do eiusmod tempor </p>
                        <p className="text-[#5B5B5B]"> Lorem ipsum dollar... </p>
                        <p className="text-[18px]"> $24.69 </p>
                    </div>
                </div>
                <div className="  border-[0.2px] border-solid border-slate-400 m-1"></div>
                <div className="flex m-5">
                    <img src="icons/Group123.png" className="w-[20%]"/>
                    <div className="m-1">
                        <p>sed do eiusmod tempor adipising elit </p>
                        <p className="text-[#5B5B5B]">Lorem ipsum dollar... </p>
                        <p className="text-[18px]"> $24.69 </p>
                    </div>
                </div>
                <div className="  border-[0.2px] border-solid border-slate-400 m-1"></div>
                <div className="flex justify-between m-2 text-[#5B5B5B]"><p> Subtotal</p> <p> $51.38</p></div>
                <div className="  border-[0.2px] border-solid border-slate-400 m-1"></div>
                <div className="flex justify-between m-2 text-[#5B5B5B]"><p> Coupon Discount</p> <p> 0%</p></div>
                <div className="  border-[0.2px] border-solid border-slate-400 m-1"></div>
                <div className="flex justify-between m-2 text-[#5B5B5B]"><p> TAX </p> <p> 5</p></div>
                <div className="  border-[0.2px] border-solid border-slate-400 m-1"></div>
                <div className="flex justify-between m-2 text-[#000000]"><p> Total</p> <p> $56.38</p></div>

            </div>

        </div>
    )
}

export default HeaderCheck;