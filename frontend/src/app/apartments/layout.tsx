import React from "react";

export default function ApartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Add any layout-specific components like a header or sidebar here */}
      {children}
    </div>
  );
}