CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  priority INT,
  project_id INT NOT NULL,
  status_id INT NOT NULL,
  begin_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects (id)
);
