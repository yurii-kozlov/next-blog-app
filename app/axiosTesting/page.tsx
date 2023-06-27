import { ReactElement } from 'react';
import MainService from 'services/MainService';
import Link from 'next/link';
import styles from 'app/axiosTesting/page.module.scss';

const AxiosTesting = async (): Promise<ReactElement> => {
  const { footerLinksList: testingLinks } = await MainService.getMainData();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Axios Testing</h1>
      <ul className={styles.linksList}>
        {testingLinks.map((link) => {
          const { title, link: href } = link;

          return (
            <li className={styles.listItem} key={title}>
              <Link href={href}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default AxiosTesting;
