import {useEffect, useState} from "react";


const Modal = ({toggleModal}) => {

    const [quoteData, setQuoteData] = useState(
        {
            description: '',
            author: '',
            tags: ''
        }
    )

    return (
        <div className='flex justify-center items-center bg-black bg-opacity-60 absolute h-full w-full'>

            <div className='rounded p-10 bg-white relative flex flex-col gap-4'>
                <span onClick={toggleModal} className='text-xl text-black absolute top-2 right-2 cursor-pointer'>✖</span>

            </div>

        </div>
    )
}


export default Modal
