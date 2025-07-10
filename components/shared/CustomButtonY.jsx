import { FC, useState } from "react";

const CustomButtonY = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="relative">
            <div className={`relative group cursor-pointer transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <span className="hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="187" height="58" viewBox="0 0 187 58" fill="none">
                        <path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" fill="black" />
                        <g clipPath="url(#paint0_diamond_522_1288_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0700357 0.0451111 -0.149028 -0.0801543 103.219 17.3333)"><rect x="0" y="0" width="1161.91" height="537.234" fill="url(#paint0_diamond_522_1288)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(1 -1)" fill="url(#paint0_diamond_522_1288)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(-1 1)" fill="url(#paint0_diamond_522_1288)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(-1)" fill="url(#paint0_diamond_522_1288)" opacity="1" shapeRendering="crispEdges" /></g></g><path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_DIAMOND&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-140.07142639160156,&quot;m01&quot;:-298.05557250976562,&quot;m02&quot;:322.28244018554688,&quot;m10&quot;:90.222229003906250,&quot;m11&quot;:-160.30863952636719,&quot;m12&quot;:52.376537322998047},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                        <defs>
                            <clipPath id="paint0_diamond_522_1288_clip_path"><path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" /></clipPath><linearGradient id="paint0_diamond_522_1288" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FEFFE7" />
                                <stop offset="1" stopColor="#FFE000" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="lg:hidden block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="34" viewBox="0 0 107 34" fill="none">
                        <path d="M106.074 10.1409L96.9308 0.998047H0.359375V23.8897L9.50223 32.998H106.074V10.1409Z" stroke="#FFFB41" strokeWidth="0.571429" />
                    </svg>
                </span>
                <div className="absolute left-2.5 lg:left-7 top-[9px] lg:top-4 font-medium text-[10px] lg:text-base text-main-200">Get in touch</div>
                <span className="absolute right-[4px] top-[4px] lg:right-[5px] lg:top-[5px]">
                    <span className="relative">
                        <span className="hidden lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M0 0V34.3066L13.6911 48H48V13.6934L34.3088 0H0Z" fill="black" />
                                <g clipPath="url(#paint0_diamond_522_1289_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0181714 0.0386667 -0.0386667 -0.0687037 26.5217 14)"><rect x="0" y="0" width="1154.36" height="533.736" fill="url(#paint0_diamond_522_1289)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(1 -1)" fill="url(#paint0_diamond_522_1289)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(-1 1)" fill="url(#paint0_diamond_522_1289)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(-1)" fill="url(#paint0_diamond_522_1289)" opacity="1" shapeRendering="crispEdges" /></g></g><path d="M0 0V34.3066L13.6911 48H48V13.6934L34.3088 0H0Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_DIAMOND&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-36.342857360839844,&quot;m01&quot;:-77.333343505859375,&quot;m02&quot;:83.359764099121094,&quot;m10&quot;:77.333343505859375,&quot;m11&quot;:-137.40740966796875,&quot;m12&quot;:44.037029266357422},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                                <defs>
                                    <clipPath id="paint0_diamond_522_1289_clip_path"><path d="M0 0V34.3066L13.6911 48H48V13.6934L34.3088 0H0Z" /></clipPath><linearGradient id="paint0_diamond_522_1289" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FEFFE7" />
                                        <stop offset="1" stopColor="#FFE000" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="lg:hidden block">

                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M0 0V19.2974L7.70126 27H27V7.70255L19.2987 0H0Z" fill="black" />
                                <g clipPath="url(#paint0_diamond_699_183_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0102214 0.02175 -0.02175 -0.0386458 14.9184 7.875)"><rect x="0" y="0" width="1162.93" height="538.275" fill="url(#paint0_diamond_699_183)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1162.93" height="538.275" transform="scale(1 -1)" fill="url(#paint0_diamond_699_183)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1162.93" height="538.275" transform="scale(-1 1)" fill="url(#paint0_diamond_699_183)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1162.93" height="538.275" transform="scale(-1)" fill="url(#paint0_diamond_699_183)" opacity="1" shapeRendering="crispEdges" /></g></g><path d="M0 0V19.2974L7.70126 27H27V7.70255L19.2987 0H0Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_DIAMOND&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-20.442857742309570,&quot;m01&quot;:-43.500003814697266,&quot;m02&quot;:46.889869689941406,&quot;m10&quot;:43.500003814697266,&quot;m11&quot;:-77.291664123535156,&quot;m12&quot;:24.770830154418945},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                                <defs>
                                    <clipPath id="paint0_diamond_699_183_clip_path"><path d="M0 0V19.2974L7.70126 27H27V7.70255L19.2987 0H0Z" /></clipPath><linearGradient id="paint0_diamond_699_183" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FEFFE7" />
                                        <stop offset="1" stopColor="#FFE000" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="hidden lg:block absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                                <path d="M9.5 4.5V6.5H16.09L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5H9.5Z" fill="black" />
                            </svg>
                        </span>
                        <span className="absolute block lg:hidden right-[6px] top-[7px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <path d="M6.04362 2.625V3.79167H9.88779L3.12695 10.5525L3.94945 11.375L10.7103 4.61417V8.45833H11.877V2.625H6.04362Z" fill="black" />
                            </svg>
                        </span>
                    </span>
                </span>
            </div>

            <div className={`absolute group cursor-pointer transition-opacity duration-500 top-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <span className="hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="187" height="58" viewBox="0 0 187 58" fill="none">
                        <path d="M186 17L170 1H1V41.0603L17 57H186V17Z" fill="#FFEE0D" />
                        <path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" fill="black" />
                        <g clipPath="url(#paint0_diamond_672_594_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0700357 0.0451111 -0.149028 -0.0801543 103.219 17.3333)"><rect x="0" y="0" width="1161.91" height="537.234" fill="url(#paint0_diamond_672_594)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(1 -1)" fill="url(#paint0_diamond_672_594)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(-1 1)" fill="url(#paint0_diamond_672_594)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(-1)" fill="url(#paint0_diamond_672_594)" opacity="1" shapeRendering="crispEdges" /></g></g><path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_DIAMOND&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.26666668057441711,&quot;g&quot;:0.26666668057441711,&quot;b&quot;:0.26666668057441711,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.0,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.26666668057441711,&quot;g&quot;:0.26666668057441711,&quot;b&quot;:0.26666668057441711,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.0,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-140.07142639160156,&quot;m01&quot;:-298.05557250976562,&quot;m02&quot;:322.28244018554688,&quot;m10&quot;:90.222229003906250,&quot;m11&quot;:-160.30863952636719,&quot;m12&quot;:52.376537322998047},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                        <defs>
                            <clipPath id="paint0_diamond_672_594_clip_path"><path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" /></clipPath><linearGradient id="paint0_diamond_672_594" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#444444" />
                                <stop offset="1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="lg:hidden block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="32" viewBox="0 0 107 32" fill="none">
                        <path d="M106.074 9.14097L96.9308 -0.00189209H0.359375V22.8897L9.50223 31.9981H106.074V9.14097Z" fill="#FFEE0D" />
                    </svg>
                </span>

                <div className="absolute left-2 lg:left-7 top-2 lg:top-4 font-medium text-xs lg:text-base text-black">Get in touch</div>
                <span className="absolute right-[4px] top-[3px] lg:right-[5px] lg:top-[5px]">
                    <span className="relative">
                        <span className="hidden lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M0 0V34.3066L13.6911 48H48V13.6934L34.3088 0H0Z" fill="black" />
                                <g clipPath="url(#paint0_diamond_672_595_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0181714 0.0386667 -0.0386667 -0.0687037 26.5217 14)"><rect x="0" y="0" width="1154.36" height="533.736" fill="url(#paint0_diamond_672_595)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(1 -1)" fill="url(#paint0_diamond_672_595)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(-1 1)" fill="url(#paint0_diamond_672_595)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(-1)" fill="url(#paint0_diamond_672_595)" opacity="1" shapeRendering="crispEdges" /></g></g><path d="M0 0V34.3066L13.6911 48H48V13.6934L34.3088 0H0Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_DIAMOND&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.0,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.12083332985639572,&quot;g&quot;:0.12083332985639572,&quot;b&quot;:0.12083332985639572,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.0,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.12083332985639572,&quot;g&quot;:0.12083332985639572,&quot;b&quot;:0.12083332985639572,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-36.342857360839844,&quot;m01&quot;:-77.333343505859375,&quot;m02&quot;:83.359764099121094,&quot;m10&quot;:77.333343505859375,&quot;m11&quot;:-137.40740966796875,&quot;m12&quot;:44.037029266357422},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                                <defs>
                                    <clipPath id="paint0_diamond_672_595_clip_path"><path d="M0 0V34.3066L13.6911 48H48V13.6934L34.3088 0H0Z" /></clipPath><linearGradient id="paint0_diamond_672_595" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="1" stopColor="#1F1F1F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="lg:hidden block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 27" fill="none">
                                <path d="M0 0V19.2974L7.70126 27H27V7.70255L19.2987 0H0Z" fill="black" />
                                <g clipPath="url(#paint0_diamond_701_187_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0102214 0.02175 -0.02175 -0.0386458 14.9184 7.875)"><rect x="0" y="0" width="1162.93" height="538.275" fill="url(#paint0_diamond_701_187)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1162.93" height="538.275" transform="scale(1 -1)" fill="url(#paint0_diamond_701_187)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1162.93" height="538.275" transform="scale(-1 1)" fill="url(#paint0_diamond_701_187)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1162.93" height="538.275" transform="scale(-1)" fill="url(#paint0_diamond_701_187)" opacity="1" shapeRendering="crispEdges" /></g></g><path d="M0 0V19.2974L7.70126 27H27V7.70255L19.2987 0H0Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_DIAMOND&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.0,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.12083332985639572,&quot;g&quot;:0.12083332985639572,&quot;b&quot;:0.12083332985639572,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.0,&quot;g&quot;:0.0,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.12083332985639572,&quot;g&quot;:0.12083332985639572,&quot;b&quot;:0.12083332985639572,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-20.442857742309570,&quot;m01&quot;:-43.500003814697266,&quot;m02&quot;:46.889869689941406,&quot;m10&quot;:43.500003814697266,&quot;m11&quot;:-77.291664123535156,&quot;m12&quot;:24.770830154418945},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                                <defs>
                                    <clipPath id="paint0_diamond_701_187_clip_path"><path d="M0 0V19.2974L7.70126 27H27V7.70255L19.2987 0H0Z" /></clipPath><linearGradient id="paint0_diamond_701_187" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="1" stopColor="#1F1F1F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="hidden lg:block absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                                <path d="M9.5 4.5V6.5H16.09L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5H9.5Z" fill="#FFEE0D" />
                            </svg>
                        </span>
                        <span className="absolute block lg:hidden right-[6px] top-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <path d="M6.04362 2.625V3.79167H9.88779L3.12695 10.5525L3.94945 11.375L10.7103 4.61417V8.45833H11.877V2.625H6.04362Z" fill="#FFEE0D" />
                            </svg>
                        </span>
                    </span>
                </span>
            </div>


        </div>

    );
};

export default CustomButtonY;
