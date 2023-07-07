export interface ArticleInsertDto {
  Title: string;
  Content: string;
  CreateTime?: Date;
  CreateUser?: string;
  FkCategoryId: number;
  Status?: boolean;
}
