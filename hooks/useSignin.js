import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useSignin = () => {
  const navigate = useNavigate();

  // Signup Function
  const signin = async (username, email, password, category) => {
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          category: category,
        }),
      });

      const responseData = await response.json();

      if (response.status === 200) {
        toast.success("Your Account Has Been Created");
      } else {
        toast.error(responseData.message || "Connection error", {
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", { theme: "dark" });
      console.error("Error during signup:", error);
    }
  };

  // Login Function
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const responseData = await response.json();

      if (response.status === 200) {
        localStorage.setItem("x-auth-token", responseData.token); // Save token in local storage
        console.log("User token:", responseData.token);

        // Redirect to the protected route or homepage
        navigate("/dashboard"); // Example: navigate to user dashboard
      } else {
        toast.error(responseData.message || "Invalid credentials", {
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", { theme: "dark" });
      console.error("Error during login:", error);
    }
  };

  return { signin, login };
};
