import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'

const QuoteScore = () => {

    return (<div className='flex flex-col gap-2 h-full'>
        <FontAwesomeIcon className='cursor-pointer text-white opacity-30' icon={faCaretUp}/>
        <div>
        <p className='text-green-500 font-bold text-lg'>100%</p>
        <p className='text-white font-bold text-xs text-center'><span>6</span>/<span>0</span></p>
        </div>
        <FontAwesomeIcon className='cursor-pointer text-white opacity-40' icon={faCaretDown}/>
    </div>)
}

export default QuoteScore
