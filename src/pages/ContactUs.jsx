import React from "react";
import ContactPayloadProvider from "../features/contactus/providers/ContactPayloadProvider";
import PageTitle from "../utils/PageTitle";
import ContactUsLeftDiv from "../features/contactus/components/ContactUsLeftDiv";
import ContactUsRightDiv from "../features/contactus/components/ContactUsRightDiv";
import FieldErrorProvider from "../features/contactus/providers/FieldErrorProvider";

const ContactUs = () => {
  return (
    <>
      <PageTitle key={"contactPage"} title={"Contact"} />
<<<<<<< HEAD
      <div className="max-w-[1144px] w-[95%] mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6">যোগাযোগ করুন</h2>
=======
      <div className="max-w-[1144px] w-[95%] mx-auto mt-28">
        <h2 className="text-2xl font-bold text-center mb-8">যোগাযোগ করুন</h2>

        {successMessage && (
          <div className="mb-4 font-semibold text-center p-3 rounded">
            {successMessage}
          </div>
        )}

        {errors.form && (
          <div className="mb-4 font-semibold text-center p-3 rounded">
            {errors.form}
          </div>
        )}

>>>>>>> e4dea2c990af6d1eeb26d0996ff8093382102d9e
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-8">
          <ContactUsLeftDiv />
          <ContactPayloadProvider>
            <FieldErrorProvider>
              <ContactUsRightDiv />
            </FieldErrorProvider>
          </ContactPayloadProvider>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
