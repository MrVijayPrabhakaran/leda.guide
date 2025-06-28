import React from "react";
import PatientVideo from "../assets/Screen Recording 3.mp4"; // Adjust path as needed

const Patients = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-inter">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <section className="bg-black border border-gray-700 rounded-xl p-6 md:p-10 shadow-xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-purple-600 pb-2 mb-6 text-white">
            3. Patient Application Process
          </h2>
          <p className="text-gray-300 mb-4">
            Patients can apply for appointments or register their details through a dedicated portal.
          </p>

          <ol className="list-decimal list-inside text-gray-300 space-y-3 pl-4">
            <li>
              <strong>Access Patient Portal:</strong> Patients visit the clinic's public patient portal (e.g.,{" "}
              <a
                href="https://gokul-s.token.leada360.com/clinic"
                className="text-blue-400 hover:underline"
              >
                https://gokul-s.token.leada360.com/clinic
              </a>
              ).
            </li>
            <li>
              <strong>Register or Log in:</strong> New patients register by providing basic demographic and
              contact information. Existing patients log in.
            </li>
            <li>
              <strong>Appointment Request:</strong> Patients can then request an appointment by selecting a
              preferred date, time, and doctor, and stating their reason for visit.
            </li>
            <li>
              <strong>Submit Application:</strong> The request is submitted to the clinic for review and
              confirmation by the reception team.
            </li>
          </ol>

          <div className="w-full max-w-3xl mx-auto mt-6 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 to-indigo-600 overflow-hidden">
            <video
              src={PatientVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg shadow-lg"
            ></video>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Patients;
