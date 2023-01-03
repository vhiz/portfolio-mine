import { useEffect, useState } from 'react'
import List from '../list/List'
import './portfolio.scss'
import { Api, featured, webApps } from '../../data/Data'
export default function Portfolio() {

  const list = [
    {
      id: "featured",
      title: 'Featured'
    },
    {
      id: "webApps",
      title: 'Web Apps'
    },
    {
      id: "api",
      title: `Api's`
    },

  ]

  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])
  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featured);
        break;
      case 'webApps':
        setData(webApps);
        break;
      case 'api':
        setData(Api);
        break;
      default:
        setData(featured)

    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <List title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="contanier">
        {data.map(d=>(
          <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
          ))}
      </div>
    </div>
  )
}
