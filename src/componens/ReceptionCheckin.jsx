import React from 'react';
import ReceptCheck from "../assets/Screen Recording 7.mp4"

const ReceptionCheckin = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-inter py-8 px-4">
      <section className="bg-black border border-gray-700 rounded-xl p-6 md:p-10 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-purple-600 pb-2 mb-6">
          5. How a Receptionist Fetches Patient Details
        </h2>

        <p className="text-gray-300 mb-4">
          Receptionists play a crucial role in managing patient flow and appointments, often needing quick access
          to patient details.
        </p>

        <ol className="list-decimal list-inside text-gray-300 space-y-3 pl-4">
          <li>
            <strong>Login as Receptionist:</strong> Log in to the system using your Receptionist credentials.
          </li>
          <li>
            <strong>Access Patient Search:</strong> From your dashboard, locate the "Patient Search" or
            "Appointments" module.
          </li>
          <li>
            <strong>Search by Criteria:</strong> Enter the patient's name, phone number, or appointment time
            into the search field.
          </li>
          <li>
            <strong>View Basic Details:</strong> The system will display relevant patient information, including
            contact details, upcoming appointments, and basic demographic data.
          </li>
          <li>
            <strong>Manage Appointments:</strong> From this view, you can check patients in, reschedule
            appointments, or update contact information.
          </li>
        </ol>

        {/* Gradient border video */}
        <div className="w-full max-w-3xl mx-auto mt-6 p-[2px] bg-gradient-to-r from-purple-100 to-indigo-600 rounded-lg">
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <video
              src={ReceptCheck}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg shadow-lg"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReceptionCheckin;
