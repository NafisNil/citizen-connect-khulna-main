import { Facebook, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-sidebar text-sidebar-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
              <img src="/khulan_logo.png" alt="খুলনা লোগো" className="h-8 w-8 rounded-md object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold">খুলনা নাগরিক সেবা</div>
              <div className="text-[10px] uppercase tracking-wider opacity-70">
                Khulna Citizen Services
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            খুলনা সিটি কর্পোরেশনের অনলাইন নাগরিক সেবা প্ল্যাটফর্ম। ঘরে বসে দ্রুত ও নিরাপদে সকল সেবা গ্রহণ করুন।
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-sidebar-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">দ্রুত লিংক</h4>
          <ul className="mt-4 space-y-2.5 text-sm opacity-80">
            <li><a href="/#services" className="hover:opacity-100 hover:underline">সকল সেবা</a></li>
            <li><a href="/#notices" className="hover:opacity-100 hover:underline">নোটিশ</a></li>
            <li><a href="/auth" className="hover:opacity-100 hover:underline">নিবন্ধন</a></li>
            <li><a href="/#faq" className="hover:opacity-100 hover:underline">সাধারণ প্রশ্ন</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">সেবাসমূহ</h4>
          <ul className="mt-4 space-y-2.5 text-sm opacity-80">
            <li>ট্রেড লাইসেন্স</li>
            <li>জন্ম ও মৃত্যু সনদ</li>
            <li>হোল্ডিং কর</li>
            <li>অটোরিকশা নিবন্ধন</li>
            <li>অভিযোগ দায়ের</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">যোগাযোগ</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>খুলনা সিটি কর্পোরেশন ভবন,<br />নগর ভবন, খুলনা ৯১০০</span>
            </li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> ০৪১-৭২২৩৪৫</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@kcc.gov.bd</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sidebar-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs opacity-80 sm:flex-row sm:px-6">
          <div>© {new Date().getFullYear()} খুলনা সিটি কর্পোরেশন। সর্বস্বত্ব সংরক্ষিত।</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">গোপনীয়তা নীতি</a>
            <a href="#" className="hover:underline">ব্যবহারের শর্ত</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
