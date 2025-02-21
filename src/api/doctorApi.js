import axios from "axios";
import { API_BASE_URL } from "../config";
import { useLocation } from "react-router-dom";

export const fetchDoctors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/doctors`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch doctors");
  }
};

export const fetchSingleDoctor = async (doctorId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/doctors/${doctorId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch doctors");
  }
};

export const fetchAvailableSlots = async (doctorId, selectedDate) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/doctors/${doctorId}/slots?date=${selectedDate}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch doctors");
  }
};
