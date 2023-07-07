import {CategoryResponseDto} from "../category/category-response.dto";

export interface ArticleResponseDto {
  ArticleId: number;
  Title: string;
  Content: string;
  CreateTime?: Date;
  UpdateTime?: Date;
  CreateUser?: string;
  UpdateUser?: string;
  CategoryId: number;
  Status?: boolean;
  Category: CategoryResponseDto;
}
