
function Dashboard() {
  const stats = [
    { title: 'Active Products', value: '120' },
    { title: 'Total Orders', value: '85' },
    { title: 'Sales Revenue', value: '₹45,000' },
    { title: 'Low Stock Products', value: '08' },
  ]

  const lowStockProducts = [
    { name: 'Rice', quantity: 5, threshold: 10 },
    { name: 'Cooking Oil', quantity: 3, threshold: 8 },
    { name: 'Sugar', quantity: 2, threshold: 5 },
  ]

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome to RetailOps Lite</p>

      <section className="stats-container">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <h3>{stat.title}</h3>
            <h2>{stat.value}</h2>
          </div>
        ))}
      </section>

      <section className="orders-section">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD001</td>
              <td>Rahul</td>
              <td>₹2,500</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>#ORD002</td>
              <td>Priya</td>
              <td>₹1,200</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>#ORD003</td>
              <td>Amit</td>
              <td>₹3,000</td>
              <td>Confirmed</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="low-stock-section">
        <h2>Low Stock Alerts</h2>

        {lowStockProducts.map((product) => (
          <div className="stock-item" key={product.name}>
            <div>
              <h3>{product.name}</h3>
              <p>Threshold: {product.threshold}</p>
            </div>
            <span>{product.quantity} left</span>
          </div>
        ))}
      </section>
    </>
  )
}

export default Dashboard
