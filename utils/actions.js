'use client';
import { createRoot } from 'react-dom/client';
import VimeoVideo from '../components/videos/VimeoVideo';
import FullWidthHeroRotator from '../components/rotator-pattern-components/FullWidthHeroRotator';
import CenterFeatureRotator from '../components/rotator-pattern-components/CenterFeatureRotator';
import ImageCarousel from '../components/rotator-pattern-components/ImageCarousel';
import CountDownTimerOne from '../components/countdown-pattern-components/CountDownTimerOne';
import CountDownTimerTwo from '../components/countdown-pattern-components/CountDownTimerTwo';
import NewsPatternOne from '@/components/news-pattern-components/NewsPatternOne';
import NewsPatternTwo from '@/components/news-pattern-components/NewsPatternTwo';
import NewsPatternThree from '@/components/news-pattern-components/NewsPatternThree';
import NewsPatternFour from '@/components/news-pattern-components/NewsPatternFour';
import NewsPatternFive from '@/components/news-pattern-components/NewsPatternFive';
import EventsPatternOne from '@/components/events-pattern-components/EventsPatternOne';
import EventsPatternTwo from '@/components/events-pattern-components/EventsPatternTwo';
import EventsPatternThree from '@/components/events-pattern-components/EventsPatternThree';
import EventsPatternFour from '@/components/events-pattern-components/EventsPatternFour';
import EventsPatternFive from '@/components/events-pattern-components/EventsPatternFive';
import TextPatternOne from '@/components/text-pattern-components/TextPatternOne';
import TextPatternTwo from '@/components/text-pattern-components/TextPatternTwo';
import TextPatternThree from '@/components/text-pattern-components/TextPatternThree';
import TextPatternFour from '@/components/text-pattern-components/TextPatternFour';
import TextPatternFive from '@/components/text-pattern-components/TextPatternFive';
import GivingAmountButtons from '@/components/giving-pattern-components/GivingAmountButtons';
import GivingAmountInput from '@/components/giving-pattern-components/GivingAmountInput';
import CPIPatternOne from '@/components/campaign-progress-indicator-components/CPIPatternOne';
import CPIPatternTwo from '@/components/campaign-progress-indicator-components/CPIPatternTwo';
import CPIPatternFour from '@/components/campaign-progress-indicator-components/CPIPatternFour';
import CPIPatternThree from '@/components/campaign-progress-indicator-components/CPIPatternThree';
import CF3X4Detailed from '@/components/crowdfunding-pattern-components/CF3X4Detailed';
import CF3x4Condensed from '@/components/crowdfunding-pattern-components/CF3x4Condensed';
import CF3x4CBDetailed from '@/components/crowdfunding-pattern-components/CF3x4CBDetailed';
import CF3x4CBCondensed from '@/components/crowdfunding-pattern-components/CF3x4CBCondensed';
import CF4X3Detailed from '@/components/crowdfunding-pattern-components/CF4X3Detailed';
import CF4X3Condensed from '@/components/crowdfunding-pattern-components/CF4X3Condensed';
import QuickLinksPatternOne from '@/components/quicklinks-pattern-components/QuickLinksPatternOne';
import QuickLinksPatternTwo from '@/components/quicklinks-pattern-components/QuickLinksPatternTwo';
import QuotesPatternOne from '@/components/quotes-pattern-components/QuotesPatternOne';
import QuotesPatternTwo from '@/components/quotes-pattern-components/QuotesPatternTwo';
import HorizantalTabsPattern from '@/components/tab-pattern-components/HorizontalTabsPattern';
import VerticalTabsPattern from '@/components/tab-pattern-components/VerticalTabsPattern';
import FullWidthTabsPattern from '@/components/tab-pattern-components/FullWidthTabsPattern';
import Layout1Left from '@/components/interior-page-components/layout1/Layout1Left';
import Layout1Right from '@/components/interior-page-components/layout1/Layout1Right';
import Layout1Both from '@/components/interior-page-components/layout1/Layout1Both';
import Layout1None from '@/components/interior-page-components/layout1/Layout1None';
import Layout2Left from '@/components/interior-page-components/layout2/Layout2Left';
import Layout2Right from '@/components/interior-page-components/layout2/Layout2Right';
import Layout2Both from '@/components/interior-page-components/layout2/Layout2Both';
import Layout2None from '@/components/interior-page-components/layout2/Layout2None';
import CFCircularLeft from '@/components/interior-page-components/crowdfunding-layouts/CFCircularLeft';
import CFBarLeft from '@/components/interior-page-components/crowdfunding-layouts/CFBarLeft';
import CFCircularRight from '@/components/interior-page-components/crowdfunding-layouts/CFCircularRight';
import CFBarRight from '@/components/interior-page-components/crowdfunding-layouts/CFBarRight';

export const updateIframe = (index, category, item, iframeRef) => {
  iframeRef.current?.contentWindow?.postMessage(
    {
      type: 'UPDATE_SECTION',
      payload: { index, category, item },
    },
    '*'
  );
};

export const updateIframeInterior = (index, category, item, iframeRef) => {
  console.log(category, item);
  iframeRef.current?.contentWindow?.postMessage(
    {
      type: 'UPDATE_INTERIOR_SECTION',
      payload: { index, category, item },
    },
    '*'
  );
};

export function updateTheme(payload, iframe = null) {
  if (iframe) {
    iframe.contentWindow.postMessage({
      type: 'UPDATE_THEME',
      payload,
    }, '*');
  } else {
    document.body.classList.remove(
      'theme0Style',
      'theme1Style',
      'theme2Style',
      'theme3Style',
      'theme4Style'
    );

    if (payload.themeClass) {
      document.body.classList.add(payload.themeClass);
    }

    if (payload.stylesheet) {
      const existing = document.getElementById('theme-stylesheet');
      existing.href = payload.stylesheet;
    }
  }
}

