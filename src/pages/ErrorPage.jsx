import NavBar from "../components/NavBar";



function ErrorPage() {
  return (
    <>
    <header><NavBar/></header>
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Oops! Looks like something went wrong.</h1>
      <a href="/">Go to Home </a> 
    </div>
    </>
  );
}

export default ErrorPage;