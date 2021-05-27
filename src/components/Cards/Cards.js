import loadingImage from '../../assets/images/loading.svg'
import CountUp from 'react-countup'

const Card = ({ data }) => {
  if (!data) {
    return (
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-white flex flex-row justify-center items-center'>
        <img src={loadingImage} alt='' />
      </div>
    )
  }
  return (
    <div className='mx-5 grid grid-flow-row md:grid-flow-col  md:grid-cols-3 gap-4'>
      <div className='w-52 py-5 px-3 rounded-xl shadow '>
        <h1 className='font-bold text-2xl text-red-600'>Infected</h1>
        <h1 className='font-bold text-2xl text-gray-900 '>
          <CountUp
            start={0}
            end={data.confirmed.value}
            duration={3}
            separator=','
          />
        </h1>
        <h2 className='font-medium text-xl text-gray-800'>
          {new Date(data.lastUpdate).toDateString()}
        </h2>
        <p className='font-medium text-sm text-gray-800'>
          Number of active cases of COVID-19
        </p>
      </div>
      <div className='w-52 py-5 px-3 rounded-xl shadow '>
        <h1 className='font-bold text-2xl text-green-600'>Recovered</h1>
        <h1 className='font-bold text-2xl text-gray-900 '>
          <CountUp
            start={0}
            end={data.recovered.value}
            duration={3}
            separator=','
          />
        </h1>
        <h2 className='font-medium text-xl text-gray-800'>
          {new Date(data.lastUpdate).toDateString()}
        </h2>
        <p className='font-medium text-sm text-gray-800'>
          Number of active cases of COVID-19
        </p>
      </div>
      <div className='w-52 py-5 px-3 rounded-xl shadow '>
        <h1 className='font-bold text-2xl text-gray-600'>Death</h1>
        <h1 className='font-bold text-2xl text-gray-900 '>
          <CountUp
            start={0}
            end={data.deaths.value}
            duration={3}
            separator=','
          />
        </h1>
        <h2 className='font-medium text-xl text-gray-800'>
          {new Date(data.lastUpdate).toDateString()}
        </h2>
        <p className='font-medium text-sm text-gray-800'>
          Number of active cases of COVID-19
        </p>
      </div>
    </div>
  )
}

export default Card
