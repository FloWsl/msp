export const analyticsConfig = {
  // Google Analytics
  ga: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    debug: process.env.NODE_ENV === 'development',
  },
  
  // Meta Pixel
  meta: {
    pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    debug: process.env.NODE_ENV === 'development',
  },
  
  // Hotjar
  hotjar: {
    hjid: process.env.NEXT_PUBLIC_HOTJAR_ID,
    hjsv: process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION,
  },
  
  // Segment
  segment: {
    writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
  },
  
  // Custom Events
  events: {
    // Artist Events
    ARTIST_WORK_SUBMITTED: 'artist_work_submitted',
    ARTIST_WORK_APPROVED: 'artist_work_approved',
    ARTIST_WORK_REJECTED: 'artist_work_rejected',
    
    // Customer Journey Events
    PRODUCT_VIEWED: 'product_viewed',
    UPLOAD_STARTED: 'upload_started',
    UPLOAD_COMPLETED: 'upload_completed',
    PREVIEW_GENERATED: 'preview_generated',
    PREVIEW_VIEWED: 'preview_viewed',
    
    // Cart Events
    CART_CREATED: 'cart_created',
    CART_UPDATED: 'cart_updated',
    CART_ABANDONED: 'cart_abandoned',
    CHECKOUT_STARTED: 'checkout_started',
    CHECKOUT_COMPLETED: 'checkout_completed',
    
    // Social Events
    SOCIAL_SHARE: 'social_share',
    SOCIAL_FOLLOW: 'social_follow',
    UGC_SUBMITTED: 'ugc_submitted',
  },
  
  // Event Properties
  properties: {
    // Product Properties
    PRODUCT_STYLE: 'product_style',
    PRODUCT_SIZE: 'product_size',
    PRODUCT_MATERIAL: 'product_material',
    PRODUCT_PRICE: 'product_price',
    
    // Artist Properties
    ARTIST_ID: 'artist_id',
    ARTIST_NAME: 'artist_name',
    ARTIST_RATING: 'artist_rating',
    
    // Customer Properties
    CUSTOMER_ID: 'customer_id',
    CUSTOMER_TYPE: 'customer_type',
    CUSTOMER_LTV: 'customer_ltv',
    
    // Channel Properties
    SOURCE: 'source',
    MEDIUM: 'medium',
    CAMPAIGN: 'campaign',
  },
}
