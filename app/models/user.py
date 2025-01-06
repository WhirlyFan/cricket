from .db import db, is_production, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

followers = db.Table(
    'followers',
    db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id'))),
    db.Column('followed_id', db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')))
)

if is_production:
    followers.schema = SCHEMA

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if is_production:
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    about_me = db.Column(db.String(255), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def followed_users(self):
        followed = User.query.join(
            followers, (followers.c.followed_id == User.id)).filter(
                followers.c.user_id == self.id)
        return followed

    def follower_users(self):
        follower = User.query.join(
            followers, (followers.c.user_id == User.id)).filter(
                followers.c.followed_id == self.id)
        return follower

    def to_dict_base(self):
        return {
            'id': self.id,
            'username': self.username,
            # 'email': self.email,
            'about_me': self.about_me,
            # 'created_at': self.created_at,
            # 'updated_at': self.updated_at,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'about_me': self.about_me,
            "following": [user.to_dict_base() for user in self.followed_users()],
            "followers": [user.to_dict_base() for user in self.follower_users()],
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }