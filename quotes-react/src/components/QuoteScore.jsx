import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const QuoteScore = ({quoteId, downvotesCount, upvotesCount, givenVote, updateQuote}) => {

    const [id, setId] = useState(quoteId)
    const [percentage, setPercentage] = useState(0)
    const [activeVote, setActiveVote] = useState(givenVote === 'upvote' ? 1 : givenVote === 'downvote' ? 2 : 0)
    const [upvotes, setUpvotes] = useState(upvotesCount)
    const [downvotes, setDownvotes] = useState(downvotesCount)

    useEffect(() => {
        setUpvotes(upvotesCount)
        setDownvotes(downvotesCount)
        setId(id)
        setActiveVote(givenVote === 'upvote' ? 1 : givenVote === 'downvote' ? 2 : 0)
        calculatePercentage(upvotesCount, downvotesCount)
    }, [downvotesCount, upvotesCount, givenVote, id]);

    const calculatePercentage = (upvotes, downvotes) => {
        const totalCount = upvotes + downvotes
        setPercentage(Math.round(upvotes / totalCount * 100))
    }


    const handleVote = async (type) => {
        let upvoteCount = upvotes
        let downvoteCount = downvotes
        if (activeVote === 0) {
            setActiveVote(type)
            switch (type) {
                case  1 :
                    try {

                        const response = await axios.post(`http://localhost:3000/quotes/${id}/upvote`);

                        const data = response.data;
                        updateQuote(data)
                    } catch (error) {
                        alert(error);
                    }
                    break;
                case 2  :
                    try {

                        const response = await axios.post(`http://localhost:3000/quotes/${id}/downvote`);
                        const data = response.data;

                        updateQuote(data)

                    } catch (error) {
                        alert(error);
                    }
            }
        } else {
            if (type === activeVote) {
                setActiveVote(type)
                switch (type) {
                    case  1 :
                        try {

                            const response = await axios.delete(`http://localhost:3000/quotes/${id}/upvote`);

                            const data = response.data;
                            updateQuote(data)
                        } catch (error) {
                            alert(error);
                        }
                        break;
                    case 2  :
                        try {

                            const response = await axios.delete(`http://localhost:3000/quotes/${id}/downvote`);

                            const data = response.data;
                            updateQuote(data)

                        } catch (error) {
                            alert(error);
                        }
                        break;
                }
            } else {
                switch (type) {
                    case 1:
                       alert('Please delete the existing downvote to proceed!')
                        break;
                    case 2 :
                        alert('Please delete the existing upvote to proceed!')
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
