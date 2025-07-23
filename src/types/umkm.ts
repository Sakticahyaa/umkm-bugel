export interface UMKM {
  id: string
  nama_umkm: string
  kategori_umkm: 'kuliner' | 'fashion' | 'kerajinan' | 'jasa' | 'agribisnis' | 'digital' | 'perdagangan'
  deskripsi_umkm: string
  alamat_umkm?: string
  kontak?: string
  link_gmaps?: string
  cover: string
  menu?: string
  created_at: string
}

export const CATEGORY_LABELS: Record<UMKM['kategori_umkm'], string> = {
  kuliner: 'Kuliner',
  fashion: 'Fashion',
  kerajinan: 'Kerajinan',
  jasa: 'Jasa',
  agribisnis: 'Agribisnis',
  digital: 'Digital',
  perdagangan: 'Perdagangan'
}