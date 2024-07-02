import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  email: localStorage.getItem("email") || null,
  firstName: localStorage.getItem("firstName") || null,
  login: async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/users/login",
        { email, password }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      set({ token });
      await useAuthStore.getState().fetchUserDetails(token);
    } catch (error) {
      console.error("Login error", error);
    }
  },
  register: async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/users/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      alert("User registered");
      const token = response.data.token;
      localStorage.setItem("token", token);
      set({ token });
      await useAuthStore.getState().fetchUserDetails(token);
    } catch (error) {
      console.error("Registration error", error);
    }
  },
  fetchUserDetails: async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:3005/api/users/details",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { email, firstName } = response.data;
      localStorage.setItem("email", email);
      localStorage.setItem("firstName", firstName);
      set({ email, firstName });
    } catch (error) {
      console.error("Fetching user details error", error);
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    set({ token: null, email: null, firstName: null });
  },
}));

export default useAuthStore;
