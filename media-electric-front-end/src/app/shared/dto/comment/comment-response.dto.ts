export interface CommentResponseDto {
  CommentId: number;
  ParentCommentId?: number;
  FkArticleId: number;
  AricleTitle: string;
  CommentContent: string;
  CreateTime?: Date;
  UpdateTime?: Date;
  FkUserId: number;
  Username: string;
  UserRole: string;
  Status?: boolean;
  Report?: boolean;
  ChildrenComments?: CommentResponseDto[];
}
