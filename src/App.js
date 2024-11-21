import "./App.css";
import Header from "./components/header";
import AddPostForm from "./components/input";
import PostList from "./components/mainList";
import Footer from "./components/footer";

function App() {
   return (
      <>
         <Header />
         <AddPostForm />
         <PostList />
         <Footer />
      </>
   );
}

export default App;
