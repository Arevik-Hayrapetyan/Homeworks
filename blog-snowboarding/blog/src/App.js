import Blog
 from './components/Blog';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import './App.css';

function App() {
  return (
    <div className="App ">
      <Blog />
      <Login />
      <CreatePost />
    </div>
  );
}

export default App;
