import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "../Container/Container";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";

const HomePage = lazy(() =>
  import("../../views/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import(
    "../../views/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "../../views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Toaster position="top-right" />
    </Container>
  );
}

export default App;
