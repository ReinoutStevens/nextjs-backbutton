import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link as="/test/test" href="/test?slug=test">
        <a>Test</a>
      </Link>
    </li>
  </ul>
)
