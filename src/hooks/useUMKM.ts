import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { UMKM } from '../types/umkm'

export function useUMKM() {
  const [umkm, setUmkm] = useState<UMKM[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUMKM()
  }, [])

  const fetchUMKM = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('umkm')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setUmkm(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const getUMKMByCategory = (category: string) => {
    return umkm.filter(u => category === 'all' || u.kategori_umkm === category)
  }

  const getFeaturedUMKM = () => {
    // Return all UMKM for featured section since we removed is_featured
    return umkm
  }

  const getUMKMByName = (name: string) => {
    return umkm.find(u => u.nama_umkm.toLowerCase().replace(/\s+/g, '-') === name.toLowerCase())
  }

  return {
    umkm,
    loading,
    error,
    fetchUMKM,
    getUMKMByCategory,
    getFeaturedUMKM,
    getUMKMByName
  }
}