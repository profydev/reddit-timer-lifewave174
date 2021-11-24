import React from 'react';
import PropTypes from 'prop-types';

import { H1 } from '../../../styling/sharedstyles';
import {
    PostsTable,
    PostTableRow,
    PostTableHeader,
    PostTableCells,
} from './PostTable.style';

const PostTable = ({ postsPerHour }) => {
    return (
        <>
            <H1>Posts</H1>
            <PostsTable>
                <thead>
                    <PostTableRow>
                        <PostTableHeader>Title</PostTableHeader>
                        <PostTableHeader>Time Posted</PostTableHeader>
                        <PostTableHeader>Score</PostTableHeader>
                        <PostTableHeader>Comments</PostTableHeader>
                        <PostTableHeader>Author</PostTableHeader>
                    </PostTableRow>
                </thead>
                <tbody>
                    {postsPerHour.map(posts => {
                        return (
                            <PostTableRow>
                                <PostTableCells>{posts.title}</PostTableCells>
                                <PostTableCells>
                                    {posts.timeForPostTable.substring(0, 4) < 12
                                        ? posts.timeForPostTable.substring(
                                              0,
                                              5
                                          ) + ' am'
                                        : posts.timeForPostTable.substring(
                                              0,
                                              5
                                          ) + ' pm'}
                                </PostTableCells>
                                <PostTableCells>{posts.score}</PostTableCells>
                                <PostTableCells>
                                    {posts.comments}
                                </PostTableCells>
                                <PostTableCells>{posts.author}</PostTableCells>
                            </PostTableRow>
                        );
                    })}
                </tbody>
            </PostsTable>
        </>
    );
};

PostTable.propTypes = {
    postsPerHour: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            timeForPostTable: PropTypes.string.isRequired,
            score: PropTypes.string.isRequired,
            comments: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        })
    ),
};

export default PostTable;
