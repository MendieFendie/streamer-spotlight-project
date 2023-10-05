import React from "react";
import css from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <section className={css.page404}>
        <div className={css.container}>
          <div className={css.row}>
            <div className={css.col_sm_10}>
              <div className={css.four_zero_four_bg}>
                <h1 className={css.text_center}>404</h1>
              </div>

              <div className={css.contant_box_404}>
                <h3 className={css.h2}>Look like you're lost</h3>

                <p>The page you are looking for is not available!</p>

                <a href="/" className={css.link_404}>
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
