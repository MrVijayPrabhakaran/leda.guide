import React from 'react';
import DocCheck from "../assets/Screen Recording 4.mp4"

const DoctorCheckiin = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-inter py-8 px-4">
      <section className="bg-black border border-gray-700 rounded-xl p-6 md:p-10 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-purple-600 pb-2 mb-6">4. How a Doctor Fetches Patient Records</h2>
        <p className="text-gray-300 mb-4">
          Doctors can easily access patient records to review medical history, diagnoses, and treatment plans.
        </p>
        <ol className="list-decimal list-inside text-gray-300 space-y-3 pl-4">
          <li><strong>Login as Doctor:</strong> Log in to the system using your Doctor credentials.</li>
          <li><strong>Navigate to Patient List:</strong> From your dashboard, go to the "Patients" or "My Patients" section.</li>
          <li><strong>Search for Patient:</strong> Use the search bar to find a patient by name, patient ID, or other identifiers.</li>
          <li><strong>Select Patient:</strong> Click on the patient's name from the search results to open their detailed record.</li>
          <li><strong>Review Records:</strong> Within the patient's profile, you can view their medical history, past visits, lab results, prescriptions, and more.</li>
        </ol>

        {/* Gradient border video */}
        <div className="w-full max-w-3xl mx-auto mt-6 p-[2px] bg-gradient-to-r from-purple-200 to-indigo-600 rounded-lg">
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <video
              src={DocCheck}
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

export default DoctorCheckiin;
