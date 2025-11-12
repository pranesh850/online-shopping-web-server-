import React, { useEffect, useState } from "react";
import "./OrderList.css";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div className="order-list-container">
      <h2>📦 Order List</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product ID</th>
            <th>User ID</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Unit Price</th>
            <th>Items</th>
            <th>Offer</th>
            <th>Delivery Cost</th>
            <th>Total Cost</th>
            <th>Status ID</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productId}</td>
              <td>{order.userId}</td>
              <td>{order.orderDate || "—"}</td>
              <td>{order.deliveryDate || "—"}</td>
              <td>{order.unitPrice}</td>
              <td>{order.numberOfItems}</td>
              <td>{order.offer}</td>
              <td>{order.deliveryCost}</td>
              <td>{order.totalCost}</td>
              <td>{order.statusId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
