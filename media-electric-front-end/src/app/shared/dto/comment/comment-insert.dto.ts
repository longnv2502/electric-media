export interface CommentInsertDto {
  FkArticleId: number;
  ParentCommentId?: number;
  CommentContent: string;
  FkUserId: number;
}
