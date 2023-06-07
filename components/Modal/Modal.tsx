"use client";

import { FC, ReactElement, ReactNode, useCallback, useEffect, useRef } from "react";
import styles from 'components/Modal/Modal.module.scss';
import { useRouter } from "next/navigation";

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

  const handleClick = () => router.back();

  return (
    <div 
      className={styles.modalWrapper}
      onClick={handleClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContent}
      >
        {children}
      </div>
    </div>
  );
};
