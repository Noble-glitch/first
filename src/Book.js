import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <ul>
      {bookings.map((booking) => (
        <li key={booking.id}>{booking.title}</li>
      ))}
    </ul>
  );
};

export default BookingList;
