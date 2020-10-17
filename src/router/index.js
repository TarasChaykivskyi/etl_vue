import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Home from "@/pages/Home";
import Bkpt from "@/pages/Bkpt";
import Ktp from "@/pages/Ktp";
import ElectricalLaboratoryTo1000v from "@/pages/ElectricalLaboratoryTo1000v";
import Certificate from "@/pages/Certificate";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/bktp',
        component: Bkpt
    },
    {
        path: '/ktp',
        component: Ktp
    },
    {
        path: '/electrical-laboratory',
        component: ElectricalLaboratoryTo1000v
    },
    {
        path: '/certificate',
        component: Certificate
    },
    {
        path: '*',
        redirect: {name: 'home'}
    },

]

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL,
    mode: 'history'
})

export default router;