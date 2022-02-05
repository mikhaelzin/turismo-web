import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import Header from "./components/Header";
import EditTour from "./pages/EditTour";
import Home from "./pages/Home";
import NewTour from "./pages/NewTour";
import Tour from "./pages/Tour";
import GlobalStyles from "./styles/global";

const queryClient= new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tour/:slug' element={<Tour/>} />
        <Route path='/tour/new' element={<NewTour/>} />
        <Route path='/tour/:slug/edit' element={<EditTour/>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
