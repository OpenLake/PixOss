import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="navbar h-[4rem] w-screen">
        <Navbar />
      </div>
      <div className="overflow-hidden h-[calc(100vh-8rem)] bg-teal-50		">
        <Grid />
      </div>
      <div className="footer h-[4rem]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
