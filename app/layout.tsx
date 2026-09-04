import type {Metadata} from "next";
import Link from "next/link";
import {SocialBar} from "@/components/ad-placements";
import {Telemetry} from "@/components/telemetry";
import release from "@/config/release.json";
import {site} from "@/lib/site";
import {SiteStructuredData} from "@/components/structured-data";
import "./globals.css";
import "./responsive.css";

export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:site.homeTitle,template:`%s | ${site.name}`},description:site.description,robots:{index:release.allowIndexing,follow:release.allowIndexing},openGraph:{type:"website",siteName:site.name,title:site.homeTitle,description:site.description,images:[site.visual]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={site.theme}><SiteStructuredData/><header className="journal-header"><Link className="journal-brand" href="/"><b>Travel Merge</b><span>Field Guide</span></Link><nav><Link href="/">Itinerary</Link><Link href="/about/">About</Link></nav><span className="stamp">TM<br/>26</span></header>{children}<footer className="journal-footer"><p><b>{site.name}</b> is an independent fan resource and is not affiliated with the developer or platform.</p><nav><Link href="/about/">About</Link><Link href="/privacy/">Privacy</Link><Link href="/contact/">Contact</Link></nav></footer><Telemetry/><SocialBar/></body></html>}
