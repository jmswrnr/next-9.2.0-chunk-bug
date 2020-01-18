import {useEffect, useState} from 'react'

import TestComponent from '../TestComponent'

function ImportPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [])

  return <>
    <h1>ImportPage</h1>
    <div>Mounted: {mounted.toString()}</div>
    <TestComponent/>
  </>
}

export default ImportPage