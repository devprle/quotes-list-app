import {useEffect, useState} from "react";


const Sort = ({sortBy, sortDirection, handleSort}) => {
    const [selectedSort, setSelectedSort] = useState(sortBy)
    const [selectedDirection, setSelectedDirection] = useState(sortDirection)

    useEffect(() => {
        setSelectedSort(sortBy)
    }, [sortBy]);
    useEffect(() => {
        setSelectedDirection(sortDirection)
    }, [sortDirection]);


    return (<div className='flex flex-col gap-2 '>
        <p className='text-white mb-2'>Sort Quotes</p>

        <select name="sortBy" id="sortBy" value={selectedSort} onChange={(event) => handleSort(event, "sortBy")}>
            <option value="createdAt">Created At</option>
            <option value="author">Author</option>
            <option value="upvotesCount">Upvotes Count</option>
        </select>
        <select name="sortDirection" value={selectedDirection} id="sortDirection"
                onChange={(event) => handleSort(event, "sortDirection")}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
        </select>
    </div>)
}


export default Sort
