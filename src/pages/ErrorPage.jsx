function ErrorPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Oops! Looks like something went wrong.</h1>
      <p>Sorry, the page you are looking for does not exist or an unexpected error occurred.</p>
      {/* Optionally, add a link back to the homepage */}
      <a href="/">Go to Home Page</a> 
    </div>
  );
}

export default ErrorPage;