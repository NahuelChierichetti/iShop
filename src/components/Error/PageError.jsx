import Error404 from '../../assets/img/error-404.jpg'

const PageError = () => {
  return (
    <div className="flex justify-center flex-col">
        <img src={Error404} className='w-[40vw] mx-auto'/>
    </div>
  )
}

export default PageError