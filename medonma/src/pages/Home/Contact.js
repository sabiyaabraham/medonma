/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 03/02/2024 - 18:06:55
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/02/2024
 * - Author          :
 * - Modification    :
 **/
import React from "react";
import { Container, Typography } from "@mui/material";
import "./Contact";
import Navbar from "../../Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(https://www.nidirect.gov.uk/sites/default/files/images/news/blood-donation.jpg)`, // Replace with the correct URL
        }}
      >
        <header>
          <Container>
            <Typography variant="h4" gutterBottom textAlign="center">
              Contact Us
            </Typography>
          </Container>
        </header>

        <main>
          <Container>
            <section>
              <Typography variant="body1" paragraph>
                We would love to hear from you! Feel free to reach out to us
                through the following contact details:
              </Typography>
            </section>

            <section>
              <Typography variant="h5" gutterBottom>
                Contact Information:
              </Typography>
              <ul>
                <li>
                  <strong>Email:</strong> medonmalifecare@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> 0484 265695
                </li>
              </ul>
            </section>

            <section>
              <Typography variant="h5" gutterBottom>
                Address:
              </Typography>
              <Typography variant="body1" paragraph>
                MEDONMA LIFE CARE
              </Typography>
              <Typography variant="body1" paragraph>
                123 Main Street,
              </Typography>
              <Typography variant="body1" paragraph>
                Kochi, Kerala,
              </Typography>
              <Typography variant="body1">India</Typography>
            </section>
          </Container>
        </main>

        {/* Add any additional components or sections as needed for your contact page */}
      </div>
    </>
  );
};

export default Contact;
