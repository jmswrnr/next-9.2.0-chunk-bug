import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'

const TestComponent = dynamic(
    () => import('../TestComponent'),
    { ssr: false }
)

function DynamicPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [])

  return <>
    <h1>DynamicPage</h1>
    <div>Mounted: {mounted.toString()}</div>
    <TestComponent/>
  </>
}

export default DynamicPage