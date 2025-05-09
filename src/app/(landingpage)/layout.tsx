import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvider";

const epilogue = Epilogue({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
	title: "Job Hunt",
	description: "Find your dream job",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${epilogue.className} relative overflow-x-hidden`}
			>
				<AuthProvider>
					<Navbar />
					<main>{children}</main>
					<Footer />
					<Toaster />
				</AuthProvider>
			</body>
		</html>
	);
}
