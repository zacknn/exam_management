import { fetchGroupesWithStudents } from "../lib/actions-groupes";

// This version works EVERY time — even in StrictMode
let currentPromise = null;

function wrapPromise(promise) {
  let status = "pending";
  let result;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      if (status === "success") return result;
    },
  };
}

export function fetchGroupesResource() {
  if (!currentPromise) {
    currentPromise = wrapPromise(fetchGroupesWithStudents());
  }
  return currentPromise.read();
}