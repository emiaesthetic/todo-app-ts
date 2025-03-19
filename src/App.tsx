import Auth from '@/components/Auth';
import Main from '@/components/Main';
import AuthProvider from '@/context/authProvider';

const App = () => {
  return (
    <AuthProvider>
      <Auth />
      <Main />
    </AuthProvider>
  );
};

export default App;
