export const getTypes = async (type) => {
  const token = localStorage.getItem("token");
  let params = {}; // Inisialisasi params sebagai objek kosong

  if (type) {
    params.type = type;
  }

  let url =
    `${import.meta.env.VITE_API_URL}/types?` + new URLSearchParams(params);

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  // Periksa apakah respons berhasil
  if (!response.ok) {
    console.error("Failed to fetch data:", response.statusText);
    return null;
  }

  const result = await response.json();
  return result;
};

export const getDetailType = async (id) => {
  const token = localStorage.getItem("token");

  let url = `${import.meta.env.VITE_API_URL}/types/${id}`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  // get data
  const result = await response.json();
  return result;
};

export const createType = async (request) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("type", request.type);
  formData.append("description", request.description);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/types`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: formData,
  });

  // get the data if fetching succeed!
  const result = await response.json();
  return result;
};

export const updateType = async (id, request) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("type", request.type);
  formData.append("description", request.description);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/types/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "PUT",
    body: formData,
  });

  // get the data if fetching succeed!
  const result = await response.json();
  return result;
};

export const deleteType = async (id) => {
  const token = localStorage.getItem("token");

  let url = `${import.meta.env.VITE_API_URL}/types/${id}`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });

  // get data
  const result = await response.json();
  return result;
};