export const updateHeader = (category, item, iframeRef = null, isDropdownToggleSwitchOn) => {
  //console.log('updateHeader isDropdownToggleSwitchOn:', isDropdownToggleSwitchOn);

  if (iframeRef?.current) {
    iframeRef.current.contentWindow?.postMessage(
      {
        type: 'UPDATE_HEADER',
        payload: { category, item, isDropdownToggleSwitchOn },
      },
      '*'
    );
  }
};

const componentMapping = {
  'Background Video Module': {
    VimeoVideo: VimeoVideo,
  },
  'Rotators & Carousels': {
    FullWidthHeroRotator: FullWidthHeroRotator,
    CenterFeatureRotator: CenterFeatureRotator,
    ImageCarousel: ImageCarousel,
  },
  'News Patterns': {
      NewsPatternOne: NewsPatternOne,
      NewsPatternTwo: NewsPatternTwo,
      NewsPatternThree: NewsPatternThree,
      NewsPatternFour: NewsPatternFour,
      NewsPatternFive: NewsPatternFive,
  },
  'Events Patterns': {
      EventsPatternOne: EventsPatternOne,
      EventsPatternTwo: EventsPatternTwo,
      EventsPatternThree: EventsPatternThree,
      EventsPatternFour: EventsPatternFour,
      EventsPatternFive: EventsPatternFive,
  },
  'Text Patterns': {
      TextPatternOne: TextPatternOne,
      TextPatternTwo: TextPatternTwo,
      TextPatternThree: TextPatternThree,
      TextPatternFour: TextPatternFour,
      TextPatternFive: TextPatternFive,
  },
  'Giving / CTA': {
    GivingButtons: GivingAmountButtons,
    GivingInput: GivingAmountInput,
  },
  'Campaign Progress Indicators': {
      CPIPatternOne: CPIPatternOne,
      CPIPatternTwo: CPIPatternTwo,
      CPIPatternThree: CPIPatternThree,
      CPIPatternFour: CPIPatternFour,
  },
  'CrowdFunding Grid Patterns': {
    CF3x4Detailed: CF3X4Detailed,
    CF3x4CBDetailed: CF3x4CBDetailed,
    CF4X3Detailed: CF4X3Detailed,
    CF3x4Condensed: CF3x4Condensed,
    CF3x4CBCondensed: CF3x4CBCondensed,
    CF4X3Condensed: CF4X3Condensed,
},
  'Countdown Timers': {
    CountDownTimerOne: CountDownTimerOne,
    CountDownTimerTwo: CountDownTimerTwo,
},
  'QuickLinks': {
    QuickLinksPatternOne: QuickLinksPatternOne,
    QuickLinksPatternTwo: QuickLinksPatternTwo,
},
  'Quotes': {
    QuotesPatternOne: QuotesPatternOne,
    QuotesPatternTwo: QuotesPatternTwo,
},
  'Tabbed Content': {
    HorizontalTabsPattern: HorizantalTabsPattern,
    VerticalTabsPattern: VerticalTabsPattern,
    FullWidthTabsPattern: FullWidthTabsPattern,
},
};

export function updateSection({ index, category, item }) {
  const section = document.getElementById(`bpSection${index + 1}`);

  if (section) {
    const Component = componentMapping[category]?.[item] || null;

    if (Component) {
      if (!section._reactRoot) {
        section._reactRoot = createRoot(section);
      }
      section._reactRoot.render(<Component />);
      section.classList.remove('empty');
    } else {
      if (section._reactRoot) {
        section._reactRoot.unmount();
        delete section._reactRoot;
      }
      section.innerHTML = `<div class="empty"><h2 class="previewDefault">Section ${section.id.replace('bpSection', '')}</h2></div>`;
      section.classList.add('empty');
    }
  }
}

export function updateFooter({ content, sectionId }, iframe = null) {
  const payload = { sectionId, content };

  if (iframe) {
    if(iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        type: 'UPDATE_FOOTER',
        payload,
      }, '*');
    } else {
        console.warn('Iframe contentWindow is not ready.');
    }
  } else {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.warn(`Section with ID ${sectionId} not found.`);
      return;
    }
    if (content === '') {
      section.classList.add('empty');
    }
    if (section) {
      section.innerHTML = content;
      section.classList.remove('empty');
    }
  }
}

const interiorComponentMapping = {
  "Layout Option 1": {
    Layout1Left: Layout1Left,
    Layout1Right: Layout1Right,
    Layout1Both: Layout1Both,
    Layout1None: Layout1None,
  },
  "Layout Option 2": {
    Layout2Left: Layout2Left,
    Layout2Right: Layout2Right,
    Layout2Both: Layout2Both,
    Layout2None: Layout2None,
  },
  "CrowdFunding Layouts": {
    CFCircularLeft: CFCircularLeft,
    CFBarLeft: CFBarLeft,
    CFCircularRight: CFCircularRight,
    CFBarRight: CFBarRight,
  },
}

export function updateInteriorSection({ index, category, item }) {
  const section = document.getElementById('bpSection1');

  if (section) {
    const Component = interiorComponentMapping[category]?.[item] || null;

    if (Component) {
      if (!section._reactRoot) {
        section._reactRoot = createRoot(section);
      }
      section._reactRoot.render(<Component />);
      section.classList.remove('empty');
    } else {
      if (section._reactRoot) {
        section._reactRoot.unmount();
        delete section._reactRoot;
      }
      section.innerHTML = `<div class="empty"><h2 class="previewDefault">Section 1</h2></div>`;
      section.classList.add('empty');
    }
  }
}