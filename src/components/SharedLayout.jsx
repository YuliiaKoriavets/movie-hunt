import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink key="home" to="/" end>
            Home
          </NavLink>
          <NavLink key="movies" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading page...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
