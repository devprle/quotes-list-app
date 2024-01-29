import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";


const Modal = ({toggleModal, fetchQuotes, fetchTags}) => {

    const [quoteData, setQuoteData] = useState({
        content: '', author: '', tags: ''
    })

    const updateContent = (event, type) => {
        const value = event.target.value

        const newQuoteData = {...quoteData}
        newQuoteData[type] = value

        setQuoteData(newQuoteData)

    }

    const handleAddQuote = async () => {


        if (quoteData.content === '' || quoteData.author === '' || quoteData.tags === '') {
            alert('Please populate fields!')
        }
        {

            try {
                const response = await axios.post(`http://localhost:3000/quotes`, {
                    content: quoteData.content, author: quoteData.author, tags: quoteData.tags.split(',')
                });



                fetchQuotes()
                fetchTags()
                alert('New quote successfully added!')
                toggleModal()
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    return (<div className='flex justify-center items-center bg-black bg-opacity-60 absolute h-full w-full'>

        <div className='rounded p-12 bg-white relative flex flex-col gap-4 w-1/4 min-w-96'>
                <span onClick={toggleModal}
                      className='text-xl text-black absolute top-2 right-2 cursor-pointer'>✖</span>

            <div>
                <p>Content</p>
                <textarea onChange={(event) => updateContent(event, 'content')} name="content" id="content"
                          className='resize-none w-full border border-black p-2 rounded'></textarea>
            </div>
            <div>
                <p>Author</p>
                <input onChange={(event) => updateContent(event, 'author')} type="text"
                       className='border border-black p-2 h-19 w-full rounded'/>
            </div>
            <div>
                <div className='flex'>
                    <p>Tags</p>
                    <div className='ml-2 relative tooltip-container'>
                        <FontAwesomeIcon icon={faCircleInfo}/>
                        <div className='absolute p-2 bg-black rounded text-white w-40 bottom-6 hidden'>
                            Provide the simple list of
                            tags separated by commas, example: <br/>
                            live, laugh, love
                        </div>
                    </div>
                </div>
                <input onChange={(event) => updateContent(event, 'tags')}
                       className='border border-black p-2 h-19 w-full rounded' type="text"/>
            </div>
            <div onClick={handleAddQuote}
                 className='text-center cursor-pointer self-end border border-black p-2 h-19 rounded w-20'>Save
            </div>
        </div>

    </div>)
}


export default Modal
