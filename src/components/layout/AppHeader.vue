<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { siteConfig } from '../../config/site'
import SearchBox from '../ui/SearchBox.vue'
import ThemeToggle from './ThemeToggle.vue'
import MobileMenu from './MobileMenu.vue'

const router = useRouter()

const headerQuery = ref('')
const mobileMenuOpen = ref(false)
const mobileSearchOpen = ref(false)

const navItems = [
  { label: 'خانه', to: '/' },
  { label: 'دسته‌بندی‌ها', to: '/categories' },
  { label: 'همه محصولات', to: '/products' },
  { label: 'ارتباط با ما', to: '/contact' },
]

function submitSearch(query) {
  const q = query.trim()
  if (!q) return
  router.push({ path: '/search', query: { q } })
  mobileSearchOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
    <!-- Desktop -->
    <div class="mx-auto hidden max-w-7xl items-center gap-6 px-4 py-3 lg:flex">
      <RouterLink to="/" class="flex shrink-0 items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="991" viewBox="0 0 2048 991" class="w-13 h-auto text-emerald-600">
          <path
            d="M 136,913 L 143,918 L 339,918 L 344,913 L 344,906 L 374,851 L 401,782 L 421,750 L 548,750 L 551,756 L 551,761 L 533,790 L 529,805 L 529,839 L 535,859 L 563,891 L 570,897 L 588,906 L 594,906 L 603,909 L 642,906 L 675,886 L 698,843 L 698,798 L 688,772 L 676,758 L 676,754 L 679,750 L 822,750 L 858,820 L 878,875 L 888,888 L 900,917 L 1198,918 L 1205,912 L 1205,416 L 1208,413 L 1256,464 L 1350,585 L 1351,725 L 1363,739 L 1385,739 L 1389,742 L 1419,740 L 1422,743 L 1422,759 L 1426,763 L 1426,912 L 1432,918 L 1529,918 L 1530,920 L 1537,921 L 1536,920 L 1538,918 L 1544,918 L 1545,919 L 1543,920 L 1551,921 L 1551,918 L 1662,917 L 1668,908 L 1668,748 L 1664,742 L 1655,717 L 1645,696 L 1645,616 L 1720,535 L 1723,538 L 1723,912 L 1730,918 L 1905,918 L 1912,909 L 1912,88 L 1905,81 L 1736,81 L 1570,253 L 1570,255 L 1492,342 L 1413,342 L 1381,309 L 1345,264 L 1274,180 L 1265,164 L 1192,81 L 1185,78 L 1182,81 L 1026,81 L 1022,85 L 1021,718 L 1013,698 L 994,660 L 994,657 L 939,542 L 929,511 L 906,470 L 887,417 L 849,342 L 841,314 L 791,213 L 791,210 L 788,206 L 734,78 L 729,73 L 662,73 L 658,69 L 578,69 L 574,73 L 535,69 L 531,73 L 513,73 L 509,75 L 509,83 L 486,124 L 470,171 L 425,262 L 421,274 L 421,281 L 377,368 L 356,425 L 322,491 L 299,553 L 261,627 L 245,670 L 195,768 L 187,795 L 172,819 L 165,840 L 138,904 Z M 1747,320 L 1756,327 L 1759,342 L 1560,525 L 1556,525 L 1541,531 L 1472,528 L 1428,528 L 1422,534 L 1426,539 L 1426,568 L 1534,673 L 1543,673 L 1574,645 L 1577,647 L 1588,664 L 1590,678 L 1604,704 L 1619,749 L 1627,767 L 1627,891 L 1617,897 L 1601,897 L 1595,891 L 1595,782 L 1537,754 L 1493,739 L 1487,733 L 1487,731 L 1511,702 L 1512,693 L 1427,610 L 1422,613 L 1422,696 L 1412,706 L 1397,706 L 1390,699 L 1390,393 L 1401,382 L 1412,382 L 1422,393 L 1422,495 L 1425,498 L 1549,495 L 1718,343 L 1734,323 Z M 603,145 L 631,145 L 655,163 L 664,188 L 658,214 L 641,231 L 632,234 L 632,344 L 689,363 L 693,363 L 702,370 L 714,370 L 728,379 L 733,390 L 723,400 L 718,402 L 713,402 L 705,406 L 647,425 L 643,425 L 623,433 L 609,436 L 589,444 L 582,445 L 582,447 L 679,481 L 683,481 L 722,496 L 733,496 L 740,506 L 740,518 L 734,525 L 621,565 L 610,565 L 585,578 L 585,582 L 732,627 L 743,640 L 743,642 L 732,655 L 728,655 L 723,658 L 628,690 L 632,695 L 632,778 L 658,804 L 661,823 L 651,849 L 625,865 L 601,865 L 589,859 L 573,843 L 569,834 L 569,809 L 577,795 L 599,777 L 599,720 L 557,706 L 533,704 L 523,694 L 523,688 L 537,677 L 552,676 L 636,646 L 640,646 L 651,642 L 652,640 L 636,636 L 628,632 L 624,632 L 619,629 L 612,628 L 604,624 L 600,624 L 595,621 L 505,592 L 501,589 L 497,582 L 500,569 L 517,558 L 521,558 L 554,546 L 634,522 L 644,518 L 652,512 L 613,498 L 609,498 L 590,490 L 574,486 L 558,479 L 542,475 L 523,467 L 507,463 L 497,453 L 497,439 L 507,430 L 517,430 L 645,384 L 637,380 L 623,377 L 599,359 L 599,234 L 589,231 L 575,217 L 569,202 L 573,168 L 593,148 Z"
            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" />
        </svg>
        <span class="text-lg font-bold text-slate-900 dark:text-white">{{ siteConfig.shortName }}</span>
      </RouterLink>

      <div class="max-w-md flex-1">
        <SearchBox v-model="headerQuery" @submit="submitSearch" />
      </div>

      <nav class="flex shrink-0 items-center gap-1">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to"
          class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          active-class="!text-emerald-700 dark:!text-emerald-400">
          {{ item.label }}
        </RouterLink>
      </nav>

      <ThemeToggle />
    </div>

    <!-- Mobile -->
    <div class="lg:hidden">
      <div class="flex items-center gap-2 px-4 py-3">
        <button type="button" @click="mobileMenuOpen = true" aria-label="باز کردن منو"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <RouterLink to="/" class="flex flex-1 items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="991" viewBox="0 0 2048 991" class="w-11 h-auto text-emerald-600">
          <path
            d="M 136,913 L 143,918 L 339,918 L 344,913 L 344,906 L 374,851 L 401,782 L 421,750 L 548,750 L 551,756 L 551,761 L 533,790 L 529,805 L 529,839 L 535,859 L 563,891 L 570,897 L 588,906 L 594,906 L 603,909 L 642,906 L 675,886 L 698,843 L 698,798 L 688,772 L 676,758 L 676,754 L 679,750 L 822,750 L 858,820 L 878,875 L 888,888 L 900,917 L 1198,918 L 1205,912 L 1205,416 L 1208,413 L 1256,464 L 1350,585 L 1351,725 L 1363,739 L 1385,739 L 1389,742 L 1419,740 L 1422,743 L 1422,759 L 1426,763 L 1426,912 L 1432,918 L 1529,918 L 1530,920 L 1537,921 L 1536,920 L 1538,918 L 1544,918 L 1545,919 L 1543,920 L 1551,921 L 1551,918 L 1662,917 L 1668,908 L 1668,748 L 1664,742 L 1655,717 L 1645,696 L 1645,616 L 1720,535 L 1723,538 L 1723,912 L 1730,918 L 1905,918 L 1912,909 L 1912,88 L 1905,81 L 1736,81 L 1570,253 L 1570,255 L 1492,342 L 1413,342 L 1381,309 L 1345,264 L 1274,180 L 1265,164 L 1192,81 L 1185,78 L 1182,81 L 1026,81 L 1022,85 L 1021,718 L 1013,698 L 994,660 L 994,657 L 939,542 L 929,511 L 906,470 L 887,417 L 849,342 L 841,314 L 791,213 L 791,210 L 788,206 L 734,78 L 729,73 L 662,73 L 658,69 L 578,69 L 574,73 L 535,69 L 531,73 L 513,73 L 509,75 L 509,83 L 486,124 L 470,171 L 425,262 L 421,274 L 421,281 L 377,368 L 356,425 L 322,491 L 299,553 L 261,627 L 245,670 L 195,768 L 187,795 L 172,819 L 165,840 L 138,904 Z M 1747,320 L 1756,327 L 1759,342 L 1560,525 L 1556,525 L 1541,531 L 1472,528 L 1428,528 L 1422,534 L 1426,539 L 1426,568 L 1534,673 L 1543,673 L 1574,645 L 1577,647 L 1588,664 L 1590,678 L 1604,704 L 1619,749 L 1627,767 L 1627,891 L 1617,897 L 1601,897 L 1595,891 L 1595,782 L 1537,754 L 1493,739 L 1487,733 L 1487,731 L 1511,702 L 1512,693 L 1427,610 L 1422,613 L 1422,696 L 1412,706 L 1397,706 L 1390,699 L 1390,393 L 1401,382 L 1412,382 L 1422,393 L 1422,495 L 1425,498 L 1549,495 L 1718,343 L 1734,323 Z M 603,145 L 631,145 L 655,163 L 664,188 L 658,214 L 641,231 L 632,234 L 632,344 L 689,363 L 693,363 L 702,370 L 714,370 L 728,379 L 733,390 L 723,400 L 718,402 L 713,402 L 705,406 L 647,425 L 643,425 L 623,433 L 609,436 L 589,444 L 582,445 L 582,447 L 679,481 L 683,481 L 722,496 L 733,496 L 740,506 L 740,518 L 734,525 L 621,565 L 610,565 L 585,578 L 585,582 L 732,627 L 743,640 L 743,642 L 732,655 L 728,655 L 723,658 L 628,690 L 632,695 L 632,778 L 658,804 L 661,823 L 651,849 L 625,865 L 601,865 L 589,859 L 573,843 L 569,834 L 569,809 L 577,795 L 599,777 L 599,720 L 557,706 L 533,704 L 523,694 L 523,688 L 537,677 L 552,676 L 636,646 L 640,646 L 651,642 L 652,640 L 636,636 L 628,632 L 624,632 L 619,629 L 612,628 L 604,624 L 600,624 L 595,621 L 505,592 L 501,589 L 497,582 L 500,569 L 517,558 L 521,558 L 554,546 L 634,522 L 644,518 L 652,512 L 613,498 L 609,498 L 590,490 L 574,486 L 558,479 L 542,475 L 523,467 L 507,463 L 497,453 L 497,439 L 507,430 L 517,430 L 645,384 L 637,380 L 623,377 L 599,359 L 599,234 L 589,231 L 575,217 L 569,202 L 573,168 L 593,148 Z"
            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" />
        </svg>
          <span class="font-bold text-slate-900 dark:text-white">{{ siteConfig.shortName }}</span>
        </RouterLink>

        <button type="button" @click="mobileSearchOpen = !mobileSearchOpen" aria-label="جستجو"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <ThemeToggle />
      </div>

      <Transition enter-active-class="transition-all duration-150" enter-from-class="opacity-0 -translate-y-1"
        leave-active-class="transition-all duration-100" leave-to-class="opacity-0 -translate-y-1">
        <div v-if="mobileSearchOpen" class="border-t border-slate-200 px-4 py-3 dark:border-slate-800">
          <SearchBox v-model="headerQuery" @submit="submitSearch" />
        </div>
      </Transition>
    </div>

    <MobileMenu :open="mobileMenuOpen" @close="mobileMenuOpen = false" />
  </header>
</template>
