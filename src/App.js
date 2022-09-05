import React from 'react';
import { BookingForm } from './components'

function App(props) {

  const { users } = props

  console.log(users, 'APP')

  return (
    <BookingForm users={users} />
  )

}

export default App;
