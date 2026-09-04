import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {Fragment} from "react";
import {notFound} from "next/navigation";
import {GuideAd} from "@/components/ad-placements";
import {GuideStructuredData} from "@/components/structured-data";
import {getGuide,guides} from "@/lib/guides";
import {site} from "@/lib/site";

export const dynamicParams=false;export function generateStaticParams(){return guides.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const guide=getGuide((await params).slug);return guide?{title:guide.title,description:guide.description,alternates:{canonical:`/guides/${guide.slug}/`},openGraph:{images:[guide.sections.find((s)=>s.visual)?.visual?.src||site.visual]}}:{}}
export default async function GuidePage({params}:{params:Promise<{slug:string}>}){const guide=getGuide((await params).slug);if(!guide)notFound();return <main className="journal-entry"><GuideStructuredData guide={guide}/><nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Travel journal</Link><span>✦</span><span>{guide.category}</span></nav><header className="entry-heading"><p className="issue">Entry dated {guide.updated}</p><h1>{guide.title}</h1><p>{guide.description}</p></header><section className="pocket-answer"><span>Keep this card</span><p>{guide.quickAnswer}</p></section><div className="route-line">{guide.sections.map((section,index)=><Fragment key={section.heading}><section id={`stop-${index+1}`}><aside><span>{String(index+1).padStart(2,"0")}</span><i/></aside><div><p className="stop-label">Route stop {String(index+1).padStart(2,"0")}</p><h2>{section.heading}</h2>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.visual?<figure data-asset-id={section.visual.assetId}><Image src={section.visual.src} width={section.visual.width} height={section.visual.height} sizes="(max-width: 900px) 100vw, 760px" alt={section.visual.alt}/><figcaption>{section.visual.caption}</figcaption></figure>:null}</div></section>{index===3?<GuideAd/>:null}</Fragment>)}<section className="sources"><aside><span>✦</span></aside><div><p className="stop-label">Travel references</p><h2>Sources</h2>{guide.sources.map((source)=><p key={source.url}><a href={source.url} rel="noreferrer">{source.label} ↗</a></p>)}</div></section></div></main>}
