import {React, useEffect, useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Accordion({title, answer}) {
    const [moreContent, setMoreContent] = useState(false);

  return (
    <div className='px-3'>
        <button onClick={() => setMoreContent(!moreContent)} className='flex items-center w-full justify-between'>
            <span>{title}</span>
            {moreContent ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-blue-700 text-sm ${

        moreContent ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' }`}>
            <div className=' overflow-hidden border-b-2 border-blue-500 rounded-2xl mt-1 p-2'>
                {answer}
            </div>
        </div>
    </div>
  )
}

export default Accordion