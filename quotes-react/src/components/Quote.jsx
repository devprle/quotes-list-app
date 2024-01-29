import {useEffect, useState} from "react";
import QuoteScore from "./QuoteScore.jsx";
import QuoteText from "./QuoteText.jsx";

const Quote = ({quote}) => {
    const [singleQuote, setSingleQuote] = useState(quote)

    useEffect(() => {
        setSingleQuote(quote)
    }, [quote]);

    const updateQuote = (updatedQuote) => {
        setSingleQuote(updatedQuote)
    }
    return (<div className='flex gap-6 items-center'>
        <QuoteScore quoteId={singleQuote.id} downvotesCount={singleQuote.downvotesCount}
                    upvotesCount={singleQuote.upvotesCount} givenVote={singleQuote.givenVote} updateQuote={updateQuote}/>
        <QuoteText author={singleQuote.author} content={singleQuote.content}/>
    </div>)
}

export default Quote
