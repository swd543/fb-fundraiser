import React from 'react'
import { privacy } from '../TextService.json'

export const PrivacyPolicy = () => {
  return (
    <div>
      <h1>
        {privacy.headline}
      </h1>
      {
        privacy.description && privacy.description.map(d => (
          <p>
            {d}
          </p>
        ))
      }

    </div>
  )
}
