from flask import Blueprint
from flask_login import login_required
from app.models import db, Post
from flask import request

post_routes = Blueprint('posts', __name__)


@post_routes.route('')
@login_required
def posts():
    """
    Query for all posts and returns them in a list of post dictionaries
    """
    posts = Post.query.all()
    if len(posts) == 0:
        return {'errors': ['No posts found']}, 404
    return {'posts': [post.to_dict() for post in posts]}

@post_routes.route('/<int:id>')
@login_required
def post(id):
    """
    Query for a post by id and returns that post in a dictionary
    """
    post = Post.query.get(id)
    if post is None:
        return {'errors': ['Post not found']}, 404
    return post.to_dict()

@post_routes.route('/user/<int:id>')
@login_required
def user_posts(id):
    """
    Query for all posts by a user and returns them in a list of post dictionaries
    """
    posts = Post.query.filter(Post.user_id == id).all()
    if len(posts) == 0:
        return {'errors': ['No posts found']}, 404
    return {'posts': [post.to_dict() for post in posts]}
