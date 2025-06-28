import React from 'react';
import Dashboard from "../assets/first.png";
import DashboardVid from "../assets/Screen Recording 1.mp4";

const AdminLogin = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-inter">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <section className="bg-black border border-gray-600 rounded-xl p-4 sm:p-6 md:p-10 shadow-xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white border-b-2 border-purple-500 pb-2 mb-6 drop-shadow">
            1. Admin Signup Process
          </h2>

          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            To begin, the clinic administrator needs to sign up and establish the clinic's account within our
            system. This is the foundational step before other users (Doctors, Receptionists) can be added.
          </p>

          <ol className="list-decimal list-inside space-y-6 text-gray-300 pl-4 text-sm sm:text-base">
            <li>
              <strong>Navigate to the Signup Page:</strong> Open your web browser and go to the provided signup URL.
              (<a href="https://leada360.com/" className="text-blue-400 hover:underline ml-1">https://leada360.com/</a>)
            </li>

            <li>
              <strong>Enter Your Details:</strong> Fill in the required information such as your full name (e.g., Jeswitha), email
              address (e.g., jeswitha@gmail.com), and desired password. Ensure the email address is accurate as it will be used for verification.
            </li>

            <li>
              <strong>Clinic Information:</strong> Provide essential details about your clinic, including its
              name (e.g., Jeswitha Hospital), address, and contact information.
            </li>

            <li>
              <strong>Submit Registration:</strong> Click on the "Register" or "Create Clinic" button to submit
              your information.
            </li>

            <li>
              <div className="mt-4 flex justify-center p-2 bg-black rounded-lg">
                <img
                  src={Dashboard}
                  alt="Email Verification Screenshot"
                  className="w-full max-w-md sm:max-w-xl h-auto rounded-lg border border-gray-600 shadow-md"
                />
              </div>
            </li>

            <li>
              <strong>Login to Dashboard:</strong> Once verified via email, you can log in using your registered
              email and password to access the Admin Dashboard.
            </li>

            <li>
              <div className="w-full max-w-xl mx-auto mt-6 p-[2px] bg-gradient-to-r from-purple-200 to-indigo-600 rounded-lg overflow-hidden">
                <video
                  src={DashboardVid}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </li>

            <li>
              <strong>Email Verification:</strong> A verification email will be sent to the email address you provided.
              Please check your inbox (and spam folder) and click the verification link to activate your account.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default AdminLogin;
