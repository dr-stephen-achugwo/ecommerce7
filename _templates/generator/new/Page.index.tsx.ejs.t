---
to: "<%= isPage ? `src/pages/${filePath}/index.tsx` : null %>"
---
import type { NextPageWithLayout } from 'next'

import { <%= fileName %>Container } from 'components/<%= filePath %>'
import { Layout } from 'components/layouts'

const <%= fileName %>: NextPageWithLayout = () => <<%= fileName %>Container />

<%= fileName %>.getLayout = (page): JSX.Element => <Layout>{page}</Layout>

export default <%= fileName %>
