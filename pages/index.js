import {useEffect, useState} from 'react'

function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [])

  return <>
    <h1>HomePage</h1>
    <div>Mounted: {mounted.toString()}</div>
  </>
}

export default HomePage