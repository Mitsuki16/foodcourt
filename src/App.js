import { Route, Routes } from "react-router-dom";
import DisplayItems from "./DisplayItems";
import DisplayItem from "./DisplayItem";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DisplayItems />} />
        <Route path="/items/:id" element={<DisplayItem />} />
      </Routes>
    </div>
  );
}

export default App;
