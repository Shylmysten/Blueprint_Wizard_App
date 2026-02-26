'use client';
import React, {useContext, useEffect, useRef, useState, useTransition} from 'react';
import { updateTheme } from '../../utils/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import {LoadingContext} from '@/utils/LoadingContext';

const themes = [
  { label: 'Simple Square', value: 'theme0Style', css: '/css/simpleSquare.css' },
  { label: 'Simple Round', value: 'theme1Style', css: '/css/simpleRound.css' },
  { label: 'Angles', value: 'theme3Style', css: '/css/angles.css' },
  { label: 'Crisp', value: 'theme4Style', css: '/css/crisp.css' },
];

export default function ThemeSelector({ iframeRef, isIframeReady }) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const router = useRouter();
  const userInteracted = useRef(false);
  const [, startTransition] = useTransition();

//useEffect(() => {
//  console.log('isLoading state in ThemeSelector:', isLoading);
//},[isLoading]);

  useEffect(() => {
    if (!isIframeReady) return;
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get('theme');

    if (themeParam && !userInteracted.current) {
      const matchedTheme = themes.find((theme) => {
        const formattedLabel = theme.label.includes(' ')
          ? theme.label.split(' ').slice(1).join('').toLowerCase()
          : theme.label.toLowerCase();
        return formattedLabel === themeParam.toLowerCase();
      });
  
      
        setSelectedTheme(matchedTheme);
        updateTheme({ themeClass: matchedTheme.value, stylesheet: matchedTheme.css }, iframeRef.current);
      
    }
  }, [iframeRef, isIframeReady]);



  // Update the URL when selectedtheme changes
  useEffect(() => {
      if(!userInteracted.current) return;

      const params = new URLSearchParams(window.location.search);

      if (selectedTheme) {
        const formattedTheme = selectedTheme.label.includes(' ')
          ? selectedTheme.label.split(' ').slice(1).join('').toLowerCase()
          : selectedTheme.label.toLowerCase();
        params.set('theme', formattedTheme);
      }
      // Update the URL with the modified query string
       startTransition(() => {
        router.push(`?${params.toString()}`);
      });

  }, [selectedTheme, router]);


  const handleChange = (e) => {
    userInteracted.current = true;
    setIsLoading(true);
    const selected = themes.find((theme) => theme.value === e.target.value);
    if(selected) {
      //console.log('HandleChange is Setting isLoading to true')
      setSelectedTheme(selected);

      if (selected && iframeRef.current) {
        updateTheme({
          themeClass: selected.value,
          stylesheet: selected.css,
        }, iframeRef.current);
      }

    }

    //// Simulate a delay for loading
    setTimeout(() => {
      //console.log('HandleChange is Setting isLoading to false');
      setIsLoading(false); // Stop loading
    }, 1000); // Adjust delay as needed
  };

  return (
    <>
        <div style={{ marginBottom: '1rem' }}>
        <label  htmlFor="themeSelector" className="categoryLabel">Theme Choice:</label><br/>
        <select id="themeSelector" className="categorySelect" onChange={handleChange} value={selectedTheme.value}>
            {themes.map((theme) => (
            <option key={theme.value} value={theme.value}>
                {theme.label}
            </option>
            ))}
        </select>
        </div>

    </>
  );
}