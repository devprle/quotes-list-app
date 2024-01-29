const QuoteText = ({author, content}) => {

    return (<div className='p-4 bg-white rounded w-[430px]'>
        <p className='text-sm mb-8'>{content}</p>
        <p className='author text-xs uppercase text-gray-500 text-right'>{author}</p>
    </div>)
}

export default QuoteText
