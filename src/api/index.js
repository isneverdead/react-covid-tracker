import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async country => {
  let changeableUrl = url
  console.log(country)
  if (country && country !== 'Global') {
    changeableUrl = `${url}/countries/${country}`
  } else if (country === 'Global') {
    changeableUrl = url
  }

  try {
    const response = await axios.get(changeableUrl)
    const data = {
      confirmed: response.data.confirmed,
      recovered: response.data.recovered,
      deaths: response.data.deaths,
      lastUpdate: response.data.lastUpdate,
    }
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))
    // console.log(modifiedData)
    return modifiedData
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`)

    // console.log(countries)
    return countries.map(country => country.name)
  } catch (error) {
    console.log(error)
  }
}
