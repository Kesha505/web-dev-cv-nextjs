import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CV - Dewa Gede',
  description: 'CV - Dewa Gede Dhalem Keshananda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        {/* Bootstrap 5 CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* Bootstrap JS Bundle */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" async></script>
      </head>
      <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
        {children}
      </body>
    </html>
  );
}
