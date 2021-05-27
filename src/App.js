// import loadingImage from './assets/images/loading.svg'

import './App.css'
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [country, setCountry] = useState('')

  useEffect(() => {
    async function fetchMyData() {
      const responseData = await fetchData()
      setData(responseData)
    }
    fetchMyData()
  }, [])
  // console.log(data)

  const handleCountryChange = async country => {
    setData(null)
    const responseData = await fetchData(country)
    setData(responseData)
    setCountry(country)
  }
  // if (!data) {
  //   return (
  //     <div className='fixed top-0 bottom-0 left-0 right-0 bg-white flex flex-row justify-center items-center'>
  //       <img src={loadingImage} alt='' />
  //     </div>
  //   )
  // }
  return (
    <div className='App flex flex-col px-5 pt-10 items-center justify-center bg-gray-50'>
      <h1 className='font-bold font-sans text-4xl text-gray-600'>
        COVID-19 Tracker
      </h1>
      <h3 className='text-xl mb-5'>
        With{' '}
        <span className='text-blue-400 font-semibold font-sans'>React.js</span>{' '}
        and
        <span className='text-blue-300 font-semibold font-sans'>
          {' '}
          Tailwind css
        </span>
      </h3>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      {data && <Chart data={data} country={country} />}
    </div>
  )
}

export default App
