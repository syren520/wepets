CREATE TABLE tags (
    id   SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE products (
    id           SERIAL PRIMARY KEY,
    name         TEXT    NOT NULL,
    description  TEXT,
    unit         TEXT    NOT NULL,
    unit_price   REAL    NOT NULL,
    store_amount INTEGER NOT NULL
);

CREATE TABLE products_tags (
    id         SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products (id),
    tag_id     INTEGER REFERENCES tags (id)
);
CREATE UNIQUE INDEX product_tag
    ON products_tags (product_id, tag_id);

CREATE TABLE images (
    id         SERIAL PRIMARY KEY,
    path TEXT NOT NULL UNIQUE
);

INSERT INTO images (path) VALUES ('/static/public_static/image/products/pet-test-1.jpg'), ('/static/public_static/image/products/pet-test-2.jpg'), ('/static/public_static/image/products/pet-test-3.jpg');

CREATE TABLE images_products (
    id         SERIAL PRIMARY KEY,
    image_id   INTEGER NOT NULL REFERENCES images(id),
    product_id INTEGER NOT NULL REFERENCES products(id)
);

INSERT INTO images_products (image_id, product_id) VALUES
    ('1', '1'),
    ('2', '1'),
    ('3', '1'),
    ('1', '2'),
    ('2', '2'),
    ('3', '2'),
    ('1', '3'),
    ('2', '3'),
    ('3', '3'),
    ('1', '4'),
    ('2', '4'),
    ('3', '4'),
    ('1', '5'),
    ('2', '5'),
    ('3', '5'),
    ('1', '6'),
    ('2', '6'),
    ('3', '6'),
    ('1', '7'),
    ('2', '7'),
    ('3', '7'),
    ('1', '8'),
    ('2', '8'),
    ('3', '8'),
    ('1', '9'),
    ('2', '9'),
    ('3', '9'),
    ('1', '10'),
    ('2', '10'),
    ('3', '10'),
    ('1', '11'),
    ('2', '11'),
    ('3', '11'),
    ('1', '12'),
    ('2', '12'),
    ('3', '12'),
    ('1', '13'),
    ('2', '13'),
    ('3', '13'),
    ('1', '14'),
    ('2', '14'),
    ('3', '14');


INSERT INTO tags (name) VALUES ('dog'), ('cat'), ('food'), ('medicine'), ('accessory');
INSERT INTO products (name, description, unit, unit_price, store_amount) VALUES
    ('doggy-food-1', 'this is kind of food for peppy', 'bag', 5, 20),
    ('doggy-food-2', 'this is kind of food elder dog', 'bag', 15, 20),
    ('doggy-food-3', 'this is kind of food 3', 'bag', 15, 6),
    ('doggy-food-4', 'this is kind of food 4', 'bag', 10, 9),
    ('doggy-food-5', 'this is kind of food 5', 'bag', 7, 1),
    ('doggy-toy-1', 'this is kind of toy', 'piece', 25, 15),
    ('doggy-medicine-1', 'this is kind of medicine1', 'bottle', 45, 15),
    ('doggy-medicine-2', 'this is kind of medicine2', 'bottle', 27, 10),
    ('catty-food-1', 'this is kind of cat food 1', 'bag', 1, 15),
    ('catty-food-2', 'this is kind of cat food 2', 'can', 2, 13),
    ('catty-food-3', 'this is kind of cat food 3', 'can', 1.8, 12),
    ('catty-toy-1', 'this is kind of cat toy 1', 'can', 15, 2),
    ('catty-medicine-1', 'this is kind of medicine1', 'bottle', 90, 9),
    ('catty-medicine-2', 'this is kind of medicine2', 'bottle', 55, 15);

INSERT INTO products_tags (product_id, tag_id) VALUES
    (1,1),
    (2,1),
    (3,1),
    (4,1),
    (5,1),
    (6,1),
    (7,1),
    (8,1),
    (9,2),
    (10,2),
    (11,2),
    (12,2),
    (13,2),
    (14,2),
    (1,3),
    (2,3),
    (3,3),
    (4,3),
    (5,3),
    (9,3),
    (10,3),
    (11,3),
    (7,4),
    (8,4),
    (13,4),
    (14,4),
    (6,5),
    (12,5);

WITH
    group_tags_and_images AS (
    SELECT
        pt.product_id,
        array_agg(t.name) AS tags,
        array_agg(i.path) AS images
    FROM
        products_tags AS pt
        JOIN tags AS t ON pt.tag_id = t.id
        LEFT JOIN images_products AS ip ON ip.product_id = pt.product_id
        JOIN images AS i ON i.id = ip.image_id
    GROUP BY pt.product_id
    )
SELECT
    p.*,
    gt.tags,
    gt.images
FROM
    products AS p
    LEFT JOIN group_tags_and_images AS gt ON gt.product_id = p.id;
