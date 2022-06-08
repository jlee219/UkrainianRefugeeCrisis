var config = {
    style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Russo-Ukrainian War',
    subtitle: 'Information about the ongoing Ukrainian Refugee crisis since February 24, 2022',
    about: 'By Jason L, Bjorn S, Ryan D | GEOG 458 SPR 2022 | Professor Bo Zhao',
    byline: '',
    footer: 'References: Refugee chart data from the <a href="https://data.unhcr.org/en/situations/ukraine">United Nations High Commissioner Refugee Operational Data Portal</a>. Mapping was created with the help of <a href="https://www.mapbox.com/">Mapbox</a>. Special thanks to Professor Bo Zhao for the project guidance and <a href="https://github.com/jakobzhao/geog458">UWs GEOG 458</a>',
    chapters: [
        {
            id: 'glacier-np',
            alignment: 'center',
            title: 'Introduction',
            image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1644C/production/_124221219_hi075428388.jpg',
            source: 'Photo: Reuters',
            description: 'The Russo-Ukrainian War is an ongoing fight between Russia and Ukraine. Beginning in February 2014, the war has been battled on numerous fronts, including political gridlock tension, cyber attacks, naval warfare, and most recently, invasion. The Russians have recently escalated the war since 2021, in which their military have quietly built up a strong presence on the border of Ukraine. Most recently, the Russians initiated a full on invasion on the country of Ukraine in February, 2022. The war is still continuing, after thousands of casualties, deaths, destruction of buildings, military vehicles, and more.',
            facts: 'This StoryMap/Geonarrative introduces the countries where Ukrainian refugees are flocking to, as well as the context/international relations between Russia and Ukraine.',
            info: 'As much news coverage that been produced between the actual war between Russia and Ukraine, we wanted to focus on different aspect of the war thats received less attention; the refugee countries. This StoryMap focuses on the top 5 countries that house the most refugees since the start of the Russian invasion on February 24, 2022.',
            location: {
                center: [46.611898, -11.823260],
                zoom: 0.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0 //0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0 //0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'harrison1998',
            alignment: 'full',
            title: 'Ukrainian Migration',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/ukrainevox.webp',
            source: 'Source: YouYou Zhou and Christina Animashaun, Vox Media',
            description: 'As of Saturday June 4, around 7 million refugees have left Ukraine and a total of more than 8 million people have been internally displaced since the start of May. The majority of refugees are women and children, as the Ukrainian Government made men aged 18-60 banned from leaving the country. Men are required to fight against the Russians, regardless of whether they are Ukrainian or not.',
            facts: 'Ukrainian authorities arrest men attempting to flee. There have been reports of men leaving the country, although the amount has not been specified.',
            location: {
                center: [46.611898, -11.823260],
                zoom: 0, //12.92
                pitch: 0.00, //39.50
                bearing: 0.00 // 36.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'harrison2015',
            alignment: 'rightyy',
            title: 'Where Are the Refugees Moving To?',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/countries.png',
            source: 'Image Source: United Nations High Commissioner for Refugees (UNHCR)',
            description: 'The most common countries that Ukrainians are fleeing to include Romania, Hungary, Moldova, Slovakia, Belarus, and Russia. Other E.U countries have welcomed Ukrainians, although the amount isnt comparable to the previously mentioned countries.',
            location: {
                center: [30.466148, 50.839340],
                zoom: 3.92,
                pitch: 0.00, //39.50
                bearing: 0.00 //36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.00 // 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'blackfoot1998',
            alignment: 'stats',
            title: 'Refugee Stats',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/generalstats.png',
            source: 'Source: United Nations High Commissioner for Refugees (UNHCR)',
            description: '',
            location: {
                center: [30.466148, 50.839340],
                zoom: 3.92,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'blackfoot2015',
            alignment: 'poland',
            title: 'Poland',
            image: 'https://www.thedefensepost.com/wp-content/uploads/2022/03/Poland-Ukraine-protest-780x405.jpeg',
            source: 'Photo: Wojtek Radwanksi, AFP',
            description: 'Poland almost immediately revived international relations with Ukraine following Ukraine’s departure from the Soviet Union despite a shared controversy-laden history. Poland and Ukraine share a border that consists of 329 miles/529 kilometers. Poland is the third largest Slavic country. Ukraine is also a member of the Eastern Partnership, which was a group formed by Poland to help Eastern European countries make deals with the European Union.',
            facts: 'Although their history and past may seem troubled, these two countries have been strong allies starting around the time of World War I. In more modern times, Poland has been a strong supporter of Ukraine’s sovereignty and has lobbied the EU and NATO to allow Ukraine into their organizations',
            info: 'With the onset of the Russo-Ukranian War, Poland has proven to be a steadfast ally as they opened their borders and country to the Ukranian refugees. They are currently the country that the most refugees are fleeing to as they are both an immediately bordering nation as well as a neighborly friend.',
            numbers: '- 37.95 million people living in Poland (2020)',
            numbers1: ' - 98% Polish population',
            numbers2: '- 124,547 mi² landmass',
            location: {
                center: [24.466148, 51.839340],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.00
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'agassiz1998',
            alignment: 'right',
            title: 'Ukrainians Moving Into Poland',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/charts_png/poland.png',
            source: 'Source: UNHCR Agency Data',
            description: '',
            location: {
                center: [24.466148, 51.839340],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'agassiz2015',
            alignment: 'left',
            title: 'Romania',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/romaniaukraine.png',
            source: 'Image: Wise',
            description: 'Also a neighboring country with Ukraine sharing 614km of borders, Romania-Ukriane relations formally began in 1918. During the Soviet Unions reign of Ukraine, relations were broken down between the two countries, but quickly reemerged with Ukrainian independence in 1992. The relationship between the two countries has been mixed, with some territorial disputes occurring throughout the 1990’s-2000’s, ultimately ending with a ruling in World Court (also known as the International Court of Justice). ',
            facts: 'However, amongst the threat of a Russian invasion of Ukraine, Romania reinforced their position as Ukraine’s allies as they began further improve relations and came to an agreement about combined technical and military cohesion between the two countries in 2020. Amidst the Russian invasion of Ukraine in 2022, Romania promised further cooperation and support for Ukraine following speeches by Ukrainian President Zelenskyy to Romanian Parliament.',
            info: '- 19.29 million people living in Romania (2020)',
            numbers: '- 83.4% Romanian population',
            numbers1: '- 92,046 mi² landmass',
            location: {
                center: [21.466148, 45.839340],
                zoom: 6.4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.00,
                }
            ],
            onChapterExit: [
                {
                    layer: 'rainbow1998',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rainbow1998',
            alignment: 'left',
            title: 'Ukrainians Moving Into Romania',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/charts_png/romania.png',
            source: 'Source: UNHCR Agency Data',
            description: '',
            location: {
                center: [21.466148, 45.839340],
                zoom: 6.4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rainbow2015',
            alignment: 'left',
            title: 'Russian Federation',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/russiaukraineflags.jpg',
            source: 'Image: Getty Images',
            location: {
                center: [60.949384, 60.851563],
                zoom: 2.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.00
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kintla1998',
            alignment: 'left',
            title: 'Ukrainians Moving Into Russia',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/charts_png/russianfederation.png',
            source: 'Source: UNHCR Agency Data',
            description: '',
            location: {
                center: [60.949384, 60.851563],
                zoom: 2.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kintla2015',
            alignment: 'left',
            title: 'Hungary',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/hungaryukraineflag.jpg',
            source: 'Image: Shutterstock.com',
            description: 'Hungary and Ukraine are both similar in that they achieved independence from the Soviet Union around the same time (1989 and 1991 respectively). However, the relationship between the two countries has been rocky at best. Historically they were enemies, going as far as Hungary invading parts of Ukraine towards the end of the 9th century. However, modern relations have been mostly positive until recently.',
            facts: 'Hungary has publicly stated their support of Ukraine in the conflict and that the attack on Kyiv was unprovoked. However, unlike much of their European counterparts, they are still continuing to be reliant on Russian gas for their country’s energy. In addition to this continued economic support, Hungary even voted against sanctions against Russia trying to protect their own country’s interests during the conflict. It largely remains to be seen whether or not Hungary will make a definitive stance for either side.',
            info: '- 9.75 million people living in Hungary (2020)',
            numbers: '- 84% Hungarian',
            numbers1: '- 35,919 mi² landmass',
            numbers2: '- Over 650,000 Ukrainian refugees',
            location: {
                center: [17.466148, 46.839340],
                zoom: 6.8,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.00
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sperry1998',
            alignment: 'left',
            title: 'Ukrainians Moving Into Hungary',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/charts_png/hungary.png',
            source: 'Source: UNHCR Agency Data',
            description: '',
            location: {
                center: [17.466148, 46.839340],
                zoom: 6.8,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sperry2015',
            alignment: 'left',
            title: 'Moldova',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/moldovaukraineflag.webp',
            source: 'Image: Ukrainian News',
            description: 'By far the smallest country amongst the main countries that Ukranians are fleeing to, Moldova is one of the poorest countries in Europe. Both in terms of population and landmass, Moldova is much smaller than any other country on this list but that hasn’t stopped them from accepting Ukrainian refugees.',
            facts: 'This is all while Moldova have their own problems with Russian troops and separatists trying to annex parts of Moldova into the unrecognized state of Transnistria, a former Soviet republic. Relations with the two countries stagnated with pro-Russian Molodovan President Igor Dodon in the recent past, but was changed with a pro-Europe president in Maia Sandu in 2020. Her first foreign trip as president was to the Ukrainian capitol of Kyiv to discuss and plan future cooperation between the two countries. President Sandu was also quick to condemn the Russian attack and opened their borders to Ukrainian refugees.',
            info: '- 2.62 million people living in Moldova (2020)',
            numbers: '- 75% Moldovan',
            numbers1: '- 12,068 mi² landmass',
            numbers2: '- Over 480,000 Ukrainian refugees',
            location: {
                center: [27.466148, 46.939340],
                zoom: 7.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.00
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'moldova',
            alignment: 'left',
            title: 'Ukrainian Moving Into Moldova',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/charts_png/moldova.png',
            source: 'Source: UNHCR Agency Data',
            location: {
                center: [27.466148, 46.939340],
                zoom: 7.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'help',
            alignment: 'center',
            title: 'How To Provide Aid/Help for Ukrainians!',
            image: 'https://raw.githubusercontent.com/jlee219/UkrainianRefugeeCrisis/main/helpukraine.png',
            source: 'Image: United Kingdom Government',
            description: 'There are a number of ways to help Ukraine. Consider some of the options below! For all-in-one guide, visit <a href="https://how-to-help-ukraine-now.super.site/">this site</a>, backed by the Cabinet of Ministers of Ukraine.',
            facts: '1) Supplies. Essentials such as nappies, baby wipes/food, food and drinks, clothing, blankets go a long way. Check out an exhaustive list <a href="https://how-to-help-ukraine-now.super.site/">here</a>',
            info: '2) Donations. Providing assistance through monetary donations can be risky, as organizations with mal-intent can steal your money. However, organizations such as <a href="https://www.unicefusa.org/stories/unicef-children-crossfire-ukraine-crisis/39542?utm_campaign=20220225_Emergencies&utm_medium=Organic&utm_source=UkraineWebStoryChildrenFeb2022&utm_content=LearnMoreUkraineWebStoryChildrenFeb2022&ms=Organic_PRL_2022_Emergencies_20220225_UkraineWebStoryChildrenFeb2022_LearnMoreUkraineWebStoryChildrenFeb2022_none_none&initialms=Organic_PRL_2022_Emergencies_20220225_UkraineWebStoryChildrenFeb2022_LearnMoreUkraineWebStoryChildrenFeb2022_none_none">UNICEF</a>, <a href="https://voices.org.ua/en/">Voices of Children</a>, and <a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine">The International Committee of The Red Cross</a> are all reputable and safe organizations where donations are aimed directly at supporting Ukraine.',
            numbers: '3) Join a protest. Protests in Seattle have occurred in the past, but its never too late to advocate for the residents of Ukraine.',
            numbers1: '4) Social Media. Debunking myths, fact-checking, educating and immersing yourself on different social media platforms such as Twitter, Instagram, Facebook allows for your voice to be heard on a digital medium.',
            location: {
                center: [30.466148, 50.839340],
                zoom: 1.92,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
