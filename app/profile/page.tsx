import { getServerSession } from 'next-auth';
import { ReactElement } from 'react';
import { authConfig } from 'configs/auth';
import styles from 'styles/pages/Profile.module.scss';
import Image from 'next/image';

export default async function ProfilePage(): Promise<ReactElement> {
  const session = await getServerSession(authConfig);

  const {
    email: userEmail,
    image: userImage,
    name: userName
  } = session?.user || {};

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{userName}&apos;s profile</h1>
      <h2 className={styles.email}>{userEmail}</h2>
      {userImage && (
        <div className={styles.imageWrapper}>
          <Image
            alt='user image'
            className={styles.userImage}
            src={userImage}
            fill
          />
        </div>
      )}
    </div>
  )
};
