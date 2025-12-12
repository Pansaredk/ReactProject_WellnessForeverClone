import React, { useContext, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/style.css";
import qrImage from "../images/qr.jpg";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalAmount, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const invoiceRef = useRef(null);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handlePaymentCompletion = () => {
    setOrderCompleted(true);
  };

  const handleClose = () => {
    setShowModal(false);
    if (orderCompleted) {
      clearCart();
    }
  };

  const downloadInvoice = () => {
    html2canvas(invoiceRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const pageHeight = 290;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;
      
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save("invoice.pdf");
    });
  };

  // Generate a random invoice number
  const generateInvoiceNumber = () => {
    return `INV-${Math.floor(100000 + Math.random() * 900000)}`;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty. Start shopping now!</div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item card p-3 mb-3 shadow-sm d-flex flex-row align-items-center">
                <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px", borderRadius: "5px" }} />
                <div className="ms-3">
                  <h5 className="fw-bold">{item.name}</h5>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity-control">
                    <button className="btn btn-secondary btn-sm" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-secondary btn-sm" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="btn btn-danger btn-sm mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary p-3 mt-3 border rounded bg-light">
            <h5 className="fw-bold">Order Summary</h5>
            <p><strong>Total Items:</strong> {totalItems}</p>
            <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
            <button className="btn btn-primary w-100 mt-2" onClick={handleCheckout}>Proceed to Payment</button>
          </div>
        </>
      )}

      {showModal && (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-3 shadow">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">{orderCompleted ? "Order Completed!" : "Scan to Pay"}</h5>
                <button className="btn-close btn-close-white" onClick={handleClose}></button>
              </div>
              <div className="modal-body text-center">
                {orderCompleted ? (
                  <div>
                    <div ref={invoiceRef} className="invoice p-4 bg-white" style={{ maxWidth: '800px', margin: '0 auto' }}>
                      <div className="text-center mb-4">
                        <h2 className="fw-bold" style={{ color: '#2c3e50', marginBottom: '5px' }}>WELLNESS FOREVER</h2>
                        <p className="text-muted" style={{ marginBottom: '5px' }}>123 Wellness Street, Health City, HC 123456</p>
                        <p className="text-muted">GSTIN: 22AAAAA0000A1Z5</p>
                      </div>
                      
                      <div className="d-flex justify-content-between mb-4" style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '10px' }}>
                        <div>
                          <h4 className="fw-bold" style={{ color: '#2c3e50' }}>INVOICE</h4>
                          <p className="mb-1"><strong>Invoice #:</strong> {generateInvoiceNumber()}</p>
                          <p className="mb-1"><strong>Date:</strong> {new Date().toLocaleDateString('en-IN')}</p>
                        </div>
                        <div className="text-end">
                          <p className="mb-1"><strong>Customer ID:</strong> CUST-{Math.floor(1000 + Math.random() * 9000)}</p>
                          <p className="mb-1"><strong>Payment Method:</strong> UPI</p>
                          <p className="mb-1"><strong>Status:</strong> <span className="badge bg-success">Paid</span></p>
                        </div>
                      </div>
                      
                      <table className="table table-bordered mt-2">
                        <thead className="table-dark">
                          <tr>
                            <th className="text-center">#</th>
                            <th>Product</th>
                            <th className="text-center">Qty</th>
                            <th className="text-end">Unit Price (₹)</th>
                            <th className="text-end">Total (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item, index) => (
                            <tr key={item.id}>
                              <td className="text-center">{index + 1}</td>
                              <td>{item.name}</td>
                              <td className="text-center">{item.quantity}</td>
                              <td className="text-end">{item.price.toFixed(2)}</td>
                              <td className="text-end">{(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      
                      <div className="row justify-content-end mt-3">
                        <div className="col-md-6">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td className="fw-bold">Subtotal</td>
                                <td className="text-end">₹{totalAmount.toFixed(2)}</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">GST (10%)</td>
                                <td className="text-end">₹{(totalAmount * 0.10).toFixed(2)}</td>
                              </tr>
                              <tr className="table-active">
                                <td className="fw-bold">Grand Total</td>
                                <td className="text-end fw-bold">₹{(totalAmount * 1.10).toFixed(2)}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-top">
                        <div className="row">
                          <div className="col-md-6">
                            <h6 className="fw-bold">Payment Information</h6>
                            <p className="mb-1">Payment Method: UPI</p>
                            <p className="mb-1">Transaction ID: TXN{Math.floor(100000 + Math.random() * 900000)}</p>
                            <p>Payment Date: {new Date().toLocaleString('en-IN')}</p>
                          </div>
                          <div className="col-md-6 text-end">
                            <div className="stamp" style={{
                              border: '2px solid #555',
                              color: '#555',
                              display: 'inline-block',
                              padding: '5px 10px',
                              borderRadius: '5px',
                              fontFamily: 'cursive',
                              transform: 'rotate(5deg)'
                            }}>
                              PAID
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4 pt-3 border-top">
                        <p className="mb-1">Thank you for your business!</p>
                        <p className="text-muted">For any inquiries, please contact: support@wellnessforever.com | Phone: +91 9876543210</p>
                        <p className="text-muted small">This is a computer generated invoice and does not require a physical signature.</p>
                      </div>
                    </div>
                    <button className="btn btn-success px-4 mt-3" onClick={downloadInvoice}>Download Invoice</button>
                    <button className="btn btn-secondary px-4 mt-3 ms-2" onClick={handleClose}>Close</button>
                  </div>
                ) : (
                  <div>
                    <img src={qrImage} alt="QR Code" width="200" height="200" />
                    <p className="mt-3">Scan this QR code to complete payment.</p>
                    <button className="btn btn-success mt-3 px-4" onClick={handlePaymentCompletion}>Complete Payment</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;