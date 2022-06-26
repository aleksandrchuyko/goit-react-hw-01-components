import { ProfileCard } from "./ProfileCard/ProfileCard";
import user from "../data/user.json";

export const App = () => {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ProfileCard user={user} />
    </main>
  );
};
