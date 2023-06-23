'use client';

import { FC, KeyboardEventHandler, ReactElement, ReactNode, useCallback, useEffect } from 'react';
import styles from 'components/Modal/Modal.module.scss';
import { useRouter } from 'next/navigation';

type ModalProps = {
  children: ReactNode
};

export const Modal: FC<ModalProps> = ({ children }): ReactElement => {
  const router = useRouter();

  const closeModal = useCallback(() => {
    router.back();
  }, [router])

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, [closeModal])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown])

  const handleClick = (): void => router.back();

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event): void => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  return (
    <div
      aria-label='close popup'
      className={styles.modalWrapper}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div
        className={styles.modalContent}
        onClick={(e): void => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
};
