import * as React from 'react';

function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return <div className="sr-only">{children}</div>;
}

export default VisuallyHidden;
