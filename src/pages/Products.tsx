
function Products() {
  const products = [
    { name: 'Rice', sku: 'PRD001', category: 'Grocery', price: 60, stock: 50 },
    { name: 'Cooking Oil', sku: 'PRD002', category: 'Grocery', price: 150, stock: 25 },
    { name: 'Sugar', sku: 'PRD003', category: 'Grocery', price: 45, stock: 5 },
  ]

  return (
    <div>
      <h1>Products</h1>
      <p>Manage your store products here.</p>

      <div className="products-header">
        <input type="text" placeholder="Search products..." />
        <button>Add Product</button>
      </div>

      <section className="orders-section">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.sku}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Products
