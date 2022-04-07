import Card from "react-bootstrap/Card";
import activites from "../shared/activites";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function Home() {
  return (
    <>
      {}
      <div className="container">
       <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <div className="row">
      
          {activites.map((item, k) => (
            
            <div className="col-10 col-md-4 mx-auto my-5" key={item.id}>
               
              <Card>
                <Card.Img variant="top" src={item.image} height="200px" />
                <Card.Body>
                  
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                 
                </Card.Body>
              </Card>
               
            </div>
            
          ))}
          
        </div>
        </FadeTransform>
      </div>
    </>
  );
}

export default Home;
