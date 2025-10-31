/*
createRestaurant example 
{
    "ownerID": "1234"
    "restaurantID": "5678"
    "name": "TickingCafe"
    "address": "Melrose Av. 0210"
}
*/

async function createRestaurant(params) {
    const response = await fetch(`${API_URL}/restaurants`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
     });
     if (!response.ok) {
        if (response.status === 400) {
            throw new Error('Datos inválidos o incompletos');
        } else if (response.status === 409) {
            throw new Error('Ya existe un restaurante con ese ID');
        }
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
}


async function getRestaurants(params) {
    const response = await fetch(`${API_URL}/restaurants`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            }
     });
     const data = await response.json();
     console.log(data);
}

async function getRestaurantByID(restaurantId) {
    const response = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            }
     });
     const data = await response.json();
     console.log(data);
}

async function deleteRestaurantByID(restaurantId) {
    const response = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            }
     });
     const data = await response.json();
     console.log(data);
}

async function updateRestaurant(restaurantId, restaurantData) {
    const response = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurantData)
    });
    const data = await response.json();
    console.log(data);
    return data;
}

//post put delete
