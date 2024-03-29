import React, { ReactElement } from 'react';
import PostsService from 'services/PostsService';
import { Modal } from 'components/Modal';

type BlogModalProps = {
  params: {
    id: string;
  }
}

export default async function BlogModal({ params }: BlogModalProps): Promise<ReactElement> {
  const { id } = params;
  const post = await PostsService.getPostData(id);

  return (
    <Modal>
      {post.body}
    </Modal>
  )
};
