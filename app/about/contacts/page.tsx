import { NextPage } from "next";
import { ReactElement } from "react";
import styles from 'app/about/page.module.scss';

const Contacts: NextPage = (): ReactElement => (
  <h1 className={styles.title}>Contact page</h1>
)

export default Contacts;
