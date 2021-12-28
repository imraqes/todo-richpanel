export class Task {
  private _title: string;
  private _date: string;
  private _status: 'New' | 'Done' | 'Deleted';

  constructor(response: TaskResponse) {
    this._title = response.Title;
    this._date = response.Date;
    this._status = response.Status;
  }

  get title(): string {
    return this._title;
  }

  get date(): string {
    return this._date;
  }

  get isNew(): boolean {
    return this._status === 'New';
  }

  get isDone(): boolean {
    return this._status === 'Done';
  }

  get isDeleted(): boolean {
    return this._status === 'Deleted';
  }
}

export interface TaskResponse {
  Title: string;
  Date: string;
  Status: 'New' | 'Done' | 'Deleted'
};

export const TASKS: TaskResponse[] = [{
  Title: 'Complete ten push-ups',
  Date: 'Fri Aug 8',
  Status: 'New'
}, {
  Title: 'Interview scheduled for Mike',
  Date: 'Sun Aug 10',
  Status: 'New'
}, {
  Title: 'Meeting',
  Date: 'Sun Aug 10',
  Status: 'New'
}, {
  Title: 'Party at Jason\'s house',
  Date: 'Mon Aug 11',
  Status: 'Done'
}, {
  Title: 'Complete ten push-ups',
  Date: 'Fri Aug 8',
  Status: 'Deleted'
}];