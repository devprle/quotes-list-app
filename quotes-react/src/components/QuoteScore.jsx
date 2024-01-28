import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'

const QuoteScore = ({downvotesCount, upvotesCount, givenVote}) => {

    const [percentage, setPercentage] = useState(0)
    const [activeVote, setActiveVote] = useState(givenVote === 'upvote' ? 1 : givenVote === 'downvote' ? 2 : 0)
    const [upvotes, setUpvotes] = useState(upvotesCount)
    const [downvotes, setDownvotes] = useState(downvotesCount)


    const calculatePercentage = () => {
        const totalCount = upvotes + downvotes
        setPercentage(Math.round(upvotes / totalCount * 100))
    }
    const handleVote = (type) => {
        console.log('percentage started')
        if (activeVote === 0) {
            setActiveVote(type)
            switch (type) {
                case  1 :
                    setUpvotes(upvotes + 1)
                    break;
                case 2  :
                    setDownvotes(downvotes + 1)
            }
        } else {
            if (type !== activeVote) {
                setActiveVote(type)
                switch (type) {
                    case  1 :
                        setUpvotes(upvotes + 1)
                        if (upvotes !== 0) {
                            setDownvotes(downvotes - 1)
                        }
                        break;
                    case 2  :
                        if (upvotes !== 0) {
                            setUpvotes(upvotes - 1)
                        }
                        setDownvotes(downvotes + 1)
                }
            }
        }
        console.log('voting done')
        calculatePercentage()
    }
    useEffect(() => {
        calculatePercentage()
    }, []);

    return (<div className='flex flex-1 flex-col gap-2 h-full'>
        <FontAwesomeIcon onClick={() => handleVote(1)}
                         className={`cursor-pointer text-white ${activeVote === 1 ? 'opacity-100' : 'opacity-30'}`}
                         icon={faCaretUp}/>
        <div>
            <p className='text-green-500 font-bold text-lg text-center'>{`${percentage}%`}</p>
            <p className='text-white font-bold text-xs text-center'>
                <span>{upvotes}</span>/<span>{downvotes}</span></p>
        </div>
        <FontAwesomeIcon onClick={() => handleVote(2)}
                         className={`cursor-pointer text-white ${activeVote === 2 ? 'opacity-100' : 'opacity-30'}`}
                         icon={faCaretDown}/>
    </div>)
}

export default QuoteScore
