SET GLOBAL log_error_verbosity = 1;
ALTER USER 'admin'@'%' IDENTIFIED WITH caching_sha2_password BY 'admin';
GRANT ALL PRIVILEGES ON athlete_x_database.* TO 'admin'@'%';
FLUSH PRIVILEGES;
EXIT;
