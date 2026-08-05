import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import Home from '@/pages/home';
import Photography from '@/pages/photography';
import NotFound from '@/pages/not-found';
import Navbar from '@/components/navbar';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Navbar />
        <Home />
      </Route>
      <Route path="/photography" component={Photography} />
      <Route>
        <Navbar />
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
