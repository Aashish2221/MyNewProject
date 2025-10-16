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
  return (
    <UserProfilePage
      user={mockUser}
    />
  );
}

export default ProfilePage;