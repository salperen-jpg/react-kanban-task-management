export const getCategories = (tasks) => {
  return [...new Set(tasks.map((task) => task.category))];
};

export const getTasks = (tasks, stat) => {
  return tasks.filter((task) => task.category === stat);
};
