'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { footerOptions } from '@/data/categories';
import { updateFooter } from '@/utils/actions';

export default function FooterSelector({ iframeRef, isIframeReady }) {
  const [selectedContent, setSelectedContent] = useState('');
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const userInteracted = useRef(false);

  // Ensure the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // React to query param changes
  useEffect(() => {
    if (!isIframeReady) return;

    const footerParam = searchParams.get('footer');

    if (footerParam && !userInteracted.current) {
      const matchingOption = footerOptions.find(
        (option) => option.label.toLowerCase().replace(/\s+/g, '') === footerParam
      );
      if (matchingOption) {
        setSelectedContent(matchingOption.value);
        const payload = {
          sectionId: 'bpFooter',
          content: matchingOption.value,
        };
        updateFooter(payload, iframeRef?.current);
      }
    }
    // If the param is missing and the user hasn't interacted, reset the state
    //if (!footerParam && !userInteracted.current) {
    //  setSelectedContent('');
    //  updateFooter({ sectionId: 'bpFooter', content: '' }, iframeRef?.current);
    //}
  }, [isIframeReady, iframeRef, footerOptions, searchParams]);

  // Update the URL whenever the selectedContent changes
  useEffect(() => {
    if (!userInteracted.current) return;
    const params = new URLSearchParams(window.location.search);

    const selectedOption = footerOptions.find(
      (option) => option.value === selectedContent
    );

    if (selectedOption) {
      const footerQuery = selectedOption.label.toLowerCase().replace(/\s+/g, '');
      params.set('footer', footerQuery);
    } else {
      setSelectedContent('');
      // Remove the 'header' query parameter
      params.delete('footer');
    }
    
    router.push(`?${params.toString()}`, undefined, { shallow: true });
  }, [selectedContent, router]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedContent(selectedValue);
    userInteracted.current = true;
    const payload = {
      sectionId: 'bpFooter',
      content: selectedValue || `<div class="empty"><h2 class="previewDefault">Footer</h2></div>`,
    };
    updateFooter(payload, iframeRef?.current);
  };

  if (!isClient) {
    return null; // Or a loading spinner
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <label htmlFor="footerContent" className="categoryLabel">Footer Content:</label>
      <select
        id="footerContent"
        className="categorySelect"
        value={selectedContent}
        onChange={handleChange}
      >
        <option value="">-- Select Footer Content --</option>
        {footerOptions.map((item, i) => (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}