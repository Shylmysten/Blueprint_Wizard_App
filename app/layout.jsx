import {Roboto, Montserrat} from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import "../assets/css/vendor.css";
import "../assets/css/appstyles.css";
import "../assets/css/globals.css";
import {DropdownToggleProvider} from '@/utils/DropdownToggleContext';
import {LoadingProvider} from '@/utils/LoadingContext';
import {SocialMediaToggleProvider} from '@/utils/SocialMediaToggleContext';
import {MemberToolsToggleProvider} from '@/utils/MemberToolsToggleContext';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

//export const metadata = {
//  title: "Encoura - Blueprint Wizard",
//  description: "Serves as a prototype for a live development portal. It allows stakeholders to preview how different content sections, themes, and layouts will appear before the site goes live. The modular design enables easy updates and personalization, ensuring that the final product meets the institution's requirements.",
//};

export const metadata = {
  title: {
    template: `%s | Encoura`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
}





export default function RootLayout({children}) {
  return (
    <html lang="en">
        <body className={`${roboto.variable} ${montserrat.variable} home home-full`} suppressHydrationWarning>

          

            <MemberToolsToggleProvider>
              <SocialMediaToggleProvider >
                <LoadingProvider>
                  <DropdownToggleProvider>
                    {children}
                  </DropdownToggleProvider>
                </LoadingProvider>
              </SocialMediaToggleProvider>
            </MemberToolsToggleProvider>


      </body>
    </html>
  );
}
