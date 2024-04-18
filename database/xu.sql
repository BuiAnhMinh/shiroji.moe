CREATE TABLE IF NOT EXISTS Author (
    authorID serial,
    name varchar(50),
    PRIMARY KEY (authorID)
);


CREATE TABLE IF NOT EXISTS Category (
    categoryID serial,
    name varchar(50),
    PRIMARY KEY (categoryID)
);

CREATE TABLE IF NOT EXISTS Post (
    postID serial,
    title varchar(50),
    content text,
    datePosted DATE,
    authorID int,
    categoryID int,
    PRIMARY KEY (postID),
    FOREIGN KEY (authorID) REFERENCES Author(authorID),
    FOREIGN KEY (categoryID) REFERENCES Category(categoryID)
);