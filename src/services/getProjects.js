import { getLocalStorage, setLocalStorage } from "@/utils/localStorage.js";

const filePath = "/projects.json";
let projects;

export async function getProjects() {
  const isStored = getLocalStorage("projects");

  if (isStored) {
    return { data: isStored };
  }

  try {
    const response = await fetch(filePath);
    projects = await response.json();
    setLocalStorage("projects", projects);

    return { data: projects };
  } catch (e) {
    console.error("Error while loading datas", e);
  }
}
