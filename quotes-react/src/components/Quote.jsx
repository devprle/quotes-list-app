import QuoteScore from "./QuoteScore.jsx";
import QuoteText from "./QuoteText.jsx";

const Quote = ({quote}) => {
     const {author, content, downvotesCount, givenVote, id, tags, upvotesCount, userId} = quote
    return (<div className='flex gap-6 items-center'>
        <QuoteScore downvotesCount={downvotesCount} upvotesCount={upvotesCount} givenVote={givenVote}/>
        <QuoteText author={author} content={content}/>
    </div>)
}

export default Quote
