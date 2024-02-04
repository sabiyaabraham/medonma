import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';
import Navbar from "../../Navbar"

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://www.nidirect.gov.uk/sites/default/files/images/news/blood-donation.jpg")',
        backgroundSize: 'cover',
        // backgroundColor: 'black',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport
      }}
    >
      <Navbar />
      <Container>
        <header style={{ marginBottom: '20px', color: 'white' }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Welcome to Our Blood Donation Platform
          </Typography>
        </header>

        <main style={{ textAlign: 'left', color: 'white' }}>
          <section style={{ marginBottom: '20px' }}>
            <Typography variant="body1" paragraph>
              Blood donation is a noble act that can save lives. It involves voluntarily giving blood,
              typically through a simple and safe process. Donated blood is used for various medical
              purposes, including surgeries, trauma care, and treating medical conditions.
            </Typography>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <Typography variant="body1" paragraph>
              Your decision to donate blood can make a significant impact on the well-being of others.
              Join us in this lifesaving mission and be a hero to someone in need.
            </Typography>
          </section>

          <section>
            <Typography variant="body1" paragraph>
              To get started, explore our platform and find nearby blood donation events. Every donation
              counts and brings hope to those facing medical challenges.
            </Typography>
            <Typography variant="body1" paragraph>
              <Typography variant="h5">Blood donation</Typography>
              Blood donation is the voluntary act of providing one's blood, typically through a blood donation
              center or a mobile blood drive. The importance of blood donation lies in its life-saving potential
              and its crucial role in medical treatments and emergencies.
            </Typography>
            <List>
              <ListItem>Saving Lives: Donated blood is used in various medical procedures, surgeries, and treatments to save the lives of individuals facing illness, trauma, or surgeries.</ListItem>
              <ListItem>Emergency Response: Blood donations play a vital role in responding to emergencies, such as accidents, natural disasters, or unforeseen medical conditions where a timely blood transfusion is essential.</ListItem>
              <ListItem>Supporting Medical Treatments: Patients undergoing treatments like chemotherapy, major surgeries, and certain medical conditions often require blood transfusions to recover and manage their health effectively.</ListItem>
              <ListItem>Contribution to Community Health: Blood donation fosters community well-being by ensuring a sufficient and readily available blood supply for hospitals and healthcare facilities.</ListItem>
              <ListItem>Maintaining Adequate Blood Inventory: Regular blood donations help maintain a stable blood inventory, reducing the risk of shortages and ensuring that blood is available whenever and wherever needed.</ListItem>
              <ListItem>Health Benefits for Donors: Donating blood has potential health benefits for the donors, such as reducing the risk of certain health conditions and promoting cardiovascular health.</ListItem>
              <ListItem>Raising Awareness: Blood donation campaigns raise awareness about the importance of donating blood, encouraging more individuals to participate and contribute to the well-being of their community.</ListItem>
              <ListItem>Community Unity: Blood donation events bring communities together, fostering a sense of unity and shared responsibility for the welfare of others.</ListItem>
            </List>
          </section>

          {/* Organ Donation Benefits Section */}
          <section style={{ marginBottom: '20px' }}>
          <Typography variant="body1" paragraph>
            <Typography variant="h5">Organ Donation</Typography>
            Organ donation is a selfless act that can transform lives. Consider the following benefits of organ donation:
          </Typography>
          <List>
            <ListItem>Enhanced Quality of Life: Organ donation significantly enhances the quality of life for recipients, allowing them to lead healthier and more fulfilling lives.</ListItem>
            <ListItem>Saving Lives: Organ transplants have the potential to save the lives of individuals suffering from organ failure, providing them with a new chance at life.</ListItem>
            <ListItem>Medical Advancements: Organ donations contribute to medical research and advancements in transplantation, improving the success rates of future transplant procedures.</ListItem>
            <ListItem>Legacy of Giving: By donating organs, individuals leave a lasting legacy, impacting the lives of recipients and their families in a profound way.</ListItem>
            <ListItem>Gift of Independence: Organ donation can grant recipients the ability to lead more independent lives, free from the constraints of chronic organ-related conditions.</ListItem>
            <ListItem>Emotional Healing: Organ donation offers emotional healing for donor families, knowing that their loved one's organs have given others a chance for a better life.</ListItem>
            <ListItem>Community Connection: Organ donation fosters a sense of community connection, as individuals come together to support and save the lives of fellow community members.</ListItem>
            <ListItem>Advances Medical Knowledge: Organ donations contribute to the advancement of medical knowledge, leading to innovations in transplant procedures and post-transplant care.</ListItem>
            <ListItem>Ethical Fulfillment: Organ donation provides donors and their families with a sense of ethical fulfillment, knowing they have made a profound impact on someone else's life.</ListItem>
          </List>
        </section>
        </main>
      </Container>
    </div>
  );
}

export default Home;
