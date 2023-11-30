import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import DirectionProjectsPage from "@/components/DirectionProjectsPage";
import Login from "@/components/Login";
import { Routes, Route } from "react-router-dom";
import AdminPage from "@/components/AdminPage";
import ProjectPage from "@/components/ProjectPage";
const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path=':name' element={<DirectionProjectsPage />}></Route>
        <Route path=':name/:id' element={<ProjectPage />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='*' element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
