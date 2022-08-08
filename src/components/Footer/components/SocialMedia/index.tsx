import React from 'react';
import './index.css';

function SocialMedia() {
    return (
        <div className='social-media'>
            <a href='facebook.com'>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='16' cy='16' r='16' fill='#535C67' />
                    <path d='M14.0229 24L14 17H11V14H14V12C14 9.3008 15.6715 8 18.0794 8C19.2328 8 20.2241 8.08587 20.5129 8.12425V10.9451L18.843 10.9458C17.5334 10.9458 17.2799 11.5681 17.2799 12.4812V14H21L20 17H17.2799V24H14.0229Z' fill='white' />
                </svg>
            </a>
            <a href='twitter.com'>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='16' cy='16' r='16' fill='#535C67' />
                    <path d='M24 11.5C23.4 11.8 22.8 11.9 22.1 12C22.8 11.6 23.3 11 23.5 10.2C22.9 10.6 22.2 10.8 21.4 11C20.8 10.4 19.9 10 19 10C17.3 10 15.8 11.5 15.8 13.3C15.8 13.6 15.8 13.8 15.9 14C13.2 13.9 10.7 12.6 9.1 10.6C8.8 11.1 8.7 11.6 8.7 12.3C8.7 13.4 9.3 14.4 10.2 15C9.7 15 9.2 14.8 8.7 14.6C8.7 16.2 9.8 17.5 11.3 17.8C11 17.9 10.7 17.9 10.4 17.9C10.2 17.9 10 17.9 9.8 17.8C10.2 19.1 11.4 20.1 12.9 20.1C11.8 21 10.4 21.5 8.8 21.5C8.5 21.5 8.3 21.5 8 21.5C9.5 22.4 11.2 23 13 23C19 23 22.3 18 22.3 13.7C22.3 13.6 22.3 13.4 22.3 13.3C23 12.8 23.6 12.2 24 11.5Z' fill='white' />
                </svg>
            </a>
            <a href='instagram.com'>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='16' cy='16' r='16' fill='#535C67' />
                    <g clip-path='url(#clip0_333_47)'>
                        <path fill-rule='evenodd' clip-rule='evenodd' d='M16 9.441C18.136 9.441 18.389 9.45 19.233 9.488C19.7402 9.49409 20.2425 9.58746 20.718 9.764C21.0658 9.89248 21.3802 10.0975 21.638 10.364C21.9045 10.6218 22.1095 10.9362 22.238 11.284C22.4145 11.7595 22.5079 12.2618 22.514 12.769C22.552 13.613 22.561 13.869 22.561 16.002C22.561 18.135 22.552 18.391 22.514 19.235C22.5079 19.7422 22.4145 20.2445 22.238 20.72C22.1052 21.0651 21.9015 21.3785 21.64 21.64C21.3785 21.9015 21.0651 22.1052 20.72 22.238C20.2445 22.4145 19.7422 22.5079 19.235 22.514C18.391 22.552 18.135 22.561 16.002 22.561C13.869 22.561 13.613 22.552 12.769 22.514C12.2618 22.5079 11.7595 22.4145 11.284 22.238C10.9362 22.1095 10.6218 21.9045 10.364 21.638C10.0975 21.3802 9.89248 21.0658 9.764 20.718C9.58746 20.2425 9.49409 19.7402 9.488 19.233C9.45 18.389 9.441 18.133 9.441 16C9.441 13.867 9.45 13.611 9.488 12.767C9.49409 12.2598 9.58746 11.7575 9.764 11.282C9.89248 10.9342 10.0975 10.6198 10.364 10.362C10.6218 10.0955 10.9362 9.89048 11.284 9.762C11.7595 9.58546 12.2618 9.49209 12.769 9.486C13.613 9.448 13.869 9.439 16.002 9.439L16 9.441ZM16 8C13.827 8 13.555 8.009 12.7 8.048C12.037 8.06148 11.381 8.18727 10.76 8.42C10.226 8.62056 9.74231 8.9356 9.343 9.343C8.9356 9.74231 8.62056 10.226 8.42 10.76C8.18727 11.381 8.06148 12.037 8.048 12.7C8.009 13.555 8 13.827 8 16C8 18.173 8.009 18.445 8.048 19.3C8.06148 19.963 8.18727 20.619 8.42 21.24C8.62056 21.774 8.9356 22.2577 9.343 22.657C9.74231 23.0644 10.226 23.3794 10.76 23.58C11.3816 23.813 12.0383 23.9387 12.702 23.952C13.555 23.991 13.827 24 16 24C18.173 24 18.445 23.991 19.3 23.952C19.9637 23.9387 20.6204 23.813 21.242 23.58C21.7734 23.3743 22.256 23.0599 22.659 22.657C23.0619 22.254 23.3763 21.7714 23.582 21.24C23.815 20.6184 23.9407 19.9617 23.954 19.298C23.993 18.445 24.002 18.173 24.002 15.998C24.002 13.823 23.993 13.553 23.954 12.698C23.9397 12.0355 23.8132 11.3802 23.58 10.76C23.3794 10.226 23.0644 9.74231 22.657 9.343C22.2577 8.9356 21.774 8.62056 21.24 8.42C20.619 8.18727 19.963 8.06148 19.3 8.048C18.445 8.009 18.173 8 16 8ZM16 11.892C15.1875 11.892 14.3932 12.1329 13.7177 12.5843C13.0421 13.0357 12.5156 13.6773 12.2047 14.4279C11.8937 15.1786 11.8124 16.0046 11.9709 16.8014C12.1294 17.5983 12.5207 18.3303 13.0952 18.9048C13.6697 19.4793 14.4017 19.8706 15.1985 20.0291C15.9954 20.1876 16.8214 20.1062 17.572 19.7953C18.3227 19.4844 18.9643 18.9578 19.4156 18.2823C19.867 17.6067 20.108 16.8125 20.108 16C20.108 15.4605 20.0017 14.9263 19.7953 14.4279C19.5888 13.9295 19.2862 13.4767 18.9048 13.0952C18.5233 12.7137 18.0704 12.4111 17.572 12.2047C17.0736 11.9983 16.5394 11.892 16 11.892ZM16 18.667C15.4725 18.667 14.9569 18.5106 14.5183 18.2175C14.0797 17.9245 13.7378 17.5079 13.536 17.0206C13.3341 16.5333 13.2813 15.997 13.3842 15.4797C13.4871 14.9623 13.7411 14.4871 14.1141 14.1141C14.4871 13.7412 14.9623 13.4872 15.4797 13.3842C15.997 13.2813 16.5333 13.3342 17.0206 13.536C17.5079 13.7379 17.9244 14.0797 18.2175 14.5183C18.5106 14.9569 18.667 15.4725 18.667 16C18.667 16.7073 18.386 17.3857 17.8858 17.8859C17.3857 18.386 16.7073 18.667 16 18.667ZM21.23 11.73C21.23 12.2602 20.8002 12.69 20.27 12.69C19.7398 12.69 19.31 12.2602 19.31 11.73C19.31 11.1998 19.7398 10.77 20.27 10.77C20.8002 10.77 21.23 11.1998 21.23 11.73Z' fill='white' />
                    </g>
                    <defs>
                        <clipPath id='clip0_333_47'>
                            <rect width='16' height='16' fill='white' transform='translate(8 8)' />
                        </clipPath>
                    </defs>
                </svg>
            </a>
            <a href='linkedin.com'><svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='16' cy='16' r='16' fill='#535C67' />
                <path d='M12.2898 22.8696H9.26359V12.9568H12.4214V22.8696H12.2898ZM10.8425 11.6525C10.3571 11.6425 9.89441 11.4469 9.55112 11.1066C9.20783 10.7663 9.01052 10.3076 9.00044 9.82647C8.99505 9.58521 9.03901 9.34537 9.12968 9.12141C9.22034 8.89745 9.35583 8.69401 9.52796 8.52337C9.7001 8.35273 9.90532 8.21843 10.1312 8.12855C10.3572 8.03867 10.5991 7.99509 10.8425 8.00044C11.0859 7.99509 11.3278 8.03867 11.5537 8.12855C11.7797 8.21843 11.9849 8.35273 12.157 8.52337C12.3292 8.69401 12.4646 8.89745 12.5553 9.12141C12.646 9.34537 12.6899 9.58521 12.6845 9.82647C12.631 10.2925 12.4198 10.7267 12.0852 11.0584C11.7507 11.39 11.3126 11.5995 10.8425 11.6525V11.6525ZM24 22.8696H20.8422V18.0436C20.8422 16.8697 20.8422 15.435 19.2633 15.435C17.6844 15.435 17.4212 16.7393 17.4212 18.0436V23H14.2634V12.9568H17.2897V14.2611C17.5843 13.7651 18.0091 13.3576 18.5188 13.082C19.0286 12.8064 19.6042 12.673 20.1843 12.696C23.3421 12.696 23.8684 14.7828 23.8684 17.3915V22.8696H24Z' fill='white' />
            </svg>
            </a>
            <a href='youtube.com'>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='16' cy='16' r='16' fill='#535C67' />
                    <path d='M23.8 12.8C23.6 11.5 23 10.6 21.6 10.4C19.4 10 16 10 16 10C16 10 12.6 10 10.4 10.4C9 10.6 8.3 11.5 8.2 12.8C8 14.1 8 16 8 16C8 16 8 17.9 8.2 19.2C8.4 20.5 9 21.4 10.4 21.6C12.6 22 16 22 16 22C16 22 19.4 22 21.6 21.6C23 21.3 23.6 20.5 23.8 19.2C24 17.9 24 16 24 16C24 16 24 14.1 23.8 12.8ZM14 19V13L19 16L14 19Z' fill='white' />
                </svg>
            </a>
        </div>
    );
}

export default SocialMedia;