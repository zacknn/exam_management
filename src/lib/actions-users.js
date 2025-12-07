export async function fetchUsers() {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchTeachers() {
    const allUsers = await fetchUsers();
    return allUsers.filter(u => u.role === 'teacher');
}