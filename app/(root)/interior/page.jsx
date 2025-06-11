import { Suspense } from 'react';
import InteriorPageContent from './InteriorPageContent';

export default function InteriorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InteriorPageContent />
    </Suspense>
  );
}