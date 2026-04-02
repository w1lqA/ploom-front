import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAuthStore } from "@/features/auth/stores/auth.store";
import { Profile } from "@/features/profile/components/Profile";
import { Navigate } from "react-router";
import { toast } from "sonner";

export const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  const handleEditProfile = () => {
    toast.info("Функционал обновления профиля в разработке");
  }

  return <Profile onEditProfile={handleEditProfile} user={user} onLogout={logout} />;
};