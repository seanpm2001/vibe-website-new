import { computed } from 'vue';
import { isArray, ensureStartingSlash, removeExtention } from '/@/utils/layout';
import { getSideBarConfig, getFlatSideBarLinks } from '../layout/support/sideBar';
export function useNextAndPrevLinks() {
  const { page, theme } = useData();
  const path = computed(() => {
    return removeExtention(ensureStartingSlash(page.value.relativePath));
  });
  const candidates = computed(() => {
    const config = getSideBarConfig(theme.value.sidebar, path.value);
    return isArray(config) ? getFlatSideBarLinks(config) : [];
  });
  const index = computed(() => {
    return candidates.value.findIndex((item) => {
      return item.link === path.value;
    });
  });
  const next = computed(() => {
    if (theme.value.nextLinks !== false &&
            index.value > -1 &&
            index.value < candidates.value.length - 1) {
      return candidates.value[index.value + 1];
    }
    return void 0;
  });
  const prev = computed(() => {
    if (theme.value.prevLinks !== false && index.value > 0) {
      return candidates.value[index.value - 1];
    }
    return void 0;
  });
  const hasLinks = computed(() => !!next.value || !!prev.value);
  return {
    next,
    prev,
    hasLinks
  };
}
