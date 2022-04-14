import { createPinia } from 'pinia';
import DefaultTheme from "/@/layout";
import SvgIcon from '/@/components/SvgIcon.vue';
import LazyImg from '/@/components/LazyImg.vue';
import MdFormat from '/@/components/MdFormat.vue';
import 'virtual:svg-icons-register'; // Important
import '/@css/vibe.sass';



export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // register global components
    app.use(createPinia())
    app.component('Layout', DefaultTheme);
    app.component('svg-icon', SvgIcon);
    app.component('lazy-img', LazyImg);
    app.component('md-format', MdFormat);
    // app.config.globalProperties.md = (input) => {
    //   return marked(input)
    // }
    // register website and lp page components

    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
