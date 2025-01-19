import { createRouter, createWebHistory } from 'vue-router';
import FieldsOverview from '@/components/FieldsOverview.vue';
import WhyStudy from '@/components/WhyStudy.vue';
import Future from '@/components/Future.vue';
import StudyWithUs from '@/components/StudyWithUs.vue';
import Instagram from '@/components/Instagram.vue';
import Products from '@/components/Products.vue';
import Cart from '@/components/Cart.vue';

const routes = [
    {path: '/fields-overview', name: 'FieldsOverview', component: FieldsOverview },
    { path: '/why-study', name: 'WhyStudy', component: WhyStudy },
    { path: '/future', name: 'Future', component: Future },
    { path: '/study-with-us', name: 'StudyWithUs', component: StudyWithUs },
    { path: '/instagram', name: 'Instagram', component: Instagram },
    { path: '/products', name: 'Products', component: Products },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/', redirect: '/fields-overview' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
