import React from 'react'

const LandingInfo = (props) => {
    return (
        <div>
            <div className="flex items-center md:gap-x-8 xl:gap-x-16">
                <div className='flex flex-col w-2/3'>
                    <div className="md:text-xl xl:text-2xl font-bold">
                        {props.title}
                    </div>
                    <div className="mt-4 md:text-base xl:text-lg leading-relaxed">
                        {props.desc}
                    </div>
                </div>
                <img src={props.pic} alt="" className='object-cover w-full' />
            </div>
        </div>
    )
}

export default LandingInfo
