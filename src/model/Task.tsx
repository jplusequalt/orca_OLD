export class Task {
  title: string;
  description: string;
  tag: string;
  assignee: string;
  status: string;

  constructor(title: string, description: string, tag: string, status: string, assignee: string) {
    this.title = title;
    this.description = description;
    this.tag = tag;
    this.status = status;
    this.assignee = assignee;
  }
}