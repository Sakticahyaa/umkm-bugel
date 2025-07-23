/*
  # Create UMKM Database Schema - Updated

  1. New Tables
    - `umkm`
      - `id` (uuid, primary key)
      - `nama_umkm` (text, UMKM name)
      - `kategori_umkm` (varchar, industry category)
      - `deskripsi_umkm` (text, detailed description)
      - `link_gmaps` (text, Google Maps link)
      - `cover` (text, cover image URL)
      - `menu` (text, menu/product image URL)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `umkm` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS umkm (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama_umkm text NOT NULL,
  kategori_umkm varchar(50) NOT NULL CHECK (kategori_umkm IN ('kuliner', 'fashion', 'kerajinan', 'jasa', 'agribisnis', 'digital', 'perdagangan')),
  deskripsi_umkm text NOT NULL,
  link_gmaps text,
  cover text NOT NULL,
  menu text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE umkm ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read UMKM data"
  ON umkm
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO umkm (nama_umkm, kategori_umkm, deskripsi_umkm, cover, menu, link_gmaps) VALUES
('Warung Bu Sari', 'kuliner', 'Warung makan tradisional dengan cita rasa khas Jawa Tengah. Menyajikan berbagai masakan rumahan yang lezat dan terjangkau.', 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', 'https://maps.google.com/?q=Warung+Bu+Sari+Bugel+Salatiga'),
('Batik Salatiga Heritage', 'fashion', 'Produksi dan penjualan batik khas Salatiga dengan motif-motif tradisional yang dipadukan dengan desain modern.', 'https://images.pexels.com/photos/6292513/pexels-photo-6292513.jpeg', 'https://images.pexels.com/photos/6292513/pexels-photo-6292513.jpeg', 'https://maps.google.com/?q=Batik+Salatiga+Heritage+Bugel'),
('Kerajinan Bambu Kreatif', 'kerajinan', 'Menghasilkan berbagai kerajinan tangan dari bambu seperti anyaman, perabot rumah tangga, dan souvenir unik.', 'https://images.pexels.com/photos/6069978/pexels-photo-6069978.jpeg', 'https://images.pexels.com/photos/6069978/pexels-photo-6069978.jpeg', 'https://maps.google.com/?q=Kerajinan+Bambu+Kreatif+Bugel'),
('Salon Cantik Indah', 'jasa', 'Jasa kecantikan lengkap meliputi potong rambut, facial, manicure pedicure, dan treatment kecantikan lainnya.', 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg', 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg', 'https://maps.google.com/?q=Salon+Cantik+Indah+Bugel'),
('Tani Organik Bugel', 'agribisnis', 'Budidaya sayuran organik dan distribusi hasil pertanian segar langsung dari petani ke konsumen.', 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg', 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg', 'https://maps.google.com/?q=Tani+Organik+Bugel+Salatiga'),
('Digital Print Express', 'digital', 'Jasa percetakan digital, desain grafis, dan pembuatan spanduk, banner, serta berbagai keperluan promosi.', 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg', 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg', 'https://maps.google.com/?q=Digital+Print+Express+Bugel');