import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({selectedPage, totalPages, handlePageSelect}) => {


    const [pagesArray, setPagesArray] = useState(Array.from({ length: totalPages }))

    useEffect(() => {
        setPagesArray(Array.from({ length: totalPages }))
    }, [totalPages]);

    return <div className='flex gap-2 items-center self-end'>
        <FontAwesomeIcon
            onClick={()=>handlePageSelect('-')}
            className='cursor-pointer text-white'
            icon={faCaretLeft}/>
        {pagesArray.map((page, index) => {
            return <div key={index} onClick={() => handlePageSelect(index + 1)}
                        className={`cursor-pointer flex justify-center items-center text-center rounded w-6 h-6 ${selectedPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}>{index + 1}</div>
        })}
        <FontAwesomeIcon
            onClick={()=>handlePageSelect('+')}
            className='cursor-pointer text-white'
            icon={faCaretRight}/>
    </div>

}

export default Pagination