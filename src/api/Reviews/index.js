import apiClient from '../apiClient';
import { getTokens } from '../../utils/';

//MEMO: 리뷰 목록 조회
export const getMovieReviews = (id) => {
  return apiClient.get(`/reviews/movie/${id}`);
};

export const getUserReviews = (userId) => {
  return apiClient.get(`/reviews/users/${userId}`);
};

export const getMovieMyReview = (id) => {
  return apiClient.get(`/reviews/movie/${id}/me`);
};

export const getReviewDetail = (id) => {
  return apiClient.get(`/reviews/${id}/detail`);
};

export const createReview = (id, body) => {
  return apiClient.post(`/reviews/${id}`, body);
};

export const modifyReview = (id, body) => {
  return apiClient.patch(`/reviews/${id}`, body);
};
export const deleteReview = (id) => {
  return apiClient.delete(`/reviews/${id}`);
};

//리뷰댓글 생성 id - 리뷰 id
export const createComment = (id, body) => {
  return apiClient.post(`/reviews/${id}/comments`, body);
};
//리뷰댓글 수정 id - 댓글 id
export const modifyComment = (id, body) => {
  return apiClient.patch(`/reviews/comments/${id}`, body);
};
//리뷰댓글 삭제 id - 댓글 id
export const deleteComment = (id) => {
  return apiClient.delete(`/reviews/comments/${id}`);
};
//리뷰 좋아요
export const createReviewLike = (id) => {
  return apiClient.post(`/reviews/${id}/like`);
};
export const deleteReviewLike = (id) => {
  return apiClient.delete(`/reviews/${id}/like`);
};

//Admin - CMS 로그인
//MEMO: 리뷰목록조회
export const getReviews = (page, limit, name, orderBy, sortBy) => {
  return apiClient.get('/reviews', {
    params: {
      page,
      limit,
      name,
      orderBy,
      sortBy,
    },
  });
};

//MEMO: 영화 리뷰 수 구하기
export const getReviewsCount = () => {
  return apiClient.get(`/reviews/count`);
};

//MEMO: 리뷰 삭제
export const deleteReviewAdmin = (id) => {
  return apiClient.delete(`/reviews/${id}/admin`);
};

//MEMO: 내 리뷰들 가져오기
export const getMyReviews = () => {
  return apiClient.get(`/reviews/me`);
};

//MEMO: 내 리뷰 댓글 조회
export const getMyComments = () => {
  return apiClient.get(`/reviews/comments/me`);
};

// 리뷰 수정
export const patchReview = (id, body) => {
  return apiClient.patch(`/reviews/${id}/admin`, body);
};
