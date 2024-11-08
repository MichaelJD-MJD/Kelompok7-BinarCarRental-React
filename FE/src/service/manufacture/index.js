export const getManufacture = async (name, establishment, country) => {
    const token = localStorage.getItem("token");
    let params = {};
    if (name) {
        params.append("name", name);
    }
    if (establishment) {
        params.append("establishment", establishment);
    }
    if (country) {
        params.append("country", country);
    }

    let url =
        `${import.meta.env.VITE_API_URL}/manufactures` +
        new URLSearchParams(params);

    const response = await fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        console.error("Failed to fetch data:", response.statusText);
        return null;
    }

    const result = await response.json();
    return result;
};

export const getDetailManufacture = async (id) => {
    const token = localStorage.getItem("token");
    const url = `${import.meta.env.VITE_API_URL}/manufactures/${id}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        console.error("Failed to fetch data:", response.statusText);
        return null;
    }

    const result = await response.json();
    return result;
};

export const createManufacture = async (manufacture) => {
    const token = localStorage.getItem("token");
    const url = `${import.meta.env.VITE_API_URL}/manufactures`;

    const formData = new FormData();
    formData.append("name", manufacture.name);
    formData.append("description", manufacture.description);
    formData.append("establishment", manufacture.establishment);
    formData.append("country", manufacture.country);
    formData.append("office", manufacture.office);
    if (manufacture.logo) {
        formData.append("logo", manufacture.logo);
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        console.error("Failed to create manufacture:", response.statusText);
        return null;
    }

    const result = await response.json();
    return result;
};

export const updateManufacture = async (id, manufacture) => {
    const token = localStorage.getItem("token");
    const url = `${import.meta.env.VITE_API_URL}/manufactures/${id}`;

    const formData = new FormData();
    formData.append("name", manufacture.name);
    formData.append("description", manufacture.description);
    formData.append("establishment", manufacture.establishment);
    formData.append("country", manufacture.country);
    formData.append("office", manufacture.office);
    if (manufacture.logo) {
        formData.append("logo", manufacture.logo);
    }

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        console.error("Failed to update manufacture:", response.statusText);
        return null;
    }

    const result = await response.json();
    return result;
}

export const deleteManufacture = async (id) => {
    const token = localStorage.getItem("token");
    const url = `${import.meta.env.VITE_API_URL}/manufactures/${id}`;

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        console.error("Failed to delete manufacture:", response.statusText);
        return null;
    }

    const result = await response.json();
    return result;
};