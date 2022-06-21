import "./styles.scss";

export default function PageNotFound() {
    return (
      <main className="page-container">
        <div>
        <div id="not-found-container">
          <h2><span id="red-highlight">404</span>: Not Found</h2>
          <p>The page you are looking for does not exist. I was most likely too lazy to create it...</p>
        </div>
        </div>
      </main>
    );
  }