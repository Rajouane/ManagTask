import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setdata] = useState(null)

  useEffect(()=>{
    const fetchData = async()=>{
      const {data} = await axios.get('http://127.0.0.1:8000/api/user')
      if(data.status){
        setdata(data.data)
      }
    }
    fetchData()
  },[])

  const handelSubmit = async(name:string)=>{
    const res = await axios.post('http://127.0.0.1:8000/api/name',{
      name: name
    })

  }
  return (
    <>
    {data? <h1>{data.name}</h1> : 'loading...'}
    <input type="text" onChange={(e)=>{handelSubmit(e.target.value)}} />
    </>
  )
}

export default App
