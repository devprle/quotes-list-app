import {useState, useEffect} from "react";
import {useQuery} from 'react-query';
import axios from "axios";
import Quote from "./Quote.jsx";


const QuoteList = () => {

    const [quotes, setQuotes] = useState([])
    const [tags, setTags] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)


    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    const {data, isLoading} = useQuery({
        queryFn: async () => {
            await wait(1000)
            const {data} = await axios.get('http://localhost:3000/quotes?tags=life,science&page=1&pageSize=5&sortBy=author&sortDirection=asc')
            return data
        }
    })
    console.log('response: ', data)

    return (<div className='flex flex-col gap-2 max-h-[100dvh]'>
        {
            isLoading ? <p className='text-white'>Loading...</p> :
                <>
                    <Quote/>
                    <Quote/>
                    <Quote/>
                    <Quote/>
                    <Quote/>
                </>
        }
    </div>)
}

export default QuoteList
