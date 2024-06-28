import RequestSender from './RequestSender'
import ResponseOfReq from './ResponseOfReq'

const MainWorkArea = () => {
  return (
    <div className='h-[90vh] w-[80%] pt-12'>
        <RequestSender />
        <ResponseOfReq/>  
    </div>
  )
}

export default MainWorkArea