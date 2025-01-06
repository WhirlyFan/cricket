from flask import Blueprint
from flask_login import login_required
from app.models import db, Comment
from flask import request

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('')
@login_required
def comments():
    """
    Query for all comments and returns them in a list of comment dictionaries
    """
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/<int:id>')
@login_required
def comment(id):
    """
    Query for a comment by id and returns that comment in a dictionary
    """
    comment = Comment.query.get(id)
    if comment is None:
        return {'errors': ['Comment not found']}, 404
    return comment.to_dict()

@comment_routes.route('/post/<int:id>')
@login_required
def post_comments(id):
    """
    Query for all comments on a post and returns them in a list of comment dictionaries
    """
    comments = Comment.query.filter(Comment.post_id == id).all()
    return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/user/<int:id>')
@login_required
def user_comments(id):
    """
    Query for all comments by a user and returns them in a list of comment dictionaries
    """
    comments = Comment.query.filter(Comment.user_id == id).all()
    return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/post/<int:id>', methods=['POST'])
@login_required
def create_comment(id):
    """
    Create a comment on a post
    """
    data = request.json
    comment = Comment(
        content=data['content'],
        user_id=data['user_id'],
        post_id=id
    )
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()

@comment_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_comment(id):
    """
    Edit a comment
    """
    data = request.json
    comment = Comment.query.get(id)
    comment.content = data['content']
    db.session.commit()
    return comment.to_dict()

@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    """
    Delete a comment
    """
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {'message': 'Comment deleted'}
