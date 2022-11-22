import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.WS_BASE_URL,
});

export const getTest = async () => instance.get("");

export const register = async (name, email, password, phone, agency, role) =>
  instance.post("users/register", { name, email, password, phone, agency, role });

export const confirmRegister = async (id) => instance.post(`users/confirm/${id}`);

export const forgotPassword = async (email) => instance.post("users/forgotpassword", { email });

export const confirmReset = async (id, password) =>
  instance.post(`users/resetpass/${id}`, { password });

export const login = async (email, password) => instance.post("users/login", { email, password });

export const logout = async (token) => instance.post("users/logout", { token });

export const edit = async (userID, name, email) =>
  instance.post("/users/edit", { userID, name, email });
