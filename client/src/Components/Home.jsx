import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate()

  const handleAddUser = () => {
    console.log('Add User button clicked');
    // Add your logic here
    navigate('/add-user')
  };

  const handleAllUsers = () => {
    console.log('All Users button clicked');
    // Add your logic here
    navigate('/all-users')
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-10 rounded-md text-center bg-gray-100 font-sans">
      <h1 className="text-4xl font-bold mb-5">User</h1>
      <p className="text-lg mb-8">
        This is your users library. You can add new users or see all users.
      </p>
      
      <div className="flex justify-center gap-4">
        <button
          onClick={handleAddUser}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add User
        </button>
        <button
          onClick={handleAllUsers}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          All Users
        </button>
      </div>
    </div>
  );
};

export default HomePage;
