import AuthContextProvider from "./AuthContext";
import DataContextProvider from "./DataContext";
import VideoContextProvider from "./VideoContext";

const index = ({ children }) => {
  return (
    <>
      <AuthContextProvider>
        <DataContextProvider>
          <VideoContextProvider>{children}</VideoContextProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default index;
