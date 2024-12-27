import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const AuthButton = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      setIsAuthenticated(event === "SIGNED_IN");
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  return (
    <Button 
      onClick={handleAuthClick}
      className="bg-[#706FD3] hover:bg-[#706FD3]/90 text-white"
    >
      {isAuthenticated ? 'Go to Dashboard' : 'Login / Sign Up'}
    </Button>
  );
};