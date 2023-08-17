export interface TodoItem {
  id: number;
  title: string;
  completed?: boolean;
  isEdit?: boolean;
  dateStart?: Date;
  dateCompeted?: Date;
  author?: string;
}
