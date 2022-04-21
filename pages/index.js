import { useEffect } from 'react'
import HomeBanner from '../Components/HomeBanner'
import WeatherBoxes from '../Components/WeatherBoxes'
import Footer from '../Components/Footer'

function Home() 
{
  useEffect(() => {
    document.title = 'Weather Today!'
  },[])
  return (
    <div>
      <HomeBanner />
      <WeatherBoxes />

      <Footer />
    </div>
  )
}

export default Home