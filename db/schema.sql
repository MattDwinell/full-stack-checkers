DROP DATABASE IF EXISTS checkers_db;
CREATE DATABASE checkers_db;
USE checkers_db;
CREATE TABLE IF NOT EXISTS games  (id int(5) AUTO_INCREMENT NOT NULL,
playerOne VARCHAR(45), playerTwo VARCHAR(45), playerOneDisplayName VARCHAR(45), playerTwoDisplayName VARCHAR(45), gameOver BOOLEAN, playerOnesTurn BOOLEAN, board JSON, `history` JSON, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, updatedAT DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY(id)
);
