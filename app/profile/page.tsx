import UserProfilePage, { UserProfile } from "@/componets/UserProfilePage/UserProfilePage";

const mockUser: UserProfile = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 234 567 8900',
  avatar: 'https://example.com/avatar.jpg', // Optional
  address: '123 Main St, Anytown, USA',
  ordersCount: 12,
  totalSpent: 1567.89,
};

function ProfilePage() {
  const handleLogout = () => {
    // Handle logout logic (e.g., clear auth, redirect to login)
    console.log('Logging out...');
  };

  const handleEditProfile = () => {
    // Optional: Open modal or navigate to edit page
    console.log('Editing profile...');
  };

  return (
    <UserProfilePage
      user={mockUser}
    />
  );
}

export default ProfilePage;