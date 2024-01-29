import {useEffect, useState} from "react";


const Tags = ({tags, selectedTags, handleTagChange}) => {
    const [allTags, setAllTags] = useState(tags)
    const [allSelectedTags, setAllSelectedTags] = useState(selectedTags)
    useEffect(() => {
        setAllSelectedTags(selectedTags)
    }, [selectedTags]);
    useEffect(() => {
        setAllTags(tags)
    }, [tags]);

    return (<div className='flex flex-col gap-2 '>
        <p className='text-white mb-2'>Filter Quotes by Tags</p>
        <div className='flex flex-col gap-2 items-start max-h-[100px] overflow-y-scroll bg-white p-1'>
            {allTags.map(tag => {
                return (<div key={tag} className='flex gap-2 items-center'>
                    <input onClick={() => handleTagChange(tag)} defaultChecked={allSelectedTags.includes(tag)}
                           className='cursor-pointer' id={tag} name={tag}
                           type='checkbox'/>
                    <label className='cursor-pointer' htmlFor={tag}>{tag}</label>

                </div>)
            })}
        </div>
    </div>)
}


export default Tags
