create table users (
    id serial primary key,
    name varchar (200),
    password varchar (50)
);


create table blogs(
    id serial primary key,
    title varchar (250),
    author varchar (50) default('Helene'),
    timestamp bigint default extract(epoch from now()) * 1000,
    heroimage_id integer references images(id),
    visible boolean, 
    content text 
    -- (from tinyMCE??? How is this stored?)
);
create table blog_categories(
    id serial primary key,
    category varchar(50),
    blog_id integer references blogs(id)
);
create table comments(
    id serial primary key,
    blog_id integer references blogs(id),
    author varchar(50),
    content varchar(1000)
);
create table images(
    id serial primary key,
    short_name varchar (50),
    source varchar (100)
    -- (??? save path to image in assets???)
);

create table artists (
    id serial primary key,
    user_id integer references users(id),
    artist_name varchar(200),
    artist_picture varchar(500),
    artist_track_url varchar(500) default ('https://p.scdn.co/mp3-preview/22bf10aff02db272f0a053dff5c0063d729df988?cid=774b29d4f13844c495f206cafdad9c86')
);

create table matches (
    id serial primary key,
    current_user_id integer references users(id),
    viewed_user_id integer references users(id),
    liked boolean default null,
    blocked boolean default False
);

create table messages (
    id serial primary key,
    matches_id integer references matches(id),
    message varchar(1000),
    timestamp bigint default extract(epoch from now()) * 1000,
    user_id integer references users(id)
);