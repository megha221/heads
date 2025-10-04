export const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  blogs: {
    getAll: () => fetch(`${API_BASE_URL}/blogs`).then(res => res.json()),
    create: (data) => fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  },
  announcements: {
    getAll: () => fetch(`${API_BASE_URL}/announcements`).then(res => res.json())
  }
};
