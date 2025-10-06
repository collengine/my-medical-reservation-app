// app/dashboard/page.tsx
'use client';
import CreateReservationModal from '@/components/CreateReservationModal';
import DashboardHeader from '@/components/DashboardHeader';
import ReservationsTable from '@/components/ReservationsTable';
import { useState } from 'react';
// Mock data for the reservations
const upcomingReservations = [
  { 
    id: 1, dateCreated: '2024-07-20', dateReserved: '2024-08-15', 
    doctor: 'Dr. Emily White', hospital: 'City General Hospital', 
    description: 'Annual check-up, bring recent blood test results.' 
  },
  { 
    id: 2, dateCreated: '2024-07-22', dateReserved: '2024-08-28', 
    doctor: 'Dr. Michael Lee', hospital: 'Greenwood Clinic', 
    description: 'Follow-up appointment for prescription refill.' 
  },
  { 
    id: 3, dateCreated: '2024-07-25', dateReserved: '2024-09-05', 
    doctor: 'Dr. Sarah Chen', hospital: 'Coastal Medical Center', 
    description: 'Dermatology consultation for skin rash.' 
  },
];

const pastReservations = [
  { 
    id: 4, dateCreated: '2024-06-01', dateReserved: '2024-06-10', 
    doctor: 'Dr. Emily White', hospital: 'City General Hospital', 
    description: 'Routine dental cleaning and check-up.' 
  },
  { 
    id: 5, dateCreated: '2024-05-15', dateReserved: '2024-05-20', 
    doctor: 'Dr. Robert Davis', hospital: 'Oak Street Clinic', 
    description: 'Vaccination shot for seasonal flu.' 
  },
];

export default function DashboardPage() {

    const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow">
        
        {/* Page Title and Action Button */}
        <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
            Reservation Management
        </h1>
        <button
            // Update this onClick handler
            onClick={() => setIsModalOpen(true)} // <-- Open the modal
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition"
            style={{ backgroundColor: '#47839b' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Reservation
        </button>
        </div>

        {/* Upcoming Reservations */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Upcoming Reservations</h2>
        <ReservationsTable data={upcomingReservations} />

        {/* Past Reservations */}
        <h2 className="text-xl font-semibold text-gray-800 mt-12 mb-6">Past Reservations</h2>
        <ReservationsTable data={pastReservations} />
      </main>

      {/* Footer Links */}
      <footer className="mt-auto border-t border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-gray-500">
          <div className="space-x-4">
            <a href="#" className="hover:text-indigo-600">Quick Links</a>
            <a href="#" className="hover:text-indigo-600">Legal</a>
          </div>
          <div className="flex space-x-3">
             {/* Replace with social icons if needed */}
             <span className="text-gray-400">© 2024 DocBooker</span>
          </div>
        </div>
      </footer>
      {/* The Modal Component */}
      <CreateReservationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Function to close the modal
        onSave={(newReservationData) => {
          console.log("New reservation to be saved:", newReservationData);
          // Here, you would typically:
          // 1. Send newReservationData to your backend API to save it.
          // 2. If successful, update your local state (e.g., add to upcomingReservations)
          //    to reflect the new reservation in the UI immediately.
          //    For now, we'll just log it.
          alert("Reservation saved! (Check console for data)");
          // You might also want to refetch your reservations or update state
          // to show the new reservation in the table.
        }}
      />
    </div>
  );
}