import React, { useCallback } from 'react';
import { Form, Input, Button }  from 'antd';
import useinput from '../hooks/useinput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChangeCommentText] = useinput('');
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText); 
    }, [commentText]);
    return (
        <Form onFinish={onSubmitComment}>
          <Form.Item>
              <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
              <Button type="primary" htmlType="submit">삐약</Button>
          </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};
export default CommentForm;