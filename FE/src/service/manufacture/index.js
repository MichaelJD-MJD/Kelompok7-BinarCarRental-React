export const getManufacture = async (name, establishment, country) => {
    // const token = localStorage.getItem("token");
    let params;
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
        `${import.meta.VITE_API_URL}/manufactures` +
        new URLSearchParams(params);

    const response = await fetch(url, {
        method: "GET",
        headers: {
            // Authorization: `Bearer ${token}`,
        },
    });

    const result = await response.json();
    return result;
};
