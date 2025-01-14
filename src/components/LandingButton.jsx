import React from 'react'


const LandingButton = (props) => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="p-6 rounded-lg bg-button">
                    <div className="flex">
                        <img src={props.pic} alt=""></img>
                    </div>
                </div>  
            </div>
            <div className="hidden md:block">
                <div className="cursor-pointer p-4 border border-gray-300 rounded-lg hover:text-blue-600">    
                    <div className="flex gap-x-4 items-center">
                        <img src={props.pic} alt="" className='h-12'></img>
                        <div className="font-bold text-lg">{props.title}</div>  
                    </div>
                    <div className='text-sm pt-4 leading-relaxed text-gray-600'>
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingButton
