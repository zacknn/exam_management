// src/resources/groupeDetailResource.js
import { fetchGroupeById } from "../lib/actions-groupes";

let currentPromise = null;

function wrapPromise(promise) {
  let status = "pending";
  let result;
  const suspender = promise.then(
    r => { status = "success"; result = r; },
    e => { status = "error"; result = e; }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    }
  };
}

export function fetchGroupeDetailResource(groupeId) {
  if (!currentPromise || currentPromise.id !== groupeId) {
    currentPromise = wrapPromise(fetchGroupeById(groupeId));
    currentPromise.id = groupeId; // to know when to refetch
  }
  return currentPromise.read();
}