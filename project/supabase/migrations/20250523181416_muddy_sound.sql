/*
  # Add sample price history data
  
  1. New Functions
    - `generate_price_variation`: Generates random price variations within a specified percentage
  
  2. Data Population
    - Adds 30 days of price history for each product
    - Sets base prices according to product type
    - Includes daily price variations
*/

-- Function to generate random price variations
CREATE OR REPLACE FUNCTION generate_price_variation(base_price numeric, variation_percent numeric)
RETURNS numeric AS $$
BEGIN
  RETURN base_price * (1 + (random() * variation_percent - variation_percent/2));
END;
$$ LANGUAGE plpgsql;

-- Insert sample price history data
DO $$
DECLARE
  product record;
  base_price numeric;
  curr_date date;
BEGIN
  FOR product IN SELECT id, name FROM products LOOP
    -- Set base price based on product name
    IF product.name LIKE '%8mm%' THEN base_price := 15000;
    ELSIF product.name LIKE '%10mm%' THEN base_price := 15200;
    ELSIF product.name LIKE '%12mm%' THEN base_price := 15400;
    ELSIF product.name LIKE '%14mm%' THEN base_price := 15600;
    ELSIF product.name LIKE '%16mm%' THEN base_price := 15800;
    ELSIF product.name LIKE '%Kutu Profil%' THEN base_price := 16000;
    ELSIF product.name LIKE '%Nervürlü%' THEN base_price := 15500;
    ELSIF product.name LIKE 'HEA%' THEN base_price := 16500;
    ELSIF product.name LIKE 'HEB%' THEN base_price := 16700;
    ELSIF product.name LIKE 'IPE%' THEN base_price := 16300;
    ELSE base_price := 15000;
    END IF;

    -- Insert 30 days of price history
    FOR i IN 1..30 LOOP
      curr_date := CURRENT_DATE - (30 - i)::integer;
      
      INSERT INTO price_history (product_id, price, date)
      VALUES (
        product.id,
        round(generate_price_variation(base_price, 0.05))::numeric,
        curr_date
      );
    END LOOP;
  END LOOP;
END $$;