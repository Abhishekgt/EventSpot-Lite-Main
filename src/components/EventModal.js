import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => (
   <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
   >
      <div className="bg-white rounded-lg p-4 max-w-md mx-auto">
         <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" 
            onClick={onClose}
            aria-label="Close"
         >
            ✖️ {/* Cross symbol */}
         </button>
         <img src={event.image} alt={event.name} className="w-full rounded" />
         <h2 className="text-xl font-bold">{event.name}</h2>
         <p className="text-gray-700">{event.description}</p>
         <p className="text-sm text-gray-500">{event.date} - {event.location}</p>
         <span className="text-sm text-gray-500">{event.category}</span>
      </div>
   </motion.div>
);

export default EventModal;
