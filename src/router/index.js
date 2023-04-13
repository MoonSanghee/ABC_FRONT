import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '../components/Layout';
import {
  TestIm,
  TestJo,
  TestMoon,
  TestKim,
  TestSeo,
  TestKim2,
} from '../pages/Test';
import { StartPage } from '../pages/Auth';
import Feedback from '../pages/Test/Feedback';
import MyPageLayout from '../components/Layout/MyPageLayout';
import Profile from '../pages/MyPage/Profile';
import FAQ from '../pages/MyPage/FAQ';
import {
  HomePage,
  MovieDetailPage,
  MovieSearchPage,
  ReviewsPage,
  UserDetailPage
} from '../pages';
import {
  LoginPage,
  RegisterPage,
  AdminLoginPage,
  AdminRegisterPage,
  LogoutPage,
  RegisterGenrePage,
} from '../pages/Auth';
import {
  ManageFAQsPage,
  ManageMoviesPage,
  ManageReviewsPage,
  ManageUsersPage,
} from '../pages/Admin';
import { LogoutIcon } from '../assets/icon';

import Review from '../pages/MyPage/Review';
import Like from '../pages/MyPage/Like';

const router = (
  <Route path="/">
    <Route index element={<StartPage />} />
    <Route path="test">
      <Route path="im" element={<TestIm />} />
      <Route path="moon" element={<TestMoon />} />
      <Route path="kim" element={<TestKim />} />
      <Route path="kim2" element={<TestKim2 />} />
      <Route path="jo" element={<TestJo />} />
      <Route path="seo" element={<TestSeo />} />
      <Route path="feedback" element={<Feedback />} />
    </Route>
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />
    <Route path="registerGenre" element={<RegisterGenrePage />} />

    <Route path="logout" element={<LogoutPage />} />

    <Route path="movies" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="detail/:id" element={<MovieDetailPage />} />
      <Route path="search" element={<MovieSearchPage />} />
      <Route path="detail/:id/reviews" element={<ReviewsPage />} />
      <Route path="user/:id" element={<UserDetailPage />} />
      <Route path="mypage" element={<MyPageLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="profile" element={<Profile />} />
        <Route path="like" element={<Like />} />
        <Route path="review" element={<Review />} />
      </Route>
    
    </Route>

    <Route path="admin">
      <Route index element={<ManageMoviesPage />} />
      <Route path="manageReviews" element={<ManageReviewsPage />} />
      <Route path="manageUsers" element={<ManageUsersPage />} />
      <Route path="manageFAQs" element={<ManageFAQsPage />} />
      <Route path="login" element={<AdminLoginPage />} />
      <Route path="register" element={<AdminRegisterPage />} />
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
