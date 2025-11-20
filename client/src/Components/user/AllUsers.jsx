import { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/operations/userApi';

const AllUsersPage = () => {
  const [users, setUsers] = useState([]);

  // Load users from localStorage or some API
  useEffect(() => {
    const getUserData = async () => {
        const allUsers = await getAllUsers();
        setUsers(allUsers);
    }
    getUserData()
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-10 pt-5 p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Users Library</h1>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">First Name</th>
                <th className="py-2 px-4 border-b text-left">Last Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Age</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{user.firstName}</td>
                  <td className="py-2 px-4 border-b">{user.lastName}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsersPage;
