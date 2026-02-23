import axios from "axios";

// Use environment-based API URL so the same build
// works locally and on Vercel/Render without code changes.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
});

// Attach JWT token to authorized calls.
export const withAuth = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const signup = async (payload) => {
  const res = await api.post("/auth/signup", payload);
  return res.data;
};

export const login = async (payload) => {
  const res = await api.post("/auth/login", payload);
  return res.data;
};

export const getCurrentUser = async (token) => {
  const res = await api.get("/auth/me", withAuth(token));
  return res.data;
};

export const fetchElectives = async (token) => {
  const res = await api.get("/electives", withAuth(token));
  return res.data;
};

export const fetchElectiveById = async (id, token) => {
  const res = await api.get(`/electives/${id}`, withAuth(token));
  return res.data;
};

export const fetchQuestions = async (electiveId, token) => {
  const res = await api.get(
    `/quiz/${electiveId}/questions`,
    withAuth(token)
  );
  return res.data.questions;
};

export const submitQuiz = async (electiveId, answers, token) => {
  const res = await api.post(
    `/quiz/${electiveId}/submit`,
    { answers },
    withAuth(token)
  );
  return res.data;
};

export const fetchMyResults = async (token) => {
  const res = await api.get("/results/me", withAuth(token));
  return res.data;
};

export const fetchRecommendation = async (token) => {
  const res = await api.get("/results/recommendation", withAuth(token));
  return res.data;
};

