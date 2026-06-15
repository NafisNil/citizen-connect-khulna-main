import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/khulna-hero.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2, Baby, FileHeart, Bike, Receipt, AlertTriangle,
  FileText, Search, ShieldCheck, Clock, Users, FileCheck2,
  Phone, Ambulance, Flame, ShieldAlert, Mail, MapPin, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "খুলনা নাগরিক সেবা — Khulna City Corporation Citizen Services" },
      { name: "description", content: "ট্রেড লাইসেন্স, জন্ম ও মৃত্যু সনদ, হোল্ডিং কর, অটোরিকশা নিবন্ধন এবং অভিযোগ — সকল নাগরিক সেবা এখন অনলাইনে।" },
      { property: "og:title", content: "খুলনা নাগরিক সেবা" },
      { property: "og:description", content: "ঘরে বসে খুলনা সিটি কর্পোরেশনের সকল নাগরিক সেবা গ্রহণ করুন।" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Building2, title: "ট্রেড লাইসেন্স (নতুন)", desc: "নতুন ব্যবসার জন্য অনলাইনে আবেদন করুন।", color: "bg-primary/10 text-primary" },
  { icon: FileCheck2, title: "ট্রেড লাইসেন্স নবায়ন", desc: "পুরাতন লাইসেন্স দ্রুত নবায়ন করুন।", color: "bg-success/10 text-success" },
  { icon: Baby, title: "জন্ম সনদ", desc: "নবজাতকের জন্ম নিবন্ধন ও সনদপ্রাপ্তি।", color: "bg-accent/10 text-accent" },
  { icon: FileHeart, title: "মৃত্যু সনদ", desc: "মৃত্যু নিবন্ধন ও সনদের জন্য আবেদন।", color: "bg-destructive/10 text-destructive" },
  { icon: Bike, title: "অটোরিকশা নিবন্ধন", desc: "অটোরিকশা ও রিকশার নিবন্ধন।", color: "bg-warning/20 text-warning-foreground" },
  { icon: Receipt, title: "হোল্ডিং কর তথ্য", desc: "হোল্ডিং কর গণনা ও পরিশোধ।", color: "bg-primary/10 text-primary" },
  { icon: AlertTriangle, title: "অভিযোগ দায়ের", desc: "নাগরিক সমস্যা ও অভিযোগ জানান।", color: "bg-accent/10 text-accent" },
  { icon: Search, title: "আবেদন ট্র্যাকিং", desc: "আবেদনের সর্বশেষ অবস্থা দেখুন।", color: "bg-secondary text-secondary-foreground" },
];

const stats = [
  { value: "১,২৪,৫০০+", label: "নিবন্ধিত নাগরিক", icon: Users },
  { value: "৮৬,২০০+", label: "সম্পন্ন আবেদন", icon: FileCheck2 },
  { value: "৩১টি", label: "ওয়ার্ড", icon: MapPin },
  { value: "২৪/৭", label: "অনলাইন সেবা", icon: Clock },
];

const notices = [
  { date: "১৪ জুন, ২০২৬", tag: "জরুরি", tagVariant: "destructive" as const, title: "জলাবদ্ধতা নিরসনে জরুরি ব্যবস্থা গ্রহণ", desc: "ভারী বর্ষণের কারণে নাগরিকদের জন্য জরুরি হেল্পলাইন চালু।" },
  { date: "১০ জুন, ২০২৬", tag: "ঘোষণা", tagVariant: "default" as const, title: "হোল্ডিং কর পরিশোধের সময়সীমা বৃদ্ধি", desc: "২০২৬-২৭ অর্থবছরের কর পরিশোধের শেষ তারিখ ৩০ জুন।" },
  { date: "০৫ জুন, ২০২৬", tag: "তথ্য", tagVariant: "secondary" as const, title: "ট্রেড লাইসেন্স অনলাইন আবেদন চালু", desc: "এখন থেকে সকল ট্রেড লাইসেন্স অনলাইনে আবেদন করা যাবে।" },
  { date: "০১ জুন, ২০২৬", tag: "ঘোষণা", tagVariant: "default" as const, title: "ই-পেমেন্টে বিকাশ ও নগদ যুক্ত হলো", desc: "নাগরিক সেবার ফি এখন বিকাশ ও নগদে পরিশোধ করা যাবে।" },
];

