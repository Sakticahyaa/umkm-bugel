/*
  # Add address and contact columns to UMKM table

  1. New Columns
    - `alamat_umkm` (text) - UMKM address
    - `kontak` (varchar) - Contact number for WhatsApp

  2. Sample Data Update
    - Add sample addresses and contact numbers for existing UMKM
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'umkm' AND column_name = 'alamat_umkm'
  ) THEN
    ALTER TABLE umkm ADD COLUMN alamat_umkm text;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'umkm' AND column_name = 'kontak'
  ) THEN
    ALTER TABLE umkm ADD COLUMN kontak varchar(20);
  END IF;
END $$;

-- Update existing records with sample data
UPDATE umkm SET 
  alamat_umkm = CASE nama_umkm
    WHEN 'Warung Bu Sari' THEN 'Jl. Bugel Raya No. 15, Bugel, Salatiga'
    WHEN 'Batik Salatiga Heritage' THEN 'Jl. Diponegoro No. 23, Bugel, Salatiga'
    WHEN 'Kerajinan Bambu Kreatif' THEN 'Jl. Kartini No. 8, Bugel, Salatiga'
    WHEN 'Salon Cantik Indah' THEN 'Jl. Ahmad Yani No. 12, Bugel, Salatiga'
    WHEN 'Tani Organik Bugel' THEN 'Jl. Sudirman No. 45, Bugel, Salatiga'
    WHEN 'Digital Print Express' THEN 'Jl. Pemuda No. 67, Bugel, Salatiga'
    ELSE 'Bugel, Salatiga'
  END,
  kontak = CASE nama_umkm
    WHEN 'Warung Bu Sari' THEN '6281234567890'
    WHEN 'Batik Salatiga Heritage' THEN '6281234567891'
    WHEN 'Kerajinan Bambu Kreatif' THEN '6281234567892'
    WHEN 'Salon Cantik Indah' THEN '6281234567893'
    WHEN 'Tani Organik Bugel' THEN '6281234567894'
    WHEN 'Digital Print Express' THEN '6281234567895'
    ELSE NULL
  END
WHERE alamat_umkm IS NULL;