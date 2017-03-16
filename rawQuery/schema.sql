CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL ,
    description TEXT
);

INSERT INTO products (name, description) VALUES ('AAA', '1111'), ('BBB', '2222');
