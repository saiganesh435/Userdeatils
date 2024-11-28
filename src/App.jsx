import React from 'react'
import data from './data'
import { List } from './List/List'
function App() {
  return (
    <main>
      <section>
      
        <List people={data} />
      </section>
    </main>
  )
}

export default App
