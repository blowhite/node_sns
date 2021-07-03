import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone }from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
     const [liked, setLiked] = useState(false);
     const [commentFormOpend, setCommentFormOpened] = useState(false);
     const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);         
     }, []);
     const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);         
     }, []);
     const id  = useSelector((state) => state.user.me?.id);
    return (
        <div>
           <Card
             cover={post?.images[0] && <PostImages images={post?.images} />}
             actions={[
                 <RetweetOutlined key="retweet"/>,
                 liked 
                    ?<HeartTwoTone twoToneColor='#eb2f96' key="heart" onClick={onToggleLike}/>
                    :<HeartOutlined key="heart" onClick={onToggleLike}/>
                    
                    ,
                 <MessageOutlined key="comment" onClick={onToggleComment}/>, 
                 <Popover key="more" content = {(
                     <Button.Group>
                        {id && post.user.id === id? (
                        <>
                          <Button>수정</Button>
                          <Button type="danger">삭제</Button>
                        </>
                        ) : <Button>신고</Button>}                        
                     </Button.Group>
                 )}>
                     <EllipsisOutlined/>
                 </Popover>
             ]}  
           >
               <Card.Meta
                 avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
                 title={post.user.nickname}
                 description={<PostCardContent postData={post.content} />}
                 />
                 
               {/* <Button> */}
                   {/* <Images /> */}
                   {/* <Content /> */}
                   {/* <Button></Button> */}
               {/* </Button> */}
               <br />
               {commentFormOpend && (
                   <div>
                       <CommentForm post={post}/>
                       <List 
                         header={`${post.comments.length}개의 댓글`}
                         itemLayout="horizontal"
                         dataSource={post.comments}
                         renderItem={(item) => (
                             <li>
                                 <Comment 
                                   author={item.user.nickname}
                                   avatar={<Avatar>{item.user.nickname[0]}</Avatar>}
                                   content={item.content}
                                 />
                             </li>
                         )}
                       />
                   </div>
               )}
               {/* <CommentForm></CommentForm> */}
               {/* <Comment /> */}
           </Card>
        </div>
    );
};
PostCard.propTypes = {
  post: PropTypes.shape({
      id: PropTypes.number,
      User: PropTypes.object,
      content: PropTypes.string,
      create: PropTypes.object,
      Comments: PropTypes.arrayOf(PropTypes.object),
      Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default PostCard;