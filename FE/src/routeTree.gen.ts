/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TypesLazyImport = createFileRoute('/types')()
const RegisterLazyImport = createFileRoute('/register')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()
const ManufacturesIndexLazyImport = createFileRoute('/manufactures/')()
const TypesRoutesCreateLazyImport = createFileRoute('/types-routes/create')()
const TypesRoutesIdLazyImport = createFileRoute('/types-routes/$id')()
const ManufacturesCreateLazyImport = createFileRoute('/manufactures/create')()
const ManufacturesIdLazyImport = createFileRoute('/manufactures/$id')()
const CarsCreateLazyImport = createFileRoute('/cars/create')()
const CarsIdLazyImport = createFileRoute('/cars/$id')()
const TypesRoutesEditIdLazyImport = createFileRoute('/types-routes/edit/$id')()
const ManufacturesEditIdLazyImport = createFileRoute('/manufactures/edit/$id')()
const CarsEditIdLazyImport = createFileRoute('/cars/edit/$id')()

// Create/Update Routes

const TypesLazyRoute = TypesLazyImport.update({
  id: '/types',
  path: '/types',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types.lazy').then((d) => d.Route))

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ManufacturesIndexLazyRoute = ManufacturesIndexLazyImport.update({
  id: '/manufactures/',
  path: '/manufactures/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/index.lazy').then((d) => d.Route),
)

const TypesRoutesCreateLazyRoute = TypesRoutesCreateLazyImport.update({
  id: '/types-routes/create',
  path: '/types-routes/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types-routes/create.lazy').then((d) => d.Route),
)

const TypesRoutesIdLazyRoute = TypesRoutesIdLazyImport.update({
  id: '/types-routes/$id',
  path: '/types-routes/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types-routes/$id.lazy').then((d) => d.Route),
)

const ManufacturesCreateLazyRoute = ManufacturesCreateLazyImport.update({
  id: '/manufactures/create',
  path: '/manufactures/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/create.lazy').then((d) => d.Route),
)

const ManufacturesIdLazyRoute = ManufacturesIdLazyImport.update({
  id: '/manufactures/$id',
  path: '/manufactures/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/$id.lazy').then((d) => d.Route),
)

const CarsCreateLazyRoute = CarsCreateLazyImport.update({
  id: '/cars/create',
  path: '/cars/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars/create.lazy').then((d) => d.Route))

const CarsIdLazyRoute = CarsIdLazyImport.update({
  id: '/cars/$id',
  path: '/cars/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars/$id.lazy').then((d) => d.Route))

const TypesRoutesEditIdLazyRoute = TypesRoutesEditIdLazyImport.update({
  id: '/types-routes/edit/$id',
  path: '/types-routes/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types-routes/edit/$id.lazy').then((d) => d.Route),
)

const ManufacturesEditIdLazyRoute = ManufacturesEditIdLazyImport.update({
  id: '/manufactures/edit/$id',
  path: '/manufactures/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/edit/$id.lazy').then((d) => d.Route),
)

const CarsEditIdLazyRoute = CarsEditIdLazyImport.update({
  id: '/cars/edit/$id',
  path: '/cars/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars/edit/$id.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/types': {
      id: '/types'
      path: '/types'
      fullPath: '/types'
      preLoaderRoute: typeof TypesLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/$id': {
      id: '/cars/$id'
      path: '/cars/$id'
      fullPath: '/cars/$id'
      preLoaderRoute: typeof CarsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/create': {
      id: '/cars/create'
      path: '/cars/create'
      fullPath: '/cars/create'
      preLoaderRoute: typeof CarsCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/$id': {
      id: '/manufactures/$id'
      path: '/manufactures/$id'
      fullPath: '/manufactures/$id'
      preLoaderRoute: typeof ManufacturesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/create': {
      id: '/manufactures/create'
      path: '/manufactures/create'
      fullPath: '/manufactures/create'
      preLoaderRoute: typeof ManufacturesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/types-routes/$id': {
      id: '/types-routes/$id'
      path: '/types-routes/$id'
      fullPath: '/types-routes/$id'
      preLoaderRoute: typeof TypesRoutesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/types-routes/create': {
      id: '/types-routes/create'
      path: '/types-routes/create'
      fullPath: '/types-routes/create'
      preLoaderRoute: typeof TypesRoutesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/': {
      id: '/manufactures/'
      path: '/manufactures'
      fullPath: '/manufactures'
      preLoaderRoute: typeof ManufacturesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/edit/$id': {
      id: '/cars/edit/$id'
      path: '/cars/edit/$id'
      fullPath: '/cars/edit/$id'
      preLoaderRoute: typeof CarsEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/edit/$id': {
      id: '/manufactures/edit/$id'
      path: '/manufactures/edit/$id'
      fullPath: '/manufactures/edit/$id'
      preLoaderRoute: typeof ManufacturesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/types-routes/edit/$id': {
      id: '/types-routes/edit/$id'
      path: '/types-routes/edit/$id'
      fullPath: '/types-routes/edit/$id'
      preLoaderRoute: typeof TypesRoutesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/types': typeof TypesLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/types-routes/$id': typeof TypesRoutesIdLazyRoute
  '/types-routes/create': typeof TypesRoutesCreateLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/types-routes/edit/$id': typeof TypesRoutesEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/types': typeof TypesLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/types-routes/$id': typeof TypesRoutesIdLazyRoute
  '/types-routes/create': typeof TypesRoutesCreateLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/types-routes/edit/$id': typeof TypesRoutesEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/types': typeof TypesLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/types-routes/$id': typeof TypesRoutesIdLazyRoute
  '/types-routes/create': typeof TypesRoutesCreateLazyRoute
  '/manufactures/': typeof ManufacturesIndexLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/types-routes/edit/$id': typeof TypesRoutesEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/register'
    | '/types'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/types-routes/$id'
    | '/types-routes/create'
    | '/manufactures'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/types-routes/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/register'
    | '/types'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/types-routes/$id'
    | '/types-routes/create'
    | '/manufactures'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/types-routes/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/register'
    | '/types'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/types-routes/$id'
    | '/types-routes/create'
    | '/manufactures/'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/types-routes/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  TypesLazyRoute: typeof TypesLazyRoute
  CarsIdLazyRoute: typeof CarsIdLazyRoute
  CarsCreateLazyRoute: typeof CarsCreateLazyRoute
  ManufacturesIdLazyRoute: typeof ManufacturesIdLazyRoute
  ManufacturesCreateLazyRoute: typeof ManufacturesCreateLazyRoute
  TypesRoutesIdLazyRoute: typeof TypesRoutesIdLazyRoute
  TypesRoutesCreateLazyRoute: typeof TypesRoutesCreateLazyRoute
  ManufacturesIndexLazyRoute: typeof ManufacturesIndexLazyRoute
  CarsEditIdLazyRoute: typeof CarsEditIdLazyRoute
  ManufacturesEditIdLazyRoute: typeof ManufacturesEditIdLazyRoute
  TypesRoutesEditIdLazyRoute: typeof TypesRoutesEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  TypesLazyRoute: TypesLazyRoute,
  CarsIdLazyRoute: CarsIdLazyRoute,
  CarsCreateLazyRoute: CarsCreateLazyRoute,
  ManufacturesIdLazyRoute: ManufacturesIdLazyRoute,
  ManufacturesCreateLazyRoute: ManufacturesCreateLazyRoute,
  TypesRoutesIdLazyRoute: TypesRoutesIdLazyRoute,
  TypesRoutesCreateLazyRoute: TypesRoutesCreateLazyRoute,
  ManufacturesIndexLazyRoute: ManufacturesIndexLazyRoute,
  CarsEditIdLazyRoute: CarsEditIdLazyRoute,
  ManufacturesEditIdLazyRoute: ManufacturesEditIdLazyRoute,
  TypesRoutesEditIdLazyRoute: TypesRoutesEditIdLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/login",
        "/register",
        "/types",
        "/cars/$id",
        "/cars/create",
        "/manufactures/$id",
        "/manufactures/create",
        "/types-routes/$id",
        "/types-routes/create",
        "/manufactures/",
        "/cars/edit/$id",
        "/manufactures/edit/$id",
        "/types-routes/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/types": {
      "filePath": "types.lazy.jsx"
    },
    "/cars/$id": {
      "filePath": "cars/$id.lazy.jsx"
    },
    "/cars/create": {
      "filePath": "cars/create.lazy.jsx"
    },
    "/manufactures/$id": {
      "filePath": "manufactures/$id.lazy.jsx"
    },
    "/manufactures/create": {
      "filePath": "manufactures/create.lazy.jsx"
    },
    "/types-routes/$id": {
      "filePath": "types-routes/$id.lazy.jsx"
    },
    "/types-routes/create": {
      "filePath": "types-routes/create.lazy.jsx"
    },
    "/manufactures/": {
      "filePath": "manufactures/index.lazy.jsx"
    },
    "/cars/edit/$id": {
      "filePath": "cars/edit/$id.lazy.jsx"
    },
    "/manufactures/edit/$id": {
      "filePath": "manufactures/edit/$id.lazy.jsx"
    },
    "/types-routes/edit/$id": {
      "filePath": "types-routes/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
