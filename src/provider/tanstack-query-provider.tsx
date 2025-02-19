"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ChildrenProps {
	children: React.ReactNode;
}

const TanstackQueryProvider = ({ children }: ChildrenProps) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default TanstackQueryProvider;
