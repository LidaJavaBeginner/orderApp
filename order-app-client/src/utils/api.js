const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function getApi(path) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`GET ${path} failed: ${response.status}`);
  }

  return response.json();
}

export async function postApi(path, body) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`POST ${path} failed: ${response.status}`);
  }

  return response.json();
}
