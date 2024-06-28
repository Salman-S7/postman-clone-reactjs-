import React from 'react'
import RequestHitory from '../components/RequestHitory'
import MainWorkArea from '../components/MainWorkArea'

const WorkArea = () => {
  return (
    <div className='common-p flex-between w-full mt-[10vh]'>
        <RequestHitory />
        <MainWorkArea />
    </div>
  )
}

export default WorkArea