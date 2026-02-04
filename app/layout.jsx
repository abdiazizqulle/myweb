import "./globals.css";

export const metadata = {
  title: "Abdiaziz Qulle — Research and Policy",
  description: "Research-led writing on policy, technology, and data."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
