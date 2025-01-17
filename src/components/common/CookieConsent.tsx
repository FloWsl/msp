'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    })
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    })
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    // Update analytics and marketing tracking based on preferences
    if (prefs.analytics) {
      enableAnalytics()
    }
    if (prefs.marketing) {
      enableMarketing()
    }
  }

  const enableAnalytics = () => {
    // Enable Google Analytics
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
    })
  }

  const enableMarketing = () => {
    // Enable Meta Pixel
    window.fbq?.('consent', 'grant')
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-lg">
      <div className="container mx-auto">
        {!showPreferences ? (
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondary/70">
              Nous utilisons des cookies pour améliorer votre expérience.{' '}
              <button
                onClick={() => setShowPreferences(true)}
                className="text-primary underline"
              >
                Gérer les préférences
              </button>
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  savePreferences({
                    necessary: true,
                    analytics: false,
                    marketing: false,
                  })
                  setShowBanner(false)
                }}
              >
                Refuser
              </Button>
              <Button size="sm" onClick={handleAcceptAll}>
                Accepter tout
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary">
              Préférences des cookies
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="h-4 w-4 rounded border-secondary/20"
                  />
                  <span className="text-sm text-secondary">
                    Cookies nécessaires
                  </span>
                </label>
                <span className="text-xs text-secondary/50">Toujours actif</span>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        analytics: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded border-secondary/20"
                  />
                  <span className="text-sm text-secondary">
                    Cookies analytiques
                  </span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        marketing: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded border-secondary/20"
                  />
                  <span className="text-sm text-secondary">
                    Cookies marketing
                  </span>
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreferences(false)}
              >
                Retour
              </Button>
              <Button size="sm" onClick={handleSavePreferences}>
                Enregistrer
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
