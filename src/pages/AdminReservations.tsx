import { useEffect, useState } from "react";
import type { Reservation } from "../types";
import { getAllReservations } from "../service/adminService";


const AdminReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
useEffect(() => {
  const fetchreservations = async () => {
    try {
      const response=await getAllReservations();
      setReservations(response);
       
     } catch (error) {
       
     }
  }
  fetchreservations();
 
},[]);
 
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Table Reservations</h1>

      <div className="grid gap-6">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Reservation for {reservation.guests} guests
                </h3>
                <div className="space-y-1 text-gray-600">
                  <p>Date: {reservation.date}</p>
                  <p>Time: {reservation.time}</p>
                  <p>Occasion: {reservation.occasion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {reservations.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No reservations yet
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminReservations;
