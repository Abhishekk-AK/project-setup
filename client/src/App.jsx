import { Route, Routes } from "react-router-dom"
import HomePage from "./Components/Home"
import AddUserPage from "./Components/user/AddUser"
import AllUsersPage from "./Components/user/AllUsers"

function App() {

  return (
    <div className="min-h-screen max-w-screen overflow-hidden bg-gray-700">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add-user" element={<AddUserPage/>} />
        <Route path="/all-users" element={<AllUsersPage/>} />
      </Routes>
    </div>
  )
}

export default App
