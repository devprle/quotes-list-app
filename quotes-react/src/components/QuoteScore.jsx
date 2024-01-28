import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'

const QuoteScore = ({downvotesCount, upvotesCount, givenVote}) => {

    const [percentage, setPercentage] = useState(0)
    const [activeVote, setActiveVote] = useState(givenVote === 'upvote' ? 1 : givenVote === 'downvote' ? 2 : 0)
    const [upvotes, setUpvotes] = useState(upvotesCount)
    const [downvotes, setDownvotes] = useState(downvotesCount)


    const calculatePercentage = (upvotes, downvotes) => {
        const totalCount = upvotes + downvotes
        setPercentage(Math.round(upvotes / totalCount * 100))
    }
    const handleVote = (type) => {
        console.log('percentage started')
        let upvoteCount = upvotes
        let downvoteCount = downvotes
        if (activeVote === 0) {
            setActiveVote(type)
            switch (type) {
                case  1 :
                    upvoteCount++
                    break;
                case 2  :
                    downvoteCount++
            }
        } else {
            if (type !== activeVote) {
                setActiveVote(type)
                switch (type) {
                    case  1 :

                        if (downvotes !== 0) {
                            downvoteCount--
                        }
                        upvoteCount++
                        break;
                    case 2  :
                        if (upvotes !== 0) {
                            upvoteCount--
                        }
                        downvoteCount++
                        break;
                }
            } else {
                switch (type) {
                    case 1:
                        if (upvotes !== 0) {
                            upvoteCount--
                        }
                        setActiveVote(0)
                        break;
                    case 2 :
                        if (downvotes !== 0) {
                            downvoteCount--
                        }
                        setActiveVote(0)
                        break;
                }
            }
        }

        calculatePercentage(upvoteCount, downvoteCount)
        setUpvotes(upvoteCount)
        setDownvotes(downvoteCount)
    }

    const percentageColor = () => {
        switch (true) {
            case percentage > 83:
                return 'text-green-500';
            case percentage > 55:
                return 'text-green-300';
            case percentage > 42:
                return 'text-yellow-500';
            case percentage > 20:
                return 'text-yellow-300';
            default :
                return 'text-orange-500'
        }

    }
    useEffect(() => {
        calculatePercentage(upvotesCount, downvotesCount)
    }, []);

    return (<div className='flex w-[60px] flex-col gap-2 '>
        <FontAwesomeIcon onClick={() => handleVote(1)}
                         className={`cursor-pointer text-white ${activeVote === 1 ? 'opacity-100' : 'opacity-30'}`}
                         icon={faCaretUp}/>
        <div>
            <p className={`${percentageColor()} font-bold text-lg text-center`}>{`${percentage}%`}</p>
            <p className='text-white font-bold text-xs text-center'>
                <span>{upvotes}</span>/<span>{downvotes}</span></p>
        </div>
        <FontAwesomeIcon onClick={() => handleVote(2)}
                         className={`cursor-pointer text-white ${activeVote === 2 ? 'opacity-100' : 'opacity-30'}`}
                         icon={faCaretDown}/>
    </div>)
}

export default QuoteScore
