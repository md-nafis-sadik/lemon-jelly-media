import { FC, useState } from "react";

interface HeaderButtonProps {
    isScrolled?: boolean;
}

const HeaderButton: FC<HeaderButtonProps> = ({ isScrolled = false }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="relative">
            <div className={`hidden lg:block relative group cursor-pointer transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="187" height="58" viewBox="0 0 187 58" fill="none">
                    <path d="M186 17L170 1H1V41.0603L17 57H186V17Z" fill={isScrolled ? 'black' : 'none'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" fill="none" />
                    <g clipPath="url(#paint0_diamond_672_587_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0700357 0.0451111 -0.149028 -0.0801543 103.219 17.3333)"><rect x="0" y="0" width="1161.91" height="537.234" fill="url(#paint0_diamond_672_587)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(1 -1)" fill="url(#paint0_diamond_672_587)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(-1 1)" fill="url(#paint0_diamond_672_587)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1161.91" height="537.234" transform="scale(-1)" fill="url(#paint0_diamond_672_587)" opacity="1" shapeRendering="crispEdges" /></g></g><path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_DIAMOND&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-140.07142639160156,&quot;m01&quot;:-298.05557250976562,&quot;m02&quot;:322.28244018554688,&quot;m10&quot;:90.222229003906250,&quot;m11&quot;:-160.30863952636719,&quot;m12&quot;:52.376537322998047},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                    <defs>
                        <clipPath id="paint0_diamond_672_587_clip_path"><path d="M170 1L170.354 0.646447L170.207 0.5H170V1ZM186 17H186.5V16.7929L186.354 16.6464L186 17ZM186 57V57.5H186.5V57H186ZM1 41.0603H0.5V41.268L0.647115 41.4145L1 41.0603ZM1 1V0.5H0.5V1H1ZM17 57L16.6471 57.3542L16.7934 57.5H17V57ZM170 1L169.646 1.35355L185.646 17.3536L186 17L186.354 16.6464L170.354 0.646447L170 1ZM186 17H185.5V57H186H186.5V17H186ZM1 41.0603H1.5V1H1H0.5V41.0603H1ZM1 1V1.5H170V1V0.5H1V1ZM186 57V56.5H17V57V57.5H186V57ZM17 57L17.3529 56.6458L1.35289 40.7061L1 41.0603L0.647115 41.4145L16.6471 57.3542L17 57Z" /></clipPath><linearGradient id="paint0_diamond_672_587" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FEFFE7" />
                            <stop offset="1" stopColor="#FFE000" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute left-6 top-4 text-main-200 font-medium">Get in touch</div>
                <span className="absolute right-[5px] top-[5px]">
                    <span className="relative">
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
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.5 4.5V6.5H16.09L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5H9.5Z" fill="black" />
                            </svg>
                        </span>
                    </span>
                </span>
            </div>

            <div className={`hidden lg:block absolute group cursor-pointer transition-opacity duration-500 top-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
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
                <div className="absolute left-6 top-4 text-black font-medium">Get in touch</div>
                <span className="absolute right-[5px] top-[5px]">
                    <span className="relative">
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
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.5 4.5V6.5H16.09L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5H9.5Z" fill="#FFE000" />
                            </svg>
                        </span>
                    </span>
                </span>
            </div>



            <span className="block lg:hidden cursor-pointer mr-2">
                <span className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M0 0V20.0122L7.98649 28H28V7.98783L20.0135 0H0Z" fill="black" />
                        <g clip-path="url(#paint0_diamond_685_1787_clip_path)" data-figma-skip-parse="true"><g transform="matrix(-0.0106 0.0225556 -0.0225556 -0.0400772 15.471 8.16667)"><rect x="0" y="0" width="1154.36" height="533.736" fill="url(#paint0_diamond_685_1787)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(1 -1)" fill="url(#paint0_diamond_685_1787)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(-1 1)" fill="url(#paint0_diamond_685_1787)" opacity="1" shapeRendering="crispEdges" /><rect x="0" y="0" width="1154.36" height="533.736" transform="scale(-1)" fill="url(#paint0_diamond_685_1787)" opacity="1" shapeRendering="crispEdges" /></g></g><path d="M0 0V20.0122L7.98649 28H28V7.98783L20.0135 0H0Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_DIAMOND&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.99607843160629272,&quot;g&quot;:1.0,&quot;b&quot;:0.90588235855102539,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:0.87795275449752808,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-21.199998855590820,&quot;m01&quot;:-45.111114501953125,&quot;m02&quot;:48.626529693603516,&quot;m10&quot;:45.111114501953125,&quot;m11&quot;:-80.154319763183594,&quot;m12&quot;:25.688268661499023},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" />
                        <defs>
                            <clipPath id="paint0_diamond_685_1787_clip_path"><path d="M0 0V20.0122L7.98649 28H28V7.98783L20.0135 0H0Z" /></clipPath><linearGradient id="paint0_diamond_685_1787" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FEFFE7" />
                                <stop offset="1" stop-color="#FFE000" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="absolute right-1.5 top-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M7.17708 3.53125V4.98958H11.9823L3.53125 13.4406L4.55937 14.4688L13.0104 6.01771V10.8229H14.4688V3.53125H7.17708Z" fill="black" />
                        </svg>
                    </span>
                </span>
            </span>


        </div>

    );
};

export default HeaderButton;
