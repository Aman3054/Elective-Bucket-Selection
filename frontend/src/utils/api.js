import axios from "axios";

/*
  IMPORTANT:
  Vite environment variables must be accessed using:
  import.meta.env.VITE_...

  Do NOT use process.env in Vite projects.
*/

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Debug log (you can remove later after confirming works)
console.log("API BASE URL =", API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Attach JWT token to authorized calls
export const withAuth = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// ================= AUTH =================

export const signup = async (payload) => {
  const res = await api.post("/auth/signup", payload);
  return res.data;
};

export const login = async (payload) => {
  const res = await api.post("/auth/login", payload);
  return res.data;
};

export const getCurrentUser = async (token) => {
  try {
    console.log("[api] getCurrentUser →", {
      baseURL: api.defaults.baseURL,
    });
    const res = await api.get("/auth/me", withAuth(token));
    console.log("[api] getCurrentUser success", res.status);
    return res.data;
  } catch (err) {
    console.error("[api] getCurrentUser error", {
      status: err.response?.status,
      data: err.response?.data,
    });
    throw err;
  }
};

// ================= ELECTIVES =================

export const fetchElectives = async (token) => {
  try {
    console.log("[api] fetchElectives called", {
      baseURL: api.defaults.baseURL,
      hasToken: !!token,
    });

    const res = await api.get("/electives", withAuth(token));

    console.log(
      "[api] fetchElectives success",
      res.status,
      res.data?.length
    );

    return res.data;
  } catch (err) {
    console.error("[api] fetchElectives error", {
      status: err.response?.status,
      data: err.response?.data,
    });
    throw err;
  }
};

export const fetchElectiveById = async (id, token) => {
  const res = await api.get(`/electives/${id}`, withAuth(token));
  return res.data;
};

// ================= QUIZ =================

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

// ================= RESULTS =================

export const fetchMyResults = async (token) => {
  const res = await api.get("/results/me", withAuth(token));
  return res.data;
};

export const fetchRecommendation = async (token) => {
  const res = await api.get("/results/recommendation", withAuth(token));
  return res.data;
};