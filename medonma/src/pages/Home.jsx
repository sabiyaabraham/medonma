import React from 'react';
import { Container, Typography } from '@mui/material';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div
    style={{
      //backgroundImage: `url( https://www.nidirect.gov.uk/sites/default/files/images/news/blood-donation.jpg)`, // Replace with the correct URL
      //backgroundColor:'lightred'
      
    }}>
      <Navbar />
      <header>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Welcome to Our Blood Donation Platform
          </Typography>
        </Container>
      </header>

      <main>
        <Container>
          <section>
            <Typography variant="body1" paragraph textAlign="left">
              Blood donation is a noble act that can save lives. It involves voluntarily giving blood,
              typically through a simple and safe process. Donated blood is used for various medical
              purposes, including surgeries, trauma care, and treating medical conditions.
            </Typography>
          </section>

          <section>
            <Typography variant="body1" paragraph textAlign="left">
              Your decision to donate blood can make a significant impact on the well-being of others.
              Join us in this lifesaving mission and be a hero to someone in need.


            </Typography>

           
          </section>

          <section>
            <Typography variant="body1" textAlign="left">
              To get started, explore our platform and find nearby blood donation events. Every donation
              counts and brings hope to those facing medical challenges.
            </Typography>
            <Typography variant="body1" paragraph textAlign="left" >

              <h1> Blood donation</h1>
              
              Blood donation is the voluntary act of providing one's blood, typically through a blood donation 
              center or a mobile blood drive. The importance of blood donation lies in its life-saving potential 
              and its crucial role in medical treatments and emergencies. Advantages of blood donation include:
              <li>
              Saving Lives: Donated blood is used in various medical procedures, surgeries, and treatments to
               save the lives of individuals facing illness, trauma, or surgeries.
              </li>
              <li>
              Emergency Response: Blood donations play a vital role in responding to emergencies, such as accidents,
               natural disasters, or unforeseen medical conditions where a timely blood transfusion is essential.
              </li>
              <li>
              Supporting Medical Treatments: Patients undergoing treatments like chemotherapy, major surgeries, and certain
               medical conditions often require blood transfusions to recover and manage their health effectively.
              </li>
              <li>
              Contribution to Community Health: Blood donation fosters community well-being by ensuring a sufficient and 
              readily available blood supply for hospitals and healthcare facilities.
              </li>
              <li>
              Maintaining Adequate Blood Inventory: Regular blood donations help maintain a stable blood inventory,
               reducing the risk of shortages and ensuring that blood is available whenever and wherever needed.
              </li>
              <li>
              Health Benefits for Donors: Donating blood has potential health benefits for the donors, such as 
              reducing the risk of certain health conditions and promoting cardiovascular health.
              </li> 
                <li>
                Raising Awareness: Blood donation campaigns raise awareness about the importance of donating blood,
                 encouraging more individuals to participate and contribute to the well-being of their community
                </li> 
                <li>
                Community Unity: Blood donation events bring communities together, fostering a sense of unity and shared 
                responsibility for the welfare of others.
                </li> 
                  


               </Typography>
               
                 {/* Organ Donation Benefits Section */}
<section>
  <Typography variant="body1" paragraph textAlign="left">
    <h1>Organ Donation</h1>
    Organ donation is a selfless act that can transform lives. Consider the following benefits of organ donation:
  </Typography>
  <ul>
    <li>
      Enhanced Quality of Life: Organ donation significantly enhances the quality of life for recipients, allowing them to lead healthier and more fulfilling lives.
    </li>
    <li>
      Saving Lives: Organ transplants have the potential to save the lives of individuals suffering from organ failure, providing them with a new chance at life.
    </li>
    <li>
      Medical Advancements: Organ donations contribute to medical research and advancements in transplantation, improving the success rates of future transplant procedures.
    </li>
    <li>
      Legacy of Giving: By donating organs, individuals leave a lasting legacy, impacting the lives of recipients and their families in a profound way.
    </li>
    <li>
      Gift of Independence: Organ donation can grant recipients the ability to lead more independent lives, free from the constraints of chronic organ-related conditions.
    </li>
    <li>
      Emotional Healing: Organ donation offers emotional healing for donor families, knowing that their loved one's organs have given others a chance for a better life.
    </li>
    <li>
      Community Connection: Organ donation fosters a sense of community connection, as individuals come together to support and save the lives of fellow community members.
    </li>
    <li>
      Advances Medical Knowledge: Organ donations contribute to the advancement of medical knowledge, leading to innovations in transplant procedures and post-transplant care.
    </li>
    <li>
      Ethical Fulfillment: Organ donation provides donors and their families with a sense of ethical fulfillment, knowing they have made a profound impact on someone else's life.
    </li>
  </ul>
</section>


              
          </section>
        </Container>
      </main>

      {/* Add any additional components or sections as needed for your home page */}
    </div>
  );
}

export default Home;
