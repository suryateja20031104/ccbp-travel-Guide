import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import './App.css'

// Replace your code here
const App = () => {
  const [data, setData] = useState([])
  const [load1, setLoad] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoad(true)
      const response = await fetch('https://apis.ccbp.in/tg/packages')
      const d = await response.json()
      setLoad(false)
      setData(d.packages)
    }
    getData()
  })

  return (
    <div className="main-container">
      <div className="app-container">
        <h1 className="head1">Travel Guide</h1>
        {!load1 ? (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        ) : (
          <ul className="cards">
            {data.map(each => (
              <li className="item" key={each.id}>
                <img src={each.image_url} className="image" alt={each.name} />
                <div className="data-container">
                  <h1 className="head">{each.name}</h1>
                  <p className="desc">{each.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
