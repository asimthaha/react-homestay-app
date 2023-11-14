import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomestayLogin from "./components/HomestayLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomestayLogin />}></Route>
        {/* <Route path="add" element={< />}></Route>
        <Route path="search" element={<NewCoursSearch />}></Route>
        <Route path="delete" element={<NewCourseDelete />}></Route> */}
        {/* <Route path="view" element={<HomeStayView />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
