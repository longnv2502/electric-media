export interface CategoryResponseDto {
  CategoryId: number;
  CategoryName: string;
  Children: CategoryResponseDto[];
}
