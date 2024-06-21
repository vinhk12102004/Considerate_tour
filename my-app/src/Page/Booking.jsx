import React, { useState } from 'react';

const BookingForm = () => {
    // Initialize state for form inputs and total quantity
    const [formData, setFormData] = useState({
        customerName: '',
        tourId: '1',
        adultTickets: 0,
        youthTickets: 0,
        childrenTickets: 0,
        tourTime: '',
        startDate: '',
        endDate: '',
        quantity: 0,
    });

    // State to hold the total cost
    const [totalCost, setTotalCost] = useState(0);

    // Event handler for form inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'adultTickets' || name === 'youthTickets' || name === 'childrenTickets' || name === 'startDate' || name === 'endDate') {
            calculateTotalCost({
                ...formData,
                [name]: value,
            });
        }
    };

    // Function to calculate total cost
    const calculateTotalCost = (data) => {
        const adultCount = parseInt(data.adultTickets) || 0;
        const youthCount = parseInt(data.youthTickets) || 0;
        const childrenCount = parseInt(data.childrenTickets) || 0;

        // Prices for different ticket types
        const adultPrice = 100;
        const youthPrice = 70;
        const childrenPrice = 50;

        // Calculate total cost
        let cost = adultCount * adultPrice + youthCount * youthPrice + childrenCount * childrenPrice;

        // Calculate the number of days between start and end dates


        // Add a surcharge if the difference between start and end dates is more than 1 day


        // Update total cost
        setTotalCost(cost.toFixed(2));
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send form data to server
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">BOOKING</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="customerName">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="adult_tickets">Adult (18+ age):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="adult_tickets"
                        name="adult_tickets"
                        min="0"
                        value={formData.adultTickets}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="youth_tickets">Youth (13-17 age):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="youth_tickets"
                        name="youth_tickets"
                        min="0"
                        value={formData.youthTickets}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="children_tickets">Children (0-12 age):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="children_tickets"
                        name="children_tickets"
                        min="0"
                        value={formData.childrenTickets}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label>Time:</label>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="time_12"
                        name="tour_time"
                        value="12:00"
                        onChange={handleChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="time_12">12:00</label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="time_17"
                        name="tour_time"
                        value="17:00"
                        onChange={handleChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="time_17">17:00</label>
                </div>

                <br />
                <div id="shopping-cart">
                    <div className="txt-heading">
                        <a id="btnEmpty" href="index.php?action=empty">
                            <img
                                src="empty-cart.png"
                                alt="empty-cart"
                                title="Empty Cart"
                                className="float-right"
                            />
                        </a>
                        <div className="cart-status">
                            <div className="form-group">
                                <label htmlFor="quantity">Total Quantity:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    value={formData.quantity}
                                    readOnly
                                />
                            </div>
                            <div>Total Price: $<span id="total-price">{totalCost}</span></div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Book</button>
            </form>
        </div>
    );
};

export default BookingForm;
