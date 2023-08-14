import React, { useState } from 'react'


// DATA

const Tab = () => {
  const [toggleState, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  }

  return (
    <div>
      <div className='block-tabs flex items-center gap-5 cursor-pointer mx-auto py-5'>
        <p className={toggleState === 1 ? 'active-tab rounded-lg p-3 text-[14px] font-bold text-link-colol-2' : 'tab bg-line_color p-3 rounded-lg text-[14px] font-bold text-link-colol-2'} onClick={() => toggleTab(1)}>Our Mission</p>
        <p className={toggleState === 2 ? 'active-tab rounded-lg p-3 text-[14px] font-bold text-link-colol-1' : 'tab text-[14px] bg-line_color p-3 rounded-lg font-bold text-link-colol-1'} onClick={() => toggleTab(2)}>Our Vision</p>
        <p className={toggleState === 3 ? 'active-tab rounded-lg p-3 text-[14px] font-bold text-link-colol-3' : 'tab text-[14px] bg-line_color p-3 rounded-lg font-bold text-link-colol-3'} onClick={() => toggleTab(3)}>Our Goal</p>
      </div>

      <div className={toggleState === 1 ? ' content active-content' : 'tabs'}>
        <div className='py-7 my-7 border-y-[1px] border-s-line_color flex gap-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 64 64" fill="none"><path d="M27.8132 52.1702C27.7122 52.1702 27.6119 52.1535 27.5163 52.1209C23.8499 50.9539 20.5167 48.9251 17.796 46.2045C15.0753 43.4839 13.0464 40.1508 11.8794 36.4846C11.8324 36.3481 11.8184 36.2025 11.8386 36.0596C11.8587 35.9168 11.9125 35.7807 11.9954 35.6626L25.5765 16.2845C34.253 5.02464 48.2396 -1.00213 63.0226 0.13674C63.2401 0.153317 63.4444 0.247138 63.5987 0.401241C63.7529 0.555344 63.847 0.759557 63.8638 0.976961C65 15.7576 58.9757 29.7454 47.7482 38.3979L47.7154 38.4225L28.3365 52.0013C28.1838 52.1104 28.0009 52.1694 27.8132 52.1702ZM13.7608 36.3275C14.8566 39.5585 16.6814 42.494 19.0941 44.9065C21.5067 47.319 24.4422 49.1438 27.6734 50.2395L46.6495 36.9403C57.1774 28.8194 62.9158 15.7713 62.0965 1.90668C48.214 1.08473 35.1682 6.8302 27.0478 17.3686L13.7608 36.3275Z" fill="#F41E1E"></path><path d="M60.7978 19.481C60.7399 19.4812 60.6821 19.476 60.6252 19.4655C56.64 18.7063 52.9768 16.762 50.1147 13.8872C47.2397 11.0251 45.2954 7.36203 44.5361 3.37707C44.4907 3.13909 44.5417 2.89282 44.6778 2.69243C44.814 2.49204 45.0242 2.35395 45.2622 2.30853C45.5002 2.26311 45.7465 2.3141 45.9468 2.45026C46.1473 2.58642 46.2853 2.79661 46.3308 3.03459C47.0216 6.65983 48.7905 9.99219 51.4061 12.5958C54.0098 15.2113 57.3423 16.9801 60.9677 17.6709C61.1906 17.7138 61.3895 17.8381 61.5258 18.0197C61.662 18.2013 61.7257 18.4271 61.7045 18.6531C61.6833 18.8791 61.5787 19.0891 61.411 19.2421C61.2434 19.3952 61.0248 19.4804 60.7978 19.481Z" fill="#F41E1E"></path><path d="M39.933 31.2204C38.2783 31.2195 36.6751 30.6449 35.3966 29.5945C34.118 28.5442 33.2433 27.083 32.9213 25.46C32.5994 23.837 32.8502 22.1526 33.6309 20.6938C34.4117 19.2349 35.6742 18.0919 37.2032 17.4595C38.7323 16.8271 40.4333 16.7444 42.0165 17.2255C43.5997 17.7066 44.9671 18.7218 45.8857 20.098C46.8043 21.4742 47.2173 23.1264 47.0543 24.7729C46.8913 26.4195 46.1624 27.9586 44.9918 29.128C44.3279 29.7928 43.5393 30.3198 42.6711 30.6788C41.803 31.0379 40.8724 31.2219 39.933 31.2204ZM39.933 18.7403C38.7 18.7402 37.5051 19.1675 36.5518 19.9495C35.5986 20.7315 34.9461 21.8199 34.7054 23.0291C34.4647 24.2383 34.6508 25.4936 35.2319 26.581C35.813 27.6684 36.7532 28.5207 37.8923 28.9926C39.0314 29.4645 40.2989 29.5268 41.4788 29.169C42.6587 28.8112 43.678 28.0553 44.3631 27.0302C45.0481 26.005 45.3565 24.7741 45.2357 23.5471C45.1148 22.3201 44.5723 21.173 43.7004 20.3012C43.2067 19.805 42.6195 19.4116 41.9729 19.1437C41.3262 18.8758 40.6329 18.7387 39.933 18.7403Z" fill="#F41E1E"></path><path d="M35.001 63.9306H34.9462C34.7993 63.9217 34.6568 63.8774 34.5307 63.8016C34.4046 63.7257 34.2986 63.6205 34.222 63.4949L27.035 51.7355C26.9087 51.5288 26.8697 51.2803 26.9266 51.0448C26.9834 50.8093 27.1315 50.606 27.3383 50.4797C27.545 50.3534 27.7934 50.3144 28.029 50.3713C28.2645 50.4281 28.4677 50.5762 28.5941 50.7829L35.096 61.4218L40.0179 55.1886C41.1029 53.8071 41.9026 52.2236 42.3705 50.5304C42.8383 48.8371 42.9651 47.0678 42.7432 45.3252L42.1423 40.7039C42.1246 40.584 42.131 40.4617 42.161 40.3443C42.1911 40.2268 42.2443 40.1166 42.3174 40.0199C42.3905 39.9232 42.4822 39.842 42.587 39.7811C42.6919 39.7202 42.8078 39.6808 42.928 39.6651C43.0482 39.6495 43.1704 39.6579 43.2873 39.69C43.4042 39.722 43.5136 39.7771 43.609 39.8518C43.7045 39.9266 43.7841 40.0196 43.8432 40.1254C43.9023 40.2313 43.9398 40.3478 43.9534 40.4683L44.5544 45.0904C44.8073 47.0752 44.663 49.0905 44.1299 51.019C43.5968 52.9475 42.6855 54.7507 41.4491 56.3238L35.7143 63.5872C35.6288 63.6943 35.5203 63.7807 35.3968 63.8402C35.2733 63.8996 35.1381 63.9305 35.001 63.9306Z" fill="#F41E1E"></path><path d="M12.7406 37.0992C12.5728 37.0993 12.4081 37.0532 12.2648 36.9659L0.506699 29.7792C0.381197 29.7026 0.276062 29.5967 0.200233 29.4707C0.124403 29.3447 0.080123 29.2023 0.0711561 29.0555C0.0621892 28.9087 0.0888011 28.762 0.148729 28.6277C0.208657 28.4934 0.300129 28.3755 0.415367 28.2842L7.67901 22.5497C9.25236 21.3136 11.0557 20.4026 12.9842 19.8695C14.9128 19.3364 16.928 19.192 18.9129 19.4445L23.5352 20.0454C23.6557 20.059 23.7722 20.0965 23.8781 20.1556C23.9839 20.2147 24.0769 20.2943 24.1517 20.3898C24.2265 20.4852 24.2815 20.5946 24.3135 20.7115C24.3456 20.8284 24.354 20.9506 24.3384 21.0708C24.3227 21.191 24.2833 21.3069 24.2224 21.4117C24.1615 21.5166 24.0803 21.6082 23.9836 21.6814C23.8869 21.7545 23.7767 21.8076 23.6592 21.8377C23.5418 21.8678 23.4195 21.8741 23.2995 21.8565L18.6781 21.2555C16.9354 21.034 15.1661 21.1608 13.4728 21.6286C11.7795 22.0965 10.196 22.896 8.81427 23.9808L2.57811 28.9052L13.2174 35.4069C13.3872 35.5108 13.5184 35.6673 13.5911 35.8526C13.6637 36.038 13.6738 36.2419 13.6198 36.4335C13.5658 36.6251 13.4507 36.7939 13.292 36.914C13.1333 37.0342 12.9397 37.0992 12.7406 37.0992Z" fill="#F41E1E"></path><path d="M12.1123 64C11.9317 64 11.7551 63.9464 11.605 63.846C11.4548 63.7457 11.3378 63.603 11.2687 63.4362C11.1995 63.2693 11.1815 63.0857 11.2167 62.9086C11.2519 62.7315 11.3389 62.5687 11.4666 62.441L19.6234 54.2845C19.7077 54.1972 19.8085 54.1277 19.9199 54.0798C20.0313 54.0319 20.1512 54.0067 20.2724 54.0057C20.3937 54.0046 20.514 54.0277 20.6262 54.0737C20.7385 54.1196 20.8404 54.1874 20.9262 54.2731C21.0119 54.3589 21.0798 54.4609 21.1257 54.5731C21.1716 54.6853 21.1947 54.8056 21.1937 54.9269C21.1926 55.0481 21.1674 55.168 21.1195 55.2794C21.0717 55.3908 21.0021 55.4916 20.9149 55.5759L12.758 63.7324C12.5867 63.9037 12.3545 63.9999 12.1123 64Z" fill="#F41E1E"></path><path d="M0.913126 52.8013C0.732517 52.8013 0.555974 52.7477 0.405815 52.6473C0.255656 52.547 0.138623 52.4043 0.0695119 52.2375C0.00040082 52.0706 -0.0176856 51.887 0.017539 51.7099C0.0527635 51.5328 0.139718 51.37 0.267409 51.2423L8.42428 43.0858C8.50853 42.9985 8.60931 42.929 8.72074 42.8811C8.83217 42.8332 8.95201 42.808 9.07329 42.807C9.19456 42.8059 9.31482 42.829 9.42706 42.875C9.53931 42.9209 9.64128 42.9887 9.72704 43.0745C9.81279 43.1602 9.88061 43.2622 9.92653 43.3744C9.97245 43.4867 9.99556 43.6069 9.99451 43.7282C9.99345 43.8494 9.96826 43.9693 9.92039 44.0807C9.87253 44.1921 9.80295 44.2929 9.71572 44.3772L1.55884 52.5337C1.3876 52.705 1.15533 52.8013 0.913126 52.8013Z" fill="#F41E1E"></path><path d="M1.4666 63.4465C1.28599 63.4465 1.10945 63.3929 0.959287 63.2926C0.809128 63.1922 0.692096 63.0496 0.622985 62.8827C0.553873 62.7159 0.535787 62.5323 0.571012 62.3551C0.606236 62.178 0.69319 62.0153 0.820881 61.8876L9.59972 53.1091C9.77198 52.9427 10.0027 52.8507 10.2422 52.8527C10.4816 52.8548 10.7107 52.9509 10.88 53.1202C11.0494 53.2895 11.1454 53.5186 11.1475 53.758C11.1496 53.9975 11.0575 54.2282 10.8912 54.4005L2.11232 63.1789C1.94108 63.3502 1.70881 63.4465 1.4666 63.4465Z" fill="#F41E1E"></path></svg>
          <p>
            Gyms play a vital role in promoting an active and healthy lifestyle. They provide a supportive and motivating environment for individuals to engage in regular physical activity.
          </p>
        </div>
      </div>

      <div className={toggleState === 2 ? ' content active-content' : 'tabs'}>
        <div className='py-7 my-7 border-y-[1px] border-s-line_color flex gap-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 64 64" fill="none"><path d="M27.8132 52.1702C27.7122 52.1702 27.6119 52.1535 27.5163 52.1209C23.8499 50.9539 20.5167 48.9251 17.796 46.2045C15.0753 43.4839 13.0464 40.1508 11.8794 36.4846C11.8324 36.3481 11.8184 36.2025 11.8386 36.0596C11.8587 35.9168 11.9125 35.7807 11.9954 35.6626L25.5765 16.2845C34.253 5.02464 48.2396 -1.00213 63.0226 0.13674C63.2401 0.153317 63.4444 0.247138 63.5987 0.401241C63.7529 0.555344 63.847 0.759557 63.8638 0.976961C65 15.7576 58.9757 29.7454 47.7482 38.3979L47.7154 38.4225L28.3365 52.0013C28.1838 52.1104 28.0009 52.1694 27.8132 52.1702ZM13.7608 36.3275C14.8566 39.5585 16.6814 42.494 19.0941 44.9065C21.5067 47.319 24.4422 49.1438 27.6734 50.2395L46.6495 36.9403C57.1774 28.8194 62.9158 15.7713 62.0965 1.90668C48.214 1.08473 35.1682 6.8302 27.0478 17.3686L13.7608 36.3275Z" fill="#F41E1E"></path><path d="M60.7978 19.481C60.7399 19.4812 60.6821 19.476 60.6252 19.4655C56.64 18.7063 52.9768 16.762 50.1147 13.8872C47.2397 11.0251 45.2954 7.36203 44.5361 3.37707C44.4907 3.13909 44.5417 2.89282 44.6778 2.69243C44.814 2.49204 45.0242 2.35395 45.2622 2.30853C45.5002 2.26311 45.7465 2.3141 45.9468 2.45026C46.1473 2.58642 46.2853 2.79661 46.3308 3.03459C47.0216 6.65983 48.7905 9.99219 51.4061 12.5958C54.0098 15.2113 57.3423 16.9801 60.9677 17.6709C61.1906 17.7138 61.3895 17.8381 61.5258 18.0197C61.662 18.2013 61.7257 18.4271 61.7045 18.6531C61.6833 18.8791 61.5787 19.0891 61.411 19.2421C61.2434 19.3952 61.0248 19.4804 60.7978 19.481Z" fill="#F41E1E"></path><path d="M39.933 31.2204C38.2783 31.2195 36.6751 30.6449 35.3966 29.5945C34.118 28.5442 33.2433 27.083 32.9213 25.46C32.5994 23.837 32.8502 22.1526 33.6309 20.6938C34.4117 19.2349 35.6742 18.0919 37.2032 17.4595C38.7323 16.8271 40.4333 16.7444 42.0165 17.2255C43.5997 17.7066 44.9671 18.7218 45.8857 20.098C46.8043 21.4742 47.2173 23.1264 47.0543 24.7729C46.8913 26.4195 46.1624 27.9586 44.9918 29.128C44.3279 29.7928 43.5393 30.3198 42.6711 30.6788C41.803 31.0379 40.8724 31.2219 39.933 31.2204ZM39.933 18.7403C38.7 18.7402 37.5051 19.1675 36.5518 19.9495C35.5986 20.7315 34.9461 21.8199 34.7054 23.0291C34.4647 24.2383 34.6508 25.4936 35.2319 26.581C35.813 27.6684 36.7532 28.5207 37.8923 28.9926C39.0314 29.4645 40.2989 29.5268 41.4788 29.169C42.6587 28.8112 43.678 28.0553 44.3631 27.0302C45.0481 26.005 45.3565 24.7741 45.2357 23.5471C45.1148 22.3201 44.5723 21.173 43.7004 20.3012C43.2067 19.805 42.6195 19.4116 41.9729 19.1437C41.3262 18.8758 40.6329 18.7387 39.933 18.7403Z" fill="#F41E1E"></path><path d="M35.001 63.9306H34.9462C34.7993 63.9217 34.6568 63.8774 34.5307 63.8016C34.4046 63.7257 34.2986 63.6205 34.222 63.4949L27.035 51.7355C26.9087 51.5288 26.8697 51.2803 26.9266 51.0448C26.9834 50.8093 27.1315 50.606 27.3383 50.4797C27.545 50.3534 27.7934 50.3144 28.029 50.3713C28.2645 50.4281 28.4677 50.5762 28.5941 50.7829L35.096 61.4218L40.0179 55.1886C41.1029 53.8071 41.9026 52.2236 42.3705 50.5304C42.8383 48.8371 42.9651 47.0678 42.7432 45.3252L42.1423 40.7039C42.1246 40.584 42.131 40.4617 42.161 40.3443C42.1911 40.2268 42.2443 40.1166 42.3174 40.0199C42.3905 39.9232 42.4822 39.842 42.587 39.7811C42.6919 39.7202 42.8078 39.6808 42.928 39.6651C43.0482 39.6495 43.1704 39.6579 43.2873 39.69C43.4042 39.722 43.5136 39.7771 43.609 39.8518C43.7045 39.9266 43.7841 40.0196 43.8432 40.1254C43.9023 40.2313 43.9398 40.3478 43.9534 40.4683L44.5544 45.0904C44.8073 47.0752 44.663 49.0905 44.1299 51.019C43.5968 52.9475 42.6855 54.7507 41.4491 56.3238L35.7143 63.5872C35.6288 63.6943 35.5203 63.7807 35.3968 63.8402C35.2733 63.8996 35.1381 63.9305 35.001 63.9306Z" fill="#F41E1E"></path><path d="M12.7406 37.0992C12.5728 37.0993 12.4081 37.0532 12.2648 36.9659L0.506699 29.7792C0.381197 29.7026 0.276062 29.5967 0.200233 29.4707C0.124403 29.3447 0.080123 29.2023 0.0711561 29.0555C0.0621892 28.9087 0.0888011 28.762 0.148729 28.6277C0.208657 28.4934 0.300129 28.3755 0.415367 28.2842L7.67901 22.5497C9.25236 21.3136 11.0557 20.4026 12.9842 19.8695C14.9128 19.3364 16.928 19.192 18.9129 19.4445L23.5352 20.0454C23.6557 20.059 23.7722 20.0965 23.8781 20.1556C23.9839 20.2147 24.0769 20.2943 24.1517 20.3898C24.2265 20.4852 24.2815 20.5946 24.3135 20.7115C24.3456 20.8284 24.354 20.9506 24.3384 21.0708C24.3227 21.191 24.2833 21.3069 24.2224 21.4117C24.1615 21.5166 24.0803 21.6082 23.9836 21.6814C23.8869 21.7545 23.7767 21.8076 23.6592 21.8377C23.5418 21.8678 23.4195 21.8741 23.2995 21.8565L18.6781 21.2555C16.9354 21.034 15.1661 21.1608 13.4728 21.6286C11.7795 22.0965 10.196 22.896 8.81427 23.9808L2.57811 28.9052L13.2174 35.4069C13.3872 35.5108 13.5184 35.6673 13.5911 35.8526C13.6637 36.038 13.6738 36.2419 13.6198 36.4335C13.5658 36.6251 13.4507 36.7939 13.292 36.914C13.1333 37.0342 12.9397 37.0992 12.7406 37.0992Z" fill="#F41E1E"></path><path d="M12.1123 64C11.9317 64 11.7551 63.9464 11.605 63.846C11.4548 63.7457 11.3378 63.603 11.2687 63.4362C11.1995 63.2693 11.1815 63.0857 11.2167 62.9086C11.2519 62.7315 11.3389 62.5687 11.4666 62.441L19.6234 54.2845C19.7077 54.1972 19.8085 54.1277 19.9199 54.0798C20.0313 54.0319 20.1512 54.0067 20.2724 54.0057C20.3937 54.0046 20.514 54.0277 20.6262 54.0737C20.7385 54.1196 20.8404 54.1874 20.9262 54.2731C21.0119 54.3589 21.0798 54.4609 21.1257 54.5731C21.1716 54.6853 21.1947 54.8056 21.1937 54.9269C21.1926 55.0481 21.1674 55.168 21.1195 55.2794C21.0717 55.3908 21.0021 55.4916 20.9149 55.5759L12.758 63.7324C12.5867 63.9037 12.3545 63.9999 12.1123 64Z" fill="#F41E1E"></path><path d="M0.913126 52.8013C0.732517 52.8013 0.555974 52.7477 0.405815 52.6473C0.255656 52.547 0.138623 52.4043 0.0695119 52.2375C0.00040082 52.0706 -0.0176856 51.887 0.017539 51.7099C0.0527635 51.5328 0.139718 51.37 0.267409 51.2423L8.42428 43.0858C8.50853 42.9985 8.60931 42.929 8.72074 42.8811C8.83217 42.8332 8.95201 42.808 9.07329 42.807C9.19456 42.8059 9.31482 42.829 9.42706 42.875C9.53931 42.9209 9.64128 42.9887 9.72704 43.0745C9.81279 43.1602 9.88061 43.2622 9.92653 43.3744C9.97245 43.4867 9.99556 43.6069 9.99451 43.7282C9.99345 43.8494 9.96826 43.9693 9.92039 44.0807C9.87253 44.1921 9.80295 44.2929 9.71572 44.3772L1.55884 52.5337C1.3876 52.705 1.15533 52.8013 0.913126 52.8013Z" fill="#F41E1E"></path><path d="M1.4666 63.4465C1.28599 63.4465 1.10945 63.3929 0.959287 63.2926C0.809128 63.1922 0.692096 63.0496 0.622985 62.8827C0.553873 62.7159 0.535787 62.5323 0.571012 62.3551C0.606236 62.178 0.69319 62.0153 0.820881 61.8876L9.59972 53.1091C9.77198 52.9427 10.0027 52.8507 10.2422 52.8527C10.4816 52.8548 10.7107 52.9509 10.88 53.1202C11.0494 53.2895 11.1454 53.5186 11.1475 53.758C11.1496 53.9975 11.0575 54.2282 10.8912 54.4005L2.11232 63.1789C1.94108 63.3502 1.70881 63.4465 1.4666 63.4465Z" fill="#F41E1E"></path></svg>
          <p>
            These are standard fitness centers that offer a wide range of exercise equipment, such as cardio machines, strength training machines, and free weights.
          </p>
        </div>
      </div>

      <div className={toggleState === 3 ? ' content active-content' : 'tabs'}>
        <div className='py-7 my-7 border-y-[1px] border-s-line_color flex gap-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 64 64" fill="none"><path d="M27.8132 52.1702C27.7122 52.1702 27.6119 52.1535 27.5163 52.1209C23.8499 50.9539 20.5167 48.9251 17.796 46.2045C15.0753 43.4839 13.0464 40.1508 11.8794 36.4846C11.8324 36.3481 11.8184 36.2025 11.8386 36.0596C11.8587 35.9168 11.9125 35.7807 11.9954 35.6626L25.5765 16.2845C34.253 5.02464 48.2396 -1.00213 63.0226 0.13674C63.2401 0.153317 63.4444 0.247138 63.5987 0.401241C63.7529 0.555344 63.847 0.759557 63.8638 0.976961C65 15.7576 58.9757 29.7454 47.7482 38.3979L47.7154 38.4225L28.3365 52.0013C28.1838 52.1104 28.0009 52.1694 27.8132 52.1702ZM13.7608 36.3275C14.8566 39.5585 16.6814 42.494 19.0941 44.9065C21.5067 47.319 24.4422 49.1438 27.6734 50.2395L46.6495 36.9403C57.1774 28.8194 62.9158 15.7713 62.0965 1.90668C48.214 1.08473 35.1682 6.8302 27.0478 17.3686L13.7608 36.3275Z" fill="#F41E1E"></path><path d="M60.7978 19.481C60.7399 19.4812 60.6821 19.476 60.6252 19.4655C56.64 18.7063 52.9768 16.762 50.1147 13.8872C47.2397 11.0251 45.2954 7.36203 44.5361 3.37707C44.4907 3.13909 44.5417 2.89282 44.6778 2.69243C44.814 2.49204 45.0242 2.35395 45.2622 2.30853C45.5002 2.26311 45.7465 2.3141 45.9468 2.45026C46.1473 2.58642 46.2853 2.79661 46.3308 3.03459C47.0216 6.65983 48.7905 9.99219 51.4061 12.5958C54.0098 15.2113 57.3423 16.9801 60.9677 17.6709C61.1906 17.7138 61.3895 17.8381 61.5258 18.0197C61.662 18.2013 61.7257 18.4271 61.7045 18.6531C61.6833 18.8791 61.5787 19.0891 61.411 19.2421C61.2434 19.3952 61.0248 19.4804 60.7978 19.481Z" fill="#F41E1E"></path><path d="M39.933 31.2204C38.2783 31.2195 36.6751 30.6449 35.3966 29.5945C34.118 28.5442 33.2433 27.083 32.9213 25.46C32.5994 23.837 32.8502 22.1526 33.6309 20.6938C34.4117 19.2349 35.6742 18.0919 37.2032 17.4595C38.7323 16.8271 40.4333 16.7444 42.0165 17.2255C43.5997 17.7066 44.9671 18.7218 45.8857 20.098C46.8043 21.4742 47.2173 23.1264 47.0543 24.7729C46.8913 26.4195 46.1624 27.9586 44.9918 29.128C44.3279 29.7928 43.5393 30.3198 42.6711 30.6788C41.803 31.0379 40.8724 31.2219 39.933 31.2204ZM39.933 18.7403C38.7 18.7402 37.5051 19.1675 36.5518 19.9495C35.5986 20.7315 34.9461 21.8199 34.7054 23.0291C34.4647 24.2383 34.6508 25.4936 35.2319 26.581C35.813 27.6684 36.7532 28.5207 37.8923 28.9926C39.0314 29.4645 40.2989 29.5268 41.4788 29.169C42.6587 28.8112 43.678 28.0553 44.3631 27.0302C45.0481 26.005 45.3565 24.7741 45.2357 23.5471C45.1148 22.3201 44.5723 21.173 43.7004 20.3012C43.2067 19.805 42.6195 19.4116 41.9729 19.1437C41.3262 18.8758 40.6329 18.7387 39.933 18.7403Z" fill="#F41E1E"></path><path d="M35.001 63.9306H34.9462C34.7993 63.9217 34.6568 63.8774 34.5307 63.8016C34.4046 63.7257 34.2986 63.6205 34.222 63.4949L27.035 51.7355C26.9087 51.5288 26.8697 51.2803 26.9266 51.0448C26.9834 50.8093 27.1315 50.606 27.3383 50.4797C27.545 50.3534 27.7934 50.3144 28.029 50.3713C28.2645 50.4281 28.4677 50.5762 28.5941 50.7829L35.096 61.4218L40.0179 55.1886C41.1029 53.8071 41.9026 52.2236 42.3705 50.5304C42.8383 48.8371 42.9651 47.0678 42.7432 45.3252L42.1423 40.7039C42.1246 40.584 42.131 40.4617 42.161 40.3443C42.1911 40.2268 42.2443 40.1166 42.3174 40.0199C42.3905 39.9232 42.4822 39.842 42.587 39.7811C42.6919 39.7202 42.8078 39.6808 42.928 39.6651C43.0482 39.6495 43.1704 39.6579 43.2873 39.69C43.4042 39.722 43.5136 39.7771 43.609 39.8518C43.7045 39.9266 43.7841 40.0196 43.8432 40.1254C43.9023 40.2313 43.9398 40.3478 43.9534 40.4683L44.5544 45.0904C44.8073 47.0752 44.663 49.0905 44.1299 51.019C43.5968 52.9475 42.6855 54.7507 41.4491 56.3238L35.7143 63.5872C35.6288 63.6943 35.5203 63.7807 35.3968 63.8402C35.2733 63.8996 35.1381 63.9305 35.001 63.9306Z" fill="#F41E1E"></path><path d="M12.7406 37.0992C12.5728 37.0993 12.4081 37.0532 12.2648 36.9659L0.506699 29.7792C0.381197 29.7026 0.276062 29.5967 0.200233 29.4707C0.124403 29.3447 0.080123 29.2023 0.0711561 29.0555C0.0621892 28.9087 0.0888011 28.762 0.148729 28.6277C0.208657 28.4934 0.300129 28.3755 0.415367 28.2842L7.67901 22.5497C9.25236 21.3136 11.0557 20.4026 12.9842 19.8695C14.9128 19.3364 16.928 19.192 18.9129 19.4445L23.5352 20.0454C23.6557 20.059 23.7722 20.0965 23.8781 20.1556C23.9839 20.2147 24.0769 20.2943 24.1517 20.3898C24.2265 20.4852 24.2815 20.5946 24.3135 20.7115C24.3456 20.8284 24.354 20.9506 24.3384 21.0708C24.3227 21.191 24.2833 21.3069 24.2224 21.4117C24.1615 21.5166 24.0803 21.6082 23.9836 21.6814C23.8869 21.7545 23.7767 21.8076 23.6592 21.8377C23.5418 21.8678 23.4195 21.8741 23.2995 21.8565L18.6781 21.2555C16.9354 21.034 15.1661 21.1608 13.4728 21.6286C11.7795 22.0965 10.196 22.896 8.81427 23.9808L2.57811 28.9052L13.2174 35.4069C13.3872 35.5108 13.5184 35.6673 13.5911 35.8526C13.6637 36.038 13.6738 36.2419 13.6198 36.4335C13.5658 36.6251 13.4507 36.7939 13.292 36.914C13.1333 37.0342 12.9397 37.0992 12.7406 37.0992Z" fill="#F41E1E"></path><path d="M12.1123 64C11.9317 64 11.7551 63.9464 11.605 63.846C11.4548 63.7457 11.3378 63.603 11.2687 63.4362C11.1995 63.2693 11.1815 63.0857 11.2167 62.9086C11.2519 62.7315 11.3389 62.5687 11.4666 62.441L19.6234 54.2845C19.7077 54.1972 19.8085 54.1277 19.9199 54.0798C20.0313 54.0319 20.1512 54.0067 20.2724 54.0057C20.3937 54.0046 20.514 54.0277 20.6262 54.0737C20.7385 54.1196 20.8404 54.1874 20.9262 54.2731C21.0119 54.3589 21.0798 54.4609 21.1257 54.5731C21.1716 54.6853 21.1947 54.8056 21.1937 54.9269C21.1926 55.0481 21.1674 55.168 21.1195 55.2794C21.0717 55.3908 21.0021 55.4916 20.9149 55.5759L12.758 63.7324C12.5867 63.9037 12.3545 63.9999 12.1123 64Z" fill="#F41E1E"></path><path d="M0.913126 52.8013C0.732517 52.8013 0.555974 52.7477 0.405815 52.6473C0.255656 52.547 0.138623 52.4043 0.0695119 52.2375C0.00040082 52.0706 -0.0176856 51.887 0.017539 51.7099C0.0527635 51.5328 0.139718 51.37 0.267409 51.2423L8.42428 43.0858C8.50853 42.9985 8.60931 42.929 8.72074 42.8811C8.83217 42.8332 8.95201 42.808 9.07329 42.807C9.19456 42.8059 9.31482 42.829 9.42706 42.875C9.53931 42.9209 9.64128 42.9887 9.72704 43.0745C9.81279 43.1602 9.88061 43.2622 9.92653 43.3744C9.97245 43.4867 9.99556 43.6069 9.99451 43.7282C9.99345 43.8494 9.96826 43.9693 9.92039 44.0807C9.87253 44.1921 9.80295 44.2929 9.71572 44.3772L1.55884 52.5337C1.3876 52.705 1.15533 52.8013 0.913126 52.8013Z" fill="#F41E1E"></path><path d="M1.4666 63.4465C1.28599 63.4465 1.10945 63.3929 0.959287 63.2926C0.809128 63.1922 0.692096 63.0496 0.622985 62.8827C0.553873 62.7159 0.535787 62.5323 0.571012 62.3551C0.606236 62.178 0.69319 62.0153 0.820881 61.8876L9.59972 53.1091C9.77198 52.9427 10.0027 52.8507 10.2422 52.8527C10.4816 52.8548 10.7107 52.9509 10.88 53.1202C11.0494 53.2895 11.1454 53.5186 11.1475 53.758C11.1496 53.9975 11.0575 54.2282 10.8912 54.4005L2.11232 63.1789C1.94108 63.3502 1.70881 63.4465 1.4666 63.4465Z" fill="#F41E1E"></path></svg>
          <p>
            These gyms focus on functional fitness, emphasizing movements that mimic real-life activities. They often use equipment like kettlebells, medicine balls, and resistance bands.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Tab