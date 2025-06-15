import React from "react";
import { atom, getDefaultStore } from 'jotai';
import axios from "axios";

export const httpCountAtom = atom(0);

const store = getDefaultStore();

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
    store.set(httpCountAtom, (prev) => prev + 1);
    return config;
});

export default axiosInstance;