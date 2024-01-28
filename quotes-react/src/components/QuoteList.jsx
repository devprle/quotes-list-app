import {useState, useEffect} from "react";
import {useQuery} from 'react-query';
import axios from "axios";
import Quote from "./Quote.jsx";
import Pagination from "./Pagination.jsx";

const QuoteList = () => {

    const [quotes, setQuotes] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [tags, setTags] = useState('')
    const [selectedPage, setSelectedPage] = useState(2)
    const [pageSize, setPageSize] = useState(5)
    const [sortBy, setSortBy] = useState('author')
    const [sortDirection, setSortDirection] = useState('asc')

    useEffect(() => {
        fetchData();
    }, []);

    const handlePageSelect = async (page) => {
        console.log('pageChange');
        let newPage;

        if (typeof page === 'string') {
            newPage = page === '-' ? Math.max(selectedPage - 1, 1) : Math.min(selectedPage + 1, totalPages);
        } else {
            newPage = page;
        }

        setSelectedPage(newPage);

        try {
            const response = await axios.get(`http://localhost:3000/quotes`, {
                params: {
                    tags,
                    page: newPage,
                    pageSize,
                    sortBy,
                    sortDirection
                }
            });

            const data = response.data;
            setQuotes(data.quotes);
            setTotalPages(Math.ceil(data.quotesCount / pageSize));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/quotes`, {
                params: {
                    tags,
                    page: selectedPage,
                    pageSize,
                    sortBy,
                    sortDirection
                }
            });

            const data = response.data;
            console.log('Data: ', data)
            setQuotes(data.quotes);
            setTotalPages(Math.ceil(data.quotesCount / pageSize));
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <div className='flex flex-col gap-2 max-h-[100dvh]'>
            <h1 className='text-center text-white text-6xl font-bold mb-8'>Quotes</h1>

            {quotes.map(((quote, i) => <Quote key={i} quote={quote} />))}

            <Pagination selectedPage={selectedPage} totalPages={totalPages} handlePageSelect={handlePageSelect} />
        </div>
    )
}

export default QuoteList
