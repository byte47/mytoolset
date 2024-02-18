import { useEffect, useState } from "react"
import Catagory from "./comonents/category"

import "../style.css"
import NewForm from "./comonents/new-form"
import { getTools, type ITool } from "./helpers/storage"

function IndexNewtab() {
  const [data, setData] = useState<{[k:string]:ITool}>({})

  useEffect(() => {
    const newData = getTools()
    if(newData) {
      setData(newData)
    }
  }, [])



  return (
<div className="bg-red-500 h-dvh ">
    {Object.keys(data).map((aCat) => {
      const items = data[aCat]
      return (<Catagory items={items} name={aCat}/>)
    
    })}
  <NewForm />
</div>
  )
}

export default IndexNewtab