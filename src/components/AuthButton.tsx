import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const AuthButton = () => {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate("/auth");
  };

  return (
    <Button 
      onClick={handleAuthClick}
      className="bg-[#706FD3] hover:bg-[#706FD3]/90 text-white"
    >
      Login / Sign Up
    </Button>
  );
};