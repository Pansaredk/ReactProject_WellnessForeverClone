// components/OrderWithPrescription.js
import React from 'react';
import '../styles/style.css' 


function OrderWithPrescription() {
  return (
    <section className="container mt-4 text-center" style={{ backgroundColor: 'rgb(242, 237, 237)' }}>
      <h4>Order with Prescription</h4>
      <p>Upload a prescription and let us do the rest!</p>
      <button className="btn btn-success">Upload</button>
      <input type="file" name="file" id="file" />
    </section>
  );
}

export default OrderWithPrescription;