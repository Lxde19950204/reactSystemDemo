import Loadable from 'react-loadable';
import Loading from '@common/loading';

const goodsGood = Loadable({
    loader: () => import('./goods/good'),
    loading: Loading,
});

const brandList = Loadable({
    loader: () => import('./goods/brand/brandList'),
    loading: Loading,
});
const addBrand = Loadable({
    loader: () => import('./goods/brand/addBrand'),
    loading: Loading,
});
const goodsGirls = Loadable({
    loader: () => import('./goods/girls'),
    loading: Loading,
});
const goodsMan = Loadable({
    loader: () => import('./goods/man'),
    loading: Loading,
});
const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});
const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});

const User = Loadable({
    loader: () => import('./user'),
    loading: Loading,
});


export{
    brandList,
    addBrand,
    goodsGirls,
    goodsGood,
    goodsMan,
    Home,
    Login,
    User
}