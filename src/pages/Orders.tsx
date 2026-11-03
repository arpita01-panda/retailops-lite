
function Orders() {
  const orders = [
    {
      id: 'ORD001',
      customer: 'Rahul',
      items: 'Rice, Sugar',
      amount: 2500,
      status: 'Completed',
    },
    {
      id: 'ORD002',
      customer: 'Priya',
      items: 'Cooking Oil',
      amount: 1200,
      status: 'Pending',
    },
    {
      id: 'ORD003',
      customer: 'Amit',
      items: 'Rice, Oil',
      amount: 3000,
      status: 'Confirmed',
    },
  ]

  return (
    <div>
      <h1>Orders</h1>
      <p>Manage customer orders here.</p>

      <div className="products-header">
        <input type="text" placeholder="Search orders..." />

        <select defaultValue="All">
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <button>Create Order</button>
      </div>

      <section className="orders-section">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.items}</td>
                <td>₹{order.amount}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Orders
