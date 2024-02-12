export const DEFAULT_CARDS= [
    // BACKLOG
    { title: "Look into render bug in dashboard", id: "1",price: 10,  column: "backlog" },
    { title: "SOX compliance checklist", id: "2", price: 20, column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", price: 30, column: "backlog" },
    { title: "Document Notifications service", price: 40, id: "4", column: "backlog" },
    // TODO
    {
      title: "Research DB options for new microservice",
      id: "5",
      price: 50,
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", price: 60, column: "todo" },
    { title: "Sync with product on Q3 roadmap", price: 70, id: "7", column: "todo" },
  
    // DOING
    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      price: 80,
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", price: 90, column: "doing" },
    // DONE
    {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      price: 100,
      column: "done",
    },
  ];