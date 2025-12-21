// src/resources/moduleResource.js
import { fetchModules } from "../lib/actions-modules";

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

export function fetchModulesResource() {
  if (!currentPromise) {
    currentPromise = wrapPromise(fetchModules());
  }
  return currentPromise.read();
}