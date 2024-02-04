import React from 'react';
import { Container, Typography } from '@mui/material';
import './About.css'; 
import Navbar from './Navbar';
const About = () => {
  return (
    <div
    style={{
      backgroundImage: `url(https://www.nidirect.gov.uk/sites/default/files/images/news/blood-donation.jpg)`, // Replace with the correct URL
    }}>
      <Navbar />
      <header>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center" >
            About Us
          </Typography>
        </Container>
      </header>

      <main>
        <Container>
          <section>
            <Typography variant="body1" paragraph>
              Blood donation is a selfless act that plays a crucial role in saving lives. By donating blood,
              you contribute to medical treatments such as surgeries, emergency care, and various medical
              conditions. Each donation can make a significant impact on someone's life, bringing hope and
              healing to those in need.
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom>
              How Blood Donation Helps:
            </Typography>
            <ul>
              <li>
                Provides blood for medical treatments, surgeries, and emergency situations.
              </li>
              <li>
                Supports patients with medical conditions like anemia, cancer, and blood disorders.
              </li>
              <li>
                Assists in trauma care for accident victims.
              </li>
              <li>
                Contributes to community well-being and public health.
              </li>
            </ul>
          </section>

          <section>
            <Typography variant="h5" gutterBottom>
              Maintaining a Healthy Lifestyle:
            </Typography>
            <Typography variant="body1" paragraph>
              In addition to blood donation, adopting a healthy lifestyle is essential for overall well-being.
              Consider the following tips for maintaining a better lifestyle:
            </Typography>
            <ul>
              <li>
                Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.
              </li>
              <li>
                Stay physically active through regular exercise.
              </li>
              <li>
                Get enough sleep to support physical and mental health.
              </li>
              <li>
                Stay hydrated by drinking an adequate amount of water daily.
              </li>
              <li>
                Avoid tobacco and limit alcohol consumption.
              </li>
              <li>
                Manage stress through relaxation techniques and hobbies.
              </li>
            </ul>
          </section>
        </Container>
      </main>

      {/* Add any additional components or sections as needed for your about page */}
    </div>
  );
}

export default About;
