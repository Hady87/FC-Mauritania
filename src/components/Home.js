import React from 'react'
import Card from 'react-bootstrap/Card'
import activites from "../shared/activites";
function Home() {

  return (
    <>
    <div className="container">
            <div className="row">
               
     {activites.map((item, k) => (
          <div className="col-10 col-md-4 mx-auto my-5" key={item.id}>
    <Card >
  <Card.Img variant="top" src={item.image} height='200px' />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
      {item.description}
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
     ))}
     
     </div>
     </div>
</>
  )
}

export default Home