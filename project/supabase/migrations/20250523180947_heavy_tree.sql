/*
  # Steel Products Schema

  1. New Tables
    - `product_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `slug` (text, unique)
      - `description` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `name` (text)
      - `code` (text)
      - `description` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `price_history`
      - `id` (uuid, primary key)
      - `product_id` (uuid, foreign key)
      - `price` (decimal)
      - `date` (date)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create product categories table
CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES product_categories(id),
  name text NOT NULL,
  code text,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create price history table
CREATE TABLE IF NOT EXISTS price_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id),
  price decimal NOT NULL,
  date date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_history ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to product categories"
  ON product_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to products"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to price history"
  ON price_history
  FOR SELECT
  TO public
  USING (true);

-- Insert initial data
INSERT INTO product_categories (name, slug, description) VALUES
  ('İnşaat Demiri', 'insaat-demiri', 'İnşaat demiri ürünleri (8mm-32mm)'),
  ('Profil', 'profil', 'Profil çeşitleri'),
  ('Nervürlü Çelik', 'nervurlu-celik', 'Nervürlü çelik ürünleri'),
  ('Hasır Çelik', 'hasir-celik', 'Hasır çelik ürünleri'),
  ('HEA/HEB', 'hea-heb', 'HEA ve HEB profilleri'),
  ('IPE', 'ipe', 'IPE profilleri'),
  ('U Demiri', 'u-demiri', 'U profil ve demirleri'),
  ('NPU/NPI', 'npu-npi', 'NPU ve NPI profilleri')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample products
DO $$
DECLARE
  cat_id uuid;
BEGIN
  -- İnşaat Demiri
  SELECT id INTO cat_id FROM product_categories WHERE slug = 'insaat-demiri' LIMIT 1;
  INSERT INTO products (category_id, name, code) VALUES
    (cat_id, '8mm İnşaat Demiri', 'ID-8'),
    (cat_id, '10mm İnşaat Demiri', 'ID-10'),
    (cat_id, '12mm İnşaat Demiri', 'ID-12'),
    (cat_id, '14mm İnşaat Demiri', 'ID-14'),
    (cat_id, '16mm İnşaat Demiri', 'ID-16')
  ON CONFLICT DO NOTHING;

  -- Profil
  SELECT id INTO cat_id FROM product_categories WHERE slug = 'profil' LIMIT 1;
  INSERT INTO products (category_id, name, code) VALUES
    (cat_id, '40x40 Kutu Profil', 'KP-4040'),
    (cat_id, '50x50 Kutu Profil', 'KP-5050'),
    (cat_id, '60x60 Kutu Profil', 'KP-6060')
  ON CONFLICT DO NOTHING;

  -- Nervürlü Çelik
  SELECT id INTO cat_id FROM product_categories WHERE slug = 'nervurlu-celik' LIMIT 1;
  INSERT INTO products (category_id, name, code) VALUES
    (cat_id, '8mm Nervürlü Çelik', 'NC-8'),
    (cat_id, '10mm Nervürlü Çelik', 'NC-10'),
    (cat_id, '12mm Nervürlü Çelik', 'NC-12')
  ON CONFLICT DO NOTHING;

  -- HEA/HEB
  SELECT id INTO cat_id FROM product_categories WHERE slug = 'hea-heb' LIMIT 1;
  INSERT INTO products (category_id, name, code) VALUES
    (cat_id, 'HEA 100', 'HEA-100'),
    (cat_id, 'HEA 200', 'HEA-200'),
    (cat_id, 'HEB 100', 'HEB-100'),
    (cat_id, 'HEB 200', 'HEB-200')
  ON CONFLICT DO NOTHING;

  -- IPE
  SELECT id INTO cat_id FROM product_categories WHERE slug = 'ipe' LIMIT 1;
  INSERT INTO products (category_id, name, code) VALUES
    (cat_id, 'IPE 100', 'IPE-100'),
    (cat_id, 'IPE 200', 'IPE-200'),
    (cat_id, 'IPE 300', 'IPE-300')
  ON CONFLICT DO NOTHING;
END $$;