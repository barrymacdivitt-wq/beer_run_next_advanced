
export default function Features() {
  return (
    <section className="features">
      <h2>Why Beer Run?</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <img src="/feature1.jpg" />
          <h3>Instant Delivery</h3>
          <p>Lightning-fast delivery around LSU and Baton Rouge.</p>
        </div>

        <div className="feature-card">
          <img src="/feature2.jpg" />
          <h3>Real-Time Tracking</h3>
          <p>Track your driver from store to door.</p>
        </div>

        <div className="feature-card">
          <img src="/feature3.jpg" />
          <h3>Seamless Checkout</h3>
          <p>A frictionless ordering flow designed to convert.</p>
        </div>
      </div>
    </section>
  );
}
