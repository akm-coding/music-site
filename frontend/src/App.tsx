import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AuthCallback from "./pages/auth-callback/AuthCallback";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import Chat from "./pages/chat/Chat";
import Album from "./pages/album/Album";
import Admin from "./pages/admin/Admin";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback signUpForceRedirectUrl="/auth-callback" />
          }
        />
        <Route path="/auth-callback" element={<AuthCallback />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/albums/:albumId" element={<Album />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
