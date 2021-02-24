import React from 'react'
import { terms } from '../TextService.json'

export const Terms = () => {
  return (
    <div>
      <h1>
        {terms.headline}
      </h1>
      {
        terms.description && terms.description.map(d => (
          <p>
            {d}
          </p>
        ))
      }

    </div>
  )
}
