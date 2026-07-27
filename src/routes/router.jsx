import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import RootLayout from '../layouts/RootLayout.jsx'
import PageLoader from '../components/ui/PageLoader.jsx'
import { PATHS } from './paths.js'

const Home = lazy(() => import('../pages/Home.jsx'))
const About = lazy(() => import('../pages/About.jsx'))
const Treatments = lazy(() => import('../pages/Treatments.jsx'))
const TreatmentDetail = lazy(() => import('../pages/TreatmentDetail.jsx'))
const Team = lazy(() => import('../pages/Team.jsx'))
const Testimonials = lazy(() => import('../pages/Testimonials.jsx'))
const Blog = lazy(() => import('../pages/Blog.jsx'))
const BlogPost = lazy(() => import('../pages/BlogPost.jsx'))
const Contact = lazy(() => import('../pages/Contact.jsx'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy.jsx'))
const Terms = lazy(() => import('../pages/Terms.jsx'))
const NotFound = lazy(() => import('../pages/NotFound.jsx'))

function withSuspense(Component) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

// Em deploy de projeto no GitHub Pages a Action publica em /repo/, então o app precisa saber
// disso para montar as rotas e os links corretamente (import.meta.env.BASE_URL segue o `base`
// configurado no vite.config.js, incluindo a barra final — removida aqui pois o React Router
// espera o basename sem barra no final).
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: PATHS.home, element: withSuspense(Home) },
        { path: PATHS.about, element: withSuspense(About) },
        { path: PATHS.treatments, element: withSuspense(Treatments) },
        { path: PATHS.treatmentDetail(), element: withSuspense(TreatmentDetail) },
        { path: PATHS.team, element: withSuspense(Team) },
        { path: PATHS.testimonials, element: withSuspense(Testimonials) },
        { path: PATHS.blog, element: withSuspense(Blog) },
        { path: PATHS.blogPost(), element: withSuspense(BlogPost) },
        { path: PATHS.contact, element: withSuspense(Contact) },
        { path: PATHS.privacyPolicy, element: withSuspense(PrivacyPolicy) },
        { path: PATHS.terms, element: withSuspense(Terms) },
        { path: '*', element: withSuspense(NotFound) },
      ],
    },
  ],
  { basename },
)
