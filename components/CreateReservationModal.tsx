// components/CreateReservationModal.tsx
'use client';

import { X, Calendar as CalendarIcon } from 'lucide-react';
import React, { useState } from 'react';

// Define the props the modal will accept
interface CreateReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (reservationData: {
    date: string; // Assuming YYYY-MM-DD format
    doctorName: string;
    hospitalName: string;
    description: string;
  }) => void;
}

export default function CreateReservationModal({ isOpen, onClose, onSave }: CreateReservationModalProps) {
  // State for form fields
  const [date, setDate] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [description, setDescription] = useState('');

  // Handle saving the reservation
  const handleSave = () => {
    // Basic validation
    if (!date || !doctorName || !hospitalName || !description) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Call the onSave prop with the form data
    onSave({ date, doctorName, hospitalName, description });
    
    // Reset form fields and close modal
    setDate('');
    setDoctorName('');
    setHospitalName('');
    setDescription('');
    onClose();
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 p-4">
      
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Appointment</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Body / Form */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-gray-600">
            Fill in the details below to schedule your new doctor's reservation.
          </p>

          {/* Date of Reservation */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date of Reservation
            </label>
            <div className="relative">
              <input
                type="date" // Use type="date" for a native date picker
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="YYYY-MM-DD"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Doctor's Name */}
          <div>
            <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700 mb-1">
              Doctor's Name
            </label>
            <input
              type="text"
              id="doctorName"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Dr. Emily White"
            />
          </div>

          {/* Hospital Name */}
          <div>
            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 mb-1">
              Hospital Name
            </label>
            <input
              type="text"
              id="hospitalName"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Mercy Medical Center"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Briefly describe the reason for your appointment (e.g., routine check-up, consultation for symptoms)."
            ></textarea>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition"
            style={{ backgroundColor: '#47839b' }} // Matching your button color
          >
            Save Reservation
          </button>
        </div>
      </div>
    </div>
  );
}