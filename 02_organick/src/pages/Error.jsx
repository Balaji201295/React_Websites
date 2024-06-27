import { Link, useRouteError } from "react-router-dom";
import { Button } from "../components";
import { Navbar, Footer } from "../containers";
import styles from "../style";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section>
      <Navbar />
      <div
        id="error-page"
        className={`${styles.boxWidth} bg_error bg__img mt-20`}
      >
        <div
          className={`${styles.padding} w-full md:ml-auto md:max-w-[50%] flex flex-col justify-end items-start gap-2`}
        >
          <h1 className="text-8xl ss:text-9xl md:text-[140px] font-bold text-primary/30">
            404
          </h1>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize text-primary">
            Page {error.statusText || error.message}
          </h3>
          <p className={`${styles.paragraph}`}>
            The page you are looking for doesn't exists or has been removed.
          </p>
          <Link to="/" className="mt-6">
            <Button label="Go to HomePage" />
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}
