export const stages = {
  backlog: "Backlog",
  inProgress: "In Progress",
  completed: "Completed",
};

export const getKeyForStage = stage =>
  Object.keys(stages).find(key => stages[key] === stage);

export const getTasksByStage = (tasks, stage) => {
  return Object.keys(tasks).reduce(function(filteredTasks, currentId) {
    if (tasks[currentId].stage === stage)
      filteredTasks[currentId] = tasks[currentId];
    return filteredTasks;
  }, {});
};
