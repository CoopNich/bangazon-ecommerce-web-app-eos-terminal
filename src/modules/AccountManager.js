const remoteURL = "http://localhost:8000";

export default {
  getAll() {
    return fetch(`${remoteURL}/account`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
      },
    }).then((result) => result.json());
  },
  update(editedInfo) {
    return fetch(`${remoteURL}/account/${editedInfo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
      },
      body: JSON.stringify(editedInfo),
    });
  },
};
