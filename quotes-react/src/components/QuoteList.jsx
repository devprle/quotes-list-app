import {useState, useEffect} from "react";
import {useQuery} from 'react-query';
import axios from "axios";
import Quote from "./Quote.jsx";


const QuoteList = () => {

    const [tags, setTags] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)


    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    const {data, isLoading} = useQuery({
        queryFn: async () => {
            // await wait(1000)
            const {data} = await axios.get('http://localhost:3000/quotes?tags=&page=1&pageSize=5&sortBy=author&sortDirection=asc')
            return data
        }
    })

    return (<div className='flex flex-col gap-2 max-h-[100dvh]'>
        <><h1 className='text-center text-white text-6xl font-bold mb-8'>Quotes</h1></>
        {
            isLoading ? <p className='text-white'>Loading...</p> :
                <>
                    {data.quotes.map(((quote, i) => <Quote key={i} quote={quote}/>))}
                </>
        }
    </div>)
}

export default QuoteList
