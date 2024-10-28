import React from 'react';
import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => {
   return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm z-50">
         <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="relative bg-white rounded-lg p-6 max-w-lg w-full shadow-lg"
         >

            <button
               onClick={onClose}
               className="absolute top-2 right-2 text-white bg-purple-500 hover:bg-purple-700 font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200"
            >
               &times;
            </button>


            <img src={event.image} alt={event.name} className="h-60 w-full object-cover rounded mb-4" />
            <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
            <p className="text-lg mb-1">
               <span className="font-semibold">Date:</span> {event.date}
            </p>
            <p className="text-lg mb-1">
               <span className="font-semibold">Location:</span> {event.location}
            </p>
            <p className="text-gray-700">{event.description}</p>
         </motion.div>
      </div>
   );
};

export default EventModal;
