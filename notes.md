# Cohort Notes

## Bonus Class 1

- **Have a problem statement:** Clearly define the problem you want to solve.
- **Continuous process:** Building is an iterative journey, not a one-day task.
- **Product vs Project:**
  - Aim to build a **product**, not just a **project**.
- **Consistency:** Show up and work every single time.

---

## Bonus Class 2

### Understanding Version Control

- **What is a version?**
  - It tracks changes and provides checkpoints to revisit specific states of your code.
- **Why was it needed?**
  - To maintain history, collaborate effectively, and reduce risks of losing progress.
- **What is VCS?**
  - Version Control System: Stores the history of code via checkpoints, akin to saving levels in a game.
- **Examples of VCS (other than Git):**
  - Subversion (SVN)
  - Mercurial
- **Common misconceptions:**
  - **Is Git a cloud storage tool?** No, Git is a distributed version control tool.
  - **Does Git require the internet?** No, it works offline; internet is only required for remote interactions.

### Basic Linux Commands

- `mkdir` – Create a new directory.
- `touch` – Create an empty file.
- `cd` – Change directory.
- `..` – Navigate to the parent directory.
- `./` – Reference the current directory.
- `./secondLayer/` – Navigate to a subdirectory.

### Key Git Commands

| Command            | Description                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------|
| `git init`         | Initialize a new Git repository.                                                           |
| `git add`          | Stage changes for commit.                                                                  |
| `git status`       | View the status of the working directory and staging area.                                  |
| `git commit`       | Save staged changes with a message; every commit gets a unique hash code.                  |
| `git diff`         | Highlight differences between files.                                                       |
| `git diff HEAD~1`  | Show differences between the last commit and the current file.                              |
| `git log`          | Display commit history.                                                                    |
| `git checkout`     | Switch to a specific commit or branch.                                                     |
| `git reset`        | Unstage or revert to a specific commit.                                                    |
| `git branch`       | List or create branches.                                                                   |
| `git checkout -b`  | Create a new branch and switch to it.                                                      |
| `git merge`        | Merge two branches.                                                                        |
| `git rebase`       | Reapply commits on top of another base tip.                                                |
| `git pull`         | Fetch and integrate changes from a remote repository.                                      |
| `git push`         | Push changes to a remote repository.                                                       |
| `git clone`        | Clone a repository from a remote source.                                                   |
| `git remote`       | Manage remote repository connections.                                                      |
| `git fetch`        | Fetch updates from a remote repository without merging.                                    |
| `git reset hash`   | Move the HEAD to a specific commit (unstaging future changes).                             |
| `git reset --hard` | Permanently revert to a specific commit, deleting future changes.                          |

---

### GitHub

#### Key Concepts

- **What is GitHub?**
  - A cloud-based platform for hosting and collaborating on Git repositories.
- **Git vs. GitHub:**
  - **Git:** A version control system for tracking changes locally.
  - **GitHub:** A platform for sharing and collaborating on Git projects.

#### GitHub Tools and Features

- **GitHub CLI:** Command-line interface for managing repositories on GitHub.
- **GitHub Pages:** A feature for hosting static websites directly from a repository.
- **GitHub Actions:** Automate workflows (e.g., CI/CD pipelines).
- **GitHub Gist:** A platform for sharing code snippets or notes.
- **GitHub Repository:** A project folder stored on GitHub containing all related files and history.

