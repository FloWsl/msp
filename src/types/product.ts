export type ProductVariant = {
  id: string
  name: string
  price: number
  size?: string
  inStock: boolean
}

export type Product = {
  id: string
  name: string
  description: string
  category: string
  image: string
  variants: ProductVariant[]
}

export type OrderStatus = 'uploading' | 'processing' | 'creating' | 'shipping' | 'delivered'

export interface ProcessStep {
  id: number
  title: string
  description: string
  status: 'pending' | 'current' | 'completed'
}

export interface UploadedImage {
  file: File
  preview: string
  status: 'uploading' | 'processing' | 'ready' | 'error'
  error?: string
}
