import React from "react";
import { ContactDetails, ContactForm, Location } from "../containers";
import { PageHeading, CTA } from "../components";

const Contact = () => {
  return (
    <>
      <PageHeading bgImage="bg_contact" heading="Our Team" />
      <ContactDetails />
      <Location />
      <ContactForm />
      <CTA />
    </>
  );
};
export default Contact;
