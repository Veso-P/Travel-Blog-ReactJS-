import './App.css';

// Importing Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BlogList from './components/blogs/BlogList';

// Importing Data from DataBase
import dataBase from './database/DataBase';


function App() {
  return (
    <div className="App">
      <Header />

      <BlogList blogs={dataBase} />
      
      <Footer />
    </div>
  );
}

export default App;
