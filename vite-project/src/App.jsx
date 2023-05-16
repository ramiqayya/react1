import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
console.log(data)
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const newCards = data.map(cardi => {
    return (<Card key={cardi.id}
      title={cardi.title}
      description={cardi.description}
      price={cardi.price}
      coverImg={cardi.coverImg}
      rating={cardi.stats.rating}
      reviewCount={cardi.stats.reviewCount}
      location={cardi.location}
      openSpots={cardi.openSpots}
    />)

  })

  // <Hero />
  return (
    <div>
      <Navbar />
      {newCards}
    </div>
  )
}