import axios from "axios";

const apiUrl = "http://localhost:3001/cards";

export function getCards() {
    return axios.get(apiUrl);
}

export function addCard(card) {
    return axios.post(apiUrl+ "/create", card);
}

export function updateCard(id, card) {
    return axios.put(apiUrl + "/" + id, card);
}
export function deleteCard(id) {
    return axios.delete(apiUrl + "/" + id)
}