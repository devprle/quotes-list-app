import {useState, useEffect} from "react";
import axios from "axios";
import Quote from "./Quote.jsx";
import Pagination from "./Pagination.jsx";
import Tags from "./Tags.jsx"
import Sort from "./Sort.jsx"

const QuoteList = () => {

    const [quotes, setQuotes] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [selectedPage, setSelectedPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortBy, setSortBy] = useState('author')
    const [sortDirection, setSortDirection] = useState('desc')

    useEffect(() => {
        fetchQuotes();
        fetchTags()
    }, []);


    const handlePageSelect = async (page) => {
        let newPage;

        if (typeof page === 'string') {
            newPage = page === '-' ? Math.max(selectedPage - 1, 1) : Math.min(selectedPage + 1, totalPages);
        } else {
            newPage = page;
        }

        setSelectedPage(newPage);
        const tagsArray = selectedTags.join(',')
        try {
            const response = await axios.get(`http://localhost:3000/quotes`, {
                params: {
                    tagsArray, page: newPage, pageSize, sortBy, sortDirection
                }
            });

            const data = response.data;
            setQuotes(data.quotes);
            setTotalPages(Math.ceil(data.quotesCount / pageSize));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleTagChange = async (tag) => {
        let newTags = [...selectedTags]
        if (newTags.includes(tag)) {
            const index = newTags.indexOf(tag);
            if (index !== -1) {
                newTags.splice(index, 1);
            }
        } else {
            newTags.push(tag)
        }
        const newTagsList = newTags.join(',')
        setSelectedTags(newTags)
        setSelectedPage(1)
        try {
            const response = await axios.get(`http://localhost:3000/quotes`, {
                params: {
                    tags: newTagsList, page: selectedPage, pageSize, sortBy, sortDirection
                }
            });

            const data = response.data;
            setQuotes(data.quotes);
            setTotalPages(Math.ceil(data.quotesCount / pageSize));
        } catch (error) {
            console.error('Error:', error);
        }

    }

    const handleSort = async (event, type) => {
        const sortValue = event.target.value
        if (type === 'sortBy') {
            setSortBy(sortValue)
        } else {
            setSortDirection(sortValue)
        }
        try {
            const response = await axios.get(`http://localhost:3000/quotes`, {
                params: {
                    tags: selectedTags.join(','),
                    page: selectedPage,
                    pageSize,
                    sortBy: type === 'sortBy' ? sortValue : sortBy,
                    sortDirection: type !== 'sortBy' ? sortValue : sortDirection
                }
            });

            const data = response.data;
            setQuotes(data.quotes);
            setTotalPages(Math.ceil(data.quotesCount / pageSize));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const fetchQuotes = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/quotes`, {
                params: {
                    tags: '', page: selectedPage, pageSize, sortBy, sortDirection
                }
            });

            const data = response.data;
            setQuotes(data.quotes);
            setTotalPages(Math.ceil(data.quotesCount / pageSize));
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const fetchTags = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/tags`);

            const data = response.data;
            setTags(data);
            setSelectedTags(data)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (<div className='flex flex-col gap-2 max-h-[100dvh]'>
        <h1 className='text-center text-white text-6xl font-bold mb-8'>Quotes</h1>

        <div className='flex gap-4 justify-end items-end'>
            <button className='px-1 py-2 bg-white rounded hover:bg-green-300 transition-[300]'>Add New Quote</button>
            <Tags tags={tags} selectedTags={selectedTags} handleTagChange={handleTagChange}/>
            <Sort sortBy={sortBy} sortDirection={sortDirection} handleSort={handleSort}/>
        </div>

        {quotes.map(((quote, i) => <Quote key={i} quote={quote}/>))}

        <Pagination selectedPage={selectedPage} totalPages={totalPages} handlePageSelect={handlePageSelect}/>
    </div>)
}

export default QuoteList
