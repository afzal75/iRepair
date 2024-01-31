import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from './../../lib/utils';

const Sidebar = () => {
    return (
        <aside className="col-span-2 bg-light-gray h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
            <nav className="flex flex-col gap-2">
                <NavLink to="/admin/dashboard" className={({ isActive }) => cn("p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white flex items-center gap-2 transition-all", {
                    "bg-dark-gray text-white": isActive
                }
                )}>

                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">DashBoard</span>

                </NavLink>
                <NavLink to="/admin/add-service" className={({ isActive }) => cn("p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white flex items-center gap-2 transition-all", {
                    "bg-dark-gray text-white": isActive
                }
                )}>

                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Add Service</span>

                </NavLink>
                <NavLink to="/admin/service-list" className={({ isActive }) => cn("p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white flex items-center gap-2 transition-all", {
                    "bg-dark-gray text-white": isActive
                }
                )}>

                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Service List</span>

                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;