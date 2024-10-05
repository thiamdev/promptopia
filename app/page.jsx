"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Feed from "@components/Feed";

const queryClient = new QueryClient()

function Home(){


  return (
    <section className="w-full relative">
        <QueryClientProvider client={queryClient}> 
      
        <Feed />
        
      </QueryClientProvider>
     
    </section>
  );
};

export default Home;