const emergencies = [
  { icon: Phone, label: "নাগরিক হেল্পলাইন", number: "৩৩৩", color: "bg-primary text-primary-foreground" },
  { icon: Ambulance, label: "অ্যাম্বুলেন্স", number: "১৬২৬৩", color: "bg-destructive text-destructive-foreground" },
  { icon: Flame, label: "ফায়ার সার্ভিস", number: "১৬১৬৩", color: "bg-accent text-accent-foreground" },
  { icon: ShieldAlert, label: "পুলিশ", number: "৯৯৯", color: "bg-sidebar text-sidebar-foreground" },
];

const faqs = [
  { q: "অনলাইনে আবেদন করতে কী কী প্রয়োজন?", a: "জাতীয় পরিচয়পত্র, সচল মোবাইল নম্বর এবং প্রাসঙ্গিক ডকুমেন্টের স্ক্যান কপি প্রয়োজন।" },
  { q: "আবেদনের অবস্থা কীভাবে জানব?", a: "ড্যাশবোর্ডে লগইন করে অথবা ট্র্যাকিং নম্বর দিয়ে যেকোনো সময় আবেদনের অবস্থা দেখা যাবে।" },
  { q: "ফি পরিশোধের কোন কোন মাধ্যম রয়েছে?", a: "বিকাশ, নগদ এবং ব্যাংক চালানের মাধ্যমে ফি পরিশোধ করা যাবে।" },
  { q: "সেবা পেতে কত সময় লাগে?", a: "সেবা অনুযায়ী ৩ থেকে ১৫ কার্যদিবস। জরুরি ক্ষেত্রে দ্রুততর প্রক্রিয়া রয়েছে।" },
  { q: "ভুল তথ্য সংশোধন কীভাবে করব?", a: "প্রোফাইল থেকে যেকোনো সময় ব্যক্তিগত তথ্য সংশোধন করা যাবে। আবেদনের তথ্য সংশোধনের জন্য সংশ্লিষ্ট অফিসে যোগাযোগ করতে হবে।" },
];

