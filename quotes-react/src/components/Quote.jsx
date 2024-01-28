import {useEffect, useState} from "react";
import QuoteScore from "./QuoteScore.jsx";
import QuoteText from "./QuoteText.jsx";

const Quote = ({quote}) => {
    const [singleQuote, setSingleQuote] = useState(quote)

    useEffect(() => {
        setSingleQuote(quote)
    }, [quote]);

    const {author, content, downvotesCount, givenVote, id, tags, upvotesCount, userId} = singleQuote
    return (<div className='flex gap-6 items-center'>
        <QuoteScore downvotesCount={downvotesCount} upvotesCount={upvotesCount} givenVote={givenVote}/>
        <QuoteText author={author} content={content}/>
    </div>)
}

export default Quote
