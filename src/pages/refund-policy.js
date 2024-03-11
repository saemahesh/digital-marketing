/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Sticky from "react-stickynode";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const RefundReturnsPolicy = () => {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <main
        id="main"
        className="site-main container"
        style={{ padding: "130px 100px 100px 100px" }}
      >
        <article
          className="post-1896 page type-page status-publish ast-article-single"
          id="post-1896"
        >
          <style id="astra-theme-css-inline-css">
            {`
footer>div>div{
    padding:30px !important;
}
footer h5{
    margin-top: 0 !important;
}
button{
    background-color: white !important;
    border: 1px solid blue !important;
}
    .ast-no-sidebar .entry-content .alignfull {
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        max-width: 100vw;
        width: 100vw;
    }

    .ast-no-sidebar .entry-content .alignwide {
        margin-left: calc(-41vw + 50%);
        margin-right: calc(-41vw + 50%);
        max-width: unset;
        width: unset;
    }

    .ast-no-sidebar .entry-content .alignfull .alignfull,.ast-no-sidebar .entry-content .alignfull .alignwide,.ast-no-sidebar .entry-content .alignwide .alignfull,.ast-no-sidebar .entry-content .alignwide .alignwide,.ast-no-sidebar .entry-content .wp-block-column .alignfull,.ast-no-sidebar .entry-content .wp-block-column .alignwide {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .wp-block-gallery,.blocks-gallery-grid {
        margin: 0;
    }

    .wp-block-separator {
        max-width: 100px;
    }

    .wp-block-separator.is-style-wide,.wp-block-separator.is-style-dots {
        max-width: none;
    }

    .entry-content .has-2-columns .wp-block-column:first-child {
        padding-right: 10px;
    }

    .entry-content .has-2-columns .wp-block-column:last-child {
        padding-left: 10px;
    }

    @media(max-width: 782px) {
        .entry-content .wp-block-columns .wp-block-column {
            flex-basis:100%;
        }

        .entry-content .has-2-columns .wp-block-column:first-child {
            padding-right: 0;
        }

        .entry-content .has-2-columns .wp-block-column:last-child {
            padding-left: 0;
        }
    }

    body .entry-content .wp-block-latest-posts {
        margin-left: 0;
    }

    body .entry-content .wp-block-latest-posts li {
        list-style: none;
    }

    .ast-no-sidebar .ast-container .entry-content .wp-block-latest-posts {
        margin-left: 0;
    }

    .ast-header-break-point .entry-content .alignwide {
        margin-left: auto;
        margin-right: auto;
    }

    .entry-content .blocks-gallery-item img {
        margin-bottom: auto;
    }

    .wp-block-pullquote {
        border-top: 4px solid #555d66;
        border-bottom: 4px solid #555d66;
        color: #40464d;
    }

    :root {
        --ast-container-default-xlg-padding: 6.67em;
        --ast-container-default-lg-padding: 5.67em;
        --ast-container-default-slg-padding: 4.34em;
        --ast-container-default-md-padding: 3.34em;
        --ast-container-default-sm-padding: 6.67em;
        --ast-container-default-xs-padding: 2.4em;
        --ast-container-default-xxs-padding: 1.4em;
        --ast-code-block-background: #EEEEEE;
        --ast-comment-inputs-background: #FAFAFA;
        --ast-normal-container-width: 1200px;
        --ast-narrow-container-width: 750px;
        --ast-blog-title-font-weight: normal;
        --ast-blog-meta-weight: inherit;
    }

    html {
        font-size: 112.5%;
    }

    a,.page-title {
        color: var(--ast-global-color-2);
    }

    a:hover,a:focus {
        color: var(--ast-global-color-1);
    }

    body,button,input,select,textarea,.ast-button,.ast-custom-button {
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        font-size: 18px;
        font-size: 1rem;
    }

    blockquote {
        color: var(--ast-global-color-3);
    }

    p,.entry-content p {
        margin-bottom: 1em;
    }

    h1,.entry-content h1,h2,.entry-content h2,h3,.entry-content h3,h4,.entry-content h4,h5,.entry-content h5,h6,.entry-content h6,.site-title,.site-title a {
        font-family: 'Inter',sans-serif;
        font-weight: 600;
    }

    .site-title {
        font-size: 35px;
        font-size: 1.9444444444444rem;
        display: none;
    }

    header .custom-logo-link img {
        max-width: 145px;
    }

    .astra-logo-svg {
        width: 145px;
    }

    .site-header .site-description {
        font-size: 15px;
        font-size: 0.83333333333333rem;
        display: none;
    }

    .entry-title {
        font-size: 40px;
        font-size: 2.2222222222222rem;
    }

    .archive .ast-article-post .ast-article-inner,.blog .ast-article-post .ast-article-inner,.archive .ast-article-post .ast-article-inner:hover,.blog .ast-article-post .ast-article-inner:hover {
        overflow: hidden;
    }

    h1,.entry-content h1 {
        font-size: 80px;
        font-size: 4.4444444444444rem;
        font-family: 'Inter',sans-serif;
        line-height: 1em;
    }

    h2,.entry-content h2 {
        font-size: 48px;
        font-size: 2.6666666666667rem;
        font-family: 'Inter',sans-serif;
    }

    h3,.entry-content h3 {
        font-size: 32px;
        font-size: 1.7777777777778rem;
        font-family: 'Inter',sans-serif;
    }

    h4,.entry-content h4 {
        font-size: 24px;
        font-size: 1.3333333333333rem;
        font-family: 'Inter',sans-serif;
    }

    h5,.entry-content h5 {
        font-size: 20px;
        font-size: 1.1111111111111rem;
        font-family: 'Inter',sans-serif;
    }

    h6,.entry-content h6 {
        font-size: 13px;
        font-size: 0.72222222222222rem;
        font-family: 'Inter',sans-serif;
    }

    ::selection {
        background-color: var(--ast-global-color-0);
        color: #000000;
    }

    body,h1,.entry-title a,.entry-content h1,h2,.entry-content h2,h3,.entry-content h3,h4,.entry-content h4,h5,.entry-content h5,h6,.entry-content h6 {
        color: var(--ast-global-color-3);
    }

    .tagcloud a:hover,.tagcloud a:focus,.tagcloud a.current-item {
        color: #ffffff;
        border-color: var(--ast-global-color-2);
        background-color: var(--ast-global-color-2);
    }

    input:focus,input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="reset"]:focus,input[type="search"]:focus,textarea:focus {
        border-color: var(--ast-global-color-2);
    }

    input[type="radio"]:checked,input[type=reset],input[type="checkbox"]:checked,input[type="checkbox"]:hover:checked,input[type="checkbox"]:focus:checked,input[type=range]::-webkit-slider-thumb {
        border-color: var(--ast-global-color-2);
        background-color: var(--ast-global-color-2);
        box-shadow: none;
    }

    .site-footer a:hover + .post-count,.site-footer a:focus + .post-count {
        background: var(--ast-global-color-2);
        border-color: var(--ast-global-color-2);
    }

    .single .nav-links .nav-previous,.single .nav-links .nav-next {
        color: var(--ast-global-color-2);
    }

    .entry-meta,.entry-meta * {
        line-height: 1.45;
        color: var(--ast-global-color-2);
    }

    .entry-meta a:not(.ast-button):hover,.entry-meta a:not(.ast-button):hover *,.entry-meta a:not(.ast-button):focus,.entry-meta a:not(.ast-button):focus *,.page-links>.page-link,.page-links .page-link:hover,.post-navigation a:hover {
        color: var(--ast-global-color-1);
    }

    #cat option,.secondary .calendar_wrap thead a,.secondary .calendar_wrap thead a:visited {
        color: var(--ast-global-color-2);
    }

    .secondary .calendar_wrap #today,.ast-progress-val span {
        background: var(--ast-global-color-2);
    }

    .secondary a:hover + .post-count,.secondary a:focus + .post-count {
        background: var(--ast-global-color-2);
        border-color: var(--ast-global-color-2);
    }

    .calendar_wrap #today>a {
        color: #ffffff;
    }

    .page-links .page-link,.single .post-navigation a {
        color: var(--ast-global-color-2);
    }

    .ast-search-menu-icon .search-form button.search-submit {
        padding: 0 4px;
    }

    .ast-search-menu-icon form.search-form {
        padding-right: 0;
    }

    .ast-search-menu-icon.slide-search input.search-field {
        width: 0;
    }

    .ast-header-search .ast-search-menu-icon.ast-dropdown-active .search-form,.ast-header-search .ast-search-menu-icon.ast-dropdown-active .search-field:focus {
        transition: all 0.2s;
    }

    .search-form input.search-field:focus {
        outline: none;
    }

    .widget-title,.widget .wp-block-heading {
        font-size: 25px;
        font-size: 1.3888888888889rem;
        color: var(--ast-global-color-3);
    }

    .ast-search-menu-icon.slide-search a:focus-visible:focus-visible,.astra-search-icon:focus-visible,#close:focus-visible,a:focus-visible,.ast-menu-toggle:focus-visible,.site .skip-link:focus-visible,.wp-block-loginout input:focus-visible,.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper,.ast-header-navigation-arrow:focus-visible,.woocommerce .wc-proceed-to-checkout>.checkout-button:focus-visible,.woocommerce .woocommerce-MyAccount-navigation ul li a:focus-visible,.ast-orders-table__row .ast-orders-table__cell:focus-visible,.woocommerce .woocommerce-order-details .order-again>.button:focus-visible,.woocommerce .woocommerce-message a.button.wc-forward:focus-visible,.woocommerce #minus_qty:focus-visible,.woocommerce #plus_qty:focus-visible,a#ast-apply-coupon:focus-visible,.woocommerce .woocommerce-info a:focus-visible,.woocommerce .astra-shop-summary-wrap a:focus-visible,.woocommerce a.wc-forward:focus-visible,#ast-apply-coupon:focus-visible,.woocommerce-js .woocommerce-mini-cart-item a.remove:focus-visible,#close:focus-visible,.button.search-submit:focus-visible,#search_submit:focus,.normal-search:focus-visible {
        outline-style: dotted;
        outline-color: inherit;
        outline-width: thin;
    }

    input:focus,input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="reset"]:focus,input[type="search"]:focus,input[type="number"]:focus,textarea:focus,.wp-block-search__input:focus,[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-minimal:focus,.ast-mobile-popup-drawer.active .menu-toggle-close:focus,.woocommerce-ordering select.orderby:focus,#ast-scroll-top:focus,#coupon_code:focus,.woocommerce-page #comment:focus,.woocommerce #reviews #respond input#submit:focus,.woocommerce a.add_to_cart_button:focus,.woocommerce .button.single_add_to_cart_button:focus,.woocommerce .woocommerce-cart-form button:focus,.woocommerce .woocommerce-cart-form__cart-item .quantity .qty:focus,.woocommerce .woocommerce-billing-fields .woocommerce-billing-fields__field-wrapper .woocommerce-input-wrapper>.input-text:focus,.woocommerce #order_comments:focus,.woocommerce #place_order:focus,.woocommerce .woocommerce-address-fields .woocommerce-address-fields__field-wrapper .woocommerce-input-wrapper>.input-text:focus,.woocommerce .woocommerce-MyAccount-content form button:focus,.woocommerce .woocommerce-MyAccount-content .woocommerce-EditAccountForm .woocommerce-form-row .woocommerce-Input.input-text:focus,.woocommerce .ast-woocommerce-container .woocommerce-pagination ul.page-numbers li a:focus,body #content .woocommerce form .form-row .select2-container--default .select2-selection--single:focus,#ast-coupon-code:focus,.woocommerce.woocommerce-js .quantity input[type=number]:focus,.woocommerce-js .woocommerce-mini-cart-item .quantity input[type=number]:focus,.woocommerce p#ast-coupon-trigger:focus {
        border-style: dotted;
        border-color: inherit;
        border-width: thin;
    }

    input {
        outline: none;
    }

    .woocommerce-js input[type=text]:focus,.woocommerce-js input[type=email]:focus,.woocommerce-js textarea:focus,input[type=number]:focus,.comments-area textarea#comment:focus,.comments-area textarea#comment:active,.comments-area .ast-comment-formwrap input[type="text"]:focus,.comments-area .ast-comment-formwrap input[type="text"]:active {
        outline-style: disable;
        outline-color: inherit;
        outline-width: thin;
    }

    .ast-logo-title-inline .site-logo-img {
        padding-right: 1em;
    }

    .site-logo-img img {
        transition: all 0.2s linear;
    }

    body .ast-oembed-container * {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
    }

    body .wp-block-embed-pocket-casts .ast-oembed-container * {
        position: unset;
    }

    .ast-single-post-featured-section + article {
        margin-top: 2em;
    }

    .site-content .ast-single-post-featured-section img {
        width: 100%;
        overflow: hidden;
        object-fit: cover;
    }

    .site>.ast-single-related-posts-container {
        margin-top: 0;
    }

    @media(min-width: 922px) {
        .ast-desktop .ast-container--narrow {
            max-width:var(--ast-narrow-container-width);
            margin: 0 auto;
        }
    }

    @media(max-width: 921px) {
        #ast-desktop-header {
            display:none;
        }
    }

    @media(min-width: 922px) {
        #ast-mobile-header {
            display:none;
        }
    }

    .ast-site-header-cart .cart-container,.ast-edd-site-header-cart .ast-edd-cart-container {
        transition: all 0.2s linear;
    }

    .ast-site-header-cart .ast-woo-header-cart-info-wrap,.ast-edd-site-header-cart .ast-edd-header-cart-info-wrap {
        padding: 0 6px 0 2px;
        font-weight: 600;
        line-height: 2.7;
        display: inline-block;
    }

    .ast-site-header-cart i.astra-icon {
        font-size: 20px;
        font-size: 1.3em;
        font-style: normal;
        font-weight: normal;
        position: relative;
        padding: 0 2px;
    }

    .ast-site-header-cart i.astra-icon.no-cart-total:after,.ast-header-break-point.ast-header-custom-item-outside .ast-edd-header-cart-info-wrap,.ast-header-break-point.ast-header-custom-item-outside .ast-woo-header-cart-info-wrap {
        display: none;
    }

    .ast-site-header-cart.ast-menu-cart-fill i.astra-icon,.ast-edd-site-header-cart.ast-edd-menu-cart-fill span.astra-icon {
        font-size: 1.1em;
    }

    .astra-cart-drawer {
        position: fixed;
        display: block;
        visibility: hidden;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        z-index: 10000;
        background-color: var(--ast-global-color-5);
        transform: translate3d(0,0,0);
        opacity: 0;
        will-change: transform;
        transition: 0.25s ease;
    }

    .woocommerce-mini-cart {
        position: relative;
    }

    .woocommerce-mini-cart::before {
        content: "";
        transition: .3s;
    }

    .woocommerce-mini-cart.ajax-mini-cart-qty-loading::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
        background-color: var(--ast-global-color-5);
        opacity: .5;
    }

    .astra-cart-drawer {
        width: 460px;
        height: 100%;
        left: 100%;
        top: 0px;
        opacity: 1;
        transform: translate3d(0%,0,0);
    }

    .astra-cart-drawer .astra-cart-drawer-header {
        position: absolute;
        width: 100%;
        text-align: left;
        text-transform: inherit;
        font-weight: 500;
        border-bottom: 1px solid var(--ast-border-color);
        padding: 1.34em;
        line-height: 1;
        z-index: 1;
        max-height: 3.5em;
    }

    .astra-cart-drawer .astra-cart-drawer-header .astra-cart-drawer-title {
        color: var(--ast-global-color-2);
    }

    .astra-cart-drawer .astra-cart-drawer-close .ast-close-svg {
        width: 22px;
        height: 22px;
    }

    .astra-cart-drawer .astra-cart-drawer-content,.astra-cart-drawer .astra-cart-drawer-content .widget_shopping_cart,.astra-cart-drawer .astra-cart-drawer-content .widget_shopping_cart_content {
        height: 100%;
    }

    .astra-cart-drawer .astra-cart-drawer-content {
        padding-top: 3.5em;
    }

    .astra-cart-drawer .ast-mini-cart-price-wrap .multiply-symbol {
        padding: 0 0.5em;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart-item .ast-mini-cart-price-wrap {
        float: right;
        margin-top: 0.5em;
        max-width: 50%;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart-item .variation {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart-item .variation dt {
        font-weight: 500;
    }

    .astra-cart-drawer .astra-cart-drawer-content .widget_shopping_cart_content {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .astra-cart-drawer .astra-cart-drawer-content .widget_shopping_cart_content ul li {
        min-height: 60px;
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__total {
        display: flex;
        justify-content: space-between;
        padding: 0.7em 1.34em;
        margin-bottom: 0;
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__total strong,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__total .amount {
        width: 50%;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart {
        padding: 1.3em;
        flex: 1;
        overflow: auto;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart a.remove {
        width: 20px;
        height: 20px;
        line-height: 16px;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__total {
        padding: 1em 1.5em;
        margin: 0;
        text-align: center;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons {
        padding: 1.34em;
        text-align: center;
        margin-bottom: 0;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button.checkout {
        margin-right: 0;
    }

    .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a {
        width: 100%;
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a:nth-last-child(1) {
        margin-bottom: 0;
    }

    .astra-cart-drawer .astra-cart-drawer-content .edd-cart-item {
        padding: .5em 2.6em .5em 1.5em;
    }

    .astra-cart-drawer .astra-cart-drawer-content .edd-cart-item .edd-remove-from-cart::after {
        width: 20px;
        height: 20px;
        line-height: 16px;
    }

    .astra-cart-drawer .astra-cart-drawer-content .edd-cart-number-of-items {
        padding: 1em 1.5em 1em 1.5em;
        margin-bottom: 0;
        text-align: center;
    }

    .astra-cart-drawer .astra-cart-drawer-content .edd_total {
        padding: .5em 1.5em;
        margin: 0;
        text-align: center;
    }

    .astra-cart-drawer .astra-cart-drawer-content .cart_item.edd_checkout {
        padding: 1em 1.5em 0;
        text-align: center;
        margin-top: 0;
    }

    .astra-cart-drawer .widget_shopping_cart_content>.woocommerce-mini-cart__empty-message {
        display: none;
    }

    .astra-cart-drawer .woocommerce-mini-cart__empty-message,.astra-cart-drawer .cart_item.empty {
        text-align: center;
        margin-top: 10px;
    }

    body.admin-bar .astra-cart-drawer {
        padding-top: 32px;
    }

    @media(max-width: 782px) {
        body.admin-bar .astra-cart-drawer {
            padding-top:46px;
        }
    }

    .ast-mobile-cart-active body.ast-hfb-header {
        overflow: hidden;
    }

    .ast-mobile-cart-active .astra-mobile-cart-overlay {
        opacity: 1;
        cursor: pointer;
        visibility: visible;
        z-index: 999;
    }

    .ast-mini-cart-empty-wrap {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        align-items: flex-end;
    }

    .ast-mini-cart-empty-wrap>* {
        width: 100%;
    }

    .astra-cart-drawer-content .ast-mini-cart-empty {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }

    .astra-cart-drawer-content .ast-mini-cart-empty .ast-mini-cart-message {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 1.34em;
    }

    @media(min-width: 546px) {
        .astra-cart-drawer .astra-cart-drawer-content.ast-large-view .woocommerce-mini-cart__buttons {
            display:flex;
        }

        .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content.ast-large-view .woocommerce-mini-cart__buttons a,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content.ast-large-view .woocommerce-mini-cart__buttons a.checkout {
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    .ast-site-header-cart .cart-container:focus-visible {
        display: inline-block;
    }

    .ast-site-header-cart i.astra-icon:after {
        content: attr(data-cart-total);
        position: absolute;
        font-family: 'Roboto',sans-serif;
        font-style: normal;
        top: -10px;
        right: -12px;
        font-weight: bold;
        box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
        font-size: 11px;
        padding-left: 0px;
        padding-right: 2px;
        line-height: 17px;
        letter-spacing: -.5px;
        height: 18px;
        min-width: 18px;
        border-radius: 99px;
        text-align: center;
        z-index: 3;
    }

    li.woocommerce-custom-menu-item .ast-site-header-cart i.astra-icon:after,li.edd-custom-menu-item .ast-edd-site-header-cart span.astra-icon:after {
        padding-left: 2px;
    }

    .astra-cart-drawer .astra-cart-drawer-close {
        position: absolute;
        top: 0.5em;
        right: 0;
        border: none;
        margin: 0;
        padding: .6em 1em .4em;
        color: var(--ast-global-color-2);
        background-color: transparent;
    }

    .astra-mobile-cart-overlay {
        background-color: rgba(0,0,0,0.4);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .astra-cart-drawer .astra-cart-drawer-content .edd-cart-item .edd-remove-from-cart {
        right: 1.2em;
    }

    .ast-header-break-point.ast-woocommerce-cart-menu.ast-hfb-header .ast-cart-menu-wrap,.ast-header-break-point.ast-hfb-header .ast-cart-menu-wrap,.ast-header-break-point .ast-edd-site-header-cart-wrap .ast-edd-cart-menu-wrap {
        width: auto;
        height: 2em;
        font-size: 1.4em;
        line-height: 2;
        vertical-align: middle;
        text-align: right;
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping) {
        margin-right: 10px;
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping),.ast-site-header-cart .widget_shopping_cart .buttons .button:not(.checkout),.ast-site-header-cart .ast-site-header-cart-data .ast-mini-cart-empty .woocommerce-mini-cart__buttons a.button {
        background-color: transparent;
        border-style: solid;
        border-width: 1px;
        border-color: var(--ast-global-color-0);
        color: var(--ast-global-color-0);
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping):hover,.ast-site-header-cart .widget_shopping_cart .buttons .button:not(.checkout):hover {
        border-color: var(--ast-global-color-1);
        color: var(--ast-global-color-1);
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a.checkout {
        margin-left: 0;
        margin-top: 10px;
        border-style: solid;
        border-width: 2px;
        border-color: var(--ast-global-color-0);
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a.checkout:hover {
        border-color: var(--ast-global-color-1);
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__total strong {
        padding-right: .5em;
        text-align: left;
        font-weight: 500;
    }

    .woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__total .amount {
        text-align: right;
    }

    .astra-cart-drawer.active {
        transform: translate3d(-100%,0,0);
        visibility: visible;
    }

    .ast-site-header-cart.ast-menu-cart-outline .ast-cart-menu-wrap,.ast-site-header-cart.ast-menu-cart-fill .ast-cart-menu-wrap,.ast-edd-site-header-cart.ast-edd-menu-cart-outline .ast-edd-cart-menu-wrap,.ast-edd-site-header-cart.ast-edd-menu-cart-fill .ast-edd-cart-menu-wrap {
        line-height: 1.8;
    }

    .ast-site-header-cart .cart-container *,.ast-edd-site-header-cart .ast-edd-cart-container * {
        transition: all 0s linear;
    }

    @media(max-width: 921px) {
        .astra-cart-drawer.active {
            width:80%;
        }
    }

    @media(max-width: 544px) {
        .astra-cart-drawer.active {
            width:100%;
        }
    }

    .wp-block-buttons.aligncenter {
        justify-content: center;
    }

    @media(min-width: 1200px) {
        .ast-separate-container.ast-right-sidebar .entry-content .wp-block-image.alignfull,.ast-separate-container.ast-left-sidebar .entry-content .wp-block-image.alignfull,.ast-separate-container.ast-right-sidebar .entry-content .wp-block-cover.alignfull,.ast-separate-container.ast-left-sidebar .entry-content .wp-block-cover.alignfull {
            margin-left:-6.67em;
            margin-right: -6.67em;
            max-width: unset;
            width: unset;
        }

        .ast-separate-container.ast-right-sidebar .entry-content .wp-block-image.alignwide,.ast-separate-container.ast-left-sidebar .entry-content .wp-block-image.alignwide,.ast-separate-container.ast-right-sidebar .entry-content .wp-block-cover.alignwide,.ast-separate-container.ast-left-sidebar .entry-content .wp-block-cover.alignwide {
            margin-left: -20px;
            margin-right: -20px;
            max-width: unset;
            width: unset;
        }
    }

    @media(min-width: 1200px) {
        .wp-block-group .has-background {
            padding:20px;
        }
    }

    @media(min-width: 1200px) {
        .ast-no-sidebar.ast-separate-container .entry-content .wp-block-group.alignwide,.ast-no-sidebar.ast-separate-container .entry-content .wp-block-cover.alignwide {
            margin-left:-20px;
            margin-right: -20px;
            padding-left: 20px;
            padding-right: 20px;
        }

        .ast-no-sidebar.ast-separate-container .entry-content .wp-block-cover.alignfull,.ast-no-sidebar.ast-separate-container .entry-content .wp-block-group.alignfull {
            margin-left: -6.67em;
            margin-right: -6.67em;
            padding-left: 6.67em;
            padding-right: 6.67em;
        }
    }

    @media(min-width: 1200px) {
        .wp-block-cover-image.alignwide .wp-block-cover__inner-container,.wp-block-cover.alignwide .wp-block-cover__inner-container,.wp-block-cover-image.alignfull .wp-block-cover__inner-container,.wp-block-cover.alignfull .wp-block-cover__inner-container {
            width:100%;
        }
    }

    .wp-block-image.aligncenter {
        margin-left: auto;
        margin-right: auto;
    }

    .wp-block-table.aligncenter {
        margin-left: auto;
        margin-right: auto;
    }

    .wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link.wp-element-button,.ast-outline-button,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button {
        border-color: var(--ast-global-color-0);
        border-top-width: 2px;
        border-right-width: 2px;
        border-bottom-width: 2px;
        border-left-width: 2px;
        font-family: 'Inter',sans-serif;
        font-weight: 600;
        font-size: 15px;
        font-size: 0.83333333333333rem;
        line-height: 1em;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
    }

    .wp-block-button.is-style-outline .wp-block-button__link:hover,.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link:focus,.wp-block-buttons .wp-block-button.is-style-outline>.wp-block-button__link:not(.has-text-color):hover,.wp-block-buttons .wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color):hover,.ast-outline-button:hover,.ast-outline-button:focus,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button:hover,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button:focus {
        background-color: var(--ast-global-color-1);
    }

    .wp-block-button .wp-block-button__link.wp-element-button.is-style-outline:not(.has-background),.wp-block-button.is-style-outline>.wp-block-button__link.wp-element-button:not(.has-background),.ast-outline-button {
        background-color: var(--ast-global-color-0);
    }

    .entry-content[ast-blocks-layout]>figure {
        margin-bottom: 1em;
    }

    @media(max-width: 921px) {
        .ast-separate-container #primary,.ast-separate-container #secondary {
            padding:1.5em 0;
        }

        #primary,#secondary {
            padding: 1.5em 0;
            margin: 0;
        }

        .ast-left-sidebar #content>.ast-container {
            display: flex;
            flex-direction: column-reverse;
            width: 100%;
        }

        .ast-separate-container .ast-article-post,.ast-separate-container .ast-article-single {
            padding: 1.5em 2.14em;
        }

        .ast-author-box img.avatar {
            margin: 20px 0 0 0;
        }
    }

    @media(min-width: 922px) {
        .ast-separate-container.ast-right-sidebar #primary,.ast-separate-container.ast-left-sidebar #primary {
            border:0;
        }

        .search-no-results.ast-separate-container #primary {
            margin-bottom: 4em;
        }
    }

    .elementor-button-wrapper .elementor-button {
        border-style: solid;
        text-decoration: none;
        border-top-width: 0px;
        border-right-width: 0px;
        border-left-width: 0px;
        border-bottom-width: 0px;
    }

    body .elementor-button.elementor-size-sm,body .elementor-button.elementor-size-xs,body .elementor-button.elementor-size-md,body .elementor-button.elementor-size-lg,body .elementor-button.elementor-size-xl,body .elementor-button {
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
        padding-top: 17px;
        padding-right: 27px;
        padding-bottom: 17px;
        padding-left: 27px;
    }

    .elementor-button-wrapper .elementor-button {
        border-color: var(--ast-global-color-0);
        background-color: var(--ast-global-color-0);
    }

    .elementor-button-wrapper .elementor-button:hover,.elementor-button-wrapper .elementor-button:focus {
        color: var(--ast-global-color-4);
        background-color: var(--ast-global-color-1);
        border-color: var(--ast-global-color-1);
    }

    .wp-block-button .wp-block-button__link ,.elementor-button-wrapper .elementor-button,.elementor-button-wrapper .elementor-button:visited {
        color: var(--ast-global-color-4);
    }

    .elementor-button-wrapper .elementor-button {
        font-family: 'Inter',sans-serif;
        font-weight: 600;
        font-size: 15px;
        font-size: 0.83333333333333rem;
        line-height: 1em;
        text-transform: capitalize;
    }

    body .elementor-button.elementor-size-sm,body .elementor-button.elementor-size-xs,body .elementor-button.elementor-size-md,body .elementor-button.elementor-size-lg,body .elementor-button.elementor-size-xl,body .elementor-button {
        font-size: 15px;
        font-size: 0.83333333333333rem;
    }

    .wp-block-button .wp-block-button__link:hover,.wp-block-button .wp-block-button__link:focus {
        color: var(--ast-global-color-4);
        background-color: var(--ast-global-color-1);
        border-color: var(--ast-global-color-1);
    }

    .elementor-widget-heading h1.elementor-heading-title {
        line-height: 1em;
    }

    .wp-block-button .wp-block-button__link {
        border-style: solid;
        border-top-width: 0px;
        border-right-width: 0px;
        border-left-width: 0px;
        border-bottom-width: 0px;
        border-color: var(--ast-global-color-0);
        background-color: var(--ast-global-color-0);
        color: var(--ast-global-color-4);
        font-family: 'Inter',sans-serif;
        font-weight: 600;
        line-height: 1em;
        text-transform: capitalize;
        font-size: 15px;
        font-size: 0.83333333333333rem;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
        padding-top: 17px;
        padding-right: 27px;
        padding-bottom: 17px;
        padding-left: 27px;
    }

    .menu-toggle,button,.ast-button,.ast-custom-button,.button,input#submit,input[type="button"],input[type="submit"],input[type="reset"] {
        border-style: solid;
        border-top-width: 0px;
        border-right-width: 0px;
        border-left-width: 0px;
        border-bottom-width: 0px;
        color: var(--ast-global-color-4);
        border-color: var(--ast-global-color-0);
        background-color: var(--ast-global-color-0);
        padding-top: 17px;
        padding-right: 27px;
        padding-bottom: 17px;
        padding-left: 27px;
        font-family: 'Inter',sans-serif;
        font-weight: 600;
        font-size: 15px;
        font-size: 0.83333333333333rem;
        line-height: 1em;
        text-transform: capitalize;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
    }

    button:focus,.menu-toggle:hover,button:hover,.ast-button:hover,.ast-custom-button:hover .button:hover,.ast-custom-button:hover ,input[type=reset]:hover,input[type=reset]:focus,input#submit:hover,input#submit:focus,input[type="button"]:hover,input[type="button"]:focus,input[type="submit"]:hover,input[type="submit"]:focus {
        color: var(--ast-global-color-4);
        background-color: var(--ast-global-color-1);
        border-color: var(--ast-global-color-1);
    }

    @media(max-width: 921px) {
        .ast-mobile-header-stack .main-header-bar .ast-search-menu-icon {
            display:inline-block;
        }

        .ast-header-break-point.ast-header-custom-item-outside .ast-mobile-header-stack .main-header-bar .ast-search-icon {
            margin: 0;
        }

        .ast-comment-avatar-wrap img {
            max-width: 2.5em;
        }

        .ast-separate-container .ast-comment-list li.depth-1 {
            padding: 1.5em 2.14em;
        }
    }

    @media(min-width: 544px) {
        .ast-container {
            max-width:100%;
        }
    }

    @media(max-width: 544px) {
        .ast-separate-container .ast-article-post,.ast-separate-container .ast-article-single,.ast-separate-container .comments-title,.ast-separate-container .ast-archive-description {
            padding:1.5em 1em;
        }

        .ast-separate-container #content .ast-container {
            padding-left: 0.54em;
            padding-right: 0.54em;
        }

        .ast-separate-container .ast-comment-list .bypostauthor {
            padding: .5em;
        }

        .ast-search-menu-icon.ast-dropdown-active .search-field {
            width: 170px;
        }
    }

    body,.ast-separate-container {
        background-color: var(--ast-global-color-4);
        ;background-image: none;
        ;}

    .ast-no-sidebar.ast-separate-container .entry-content .alignfull {
        margin-left: -6.67em;
        margin-right: -6.67em;
        width: auto;
    }

    @media(max-width: 1200px) {
        .ast-no-sidebar.ast-separate-container .entry-content .alignfull {
            margin-left:-2.4em;
            margin-right: -2.4em;
        }
    }

    @media(max-width: 768px) {
        .ast-no-sidebar.ast-separate-container .entry-content .alignfull {
            margin-left:-2.14em;
            margin-right: -2.14em;
        }
    }

    @media(max-width: 544px) {
        .ast-no-sidebar.ast-separate-container .entry-content .alignfull {
            margin-left:-1em;
            margin-right: -1em;
        }
    }

    .ast-no-sidebar.ast-separate-container .entry-content .alignwide {
        margin-left: -20px;
        margin-right: -20px;
    }

    .ast-no-sidebar.ast-separate-container .entry-content .wp-block-column .alignfull,.ast-no-sidebar.ast-separate-container .entry-content .wp-block-column .alignwide {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    @media(max-width: 921px) {
        .site-title {
            display:none;
        }

        .site-header .site-description {
            display: none;
        }

        h1,.entry-content h1 {
            font-size: 30px;
        }

        h2,.entry-content h2 {
            font-size: 25px;
        }

        h3,.entry-content h3 {
            font-size: 20px;
        }
    }

    @media(max-width: 544px) {
        .site-title {
            display:none;
        }

        .site-header .site-description {
            display: none;
        }

        h1,.entry-content h1 {
            font-size: 30px;
        }

        h2,.entry-content h2 {
            font-size: 25px;
        }

        h3,.entry-content h3 {
            font-size: 20px;
        }
    }

    @media(max-width: 921px) {
        html {
            font-size:102.6%;
        }
    }

    @media(max-width: 544px) {
        html {
            font-size:102.6%;
        }
    }

    @media(min-width: 922px) {
        .ast-container {
            max-width:1240px;
        }
    }

    @font-face {
        font-family: "Astra";
        src: url(https://wamantra.com/wp-content/themes/astra/assets/fonts/astra.woff)format("woff"),url(https://wamantra.com/wp-content/themes/astra/assets/fonts/astra.ttf)format("truetype"),url(https://wamantra.com/wp-content/themes/astra/assets/fonts/astra.svg#astra)format("svg");
        font-weight: normal;
        font-style: normal;
        font-display: fallback;
    }

    @media(min-width: 922px) {
        .main-header-menu .sub-menu .menu-item.ast-left-align-sub-menu:hover>.sub-menu,.main-header-menu .sub-menu .menu-item.ast-left-align-sub-menu.focus>.sub-menu {
            margin-left:-0px;
        }
    }

    .site .comments-area {
        padding-bottom: 3em;
    }

    .astra-icon-down_arrow::after {
        content: "e900";
        font-family: Astra;
    }

    .astra-icon-close::after {
        content: "e5cd";
        font-family: Astra;
    }

    .astra-icon-drag_handle::after {
        content: "e25d";
        font-family: Astra;
    }

    .astra-icon-format_align_justify::after {
        content: "e235";
        font-family: Astra;
    }

    .astra-icon-menu::after {
        content: "e5d2";
        font-family: Astra;
    }

    .astra-icon-reorder::after {
        content: "e8fe";
        font-family: Astra;
    }

    .astra-icon-search::after {
        content: "e8b6";
        font-family: Astra;
    }

    .astra-icon-zoom_in::after {
        content: "e56b";
        font-family: Astra;
    }

    .astra-icon-check-circle::after {
        content: "e901";
        font-family: Astra;
    }

    .astra-icon-shopping-cart::after {
        content: "f07a";
        font-family: Astra;
    }

    .astra-icon-shopping-bag::after {
        content: "f290";
        font-family: Astra;
    }

    .astra-icon-shopping-basket::after {
        content: "f291";
        font-family: Astra;
    }

    .astra-icon-circle-o::after {
        content: "e903";
        font-family: Astra;
    }

    .astra-icon-certificate::after {
        content: "e902";
        font-family: Astra;
    }

    blockquote {
        padding: 1.2em;
    }

    :root .has-ast-global-color-0-color {
        color: var(--ast-global-color-0);
    }

    :root .has-ast-global-color-0-background-color {
        background-color: var(--ast-global-color-0);
    }

    :root .wp-block-button .has-ast-global-color-0-color {
        color: var(--ast-global-color-0);
    }

    :root .wp-block-button .has-ast-global-color-0-background-color {
        background-color: var(--ast-global-color-0);
    }

    :root .has-ast-global-color-1-color {
        color: var(--ast-global-color-1);
    }

    :root .has-ast-global-color-1-background-color {
        background-color: var(--ast-global-color-1);
    }

    :root .wp-block-button .has-ast-global-color-1-color {
        color: var(--ast-global-color-1);
    }

    :root .wp-block-button .has-ast-global-color-1-background-color {
        background-color: var(--ast-global-color-1);
    }

    :root .has-ast-global-color-2-color {
        color: var(--ast-global-color-2);
    }

    :root .has-ast-global-color-2-background-color {
        background-color: var(--ast-global-color-2);
    }

    :root .wp-block-button .has-ast-global-color-2-color {
        color: var(--ast-global-color-2);
    }

    :root .wp-block-button .has-ast-global-color-2-background-color {
        background-color: var(--ast-global-color-2);
    }

    :root .has-ast-global-color-3-color {
        color: var(--ast-global-color-3);
    }

    :root .has-ast-global-color-3-background-color {
        background-color: var(--ast-global-color-3);
    }

    :root .wp-block-button .has-ast-global-color-3-color {
        color: var(--ast-global-color-3);
    }

    :root .wp-block-button .has-ast-global-color-3-background-color {
        background-color: var(--ast-global-color-3);
    }

    :root .has-ast-global-color-4-color {
        color: var(--ast-global-color-4);
    }

    :root .has-ast-global-color-4-background-color {
        background-color: var(--ast-global-color-4);
    }

    :root .wp-block-button .has-ast-global-color-4-color {
        color: var(--ast-global-color-4);
    }

    :root .wp-block-button .has-ast-global-color-4-background-color {
        background-color: var(--ast-global-color-4);
    }

    :root .has-ast-global-color-5-color {
        color: var(--ast-global-color-5);
    }

    :root .has-ast-global-color-5-background-color {
        background-color: var(--ast-global-color-5);
    }

    :root .wp-block-button .has-ast-global-color-5-color {
        color: var(--ast-global-color-5);
    }

    :root .wp-block-button .has-ast-global-color-5-background-color {
        background-color: var(--ast-global-color-5);
    }

    :root .has-ast-global-color-6-color {
        color: var(--ast-global-color-6);
    }

    :root .has-ast-global-color-6-background-color {
        background-color: var(--ast-global-color-6);
    }

    :root .wp-block-button .has-ast-global-color-6-color {
        color: var(--ast-global-color-6);
    }

    :root .wp-block-button .has-ast-global-color-6-background-color {
        background-color: var(--ast-global-color-6);
    }

    :root .has-ast-global-color-7-color {
        color: var(--ast-global-color-7);
    }

    :root .has-ast-global-color-7-background-color {
        background-color: var(--ast-global-color-7);
    }

    :root .wp-block-button .has-ast-global-color-7-color {
        color: var(--ast-global-color-7);
    }

    :root .wp-block-button .has-ast-global-color-7-background-color {
        background-color: var(--ast-global-color-7);
    }

    :root .has-ast-global-color-8-color {
        color: var(--ast-global-color-8);
    }

    :root .has-ast-global-color-8-background-color {
        background-color: var(--ast-global-color-8);
    }

    :root .wp-block-button .has-ast-global-color-8-color {
        color: var(--ast-global-color-8);
    }

    :root .wp-block-button .has-ast-global-color-8-background-color {
        background-color: var(--ast-global-color-8);
    }

    :root {
        --ast-global-color-0: #f45a2a;
        --ast-global-color-1: #257cff;
        --ast-global-color-2: #2f373d;
        --ast-global-color-3: #7e868c;
        --ast-global-color-4: #f8fbfe;
        --ast-global-color-5: #ffffff;
        --ast-global-color-6: #f45a2a;
        --ast-global-color-7: #f6fcff;
        --ast-global-color-8: #BFD1FF;
    }

    :root {
        --ast-border-color: #dddddd;
    }

    .ast-single-entry-banner {
        -js-display: flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        position: relative;
        background: #eeeeee;
    }

    .ast-single-entry-banner[data-banner-layout="layout-1"] {
        max-width: 1200px;
        background: inherit;
        padding: 20px 0;
    }

    .ast-single-entry-banner[data-banner-width-type="custom"] {
        margin: 0 auto;
        width: 100%;
    }

    .ast-single-entry-banner + .site-content .entry-header {
        margin-bottom: 0;
    }

    .site .ast-author-avatar {
        --ast-author-avatar-size: ;
    }

    a.ast-underline-text {
        text-decoration: underline;
    }

    .ast-container>.ast-terms-link {
        position: relative;
        display: block;
    }

    a.ast-button.ast-badge-tax {
        padding: 4px 8px;
        border-radius: 3px;
        font-size: inherit;
    }

    header.entry-header .entry-title {
        font-size: 30px;
        font-size: 1.6666666666667rem;
    }

    header.entry-header>*:not(:last-child) {
        margin-bottom: 10px;
    }

    .ast-archive-entry-banner {
        -js-display: flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        position: relative;
        background: #eeeeee;
    }

    .ast-archive-entry-banner[data-banner-width-type="custom"] {
        margin: 0 auto;
        width: 100%;
    }

    .ast-archive-entry-banner[data-banner-layout="layout-1"] {
        background: inherit;
        padding: 20px 0;
        text-align: left;
    }

    body.archive .ast-archive-description {
        max-width: 1200px;
        width: 100%;
        text-align: left;
        padding-top: 3em;
        padding-right: 3em;
        padding-bottom: 3em;
        padding-left: 3em;
    }

    body.archive .ast-archive-description .ast-archive-title,body.archive .ast-archive-description .ast-archive-title * {
        font-size: 40px;
        font-size: 2.2222222222222rem;
        text-transform: capitalize;
    }

    body.archive .ast-archive-description>*:not(:last-child) {
        margin-bottom: 10px;
    }

    @media(max-width: 921px) {
        body.archive .ast-archive-description {
            text-align:left;
        }
    }

    @media(max-width: 544px) {
        body.archive .ast-archive-description {
            text-align:left;
        }
    }

    .ast-breadcrumbs .trail-browse,.ast-breadcrumbs .trail-items,.ast-breadcrumbs .trail-items li {
        display: inline-block;
        margin: 0;
        padding: 0;
        border: none;
        background: inherit;
        text-indent: 0;
        text-decoration: none;
    }

    .ast-breadcrumbs .trail-browse {
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        color: inherit;
    }

    .ast-breadcrumbs .trail-items {
        list-style: none;
    }

    .trail-items li::after {
        padding: 0 0.3em;
        content: "00bb";
    }

    .trail-items li:last-of-type::after {
        display: none;
    }

    h1,.entry-content h1,h2,.entry-content h2,h3,.entry-content h3,h4,.entry-content h4,h5,.entry-content h5,h6,.entry-content h6 {
        color: var(--ast-global-color-2);
    }

    @media(max-width: 921px) {
        .ast-builder-grid-row-container.ast-builder-grid-row-tablet-3-firstrow .ast-builder-grid-row>*:first-child,.ast-builder-grid-row-container.ast-builder-grid-row-tablet-3-lastrow .ast-builder-grid-row>*:last-child {
            grid-column:1 / -1;
        }
    }

    @media(max-width: 544px) {
        .ast-builder-grid-row-container.ast-builder-grid-row-mobile-3-firstrow .ast-builder-grid-row>*:first-child,.ast-builder-grid-row-container.ast-builder-grid-row-mobile-3-lastrow .ast-builder-grid-row>*:last-child {
            grid-column:1 / -1;
        }
    }

    .ast-builder-layout-element[data-section="title_tagline"] {
        display: flex;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .ast-builder-layout-element[data-section="title_tagline"] {
            display:flex;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .ast-builder-layout-element[data-section="title_tagline"] {
            display:flex;
        }
    }

    [data-section*="section-hb-button-"] .menu-link {
        display: none;
    }

    .ast-header-button-1[data-section*="section-hb-button-"] .ast-builder-button-wrap .ast-custom-button {
        font-family: 'Schibsted Grotesk',sans-serif;
        font-weight: 400;
        line-height: 1em;
    }

    .ast-header-button-1 .ast-custom-button {
        color: #ffffff;
        background: #caa969;
        border-color: #5e4100;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-left-width: 1px;
        border-right-width: 1px;
    }

    .ast-header-button-1 .ast-custom-button:hover {
        color: var(--ast-global-color-5);
        background: var(--ast-global-color-2);
    }

    .ast-header-button-1[data-section="section-hb-button-1"] {
        display: flex;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .ast-header-button-1[data-section="section-hb-button-1"] {
            display:flex;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .ast-header-button-1[data-section="section-hb-button-1"] {
            display:flex;
        }
    }

    .ast-builder-menu-1 {
        font-family: inherit;
        font-weight: inherit;
    }

    .ast-builder-menu-1 .sub-menu,.ast-builder-menu-1 .inline-on-mobile .sub-menu {
        border-top-width: 2px;
        border-bottom-width: 0px;
        border-right-width: 0px;
        border-left-width: 0px;
        border-color: var(--ast-global-color-0);
        border-style: solid;
    }

    .ast-builder-menu-1 .main-header-menu>.menu-item>.sub-menu,.ast-builder-menu-1 .main-header-menu>.menu-item>.astra-full-megamenu-wrapper {
        margin-top: 0px;
    }

    .ast-desktop .ast-builder-menu-1 .main-header-menu>.menu-item>.sub-menu:before,.ast-desktop .ast-builder-menu-1 .main-header-menu>.menu-item>.astra-full-megamenu-wrapper:before {
        height: calc(0px + 5px);
    }

    .ast-desktop .ast-builder-menu-1 .menu-item .sub-menu .menu-link {
        border-style: none;
    }

    @media(max-width: 921px) {
        .ast-builder-menu-1 .main-header-menu .menu-item>.menu-link {
            color:var(--ast-global-color-3);
        }

        .ast-builder-menu-1 .menu-item>.ast-menu-toggle {
            color: var(--ast-global-color-3);
        }

        .ast-builder-menu-1 .menu-item:hover>.menu-link,.ast-builder-menu-1 .inline-on-mobile .menu-item:hover>.ast-menu-toggle {
            color: var(--ast-global-color-1);
        }

        .ast-builder-menu-1 .menu-item:hover>.ast-menu-toggle {
            color: var(--ast-global-color-1);
        }

        .ast-builder-menu-1 .menu-item.current-menu-item>.menu-link,.ast-builder-menu-1 .inline-on-mobile .menu-item.current-menu-item>.ast-menu-toggle,.ast-builder-menu-1 .current-menu-ancestor>.menu-link,.ast-builder-menu-1 .current-menu-ancestor>.ast-menu-toggle {
            color: var(--ast-global-color-1);
        }

        .ast-builder-menu-1 .menu-item.current-menu-item>.ast-menu-toggle {
            color: var(--ast-global-color-1);
        }

        .ast-header-break-point .ast-builder-menu-1 .menu-item.menu-item-has-children>.ast-menu-toggle {
            top: 0;
        }

        .ast-builder-menu-1 .inline-on-mobile .menu-item.menu-item-has-children>.ast-menu-toggle {
            right: -15px;
        }

        .ast-builder-menu-1 .menu-item-has-children>.menu-link:after {
            content: unset;
        }

        .ast-builder-menu-1 .main-header-menu>.menu-item>.sub-menu,.ast-builder-menu-1 .main-header-menu>.menu-item>.astra-full-megamenu-wrapper {
            margin-top: 0;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .ast-builder-menu-1 .menu-item.menu-item-has-children>.ast-menu-toggle {
            top:0;
        }

        .ast-builder-menu-1 .main-header-menu>.menu-item>.sub-menu,.ast-builder-menu-1 .main-header-menu>.menu-item>.astra-full-megamenu-wrapper {
            margin-top: 0;
        }
    }

    .ast-builder-menu-1 {
        display: flex;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .ast-builder-menu-1 {
            display:flex;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .ast-builder-menu-1 {
            display:flex;
        }
    }

    .ast-header-account-type-icon {
        -js-display: inline-flex;
        display: inline-flex;
        align-self: center;
        vertical-align: middle;
    }

    .ast-header-account-type-avatar .avatar {
        display: inline;
        border-radius: 100%;
        max-width: 100%;
    }

    .as.site-header-focus-item.ast-header-account:hover>.customize-partial-edit-shortcut {
        opacity: 0;
    }

    .site-header-focus-item.ast-header-account:hover>*>.customize-partial-edit-shortcut {
        opacity: 1;
    }

    .ast-header-account-wrap .ast-header-account-type-icon .ahfb-svg-iconset svg {
        height: 18px;
        width: 18px;
    }

    .ast-header-account-wrap .ast-header-account-type-avatar .avatar {
        width: 40px;
    }

    @media(max-width: 921px) {
        .ast-header-account-wrap .ast-header-account-type-icon .ahfb-svg-iconset svg {
            height:18px;
            width: 18px;
        }

        .ast-header-account-wrap .ast-header-account-type-avatar .avatar {
            width: 20px;
        }
    }

    @media(max-width: 544px) {
        .ast-header-account-wrap .ast-header-account-type-icon .ahfb-svg-iconset svg {
            height:18px;
            width: 18px;
        }

        .ast-header-account-wrap .ast-header-account-type-avatar .avatar {
            width: 20px;
        }
    }

    .ast-header-account-wrap {
        display: flex;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .ast-header-account-wrap {
            display:flex;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .ast-header-account-wrap {
            display:flex;
        }
    }

    .ast-site-header-cart .ast-cart-menu-wrap,.ast-site-header-cart .ast-addon-cart-wrap {
        color: var(--ast-global-color-0);
    }

    .ast-site-header-cart .ast-cart-menu-wrap .count,.ast-site-header-cart .ast-cart-menu-wrap .count:after,.ast-site-header-cart .ast-addon-cart-wrap .count,.ast-site-header-cart .ast-addon-cart-wrap .ast-icon-shopping-cart:after {
        color: var(--ast-global-color-0);
        border-color: var(--ast-global-color-0);
    }

    .ast-site-header-cart .ast-addon-cart-wrap .ast-icon-shopping-cart:after {
        color: #000000;
        background-color: var(--ast-global-color-0);
    }

    .ast-site-header-cart .ast-woo-header-cart-info-wrap {
        color: var(--ast-global-color-0);
    }

    .ast-site-header-cart .ast-addon-cart-wrap i.astra-icon:after {
        color: #000000;
        background-color: var(--ast-global-color-0);
    }

    .ast-site-header-cart a.cart-container * {
        transition: none;
    }

    .ast-site-header-cart .ast-addon-cart-wrap i.astra-icon:after,.ast-theme-transparent-header .ast-site-header-cart .ast-addon-cart-wrap i.astra-icon:after {
        color: #000000;
    }

    .ast-menu-cart-outline .ast-cart-menu-wrap .count,.ast-menu-cart-outline .ast-addon-cart-wrap {
        border-style: solid;
        border-color: var(--ast-global-color-0);
        border-width: 0px;
    }

    .ast-site-header-cart .ast-cart-menu-wrap,.ast-site-header-cart .ast-addon-cart-wrap {
        color: var(--ast-global-color-0);
    }

    .ast-menu-cart-outline .ast-cart-menu-wrap .count,.ast-menu-cart-outline .ast-addon-cart-wrap {
        color: var(--ast-global-color-0);
    }

    .ast-menu-cart-outline .ast-cart-menu-wrap .count {
        color: #000000;
    }

    .ast-site-header-cart .ast-menu-cart-outline .ast-woo-header-cart-info-wrap {
        color: var(--ast-global-color-0);
    }

    .ast-site-header-cart.ast-menu-cart-outline .ast-cart-menu-wrap,.ast-site-header-cart.ast-menu-cart-fill .ast-cart-menu-wrap,.ast-site-header-cart.ast-menu-cart-outline .ast-cart-menu-wrap .count,.ast-site-header-cart.ast-menu-cart-fill .ast-cart-menu-wrap .count,.ast-site-header-cart.ast-menu-cart-outline .ast-addon-cart-wrap,.ast-site-header-cart.ast-menu-cart-fill .ast-addon-cart-wrap,.ast-site-header-cart.ast-menu-cart-outline .ast-woo-header-cart-info-wrap,.ast-site-header-cart.ast-menu-cart-fill .ast-woo-header-cart-info-wrap {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    .ast-site-header-cart .cart-container:hover .count,.ast-site-header-cart .cart-container:hover .count {
        color: #000000;
    }

    .ast-menu-cart-fill .ast-cart-menu-wrap .count,.ast-menu-cart-fill .ast-cart-menu-wrap,.ast-menu-cart-fill .ast-addon-cart-wrap .ast-woo-header-cart-info-wrap,.ast-menu-cart-fill .ast-addon-cart-wrap {
        background-color: var(--ast-global-color-0);
        color: #000000;
    }

    .ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-cart-menu-wrap .count,.ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-cart-menu-wrap,.ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-addon-cart-wrap,.ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-addon-cart-wrap .ast-woo-header-cart-info-wrap,.ast-menu-cart-fill .ast-site-header-cart-li:hover .ast-addon-cart-wrap i.astra-icon:after {
        color: #000000;
    }

    .ast-site-header-cart .ast-site-header-cart-li:hover .ast-addon-cart-wrap i.astra-icon:after {
        color: #000000;
    }

    .ast-site-header-cart.ast-menu-cart-fill .ast-site-header-cart-li:hover .astra-icon {
        color: #000000;
    }

    #ast-site-header-cart .widget_shopping_cart:before,#ast-site-header-cart .widget_shopping_cart:after {
        transition: all 0.3s ease;
        margin-left: 0.5em;
    }

    @media(max-width: 544px) {
        .woocommerce .ast-header-woo-cart .ast-site-header-cart .ast-addon-cart-wrap,.ast-header-woo-cart .ast-site-header-cart .ast-addon-cart-wrap {
            margin-top:0px;
        }
    }

    .ast-header-woo-cart {
        display: flex;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .ast-header-woo-cart {
            display:flex;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .ast-header-woo-cart {
            display:flex;
        }
    }

    .site-below-footer-wrap {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .site-below-footer-wrap[data-section="section-below-footer-builder"] {
        background-color: var(--ast-global-color-5);
        ;background-image: none;
        ;min-height: 80px;
    }

    .site-below-footer-wrap[data-section="section-below-footer-builder"] .ast-builder-grid-row {
        max-width: 1200px;
        min-height: 80px;
        margin-left: auto;
        margin-right: auto;
    }

    .site-below-footer-wrap[data-section="section-below-footer-builder"] .ast-builder-grid-row,.site-below-footer-wrap[data-section="section-below-footer-builder"] .site-footer-section {
        align-items: center;
    }

    .site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-inline .site-footer-section {
        display: flex;
        margin-bottom: 0;
    }

    .ast-builder-grid-row-full .ast-builder-grid-row {
        grid-template-columns: 1fr;
    }

    @media(max-width: 921px) {
        .site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-tablet-inline .site-footer-section {
            display:flex;
            margin-bottom: 0;
        }

        .site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-tablet-stack .site-footer-section {
            display: block;
            margin-bottom: 10px;
        }

        .ast-builder-grid-row-container.ast-builder-grid-row-tablet-full .ast-builder-grid-row {
            grid-template-columns: 1fr;
        }
    }

    @media(max-width: 544px) {
        .site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-mobile-inline .site-footer-section {
            display:flex;
            margin-bottom: 0;
        }

        .site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-mobile-stack .site-footer-section {
            display: block;
            margin-bottom: 10px;
        }

        .ast-builder-grid-row-container.ast-builder-grid-row-mobile-full .ast-builder-grid-row {
            grid-template-columns: 1fr;
        }
    }

    @media(max-width: 921px) {
        .site-below-footer-wrap[data-section="section-below-footer-builder"] {
            padding-top:0px;
            padding-bottom: 20px;
            padding-left: 40px;
            padding-right: 40px;
        }
    }

    @media(max-width: 544px) {
        .site-below-footer-wrap[data-section="section-below-footer-builder"] {
            padding-bottom:20px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .site-below-footer-wrap[data-section="section-below-footer-builder"] {
        display: grid;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .site-below-footer-wrap[data-section="section-below-footer-builder"] {
            display:grid;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .site-below-footer-wrap[data-section="section-below-footer-builder"] {
            display:grid;
        }
    }

    .ast-footer-copyright {
        text-align: left;
    }

    .ast-footer-copyright {
        color: var(--ast-global-color-2);
    }

    @media(max-width: 921px) {
        .ast-footer-copyright {
            text-align:left;
        }
    }

    @media(max-width: 544px) {
        .ast-footer-copyright {
            text-align:center;
        }
    }

    .ast-footer-copyright {
        font-size: 16px;
        font-size: 0.88888888888889rem;
    }

    .ast-footer-copyright.ast-builder-layout-element {
        display: flex;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .ast-footer-copyright.ast-builder-layout-element {
            display:flex;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .ast-footer-copyright.ast-builder-layout-element {
            display:flex;
        }
    }

    .site-footer {
        background-color: var(--ast-global-color-5);
        ;background-image: none;
        ;}

    .site-primary-footer-wrap {
        padding-top: 45px;
        padding-bottom: 45px;
    }

    .site-primary-footer-wrap[data-section="section-primary-footer-builder"] {
        background-color: var(--ast-global-color-5);
        ;background-image: none;
        ;}

    .site-primary-footer-wrap[data-section="section-primary-footer-builder"] .ast-builder-grid-row {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .site-primary-footer-wrap[data-section="section-primary-footer-builder"] .ast-builder-grid-row,.site-primary-footer-wrap[data-section="section-primary-footer-builder"] .site-footer-section {
        align-items: flex-start;
    }

    .site-primary-footer-wrap[data-section="section-primary-footer-builder"].ast-footer-row-inline .site-footer-section {
        display: flex;
        margin-bottom: 0;
    }

    .ast-builder-grid-row-3-lheavy .ast-builder-grid-row {
        grid-template-columns: 2fr 1fr 1fr;
    }

    @media(max-width: 921px) {
        .site-primary-footer-wrap[data-section="section-primary-footer-builder"].ast-footer-row-tablet-inline .site-footer-section {
            display:flex;
            margin-bottom: 0;
        }

        .site-primary-footer-wrap[data-section="section-primary-footer-builder"].ast-footer-row-tablet-stack .site-footer-section {
            display: block;
            margin-bottom: 10px;
        }

        .ast-builder-grid-row-container.ast-builder-grid-row-tablet-3-equal .ast-builder-grid-row {
            grid-template-columns: repeat(3,1fr);
        }
    }

    @media(max-width: 544px) {
        .site-primary-footer-wrap[data-section="section-primary-footer-builder"].ast-footer-row-mobile-inline .site-footer-section {
            display:flex;
            margin-bottom: 0;
        }

        .site-primary-footer-wrap[data-section="section-primary-footer-builder"].ast-footer-row-mobile-stack .site-footer-section {
            display: block;
            margin-bottom: 10px;
        }

        .ast-builder-grid-row-container.ast-builder-grid-row-mobile-full .ast-builder-grid-row {
            grid-template-columns: 1fr;
        }
    }

    @media(max-width: 921px) {
        .site-primary-footer-wrap[data-section="section-primary-footer-builder"] {
            padding-top:60px;
            padding-bottom: 60px;
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    @media(max-width: 544px) {
        .site-primary-footer-wrap[data-section="section-primary-footer-builder"] {
            padding-top:40px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .site-primary-footer-wrap[data-section="section-primary-footer-builder"] {
        display: grid;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .site-primary-footer-wrap[data-section="section-primary-footer-builder"] {
            display:grid;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .site-primary-footer-wrap[data-section="section-primary-footer-builder"] {
            display:grid;
        }
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-1"] .footer-widget-area-inner {
        text-align: left;
    }

    @media(max-width: 921px) {
        .footer-widget-area[data-section="sidebar-widgets-footer-widget-1"] .footer-widget-area-inner {
            text-align:left;
        }
    }

    @media(max-width: 544px) {
        .footer-widget-area[data-section="sidebar-widgets-footer-widget-1"] .footer-widget-area-inner {
            text-align:center;
        }
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .footer-widget-area-inner {
        text-align: left;
    }

    @media(max-width: 921px) {
        .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .footer-widget-area-inner {
            text-align:left;
        }
    }

    @media(max-width: 544px) {
        .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .footer-widget-area-inner {
            text-align:center;
        }
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .footer-widget-area-inner {
        text-align: left;
    }

    @media(max-width: 921px) {
        .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .footer-widget-area-inner {
            text-align:center;
        }
    }

    @media(max-width: 544px) {
        .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .footer-widget-area-inner {
            text-align:center;
        }
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-1"] .footer-widget-area-inner {
        color: var(--ast-global-color-2);
        font-size: 16px;
        font-size: 0.88888888888889rem;
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-1"] {
        display: block;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .footer-widget-area[data-section="sidebar-widgets-footer-widget-1"] {
            display:block;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .footer-widget-area[data-section="sidebar-widgets-footer-widget-1"] {
            display:block;
        }
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .footer-widget-area-inner {
        font-size: 16px;
        font-size: 0.88888888888889rem;
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .footer-widget-area-inner a {
        color: var(--ast-global-color-3);
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .footer-widget-area-inner a:hover {
        color: var(--ast-global-color-1);
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .widget-title,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] h1,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .widget-area h1,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] h2,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .widget-area h2,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] h3,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .widget-area h3,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] h4,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .widget-area h4,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] h5,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .widget-area h5,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] h6,.footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] .widget-area h6 {
        color: var(--ast-global-color-2);
        font-size: 20px;
        font-size: 1.1111111111111rem;
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] {
        display: block;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] {
            display:block;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .footer-widget-area[data-section="sidebar-widgets-footer-widget-2"] {
            display:block;
        }
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .footer-widget-area-inner {
        font-size: 16px;
        font-size: 0.88888888888889rem;
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .footer-widget-area-inner a {
        color: var(--ast-global-color-3);
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .footer-widget-area-inner a:hover {
        color: var(--ast-global-color-1);
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .widget-title,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] h1,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .widget-area h1,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] h2,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .widget-area h2,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] h3,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .widget-area h3,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] h4,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .widget-area h4,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] h5,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .widget-area h5,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] h6,.footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] .widget-area h6 {
        color: var(--ast-global-color-2);
        font-size: 20px;
        font-size: 1.1111111111111rem;
    }

    .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] {
        display: block;
    }

    @media(max-width: 921px) {
        .ast-header-break-point .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] {
            display:block;
        }
    }

    @media(max-width: 544px) {
        .ast-header-break-point .footer-widget-area[data-section="sidebar-widgets-footer-widget-4"] {
            display:block;
        }
    }

    .elementor-posts-container [CLASS*="ast-width-"] {
        width: 100%;
    }

    .elementor-template-full-width .ast-container {
        display: block;
    }

    .elementor-screen-only,.screen-reader-text,.screen-reader-text span,.ui-helper-hidden-accessible {
        top: 0 !important;
    }

    @media(max-width: 544px) {
        .elementor-element .elementor-wc-products .woocommerce[class*="columns-"] ul.products li.product {
            width:auto;
            margin: 0;
        }

        .elementor-element .woocommerce .woocommerce-result-count {
            float: none;
        }
    }

    .ast-header-break-point .main-header-bar {
        border-bottom-width: 1px;
    }

    @media (min-width: 922px) {
        .main-header-bar {
            border-bottom-width:1px;
        }
    }

    .main-header-menu .menu-item, #astra-footer-menu .menu-item, .main-header-bar .ast-masthead-custom-menu-items {
        -js-display: flex;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .main-header-menu > .menu-item > .menu-link, #astra-footer-menu > .menu-item > .menu-link {
        height: 100%;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -js-display: flex;
        display: flex;
    }

    .main-header-menu .sub-menu .menu-item.menu-item-has-children > .menu-link:after {
        position: absolute;
        right: 1em;
        top: 50%;
        transform: translate(0,-50%) rotate(270deg);
    }

    .ast-header-break-point .main-header-bar .main-header-bar-navigation .page_item_has_children > .ast-menu-toggle::before, .ast-header-break-point .main-header-bar .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle::before, .ast-mobile-popup-drawer .main-header-bar-navigation .menu-item-has-children>.ast-menu-toggle::before, .ast-header-break-point .ast-mobile-header-wrap .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle::before {
        font-weight: bold;
        content: "e900";
        font-family: Astra;
        text-decoration: inherit;
        display: inline-block;
    }

    .ast-header-break-point .main-navigation ul.sub-menu .menu-item .menu-link:before {
        content: "e900";
        font-family: Astra;
        font-size: .65em;
        text-decoration: inherit;
        display: inline-block;
        transform: translate(0, -2px) rotateZ(270deg);
        margin-right: 5px;
    }

    .widget_search .search-form:after {
        font-family: Astra;
        font-size: 1.2em;
        font-weight: normal;
        content: "e8b6";
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translate(0, -50%);
    }

    .astra-search-icon::before {
        content: "e8b6";
        font-family: Astra;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        z-index: 3;
    }

    .main-header-bar .main-header-bar-navigation .page_item_has_children > a:after, .main-header-bar .main-header-bar-navigation .menu-item-has-children > a:after, .menu-item-has-children .ast-header-navigation-arrow:after {
        content: "e900";
        display: inline-block;
        font-family: Astra;
        font-size: .6rem;
        font-weight: bold;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-left: 10px;
        line-height: normal;
    }

    .menu-item-has-children .sub-menu .ast-header-navigation-arrow:after {
        margin-left: 0;
    }

    .ast-mobile-popup-drawer .main-header-bar-navigation .ast-submenu-expanded>.ast-menu-toggle::before {
        transform: rotateX(180deg);
    }

    .ast-header-break-point .main-header-bar-navigation .menu-item-has-children > .menu-link:after {
        display: none;
    }

    @media (min-width: 922px) {
        .ast-builder-menu .main-navigation > ul > li:last-child a {
            margin-right:0;
        }
    }

    .ast-separate-container .ast-article-inner {
        background-color: transparent;
        background-image: none;
    }

    .ast-separate-container .ast-article-post {
        background-color: var(--ast-global-color-5);
        ;background-image: none;
        ;}

    .ast-separate-container .ast-article-single:not(.ast-related-post), .woocommerce.ast-separate-container .ast-woocommerce-container, .ast-separate-container .error-404, .ast-separate-container .no-results, .single.ast-separate-container .ast-author-meta, .ast-separate-container .related-posts-title-wrapper,.ast-separate-container .comments-count-wrapper, .ast-box-layout.ast-plain-container .site-content,.ast-padded-layout.ast-plain-container .site-content, .ast-separate-container .ast-archive-description, .ast-separate-container .comments-area .comment-respond, .ast-separate-container .comments-area .ast-comment-list li, .ast-separate-container .comments-area .comments-title {
        background-color: var(--ast-global-color-5);
        ;background-image: none;
        ;}

    .ast-separate-container.ast-two-container #secondary .widget {
        background-color: var(--ast-global-color-5);
        ;background-image: none;
        ;}

    .ast-off-canvas-active body.ast-main-header-nav-open {
        overflow: hidden;
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-overlay {
        background-color: rgba(0,0,0,0.4);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-header {
        -js-display: flex;
        display: flex;
        justify-content: flex-end;
        min-height: calc(1.2em + 24px);
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-header .menu-toggle-close {
        background: transparent;
        border: 0;
        font-size: 24px;
        line-height: 1;
        padding: .6em;
        color: inherit;
        -js-display: flex;
        display: flex;
        box-shadow: none;
    }

    .ast-mobile-popup-drawer.ast-mobile-popup-full-width .ast-mobile-popup-inner {
        max-width: none;
        transition: transform 0s ease-in,opacity 0.2s ease-in;
    }

    .ast-mobile-popup-drawer.active {
        left: 0;
        opacity: 1;
        right: 0;
        z-index: 100000;
        transition: opacity 0.25s ease-out;
    }

    .ast-mobile-popup-drawer.active .ast-mobile-popup-overlay {
        opacity: 1;
        cursor: pointer;
        visibility: visible;
    }

    body.admin-bar .ast-mobile-popup-drawer,body.admin-bar .ast-mobile-popup-drawer .ast-mobile-popup-inner {
        top: 32px;
    }

    body.admin-bar.ast-primary-sticky-header-active .ast-mobile-popup-drawer,body.admin-bar.ast-primary-sticky-header-active .ast-mobile-popup-drawer .ast-mobile-popup-inner {
        top: 0px;
    }

    @media(max-width: 782px) {
        body.admin-bar .ast-mobile-popup-drawer,body.admin-bar .ast-mobile-popup-drawer .ast-mobile-popup-inner {
            top:46px;
        }
    }

    .ast-mobile-popup-content>*,.ast-desktop-popup-content>* {
        padding: 10px 0;
        height: auto;
    }

    .ast-mobile-popup-content>*:first-child,.ast-desktop-popup-content>*:first-child {
        padding-top: 10px;
    }

    .ast-mobile-popup-content>.ast-builder-menu,.ast-desktop-popup-content>.ast-builder-menu {
        padding-top: 0;
    }

    .ast-mobile-popup-content>*:last-child,.ast-desktop-popup-content>*:last-child {
        padding-bottom: 0;
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-icon,.ast-mobile-popup-drawer .main-header-bar-navigation .menu-item-has-children .sub-menu,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-icon {
        display: none;
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-menu-icon.ast-inline-search label,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-menu-icon.ast-inline-search label {
        width: 100%;
    }

    .ast-mobile-popup-content .ast-builder-menu-mobile .main-header-menu,.ast-mobile-popup-content .ast-builder-menu-mobile .main-header-menu .sub-menu {
        background-color: transparent;
    }

    .ast-mobile-popup-content .ast-icon svg {
        height: .85em;
        width: .95em;
        margin-top: 15px;
    }

    .ast-mobile-popup-content .ast-icon.icon-search svg {
        margin-top: 0;
    }

    .ast-desktop .ast-desktop-popup-content .astra-menu-animation-slide-up>.menu-item>.sub-menu,.ast-desktop .ast-desktop-popup-content .astra-menu-animation-slide-up>.menu-item .menu-item>.sub-menu,.ast-desktop .ast-desktop-popup-content .astra-menu-animation-slide-down>.menu-item>.sub-menu,.ast-desktop .ast-desktop-popup-content .astra-menu-animation-slide-down>.menu-item .menu-item>.sub-menu,.ast-desktop .ast-desktop-popup-content .astra-menu-animation-fade>.menu-item>.sub-menu,.ast-mobile-popup-drawer.show,.ast-desktop .ast-desktop-popup-content .astra-menu-animation-fade>.menu-item .menu-item>.sub-menu {
        opacity: 1;
        visibility: visible;
    }

    .ast-mobile-popup-drawer {
        position: fixed;
        top: 0;
        bottom: 0;
        left: -99999rem;
        right: 99999rem;
        transition: opacity 0.25s ease-in,left 0s 0.25s,right 0s 0.25s;
        opacity: 0;
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-inner {
        width: 100%;
        transform: translateX(100%);
        max-width: 90%;
        right: 0;
        top: 0;
        background: #fafafa;
        color: #3a3a3a;
        bottom: 0;
        opacity: 0;
        position: fixed;
        box-shadow: 0 0 2rem 0 rgba(0,0,0,0.1);
        -js-display: flex;
        display: flex;
        flex-direction: column;
        transition: transform 0.2s ease-in,opacity 0.2s ease-in;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .ast-mobile-popup-drawer.ast-mobile-popup-left .ast-mobile-popup-inner {
        transform: translateX(-100%);
        right: auto;
        left: 0;
    }

    .ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-popup-drawer .main-header-bar-navigation ul .menu-item .sub-menu .menu-link {
        padding-left: 30px;
    }

    .ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-popup-drawer .main-header-bar-navigation .sub-menu .menu-item .menu-item .menu-link {
        padding-left: 40px;
    }

    .ast-mobile-popup-drawer .main-header-bar-navigation .menu-item-has-children>.ast-menu-toggle {
        right: calc(20px - 0.907em);
    }

    .ast-mobile-popup-drawer.content-align-flex-end .main-header-bar-navigation .menu-item-has-children>.ast-menu-toggle {
        left: calc(20px - 0.907em);
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-menu-icon,.ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-menu-icon.slide-search,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-menu-icon,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-menu-icon.slide-search {
        width: 100%;
        position: relative;
        display: block;
        right: auto;
        transform: none;
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-menu-icon.slide-search .search-form,.ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-menu-icon .search-form,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-menu-icon.slide-search .search-form,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-menu-icon .search-form {
        right: 0;
        visibility: visible;
        opacity: 1;
        position: relative;
        top: auto;
        transform: none;
        padding: 0;
        display: block;
        overflow: hidden;
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-menu-icon.ast-inline-search .search-field,.ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-menu-icon .search-field,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-menu-icon.ast-inline-search .search-field,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-menu-icon .search-field {
        width: 100%;
        padding-right: 5.5em;
    }

    .ast-mobile-popup-drawer .ast-mobile-popup-content .ast-search-menu-icon .search-submit,.ast-mobile-popup-drawer .ast-desktop-popup-content .ast-search-menu-icon .search-submit {
        display: block;
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        padding: 0 1em;
        border-radius: 0;
    }

    .ast-mobile-popup-drawer.active .ast-mobile-popup-inner {
        opacity: 1;
        visibility: visible;
        transform: translateX(0%);
    }

    .ast-mobile-popup-drawer.active .ast-mobile-popup-inner {
        background-color: var(--ast-global-color-4);
        ;}

    .ast-mobile-header-wrap .ast-mobile-header-content, .ast-desktop-header-content {
        background-color: var(--ast-global-color-4);
        ;}

    .ast-mobile-popup-content > *, .ast-mobile-header-content > *, .ast-desktop-popup-content > *, .ast-desktop-header-content > * {
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .content-align-center .ast-builder-layout-element {
        justify-content: center;
    }

    .content-align-center .main-header-menu {
        text-align: center;
    }

    .ast-mobile-popup-drawer.active .menu-toggle-close {
        color: #3a3a3a;
    }

    .ast-mobile-header-wrap .ast-primary-header-bar,.ast-primary-header-bar .site-primary-header-wrap {
        min-height: 85px;
    }

    .ast-desktop .ast-primary-header-bar .main-header-menu>.menu-item {
        line-height: 85px;
    }

    .ast-desktop .ast-primary-header-bar .ast-header-woo-cart,.ast-desktop .ast-primary-header-bar .ast-header-edd-cart {
        line-height: 85px;
        min-height: 85px;
    }

    .woocommerce .ast-site-header-cart,.ast-site-header-cart {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .ast-header-break-point #masthead .ast-mobile-header-wrap .ast-primary-header-bar,.ast-header-break-point #masthead .ast-mobile-header-wrap .ast-below-header-bar,.ast-header-break-point #masthead .ast-mobile-header-wrap .ast-above-header-bar {
        padding-left: 20px;
        padding-right: 20px;
    }

    .ast-header-break-point .ast-primary-header-bar {
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    @media(min-width: 922px) {
        .ast-primary-header-bar {
            border-bottom-width:1px;
            border-bottom-style: solid;
        }
    }

    .ast-primary-header-bar {
        background-color: #ffffff;
        ;background-image: none;
        ;}

    .ast-primary-header-bar {
        display: block;
    }

    @media (max-width: 921px) {
        .ast-header-break-point .ast-primary-header-bar {
            display:grid;
        }
    }

    @media (max-width: 544px) {
        .ast-header-break-point .ast-primary-header-bar {
            display:grid;
        }
    }

    [data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-fill {
        color: var(--ast-global-color-0);
        border: none;
        background: var(--ast-global-color-5);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    [data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg {
        width: 20px;
        height: 20px;
        fill: var(--ast-global-color-0);
    }

    [data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu {
        color: var(--ast-global-color-0);
    }

    .ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle {
        top: 0;
    }

    .ast-builder-menu-mobile .main-navigation .menu-item-has-children > .menu-link:after {
        content: unset;
    }

    .ast-hfb-header .ast-builder-menu-mobile .main-header-menu, .ast-hfb-header .ast-builder-menu-mobile .main-navigation .menu-item .menu-link, .ast-hfb-header .ast-builder-menu-mobile .main-navigation .menu-item .sub-menu .menu-link {
        border-style: none;
    }

    .ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle {
        top: 0;
    }

    @media (max-width: 921px) {
        .ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle {
            top:0;
        }

        .ast-builder-menu-mobile .main-navigation .menu-item-has-children > .menu-link:after {
            content: unset;
        }
    }

    @media (max-width: 544px) {
        .ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle {
            top:0;
        }
    }

    .ast-builder-menu-mobile .main-navigation {
        display: block;
    }

    @media (max-width: 921px) {
        .ast-header-break-point .ast-builder-menu-mobile .main-navigation {
            display:block;
        }
    }

    @media (max-width: 544px) {
        .ast-header-break-point .ast-builder-menu-mobile .main-navigation {
            display:block;
        }
    }

    :root {
        --e-global-color-astglobalcolor0: #f45a2a;
        --e-global-color-astglobalcolor1: #257cff;
        --e-global-color-astglobalcolor2: #2f373d;
        --e-global-color-astglobalcolor3: #7e868c;
        --e-global-color-astglobalcolor4: #f8fbfe;
        --e-global-color-astglobalcolor5: #ffffff;
        --e-global-color-astglobalcolor6: #f45a2a;
        --e-global-color-astglobalcolor7: #f6fcff;
        --e-global-color-astglobalcolor8: #BFD1FF;
    }
  `}
          </style>
          <header className="entry-header">
            <h1 className="entry-title display-4 mb-4">
              Refund and Returns Policy
            </h1>
          </header>

          <div className="entry-content clear">
            <ol className="list-group list-group-numbered mb-4">
              <li className="list-group-item">
                Licensing: Once the software is purchased or a license is
                obtained, it is non-refundable. This means that even if the
                software doesn’t meet your expectations or requirements, you are
                not eligible for a refund. Digital nature: Since the software is
                often delivered digitally, there is no physical product to
                return. Once the software is downloaded or activated, it is
                considered used and non-refundable.
              </li>
              <li className="list-group-item">
                Intellectual property: Software is protected by copyright and
                intellectual property laws. By purchasing or using the software,
                you acknowledge that you are acquiring a license to use the
                software, not ownership of the software itself. This reinforces
                the non-refundable nature of software, as the intellectual
                property rights associated with the software remain with the
                developer or publisher.
              </li>
              <li className="list-group-item">
                Trial versions or demos: Many software products offer trial
                versions or demos that allow users to evaluate the software’s
                features and functionality before making a purchase. If you
                choose to purchase the full version after using a trial version,
                the purchase is typically non-refundable.
              </li>
              <li className="list-group-item">
                Customization or configuration: If the software is customized or
                configured specifically for your needs, it may not be eligible
                for a refund. This is because the software has been tailored to
                your requirements, making it difficult for the developer or
                publisher to resell it to another customer.
              </li>
              <li className="list-group-item">
                Terms and conditions: Software purchases are subject to the
                terms and conditions set forth by the developer or publisher.
                These terms often outline the non-refundable nature of the
                software and any specific conditions under which a refund may be
                considered. It’s important to carefully review the terms and
                conditions, as well as any trial versions or demos, before
                purchasing software to ensure it meets your requirements and
                expectations.
              </li>
            </ol>

            <p className="mb-4">
              No refund will be given if your Whatsapp account is blocked,
              suspended, banned, or direct-paid.
            </p>

            <p className="mb-4">
              Waiting until the payment has been credited back to the account is
              strongly advised in the event of a payment failure. Software
              purchases are handled by a third party (PayPal), and in the event
              of a problem, it is advised to get in touch with PayPal support.
              Refund will be processed in 4-5 working days. You accept all terms
              and conditions by clicking the purchase button.
            </p>

            <h2 className="display-5 mb-3">Need help?</h2>
            <p>
              Contact us at{" "}
              <a href="mailto:support@robomate.in">support@robomate.in</a> for
              questions related to refunds and returns.
            </p>
          </div>
        </article>
      </main>
      <Footer />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      ></script>
    </React.Fragment>
  );
};

export default RefundReturnsPolicy;
