import { analyticsConfig } from './config'

interface EventProperties {
  [key: string]: any
}

// Google Analytics Event
export const trackGAEvent = (
  eventName: string,
  properties?: EventProperties
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

// Meta Pixel Event
export const trackPixelEvent = (
  eventName: string,
  properties?: EventProperties
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, properties)
  }
}

// Segment Event
export const trackSegmentEvent = (
  eventName: string,
  properties?: EventProperties
) => {
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track(eventName, properties)
  }
}

// Combined Analytics Event
export const trackEvent = (
  eventName: string,
  properties?: EventProperties
) => {
  // Track in Google Analytics
  trackGAEvent(eventName, properties)

  // Track in Meta Pixel
  trackPixelEvent(eventName, properties)

  // Track in Segment
  trackSegmentEvent(eventName, properties)

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties)
  }
}

// Page View Tracking
export const trackPageView = (url: string) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analyticsConfig.ga.measurementId!, {
      page_path: url,
    })
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }

  // Segment
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.page()
  }
}

// E-commerce Event Tracking
export const trackEcommerceEvent = (
  eventName: string,
  properties: EventProperties
) => {
  switch (eventName) {
    case 'view_item':
      trackEvent(analyticsConfig.events.PRODUCT_VIEWED, properties)
      break
    case 'add_to_cart':
      trackEvent(analyticsConfig.events.CART_UPDATED, properties)
      break
    case 'begin_checkout':
      trackEvent(analyticsConfig.events.CHECKOUT_STARTED, properties)
      break
    case 'purchase':
      trackEvent(analyticsConfig.events.CHECKOUT_COMPLETED, properties)
      break
    default:
      trackEvent(eventName, properties)
  }
}

// Artist Performance Tracking
export const trackArtistEvent = (
  eventName: string,
  artistId: string,
  properties?: EventProperties
) => {
  trackEvent(eventName, {
    [analyticsConfig.properties.ARTIST_ID]: artistId,
    ...properties,
  })
}

// Social Interaction Tracking
export const trackSocialEvent = (
  eventName: string,
  platform: string,
  properties?: EventProperties
) => {
  trackEvent(eventName, {
    platform,
    ...properties,
  })
}

// Performance Monitoring
export const trackPerformanceMetric = (
  metricName: string,
  value: number,
  properties?: EventProperties
) => {
  trackEvent('performance_metric', {
    metric_name: metricName,
    value,
    ...properties,
  })
}
