import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((req) => req.json())
      .then((data) => setBookings(data));
  }, []);

  const handelDelete = id => {
    const proceed = confirm('Are you sure want to delete');
    if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  alert('delete successful')
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBookings(remaining);
                }
        })
    }

    // const handelBookingConfirm = id => {
    //   fetch(`http://localhost:5000/bookings/${id}`, {
        
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //       if (data.modifiedCount > 0) {
    //         // update state
    //       }
    //   })
    // }

    const handelBooking = id => {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {         
          'content-type': 'application/json'
        },
        body: JSON.stringify({status:'confirm'})
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
            // update state
            
          }
      })
    }
    
    
}
  return (
    <div>
      <h1>Bookings : {bookings.length}</h1>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                
              </th>
              <th>IMAGE</th>
              <th>SERVICE NAME</th>
              <th>DATE</th>
              <th>PRICE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              bookings.map(booking => <BookingRow
                key={booking._id}
                booking={booking}
                handelDelete={handelDelete}
                handelBooking={handelBooking}               
              >
                
              </BookingRow>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
