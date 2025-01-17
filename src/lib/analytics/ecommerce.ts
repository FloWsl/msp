interface Product {
  id: string
  name: string
  price: number
  category: string
  variant?: string
}

interface CartItem extends Product {
  quantity: number
}

export const trackProductView = (product: Product) => {
  window.gtag?.('event', 'view_item', {
    currency: 'EUR',
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        item_category: product.category,
        item_variant: product.variant,
      },
    ],
  })

  window.fbq?.('track', 'ViewContent', {
    content_ids: [product.id],
    content_name: product.name,
    content_type: 'product',
    value: product.price,
    currency: 'EUR',
  })
}

export const trackAddToCart = (item: CartItem) => {
  window.gtag?.('event', 'add_to_cart', {
    currency: 'EUR',
    value: item.price * item.quantity,
    items: [
      {
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        item_category: item.category,
        item_variant: item.variant,
        quantity: item.quantity,
      },
    ],
  })

  window.fbq?.('track', 'AddToCart', {
    content_ids: [item.id],
    content_name: item.name,
    content_type: 'product',
    value: item.price * item.quantity,
    currency: 'EUR',
  })
}

export const trackPurchase = (
  transactionId: string,
  items: CartItem[],
  total: number,
  shipping: number,
  tax: number
) => {
  window.gtag?.('event', 'purchase', {
    transaction_id: transactionId,
    value: total,
    shipping,
    tax,
    currency: 'EUR',
    items: items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      item_category: item.category,
      item_variant: item.variant,
      quantity: item.quantity,
    })),
  })

  window.fbq?.('track', 'Purchase', {
    content_ids: items.map((item) => item.id),
    content_type: 'product',
    value: total,
    currency: 'EUR',
    num_items: items.reduce((acc, item) => acc + item.quantity, 0),
  })
}

export const trackBeginCheckout = (items: CartItem[], total: number) => {
  window.gtag?.('event', 'begin_checkout', {
    currency: 'EUR',
    value: total,
    items: items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      item_category: item.category,
      item_variant: item.variant,
      quantity: item.quantity,
    })),
  })

  window.fbq?.('track', 'InitiateCheckout', {
    content_ids: items.map((item) => item.id),
    content_type: 'product',
    value: total,
    currency: 'EUR',
    num_items: items.reduce((acc, item) => acc + item.quantity, 0),
  })
}
