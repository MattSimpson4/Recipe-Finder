import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  House,
  CircleUser,
  Apple,
  BookHeart,
  ShoppingBasket,
  BookMarked,
  Settings,
  LogOut,
} from 'lucide-react';

export default function UserPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#f4f1de]">
      <aside className="w-64 bg-[#014433] text-white flex flex-col">
        <nav className="flex flex-col space-y-4 bg-[#014433] w-72 h-full p-4">
          <SidebarButton
            onClick={() => navigate('/user')}
            icon={<House color="#f4f1de" width={40} height={40} />}
            label="Home"
          />
          <SidebarButton
            onClick={() => navigate('/user/account')}
            icon={<CircleUser color="#f4f1de" width={40} height={40} />}
            label="Account"
          />
          <SidebarButton
            onClick={() => navigate('/user/ingredients')}
            icon={<Apple color="#f4f1de" width={40} height={40} />}
            label="Ingredients"
          />
          <SidebarButton
            onClick={() => navigate('/user/favorites')}
            icon={<BookHeart color="#f4f1de" width={40} height={40} />}
            label="Favorites"
          />
          <SidebarButton
            onClick={() => navigate('/user/shopping-list')}
            icon={<ShoppingBasket color="#f4f1de" width={40} height={40} />}
            label="Shopping"
          />
          <SidebarButton
            onClick={() => navigate('/user/recipes')}
            icon={<BookMarked color="#f4f1de" width={40} height={40} />}
            label="Recipes"
          />
          <SidebarButton
            onClick={() => navigate('/user/settings')}
            icon={<Settings color="#f4f1de" width={40} height={40} />}
            label="Settings"
          />
          <SidebarButton
            onClick={() => navigate('/')}
            icon={<LogOut color="#f4f1de" width={40} height={40} />}
            label="Logout"
          />
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-4">Welcome back!</h1>
        <p>This is your main user dashboard content.</p>
      </main>
    </div>
  );
}

function SidebarButton({
  onClick,
  icon,
  label,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full py-4 px-6 flex items-center gap-4 border border-none cursor-pointer bg-[#014433] hover:bg-[#013326] hover:text-[#014433] transition-colors duration-300 rounded-md"
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="text-sm text-[#F4f1de]">{label}</span>
    </button>
  );
}
