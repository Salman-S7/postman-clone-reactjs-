import React from 'react'
import { FaHistory } from 'react-icons/fa'
import HistoryItem from './HistoryItem'

const RequestHitory = () => {
  return (
    <div className='w-1/4 h-[90vh] border border-gray-500 overflow-hidden'>
          <div className="flex-center gap-4 py-4  bg-slate-400">
              <FaHistory/>  History
          </div>
          <div className="flex flex-col justify-start items-start gap-2 pl-2">
              <HistoryItem />
              <HistoryItem/>
              <HistoryItem/>
              <HistoryItem/>
              
          </div>
    </div>
  )
}

export default RequestHitory