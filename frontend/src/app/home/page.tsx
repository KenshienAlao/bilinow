import { CATEGORY_GROUPS } from "@/config/product.config";
import { AppShell } from "@/components/layout/app-layout";
import { HeroBanner } from "@/components/home/hero-banner";
import { CategoryShortcuts } from "@/components/home/category-shortcuts";
import { RecommendedCarousel } from "@/components/home/recommended-carousel";
import { GroupCarousel } from "@/components/home/group-carousel";
import { DiscoverFeed } from "@/components/home/discover-feed";

export default function Home() {
  return (
    <AppShell>
      <HeroBanner />
      <CategoryShortcuts />

      <div className="mt-12 space-y-12">
        <RecommendedCarousel />

        {CATEGORY_GROUPS.map((group) => (
          <GroupCarousel key={group.id} group={group} />
        ))}

        <DiscoverFeed />
      </div>
    </AppShell>
  );
}
