// Import React and necessary components
import React from 'react';
import './Page.css'; // Adjust the path based on your project structure
import Navbar from './Navbar'; // Adjust the path based on your project structure

// Sample data for benefits of blood and organ donation
const bloodDonationBenefits = [
  {
    title: 'Save Lives',
    description: 'Donating blood can save the lives of those in need.'
  },
  {
    title: 'Community Impact',
    description: 'Contribute to the well-being of your community by helping others in need.'
  },
  {
    title: 'Medical Advancements',
    description: 'Blood donations contribute to medical research and advancements in healthcare.'
  },
  {
    title: 'Personal Fulfillment',
    description: 'Experience a sense of fulfillment and satisfaction by making a positive impact.'
  }
];

const organDonationBenefits = [
  {
    title: 'Enhanced Quality of Life',
    description: 'Organ donation can significantly enhance the quality of life for recipients.'
  },
  {
    title: 'Saving Lives',
    description: 'Organ transplants can save the lives of individuals suffering from organ failure.'
  },
  {
    title: 'Medical Advancements',
    description: 'Organ donations contribute to medical research and advancements in transplantation.'
  },
  {
    title: 'Legacy of Giving',
    description: 'Leave a lasting legacy by giving the gift of life through organ donation.'
  }
];

// Render individual benefit cards
const renderBenefitCards = (data) => {
  return data.map((benefit, index) => (
    <div key={index} className="card">
      <h3>{benefit.title}</h3>
      <p>{benefit.description}</p>
    </div>
  ));
};

// Render the Page component
const Page = () => {
  return (
    <div className="benefits-page">
      <Navbar /> {/* Include the Navbar component */}
      <h1>Benefits of Blood and Organ Donation</h1>

      {/* Blood Donation Section */}
      <div>
        <h2>Blood Donation</h2>
        <div className="card-container">
          {renderBenefitCards(bloodDonationBenefits)}
        </div>
      </div>

      {/* Organ Donation Section */}
      <div>
        <h2>Organ Donation</h2>
        <div className="card-container">
          {renderBenefitCards(organDonationBenefits)}
        </div>
      </div>
    </div>
  );
};

// Export the Page component
export default Page;
