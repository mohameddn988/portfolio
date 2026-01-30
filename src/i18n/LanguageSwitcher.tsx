"use client"

import React from 'react'
import { useI18n } from './useI18n'
import { SupportedLanguage } from './I18nContext'

export function LanguageSwitcher(): React.JSX.Element {
  const { language, setLanguage } = useI18n()
  const isFR = language === 'fr'
  const nextLang: SupportedLanguage = isFR ? 'en' : 'fr'
  const label = isFR ? 'FR' : 'EN'
  const title = isFR ? 'Switch to English' : 'Basculer en français'
  const ariaLabel = title

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLang)}
      title={title}
      aria-label={ariaLabel}
      className="text-white/80 hover:text-secondary transition-colors"
    >
      {label}
    </button>
  )
}