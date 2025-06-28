import React, { useState } from 'react';
import Doctor from "../assets/Screen Recording 2.mp4";
import Reception from "../assets/Screen Recording 3.mp4";

const DoctorReception = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-inter">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <section className="bg-black border border-gray-600 rounded-xl p-6 md:p-10 shadow-xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-purple-600 pb-2 mb-4 text-white">
            2. Adding Doctor and Receptionist Accounts (Admin Role)
          </h2>
          {/* <h1>Count: {count}</h1>
          <button onClick={() => setCount(count+1)}>C</button> */}

          <p className="text-gray-300 mb-4">
            Once the admin account is set up, you can add and manage Doctor and Receptionist accounts.
          </p>

          <ol className="list-decimal list-inside text-gray-300 space-y-3 pl-4 mb-6">
            <li>
              <strong>Access User Management:</strong> From the Admin Dashboard, navigate to the "User Management" or "Staff" section.
            </li>
            <li>
              <strong>Add New User:</strong> Click on the "Add New User" or "Invite Staff" for.eg:(Dr.subha or Mrs.Sagunthala) button.
            </li>
            <li>
              <strong>Select Role:</strong> Choose either "Doctor" or "Receptionist" from the role dropdown.
            </li>
            <li>
              <strong>Enter Details:</strong> Fill in the staff member's name, email, and any other relevant professional details (e.g., specialization for Doctors).
            </li>
            <li>
              <strong>Set Permissions (Optional):</strong> Customize specific access permissions if required.
            </li>
          </ol>

          {/* Add Doctor Video */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Add Doctor:</h3>
            <div className="w-full max-w-3xl mx-auto rounded-lg p-[2px] bg-gradient-to-r from-purple-200 to-indigo-600 overflow-hidden">
              <video
                src={Doctor}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-lg shadow-lg"
              ></video>
            </div>
          </div>

          {/* Add Receptionist Video */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Add Receptionist:</h3>
            <div className="w-full max-w-3xl mx-auto rounded-lg p-[2px] bg-gradient-to-r from-purple-200 to-indigo-600 overflow-hidden">
              <video
                src={Reception}
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
    </div>
  );
};

export default DoctorReception;







