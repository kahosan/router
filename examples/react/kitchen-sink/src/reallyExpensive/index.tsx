import { Route } from '@tanstack/react-router'

const route: Route = {
  path: 'really-expensive',
  // Routes can "import" all of their async elements and loaders in one handy
  // import call
  import: () => import('./ReallyExpensive').then((res) => res.loaders),
}

export default route