// src/resources/teachersResource.js
import { fetchTeachers } from "../lib/actions-users";

// This creates a "resource" that Suspense can read
let teachersPromise = null;
let teachersData = null;

export function fetchTeachersResource() {
  if (teachersData) return teachersData;

  if (!teachersPromise) {
    teachersPromise = fetchTeachers().then(data => {
      teachersData = data;
      return data;
    });
  }

  throw teachersPromise; 
}