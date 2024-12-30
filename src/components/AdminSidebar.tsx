import { NavLink } from 'react-router-dom';
import {
  UtensilsCrossed,
  ClipboardList,
  CalendarRange,
  MessageSquare,
} from 'lucide-react';

const AdminSidebar = () => {
  return (
    <div className="bg-orange-600 text-white  h-[100dvh] p-4 flex flex-col justify-between ">
      <div>
        <div className="mb-8 text-2xl font-bold">Swiggy Admin</div>
        <nav className="space-y-2">
          <NavLink
            to="/admin/add-food"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded hover:bg-orange-700 ${
                isActive ? 'bg-orange-700' : ''
              }`
            }
          >
            <UtensilsCrossed size={20} />
            <span>Foods</span>
          </NavLink>
          <NavLink
            to="/admin/all-orders"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded hover:bg-orange-700 ${
                isActive ? 'bg-orange-700' : ''
              }`
            }
          >
            <ClipboardList size={20} />
            <span>Orders</span>
          </NavLink>
          <NavLink
            to="/admin/reservations"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded hover:bg-orange-700 ${
                isActive ? 'bg-orange-700' : ''
              }`
            }
          >
            <CalendarRange size={20} />
            <span>Reservations</span>
          </NavLink>
          <NavLink
            to="/admin/contacts"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded hover:bg-orange-700 ${
                isActive ? 'bg-orange-700' : ''
              }`
            }
          >
            <MessageSquare size={20} />
            <span>Contacts</span>
          </NavLink>
        </nav>
      </div>

      <button className="flex items-center justify-center p-2 text-white bg-orange-700 rounded shadow-md">
        LOGOUT
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 ml-2 mt-0.5 text-center"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h6.75a2.25 2.25 0 002.25-2.25V15m-3-3h8.25m0 0l-3-3m3 3l-3 3"
          />
        </svg>
      </button>
    </div>
  );
};

export default AdminSidebar;