function HomePage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="খুলনা শহরের রূপসা নদী"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sidebar/95 via-sidebar/80 to-sidebar/40" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
            <Badge variant="outline" className="border-accent/50 bg-accent/10 text-accent backdrop-blur">
              <ShieldCheck className="mr-1 h-3 w-3" /> সরকারি ডিজিটাল সেবা
            </Badge>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-sidebar-foreground sm:text-5xl lg:text-6xl">
              খুলনা সিটি কর্পোরেশনের <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">সকল নাগরিক সেবা</span> এক জায়গায়
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-sidebar-foreground/85 sm:text-lg">
              ট্রেড লাইসেন্স, জন্ম-মৃত্যু সনদ, হোল্ডিং কর, অভিযোগ — ঘরে বসে দ্রুত, নিরাপদ ও স্বচ্ছ ডিজিটাল সেবা।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" variant="hero" asChild>
                <Link to="/auth" search={{ mode: "signup" }}>
                  নাগরিক নিবন্ধন <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-sidebar-foreground/30 bg-sidebar/40 text-sidebar-foreground backdrop-blur hover:bg-sidebar/60 hover:text-sidebar-foreground" asChild>
                <a href="#services">সেবাসমূহ দেখুন</a>
              </Button>
            </div>

            {/* Tracking */}
            <Card className="mt-10 max-w-2xl border-0 bg-card/95 shadow-[var(--shadow-elegant)] backdrop-blur">
              <CardContent className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  আবেদন ট্র্যাক করুন
                </div>
                <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-2">
                  <Input placeholder="ট্র্যাকিং নম্বর (যেমন: KNC-260614-A1B2C3)" />
                  <Button variant="accent" className="shrink-0">
                    <Search className="h-4 w-4" /> <span className="hidden sm:inline">খুঁজুন</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y bg-secondary/40">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-0 sm:px-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4 bg-background p-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="text-primary">নাগরিক সেবা</Badge>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">দ্রুত সেবাসমূহ</h2>
            <p className="mt-3 text-muted-foreground">
              যে সেবাটি প্রয়োজন তা নির্বাচন করুন এবং অনলাইনে আবেদন প্রক্রিয়া শুরু করুন।
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card key={s.title} className="group cursor-pointer border-border/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <CardContent className="p-6">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    আবেদন করুন <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* EMERGENCY */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="rounded-3xl bg-[image:var(--gradient-hero)] p-8 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="text-primary-foreground">
                <Badge variant="outline" className="border-accent/40 bg-accent/20 text-accent-foreground">জরুরি যোগাযোগ</Badge>
                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">যেকোনো জরুরি প্রয়োজনে</h2>
                <p className="mt-2 max-w-md text-primary-foreground/85">
                  ২৪ ঘণ্টা সক্রিয় হেল্পলাইন। তাৎক্ষণিক সহায়তার জন্য নিচের নম্বরগুলোতে কল করুন।
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {emergencies.map((e) => (
                  <a key={e.label} href={`tel:${e.number}`} className={`${e.color} flex items-center gap-3 rounded-2xl p-4 transition-transform hover:scale-105`}>
                    <e.icon className="h-5 w-5 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs opacity-90">{e.label}</div>
                      <div className="font-display text-lg font-bold leading-none">{e.number}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NOTICES */}
        <section id="notices" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Badge variant="secondary" className="text-primary">সর্বশেষ</Badge>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">নোটিশ ও ঘোষণা</h2>
            </div>
            <a href="#" className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex">সকল নোটিশ →</a>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {notices.map((n, i) => (
              <Card key={i} className="border-l-4 border-l-primary transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Badge variant={n.tagVariant}>{n.tag}</Badge>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="mt-3 font-semibold">{n.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{n.desc}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    বিস্তারিত পড়ুন <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y bg-secondary/30">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="text-center">
              <Badge variant="secondary" className="text-primary">প্রশ্নোত্তর</Badge>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">সাধারণ জিজ্ঞাসা</h2>
              <p className="mt-3 text-muted-foreground">নাগরিকদের সবচেয়ে বেশি জিজ্ঞাসিত প্রশ্নসমূহ</p>
            </div>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="rounded-lg border bg-background px-4 mb-2 border-b">
                  <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="text-primary">যোগাযোগ</Badge>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">আপনার মতামত জানান</h2>
              <p className="mt-3 text-muted-foreground">সেবা উন্নয়নে আপনার পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ।</p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: MapPin, label: "ঠিকানা", val: "খুলনা সিটি কর্পোরেশন, নগর ভবন, খুলনা ৯১০০" },
                  { icon: Phone, label: "ফোন", val: "০৪১-৭২২৩৪৫ / হেল্পলাইন ৩৩৩" },
                  { icon: Mail, label: "ইমেইল", val: "info@kcc.gov.bd" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="font-medium">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-[var(--shadow-card)]">
              <CardContent className="space-y-4 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="text-sm font-medium">নাম</label><Input className="mt-1.5" placeholder="আপনার নাম" /></div>
                  <div><label className="text-sm font-medium">মোবাইল</label><Input className="mt-1.5" placeholder="০১৭xxxxxxxx" /></div>
                </div>
                <div><label className="text-sm font-medium">ইমেইল</label><Input className="mt-1.5" type="email" placeholder="email@example.com" /></div>
                <div><label className="text-sm font-medium">বার্তা</label><Textarea className="mt-1.5" rows={4} placeholder="আপনার বার্তা লিখুন..." /></div>
                <Button variant="accent" className="w-full">
                  <FileText className="h-4 w-4" /> বার্তা পাঠান
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
