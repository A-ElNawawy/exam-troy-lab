import Nav from "./Nav/Nav";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      {/*<header className={styles.header}>header</header>*/}

      <main className={styles.main}>
        <section className={styles.content}>content</section>
        <aside className={styles.aside}>aside</aside>
      </main>
      <Nav />
    </div>
  );
};

export default Layout;
