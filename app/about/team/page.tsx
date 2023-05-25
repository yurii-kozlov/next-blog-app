import { NextPage } from "next";
import { ReactElement } from "react";
import styles from 'app/about/page.module.scss';

const Team: NextPage = (): ReactElement => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Team page</h1>
  </div>
)

export default Team;
