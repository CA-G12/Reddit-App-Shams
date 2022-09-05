BEGIN;

INSERT INTO users(username, email, password, image_url) VALUES
('shams elkhoudary', 'shamskh@gmail.com', '$2a$10$XZeXa.GuFiqfg31iV6Ghb.x2XmDAyKoDhdOtOGTAQMp/5WdTu9LjC', 'https://www.reddit.com/r/Re_Zero/comments/jizfrn/media_i_created_emilia_in_reddit_avatar/'),
('mostafa balousha', 'mostafa@gmail.com' , '$2a$10$iTgWJG8W.skELc6IyVQMYOIAls4wN7u.zDJhkohnrMy46n5iOQcAu', 'https://www.reddit.com/r/PSIkiKusuo/comments/jxj1fh/i_did_my_best_to_make_the_reddit_avatar_look_like/');

INSERT INTO posts(content, post_image, user_id) VALUES
('My first travel around the world', 'https://www.wanderella.co/wp-content/uploads/2018/10/sabrinatrip.jpg', 1),
('What a goal !! Karim Benzema!!', 'https://atalayar.com/sites/default/files/styles/foto_/public/noticias/karim-benzema-real-madrid%20%282%29_0.jpg?itok=BxDpSznV', 2);

COMMIT;