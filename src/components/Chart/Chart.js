import { Line, Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }

    fetchAPI()
    return () => {
      // cleanup
    }
  }, [])
  // console.log(dailyData)

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) =>
            new Date(date).toLocaleDateString()
          ),
          datasets: [
            {
              data: dailyData.map(data => data.confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map(data => data.deaths),
              label: 'Death',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true,
            },
          ],
        }}
      />
    ) : null
  // console.log(data.confirmed.value)
  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Death'],
        datasets: [
          {
            label: 'People',
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(22, 22, 22, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(15, 15, 15, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  ) : null
  return (
    <div className='flex justify-center w-10/12'>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart
