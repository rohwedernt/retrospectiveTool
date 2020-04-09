const host = 'https://localhost:32768/api';

export async function sendGet(endpoint) {
    const url = `${host}/${endpoint}`;

    return fetch(url, {
        method: "GET",
    })
    .then(function (response) {
        return response.json();
    })
    .catch(function () {
        return {};
    });
}

export async function sendPut(endpoint, payload) {
    const url = `${host}/${endpoint}`;

    return fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(function (response) {
        return response.json();
    })
    .catch(function () {
        return {};
    });
}

export async function sendPost(endpoint, payload) {
    const url = `${host}/${endpoint}`;

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(function (response) {
        return response.json();
    })
    .catch(function () {
        return {};
    });
}

export async function sendDelete(endpoint) {
    const url = `${host}/${endpoint}`;

    return fetch(url, {
        method: "DELETE"
    })
    .then(function (response) {
        return response.json();
    })
    .catch(function () {
        return {};
    });
}