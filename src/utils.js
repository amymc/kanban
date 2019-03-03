export const stages = {
  backlog: "Backlog",
  inProgress: "In Progress",
  completed: "Completed",
};

export const getKeyForStage = stage =>
  Object.keys(stages).find(key => stages[key] === stage);
