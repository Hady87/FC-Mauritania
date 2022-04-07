import React from "react";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import Card from "react-bootstrap/Card";
import aboutAC from "../shared/aboutAC";


function About() {
  return (
    <>
      {" "}
      <div className="container">
         <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <div className="row">
          
          {aboutAC.map((item, k) => (
            <div className=" col-10 col-md-4 mx-auto my-5" key={item.id}>
              <Card >
                <Card.Img
                  variant="top"
                  src={item.image}
                  height="200px"
                  alt={item.title}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}
                  
                  
                  
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </div>
           
          ))}
          
        </div>
         </FadeTransform>
        <div className="row  p-3">
          <div className="col">
            <ul className="">
              <h2>Objectives</h2>
              <li>
                Enhancement of civic education in the field of Liberal
                democracy, Citizenship rights (duties and responsibilities) and
                human rights in Mauritania:
                <ul>
                  <li>
                    Civic and Human Rights education to promote the value of
                    citizenship, democracy, fighting corruption, tolerance,
                    human rights, individual freedom, and free markets value
                  </li>
                  <li>
                    Advocacy seeks to build consensus on national, regional, or
                    local priorities through transparent, accountable, and
                    inclusive decision making. We value advocacy because it
                    provides citizens the opportunity to channel their ideas and
                    concerns into collective action toward commonly identified
                    objectives.
                  </li>
                </ul>
              </li>
              <li>
                Combating social problems such as slavery, Illegal child
                “marriage”, child labor, corruption, drug trafficking, illegal
                immigration, and unfair labor conditions.
              </li>
              <li>
                Encouragement of citizens to actively participate in
                decision-making processes and building an open society based on
                the rule of law and equal opportunities for all.
              </li>
              <li>Monitoring and promotion of anti-corruption policies.</li>
              <li>
                Research, analysis, and representation of solutions and policies
                that are leading to further democratization of Mauritania.
              </li>
              <li> Research approach to combat desertification.</li>
              <li> Affirmation of freedom of expression and media freedoms.</li>
              <li>
                Documenting of and advocating for fact-finding on human rights
                violation.
              </li>
              <li>
                Informing and empowering young people for their personal
                development and social activism.
              </li>
              <li>
                Improvement of the status of minorities and marginalized groups.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
