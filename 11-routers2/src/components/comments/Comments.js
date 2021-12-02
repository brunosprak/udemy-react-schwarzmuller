import { useState } from 'react';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router';
import { getAllComments } from '../../lib/api';
import { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import CommentList from '../comments/CommentsList';
import { useCallback } from 'react';

const Comments = () => {

  
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments, true);

  const { id: quoteId } = params;

  useEffect(()=>{
    sendRequest(quoteId);
  },[sendRequest, quoteId]);

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let content;

  if( status === 'pending'){ 
    content =  <div className='centered'><LoadingSpinner /></div>;
  } 

  if( status === 'completed' && (loadedComments && loadedComments.length > 0)){ 
    content =  <CommentList comments={loadedComments} />
  } 

  if( status === 'completed' && (!loadedComments || loadedComments.length === 0)){ 
    content =  <p>No comments yet.</p>
  } 
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={addedCommentHandler} quoteId={params.id} />}
      {content}
    </section>
  );
};

export default Comments;
