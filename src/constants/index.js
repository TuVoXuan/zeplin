export const PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const EmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const AppPath = {
    Home: '/',
    Login: '/login',
    Register: '/register',
    Shop: '/shop',
    ProductDetail: '/product-details',
    ShoppingBag: '/shopping-bag',
    Order: '/order',
    MyAccount: '/my-account',
    Introduce: '/introduce',
    PrivacyPolicy : '/privacy-policy'
}