BEGIN;

DROP TABLE IF EXISTS users, posts, comments, votes CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE,
  password VARCHAR(100) NOT NULL,
  image_url TEXT DEFAULT 'https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg'
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  post_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  image_url TEXT NULLABLE DEFAULT 'https://www.redditstatic.com/icon.png'
  user_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INT,
  post_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_post_id FOREIGN KEY(post_id) REFERENCES posts(id)
);

CREATE TABLE votes(
  id SERIAL PRIMARY KEY,
  user_id INT,
  post_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id),
  CONSTRAINT fk_post_id FOREIGN KEY(post_id) REFERENCES posts(id)
);

COMMIT;