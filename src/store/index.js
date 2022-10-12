import { defineStore } from 'pinia';

export const useAPIstore = defineStore('API', () => {
    const HOST = "http://127.0.0.1";
    const PORT = "8000";
    const API_URL = `${HOST}:${PORT}/api` ;
    const HEADERS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }
    return { API_URL, HEADERS }
  })