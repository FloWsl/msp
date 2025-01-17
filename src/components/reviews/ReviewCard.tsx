import Image from 'next/image'
import { Star, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'

interface ReviewCardProps {
  name: string
  rating: number
  date: string
  comment: string
  image?: string
  productImage?: string
  verified?: boolean
}

export const ReviewCard = ({
  name,
  rating,
  date,
  comment,
  image,
  productImage,
  verified = false,
}: ReviewCardProps) => {
  return (
    <Card className="h-full p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {image && (
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{name}</span>
              {verified && (
                <CheckCircle2 className="h-4 w-4 text-success" />
              )}
            </div>
            <div className="text-sm text-secondary/60">{date}</div>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? 'fill-alert stroke-alert' : 'stroke-secondary/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Comment */}
      <p className="mt-4 text-secondary/80">{comment}</p>

      {/* Product Image */}
      {productImage && (
        <div className="mt-4">
          <div className="relative aspect-square w-32 overflow-hidden rounded-lg">
            <Image
              src={productImage}
              alt="Product review"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </Card>
  )
}
